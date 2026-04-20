"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  heading: string;
  id: string;
}

export default function SectionHeading({ heading, id }: SectionHeadingProps) {
  return (
    <motion.h2
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        fontFamily: "var(--font-dm-serif), serif",
        fontSize: "var(--text-2xl)",
        color: "var(--text-primary)",
        marginBottom: "var(--space-5)",
        lineHeight: 1.2,
      }}
    >
      {heading}
    </motion.h2>
  );
}
