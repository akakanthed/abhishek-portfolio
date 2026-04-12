"use client";

import { motion } from "framer-motion";

interface FullBleedImageProps {
  src: string;
  caption?: string;
  maxWidth?: string;
}

export default function FullBleedImage({ src, caption, maxWidth }: FullBleedImageProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: maxWidth ?? "1100px",
        margin: "0 auto var(--space-7)",
        padding: "0 24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          borderRadius: "12px",
          border: "1px solid var(--mockup-border)",
          overflow: "hidden",
          boxShadow:
            "0 0 60px var(--mockup-glow-blue), 0 2px 4px rgba(0,0,0,0.4)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption || ""}
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </motion.div>

      {caption && (
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "13px",
            marginTop: "12px",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
