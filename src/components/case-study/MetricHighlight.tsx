"use client";

import { motion } from "framer-motion";

interface MetricHighlightProps {
  stat: string;
  label: string;
}

export default function MetricHighlight({ stat, label }: MetricHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: "var(--space-6)" }}
    >
      <p
        style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "var(--text-4xl)",
          color: "var(--accent-blue)",
          lineHeight: 1,
          margin: 0,
        }}
      >
        {stat}
      </p>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "var(--text-sm)",
          color: "var(--text-secondary)",
          marginTop: "var(--space-2)",
          marginBottom: 0,
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}
