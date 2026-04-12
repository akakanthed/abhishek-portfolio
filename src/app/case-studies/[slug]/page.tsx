import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCaseStudy, caseStudies } from "@/data/case-studies";
import Nav from "@/components/ui/Nav";
import ContactBlock from "@/components/ui/ContactBlock";
import SectionHeading from "@/components/case-study/SectionHeading";
import TextBlock from "@/components/case-study/TextBlock";
import InsightCallout from "@/components/case-study/InsightCallout";
import MetricHighlight from "@/components/case-study/MetricHighlight";
import FullBleedImage from "@/components/case-study/FullBleedImage";
import PullQuote from "@/components/case-study/PullQuote";
import ImageGrid from "@/components/case-study/ImageGrid";
import ListBlock from "@/components/case-study/ListBlock";
import type { ContentBlock } from "@/data/case-studies/types";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "TextBlock":
      return <TextBlock key={i} text={block.text} />;
    case "InsightCallout":
      return <InsightCallout key={i} text={block.text} />;
    case "MetricHighlight":
      return <MetricHighlight key={i} stat={block.stat} label={block.label} />;
    case "FullBleedImage":
      return <FullBleedImage key={i} src={block.src} caption={block.caption} maxWidth={block.maxWidth} />;
    case "PullQuote":
      return <PullQuote key={i} text={block.text} />;
    case "ImageGrid":
      return <ImageGrid key={i} images={block.images} maxWidth={block.maxWidth} />;
    case "ListBlock":
      return <ListBlock key={i} items={block.items} ordered={block.ordered} />;
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <Nav />

      <main style={{ paddingTop: "80px", minHeight: "100vh" }}>

        {/* ── Back link ─────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "740px",
            margin: "0 auto",
            padding: "var(--space-7) 24px var(--space-5)",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "var(--text-sm)",
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={14} />
            Back
          </Link>
        </div>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "740px",
            margin: "0 auto",
            padding: "0 24px var(--space-7)",
          }}
        >
          {/* Category tag */}
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "var(--text-xs)",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "var(--space-4)",
            }}
          >
            {cs.category}
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "var(--text-4xl)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "var(--space-4)",
            }}
          >
            {cs.title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "var(--text-lg)",
              color: "var(--text-secondary)",
              lineHeight: 1.5,
              marginBottom: "var(--space-6)",
            }}
          >
            {cs.subtitle}
          </p>

          {/* Metadata chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-3)",
            }}
          >
            {[
              { label: "Role", value: cs.role },
              { label: "Timeline", value: cs.timeline },
              { label: "Company", value: cs.company },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "var(--text-xs)",
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>{label} · </span>
                <span style={{ color: "var(--text-primary)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hero image (full-bleed to 1100px) ─────────────────────── */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto var(--space-10)",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              borderRadius: "12px",
              border: "1px solid var(--mockup-border)",
              overflow: "hidden",
              boxShadow: `0 0 80px var(--mockup-glow-${cs.glowColor}), 0 4px 24px rgba(0,0,0,0.5)`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cs.heroImage}
              alt={cs.title}
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* ── Body sections ─────────────────────────────────────────── */}
        {cs.sections.map((section) => (
          <div key={section.id} style={{ marginBottom: "var(--space-10)" }}>
            {/* Section heading in narrow column */}
            <div
              style={{
                maxWidth: "740px",
                margin: "0 auto",
                padding: "0 24px",
                marginBottom: "var(--space-6)",
              }}
            >
              <SectionHeading heading={section.heading} id={section.id} />
            </div>

            {/* Content blocks */}
            {section.content.map((block, i) => {
              if (block.type === "FullBleedImage" || block.type === "ImageGrid") {
                return renderBlock(block, i);
              }
              return (
                <div
                  key={i}
                  style={{
                    maxWidth: "740px",
                    margin: "0 auto",
                    padding: "0 24px",
                  }}
                >
                  {renderBlock(block, i)}
                </div>
              );
            })}
          </div>
        ))}

        {/* ── Case study footer ──────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "740px",
            margin: "0 auto",
            padding: "var(--space-9) 24px var(--space-10)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {/* Next project */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "var(--space-7)",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "var(--space-2)",
                }}
              >
                Next Project
              </p>
              <Link
                href={`/case-studies/${next.slug}`}
                style={{
                  fontFamily: "var(--font-dm-serif), serif",
                  fontSize: "var(--text-xl)",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {next.title}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <ContactBlock />
    </>
  );
}
