"use client";

import { motion } from "framer-motion";
import SubHeading from "./SubHeading";
import type { CaseStudyOverview } from "@/data/case-studies/types";

const paragraphStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: "var(--text-base)",
  fontWeight: 300,
  lineHeight: 1.75,
  color: "var(--text-secondary)",
  margin: 0,
};

function renderInline(text: string, keyPrefix: string) {
  // Parses [label](url) anchors inline; leaves other text as-is.
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      return (
        <a
          key={`${keyPrefix}-${i}`}
          href={m[2]}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--text-primary)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          {m[1]}
        </a>
      );
    }
    return <span key={`${keyPrefix}-${i}`}>{part}</span>;
  });
}

function renderMultiline(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {renderInline(line, `l${i}`)}
      {i < lines.length - 1 && <br />}
    </span>
  ));
}

export default function OverviewSection({ overview }: { overview: CaseStudyOverview }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="cs-two-col"
      style={
        {
          "--cs-two-col-cols": "2fr 3fr",
          display: "grid",
          gap: "3rem",
          marginBottom: "var(--space-10)",
        } as React.CSSProperties
      }
    >
      {/* Left: Role / Team / Timeline & Status */}
      <div>
        <div className="cs-overview-group">
          <SubHeading text="My Role" />
          <p style={paragraphStyle}>{renderMultiline(overview.role)}</p>
        </div>

        {overview.team && overview.team.length > 0 && (
          <div className="cs-overview-group">
            <SubHeading text="Team" />
            <p style={paragraphStyle}>
              {overview.team.map((member, i) => (
                <span key={i}>
                  {member}
                  {i < overview.team!.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        )}

        <div className="cs-overview-group">
          <SubHeading text="Timeline & Status" />
          <p style={paragraphStyle}>{renderMultiline(overview.timelineStatus)}</p>
        </div>
      </div>

      {/* Right: Overview paragraphs */}
      <div>
        <div className="cs-overview-group">
          <SubHeading text="Overview" />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {overview.paragraphs.map((p, i) => (
              <p key={i} style={paragraphStyle}>
                {renderMultiline(p)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
