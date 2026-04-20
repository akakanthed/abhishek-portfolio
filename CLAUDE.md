@AGENTS.md

# Portfolio — Claude Context

## Project
Abhishek Kanthed's personal design portfolio.
Next.js 16 (App Router) · TypeScript · Tailwind v4 · Framer Motion · Lenis · Lucide React.

## What's built

### Global foundation
- `src/app/globals.css` — all design tokens as CSS custom properties (colors, typography scale, spacing scale, mockup treatment, transitions). Tailwind v4 `@theme inline` block maps them to utility classes.
- `src/app/layout.tsx` — DM Serif Display (`--font-dm-serif`) + Inter (`--font-inter`) from Google Fonts. `SmoothScrollProvider` wraps children.
- `src/components/ui/SmoothScrollProvider.tsx` — Lenis smooth scroll, RAF loop, cleans up on unmount.

### UI components (`src/components/ui/`)
- `Nav.tsx` — fixed 56px nav, transparent → blur on scroll past 60px. Left wordmark is "Abhishek Kanthed" in DM Serif at `--text-xl`, links home. "Work" smooth-scrolls to `#work`, "Resume" opens Google Drive, rightmost LinkedIn icon (inline SVG — lucide v1.8.0 dropped brand icons).
- `Typewriter.tsx` — hero typewriter. Types ~55ms/char, holds ~1.8s, backspaces ~30ms, pauses ~400ms, wraps. Blinking caret via `@keyframes blink`. Honours `prefers-reduced-motion`. Calls `setHeroPhase(i)` on each phrase advance to signal the contour background.
- `HeroContourBackground.tsx` — fixed full-page canvas. Marching-squares contour lines over a multi-octave sine noise field with mouse-driven Gaussian warp. Reads `heroPhase.current` to set visible contour levels. Paired with a radial vignette + SVG fractal-noise grain overlay. Disabled under `prefers-reduced-motion`.
- `heroPhase.ts` — mutable shared module (`{ current: number }`) bridging `Typewriter` → `HeroContourBackground` without prop drilling.
- `MockupFrame.tsx` — three types: `browser` (chrome bar + dots), `fullscreen` (no chrome), `card` (gradient overlay). Uses Next.js `<Image>` for both local and remote sources (`framerusercontent.com` + `cdn.prod.website-files.com` are in `next.config.ts` `remotePatterns`). Glow shadows still available via `glowColor`.
- `CaseStudyCard.tsx` — homepage card with cursor-following pill label (`CursorLabel`). `cursor: none` on hover. Card border brightens, **thumbnail scales to 1.05** over 500ms on hover. Cursor pill reads "Dig deeper →". No longer takes `glowColor`.
- `CursorLabel.tsx` — portal-rendered pill that follows mouse at `position: fixed`. Animates circle → full pill on hover entry.
- `ContactBlock.tsx` — two-column contact: heading + subtext left, interactive email container right (noise canvas, blue gradient seep on hover, rotating arrow). Footer line reads "Built with Claude Code".

### Homepage (`src/app/page.tsx`)
Sections in order (all sit above a fixed-position `<HeroContourBackground />`; sections use `position: relative; zIndex: 2`):
1. `<Nav />`
2. Hero — staggered fade-in cascade: "I think…" (serif, `--text-5xl`, delay 0.1s) → `<Typewriter />` (Inter, `--text-xl`, muted, delay 0.25s, single-line `whiteSpace: nowrap`) → role chip "Currently designing for DevOps @ Perforce" (delay 0.55s) → CTA row "See how I think ↓" + "Connect" (LinkedIn icon) (delay 0.65s).
3. Work — "Selected Work" label + 2-col card grid mapping `caseStudies` (uses `cs.cardImage`)
4. `<ContactBlock />` — contact + footer

**Hero copy (Typewriter phrases — connected narrative, do not reorder):**
1. the hardest problems make the best design work.
2. most enterprise tools are designed for demos, not for Tuesdays.
3. the hardest workflows deserve the most patient design.
4. removing a feature takes more conviction than adding one.
5. the best tools don't feel like tools.

### Case study data (`src/data/case-studies/`)
- `types.ts` — `ContentBlock` union type, `CaseStudySection`, `CaseStudy`
- `puppet.ts`, `carloan.ts`, `los.ts` — fully authored data files
- `index.ts` — `caseStudies` array + `getCaseStudy(slug)` helper

**CaseStudy fields:** `slug`, `title`, `subtitle`, `role`, `timeline`, `company`, `category`, `metric`, `heroImage` (case study page), `cardImage` (homepage thumbnail — can differ from hero), `overview?`, `sections`.

