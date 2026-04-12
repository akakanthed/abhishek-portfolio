/**
 * Portfolio scraper — one-time use
 * Fetches HTML from the Framer portfolio, extracts content,
 * and writes structured TypeScript data files.
 *
 * Run: npm run scrape
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../src/data/case-studies");

/* ── Target pages ──────────────────────────────────────────────── */

const PAGES = [
  {
    slug: "puppet",
    url: "https://kantheddesign.framer.website/puppet_compatibility_tool",
    glowColor: "blue",
    category: "DEVOPS",
    metric: "↓ Upgrade downtime from weeks to hours",
    company: "Perforce / Puppet",
    title: "Enabling Puppet customers to upgrade without fear",
    subtitle: "Simplifying the complexity of Puppet upgrades into a clear, predictable path.",
  },
  {
    slug: "carloan",
    url: "https://kantheddesign.framer.website/helping_buyers_get_car_loans_super_fast",
    glowColor: "amber",
    category: "FINTECH",
    metric: "↓ Loan processing time by ~2 days",
    company: "CARS24",
    title: "Helping buyers get car loans super fast",
    subtitle: "A series of research-based experiments helped shorten the loan processing time by ~2 days",
  },
  {
    slug: "los",
    url: "https://kantheddesign.framer.website/loan_origination_system",
    glowColor: "indigo",
    category: "FINTECH · ENTERPRISE",
    metric: "↑ Template creation speed across leading banks",
    company: "Finacle / EdgeVerve",
    title: "Improving efficiency in banks' loan origination system",
    subtitle: "A collaborative tool to create & manage financial templates used for lending by all leading banks",
  },
];

/* ── Text filters ──────────────────────────────────────────────── */

/** Heading text that marks footer/nav sections to discard entirely. */
const FOOTER_HEADINGS = [
  "piqued your curiosity",
  "view other projects",
  "reach out",
  "get in touch",
  "other projects",
  "more projects",
];

/** Patterns that identify a TextBlock as noise, not content. */
const NOISE_PATTERNS = [
  /^\/\*/,                          // CSS block comments
  /@font-face/i,
  /font-family\s*:/i,
  /aria-hidden/i,
  /view other projects/i,
  /reach out to me/i,
  /website & design/i,
  /website & Code/i,
  /made with framer/i,
  /built with framer/i,
  /©\s*abhishek/i,
  /^\s*↗\s*$/,                      // lone arrow icons
  /^[^a-z]{0,5}$/i,                 // fewer than 6 real chars — icon text etc.
];

function isNoise(text) {
  return NOISE_PATTERNS.some((re) => re.test(text));
}

function isFooterHeading(text) {
  const lower = text.toLowerCase();
  return FOOTER_HEADINGS.some((f) => lower.includes(f));
}

/* ── HTML preprocessing ────────────────────────────────────────── */

/** Remove <style>, <script>, <noscript>, <head> blocks wholesale. */
function stripNonContent(html) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<head[\s\S]*?<\/head>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");
}

