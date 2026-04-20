import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCaseStudy, caseStudies } from "@/data/case-studies";
import Nav from "@/components/ui/Nav";
import ContactBlock from "@/components/ui/ContactBlock";
import StickyBackButton from "@/components/case-study/StickyBackButton";
import SectionHeading from "@/components/case-study/SectionHeading";
import TextBlock from "@/components/case-study/TextBlock";
import InsightCallout from "@/components/case-study/InsightCallout";
import MetricHighlight from "@/components/case-study/MetricHighlight";
import FullBleedImage from "@/components/case-study/FullBleedImage";
import PullQuote from "@/components/case-study/PullQuote";
import ImageGrid from "@/components/case-study/ImageGrid";
import ListBlock from "@/components/case-study/ListBlock";
import TwoColText from "@/components/case-study/TwoColText";
import TwoColImageText from "@/components/case-study/TwoColImageText";
import SubHeading from "@/components/case-study/SubHeading";
import OverviewSection from "@/components/case-study/OverviewSection";
import type { ContentBlock } from "@/data/case-studies/types";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "TextBlock":
      return <TextBlock key={i} text={block.text} />;
    case "SubHeading":
      return <SubHeading key={i} text={block.text} />;
    case "InsightCallout":
      return <InsightCallout key={i} text={block.text} />;
    case "MetricHighlight":
      return <MetricHighlight key={i} stat={block.stat} label={block.label} />;
    case "FullBleedImage":
      return <FullBleedImage key={i} src={block.src} caption={block.caption} maxWidth={block.maxWidth} variant={block.variant} />;
    case "PullQuote":
      return <PullQuote key={i} text={block.text} />;
    case "ImageGrid":
      return <ImageGrid key={i} rows={block.rows} caption={block.caption} number={block.number} maxWidth={block.maxWidth} />;
    case "ListBlock":
      return <ListBlock key={i} items={block.items} ordered={block.ordered} />;
    case "TwoColText":
      return <TwoColText key={i} left={block.left} right={block.right} split={block.split} />;
    case "TwoColImageText":
      return (
        <TwoColImageText
          key={i}
          image={block.image}
          text={block.text}
          imagePosition={block.imagePosition}
          split={block.split}
        />
      );
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

      <StickyBackButton />

      <main style={{ paddingTop: "calc(80px + var(--space-7))", minHeight: "100vh" }}>

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
        </div>

        {/* ── Hero image — borderless full-bleed ─────────────────────── */}
        <FullBleedImage src={cs.heroImage} variant="borderless" priority />


        {/* ── Overview (role / team / timeline & status + overview copy) ── */}
        {cs.overview && (
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto var(--space-10)",
              padding: "0 24px",
            }}
          >
            <OverviewSection overview={cs.overview} />
          </div>
        )}

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
              if (
                block.type === "TwoColText" ||
                block.type === "TwoColImageText"
              ) {
                return (
                  <div
                    key={i}
                    style={{
                      maxWidth: "1100px",
                      margin: "0 auto",
                      padding: "0 24px",
                    }}
                  >
                    {renderBlock(block, i)}
                  </div>
                );
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
