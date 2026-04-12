"use client";

import { motion } from "framer-motion";

interface PullQuoteProps {
  text: string;
}

export default function PullQuote({ text }: PullQuoteProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        fontFamily: "var(--font-dm-serif), serif",
        fontSize: "var(--text-xl)",
        color: "var(--text-primary)",
        lineHeight: 1.5,
        textAlign: "center",
        margin: "0 0 var(--space-7)",
        padding: "var(--space-7) 0",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      &ldquo;{text}&rdquo;
    </motion.blockquote>
  );
}
