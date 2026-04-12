"use client";

import { motion } from "framer-motion";

interface ListBlockProps {
  items: string[];
  ordered?: boolean;
}

function parseBold(text: string) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} style={{ fontWeight: 600, color: "var(--text-primary)" }}>
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function ListBlock({ items, ordered = true }: ListBlockProps) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        marginBottom: "var(--space-6)",
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--space-3)",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "var(--text-base)",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            marginBottom: "var(--space-2)",
          }}
        >
          <span
            style={{
              color: "var(--accent-blue)",
              fontWeight: 500,
              flexShrink: 0,
              minWidth: "1.2em",
            }}
          >
            {ordered ? `${i + 1}.` : "—"}
          </span>
          <span>{parseBold(item)}</span>
        </li>
      ))}
    </motion.ul>
  );
}
