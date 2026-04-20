"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import MockupFrame from "./MockupFrame";
import CursorLabel from "./CursorLabel";

interface CaseStudyCardProps {
  title: string;
  company: string;
  category: string;
  metric: string;
  thumbnailSrc: string;
  slug: string;
  index: number;
}

export default function CaseStudyCard({
  title,
  company,
  category,
  metric,
  thumbnailSrc,
  slug,
  index,
}: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <CursorLabel
        visible={isHovered}
        x={cursorPos.x}
        y={cursorPos.y}
        label="Dig deeper →"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Link href={slug} style={{ textDecoration: "none", display: "block" }}>
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: "relative",
              background: "var(--bg-card)",
              border: `1px solid ${isHovered ? "var(--border-default)" : "var(--border-subtle)"}`,
              borderRadius: "16px",
              padding: "16px",
              cursor: isHovered ? "none" : "auto",
              transition: "border-color 200ms var(--ease-default)",
            }}
          >
            {/* ── Thumbnail ────────────────────────────────────────── */}
            <div
              style={{
                aspectRatio: "16/9",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: isHovered ? "none" : "auto",
              }}
            >
              <div
                style={{
                  height: "100%",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  transition: "transform 500ms var(--ease-default)",
                }}
              >
                <MockupFrame
                  src={thumbnailSrc}
                  alt={title}
                  type="card"
                  glow={false}
                  className="h-full"
                />
              </div>
            </div>

            {/* ── Meta row ─────────────────────────────────────────── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "16px",
                cursor: isHovered ? "none" : "auto",
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {category}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-muted)",
                }}
              >
                {company}
              </span>
            </div>

            {/* ── Title ────────────────────────────────────────────── */}
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "var(--text-2xl)",
                color: "var(--text-primary)",
                lineHeight: 1.2,
                marginTop: "8px",
                marginBottom: 0,
                cursor: isHovered ? "none" : "auto",
              }}
            >
              {title}
            </h3>

            {/* ── Metric ───────────────────────────────────────────── */}
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "var(--text-sm)",
                color: "var(--text-secondary)",
                marginTop: "8px",
                marginBottom: 0,
                cursor: isHovered ? "none" : "auto",
              }}
            >
              {metric}
            </p>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
