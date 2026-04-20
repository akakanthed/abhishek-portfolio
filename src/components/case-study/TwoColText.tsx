"use client";

import { motion } from "framer-motion";
import type { TextColumn, TwoColSplit } from "@/data/case-studies/types";

function splitToCols(split: TwoColSplit = "50/50"): string {
  if (split === "40/60") return "2fr 3fr";
  if (split === "60/40") return "3fr 2fr";
  return "1fr 1fr";
}

function renderText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </span>
  ));
}

function Column({ column }: { column: TextColumn }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {column.sections.map((s, i) => (
        <div key={i}>
          {s.heading && (
            <div
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "var(--text-base)",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "10px",
              }}
            >
              {s.heading}
            </div>
          )}
          <div
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "var(--text-base)",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--text-secondary)",
            }}
          >
            {renderText(s.text)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TwoColText({
  left,
  right,
  split,
}: {
  left: TextColumn;
  right: TextColumn;
  split?: TwoColSplit;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="cs-two-col"
      style={
        {
          "--cs-two-col-cols": splitToCols(split),
          display: "grid",
          gap: "3rem",
          marginBottom: "var(--space-7)",
        } as React.CSSProperties
      }
    >
      <Column column={left} />
      <Column column={right} />
    </motion.div>
  );
}
