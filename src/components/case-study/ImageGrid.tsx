"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageGridProps {
  rows: string[][];
  caption?: string;
  number?: string;
  maxWidth?: string;
}

export default function ImageGrid({ rows, caption, number, maxWidth }: ImageGridProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: maxWidth ?? "1100px",
        margin: "0 auto var(--space-7)",
        padding: "0 24px",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="cs-image-grid-card"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="cs-image-grid-row"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${row.length}, 1fr)`,
              gap: "1rem",
            }}
          >
            {row.map((src, colIdx) => {
              const cols = row.length;
              const sizes =
                cols === 1
                  ? "(max-width: 768px) 100vw, 1040px"
                  : cols === 2
                    ? "(max-width: 768px) 100vw, 500px"
                    : "(max-width: 768px) 100vw, 340px";
              return (
                <Image
                  key={colIdx}
                  src={src}
                  alt=""
                  width={1600}
                  height={1000}
                  quality={85}
                  sizes={sizes}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              );
            })}
          </div>
        ))}
      </motion.div>

      {(number || caption) && (
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            gap: "10px",
            alignItems: "baseline",
          }}
        >
          {number && (
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "var(--text-xs)",
                color: "var(--text-muted)",
              }}
            >
              {number}
            </span>
          )}
          {caption && (
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "var(--text-sm)",
                color: "var(--text-secondary)",
              }}
            >
              {caption}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
