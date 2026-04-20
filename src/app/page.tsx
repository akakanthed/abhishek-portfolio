"use client";

import { motion } from "framer-motion";
import Nav from "@/components/ui/Nav";
import HeroContourBackground from "@/components/ui/HeroContourBackground";
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
      <HeroContourBackground />
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "80px",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
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
          <motion.div
            {...fadeIn(0.65)}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          >
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
            <a
              href="https://www.linkedin.com/in/akanthed/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "var(--text-sm)",
                color: "var(--text-primary)",
                background: "transparent",
                border: "1px solid var(--border-default)",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                cursor: "pointer",
                transition: "background var(--duration-fast), border-color var(--duration-fast)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-elevated)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Work section ─────────────────────────────────────────── */}
      <section
        id="work"
        style={{
          position: "relative",
          zIndex: 2,
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
                thumbnailSrc={cs.cardImage}
                slug={`/case-studies/${cs.slug}`}
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
