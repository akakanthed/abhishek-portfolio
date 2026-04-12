"use client";

import { motion } from "framer-motion";

interface ImageGridProps {
  images: Array<{ src: string; caption?: string }>;
  maxWidth?: string;
}

export default function ImageGrid({ images, maxWidth }: ImageGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        width: "100%",
        maxWidth: maxWidth ?? "1100px",
        margin: "0 auto var(--space-7)",
        padding: "0 24px",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
        gap: "var(--space-4)",
      }}
    >
      {images.map((img, i) => (
        <div key={i}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.caption || ""}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "12px",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              display: "block",
            }}
          />
          {img.caption && (
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "var(--text-xs)",
                color: "var(--text-muted)",
                marginTop: "var(--space-2)",
                marginBottom: 0,
              }}
            >
              {img.caption}
            </p>
          )}
        </div>
      ))}
    </motion.div>
  );
}
