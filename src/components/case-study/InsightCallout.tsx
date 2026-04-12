"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface InsightCalloutProps {
  text: string;
}

export default function InsightCallout({ text }: InsightCalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "var(--bg-elevated)",
        borderLeft: "3px solid var(--accent-blue)",
        padding: "var(--space-5)",
        borderRadius: "8px",
        marginBottom: "var(--space-6)",
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "flex-start",
      }}
    >
      <Lightbulb
        size={16}
        style={{ color: "var(--accent-blue)", flexShrink: 0, marginTop: "3px" }}
      />
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "var(--text-base)",
          color: "var(--text-primary)",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} style={{ fontWeight: 600, color: "var(--text-primary)" }}>
              {part}
            </strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    </motion.div>
  );
}