/** Strip all HTML tags, collapse whitespace. */
function stripTags(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/** Extract img src values (https only, exclude icons/favicons/logos). */
function extractImages(html) {
  const re = /src="(https?:\/\/[^"]+\.(?:png|jpg|jpeg|webp|avif|gif)[^"]*)"/gi;
  return [...html.matchAll(re)]
    .map((m) => m[1])
    .filter(
      (src) =>
        !src.includes("favicon") &&
        !src.includes("logo") &&
        !src.includes("framerusercontent.com/images/") === false // keep framer CDN images
    );
}

/* ── Content grouping ──────────────────────────────────────────── */

function groupBySection(html) {
  // Strip <style>/<script> first so their text never leaks into <p> matches
  const clean = stripNonContent(html);

  const tokenRe =
    /<(h1|h2|h3|p|li|img)([^>]*)>([\s\S]*?)<\/\1>|<img([^>]+)\/?>/gi;

  const tokens = [...clean.matchAll(tokenRe)];

  const sections = [];
  let currentSection = null;
  let inFooter = false;

  for (const tok of tokens) {
    const tag = (tok[1] || "img").toLowerCase();
    const attrs = tok[2] || tok[4] || "";
    const inner = stripTags(tok[3] || "");

    // h1 — we override title/subtitle from meta, so just skip
    if (tag === "h1") continue;

    if (tag === "h2" || tag === "h3") {
      if (inner.length < 3) continue;

      // Once we hit a footer heading, stop collecting content
      if (isFooterHeading(inner)) {
        inFooter = true;
        continue;
      }
      inFooter = false;

      currentSection = {
        id: inner.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
        heading: inner,
        content: [],
      };
      sections.push(currentSection);
      continue;
    }

    if (inFooter) continue;

    if (!currentSection) {
      currentSection = { id: "intro", heading: "Overview", content: [] };
      sections.push(currentSection);
    }

    if (tag === "p" || tag === "li") {
      if (inner.length > 15 && !isNoise(inner)) {
        currentSection.content.push({ type: "TextBlock", text: inner });
      }
      continue;
    }

    if (tag === "img") {
      const srcMatch = attrs.match(/src="([^"]+)"/i);
      if (srcMatch) {
        const src = srcMatch[1];
        if (
          src.startsWith("http") &&
          !src.includes("favicon") &&
          !src.includes("logo")
        ) {
          currentSection.content.push({ type: "FullBleedImage", src, caption: "" });
        }
      }
    }
  }

  // Drop sections that ended up with zero content blocks
  return sections.filter((s) => s.content.length > 0);
}

/* ── Fetch + parse one page ────────────────────────────────────── */

async function scrapePage(meta) {
  console.log(`\nFetching: ${meta.url}`);

  let html;
  try {
    const res = await fetch(meta.url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
          "(KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        Accept: "text/html",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    html = await res.text();
    console.log(`  ✓ Fetched ${(html.length / 1024).toFixed(1)} KB`);
  } catch (err) {
    console.error(`  ✗ Failed: ${err.message}`);
    return null;
  }

  const sections = groupBySection(html);
  const allImages = extractImages(html);

  console.log(
    `  → sections: ${sections.length}\n` +
    `  → images found: ${allImages.length}`
  );

  // Log first TextBlock of first section so we can verify it's clean
  const firstBlock = sections[0]?.content.find((b) => b.type === "TextBlock");
  if (firstBlock) {
    console.log(`  → first TextBlock preview: "${firstBlock.text.slice(0, 120)}..."`);
  }

  const study = {
    slug: meta.slug,
    title: meta.title,
    subtitle: meta.subtitle,
    role: "Product Designer",
    timeline: "TODO: timeline",
    company: meta.company,
    category: meta.category,
    metric: meta.metric,
    heroImage: allImages[0] || `/images/${meta.slug}.png`,
    glowColor: meta.glowColor,
    sections,
  };

  return study;
}

/* ── Write TypeScript file ─────────────────────────────────────── */

function toTS(exportName, study) {
  const json = JSON.stringify(study, null, 2);
  return (
    `import type { CaseStudy } from "./types";\n\n` +
    `export const ${exportName}: CaseStudy = ${json};\n`
  );
}

/* ── Main ──────────────────────────────────────────────────────── */

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const exportNames = { puppet: "puppet", carloan: "carloan", los: "los" };

  for (const meta of PAGES) {
    const study = await scrapePage(meta);
    if (!study) {
      console.warn(`  Skipping ${meta.slug} due to fetch error.`);
      continue;
    }

    const exportName = exportNames[meta.slug];
    const ts = toTS(exportName, study);
    const outPath = join(OUT_DIR, `${meta.slug}.ts`);
    writeFileSync(outPath, ts, "utf8");
    console.log(`  ✓ Written → ${outPath}`);
  }

  console.log("\nDone. Run: npm run dev\n");
}

main();
