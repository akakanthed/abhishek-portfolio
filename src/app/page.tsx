"use client";

import { motion } from "framer-motion";
import Nav from "@/components/ui/Nav";
import Typewriter from "@/components/ui/Typewriter";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import ContactBlock from "@/components/ui/ContactBlock";
import { caseStudies } from "@/data/case-studies";

const fadeUp = (delay: number, y = 16) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: delay < 0.4 ? 0.4 : 0.5, ease: [0.16, 1, 0.3, 1] as const },
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.4 },
});

export default function Home() {
  function scrollToWork(e: React.MouseEvent) {
    e.preventDefault();
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "80px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            width: "100%",
            padding: "0 24px",
          }}
        >
          {/* 1. "I think…" + Typewriter */}
          <div
            style={{
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <motion.div
              {...fadeUp(0.1)}
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "var(--text-5xl)",
                letterSpacing: "-0.02em",
              }}
            >
              I think…
            </motion.div>
            <motion.div
              {...fadeUp(0.25)}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "var(--text-xl)",
                color: "var(--text-secondary)",
                lineHeight: 1.4,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "clip",
              }}
            >
              <Typewriter />
            </motion.div>
          </div>

          {/* 4. Role chip */}
          <motion.div
            {...fadeIn(0.55)}
            style={{ marginBottom: "32px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "var(--text-sm)",
                color: "var(--text-muted)",
                border: "1px solid var(--border-subtle)",
                padding: "6px 12px",
                borderRadius: "100px",
              }}
            >
              <span style={{ color: "#4ade80", lineHeight: 1 }}>●</span>
              Currently designing for DevOps @ Perforce
            </span>
          </motion.div>

          {/* 5. CTA */}
          <motion.div {...fadeIn(0.65)}>
            <button
              onClick={scrollToWork}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "var(--text-sm)",
                color: "var(--text-primary)",
                background: "transparent",
                border: "1px solid var(--border-default)",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background var(--duration-fast), border-color var(--duration-fast)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-elevated)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              See how I think ↓
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Work section ─────────────────────────────────────────── */}
      <section
        id="work"
        style={{
          paddingTop: "var(--space-10)",
          paddingBottom: "var(--space-10)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "monospace",
              fontSize: "var(--text-sm)",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "var(--space-7)",
            }}
          >
            Selected Work
          </motion.p>

          {/* Card grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
              gap: "20px",
            }}
          >
            {caseStudies.map((cs, i) => (
              <CaseStudyCard
                key={cs.slug}
                title={cs.title}
                company={cs.company}
                category={cs.category}
                metric={cs.metric}
                thumbnailSrc={cs.heroImage}
                slug={`/case-studies/${cs.slug}`}
                glowColor={cs.glowColor}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  );
}