**CaseStudyOverview:** `role`, `team?` (string[]), `timelineStatus` (supports `[label](url)` markdown anchors and `\n` newlines), `paragraphs`.

**ContentBlock types:**
| Type | Props |
|---|---|
| `TextBlock` | `text` — parses `**bold**` and `<br />` |
| `SubHeading` | `text` |
| `InsightCallout` | `text` — parses `**bold**`, lightbulb icon |
| `MetricHighlight` | `stat`, `label` |
| `FullBleedImage` | `src`, `caption?`, `maxWidth?`, `variant?`, `priority?` — breaks to 1100px |
| `ImageGrid` | `rows: string[][]` (each inner array is a row of image URLs), `caption?`, `number?`, `maxWidth?` — shared container card, breaks to 1100px |
| `PullQuote` | `text` |
| `ListBlock` | `items[]`, `ordered?` |
| `TwoColText` | `left`, `right` (each is `{ sections: { heading?, text }[] }`), `split?` (`40/60` / `50/50` / `60/40`) |
| `TwoColImageText` | `image` (ImageCell), `text` (`{ heading?, text }`), `imagePosition` (`left`/`right`), `split?` |

**Image variants** (`ImageVariant = "default" | "browser" | "device" | "borderless"`):
- `default` — 12px rounded container, subtle bg + border, 2rem padding. No glow.
- `browser` — 12px rounded container, **0 padding**, chrome bar (36px, traffic-light dots, centered URL pill) flush at the top, image flush below. Outer `overflow: hidden` clips corners.
- `device` — 12px container, 2rem padding, inner #1a1a1a device bezel with subtle chin.
- `borderless` — 4px radius, no container. Used for the case study hero image.

All variants render via `src/components/case-study/lib/ImageFrame.tsx`.

### Case study page (`src/app/case-studies/[slug]/page.tsx`)
- `generateStaticParams` pre-renders all three slugs
- Hero: category tag, large serif title, subtitle (no metadata chips — overview takes that role)
- Hero image is a regular `<FullBleedImage src={cs.heroImage} variant="borderless" priority />` — no dedicated hero component
- `<OverviewSection overview={cs.overview} />` between hero image and body (role / team / timeline-status chips + overview paragraphs)
- Body sections: `SectionHeading` in 740px column; `FullBleedImage`, `ImageGrid`, `TwoColText`, `TwoColImageText` break out to 1100px; all other blocks stay in 740px column
- Footer: "Next Project →" (cycles through studies) + `<ContactBlock />`

### Case study body components (`src/components/case-study/`)
`SectionHeading`, `SubHeading`, `TextBlock`, `InsightCallout`, `MetricHighlight`, `FullBleedImage`, `ImageGrid`, `PullQuote`, `ListBlock`, `TwoColText`, `TwoColImageText`, `OverviewSection`, `StickyBackButton`, `lib/ImageFrame`.

### Image assets (`public/images/`)
```
public/images/case-studies/
├── puppet/
│   ├── hero1.png    ← cs.heroImage
│   ├── puppet_card.png  ← cs.cardImage
│   ├── tools.png, processhi.png, s1.png, …  ← body images
├── carloan/…
└── los/…
```
Convention: one folder per case study slug. `hero.<ext>` / `card.<ext>` for the two top-level images; any descriptive name for body images. Remote framer URLs are still supported (covered by `next.config.ts` `remotePatterns`) but prefer local. **To force a cache-bust when swapping an asset, rename the file** (e.g. `hero.png` → `hero-v2.png`) — the Next image optimizer caches by URL, not by file contents.

## Key conventions
- Typography scale in `globals.css`: `--text-xs` 12 · `sm` 13 · `base` 17 · `lg` 20 · `xl` 24 · `2xl` 32 · `3xl` 44 · `4xl` 56 · `5xl` 72 · `6xl` 96.
- Never hardcode hex values — always use CSS custom properties from `globals.css`
- **Always use Next.js `<Image>`** (never plain `<img>`). Remote hosts must be added to `next.config.ts` `images.remotePatterns`
- All entrance animations: `initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}`
- No spring animations — they feel too playful
- `FullBleedImage`, `ImageGrid`, `TwoColText`, `TwoColImageText` render outside the 740px narrow wrapper (full-bleed breakout to 1100px in page template)
- `caption` prop is optional on all image blocks; never write `caption: ""`
- To replace an in-use image asset, **rename the file** — the Next image optimizer caches the URL, so overwriting the bytes under the same path shows stale content.

## Scripts
- `npm run dev` — start dev server
- `npm run scrape` — re-run the Framer portfolio scraper (one-time use)
