"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToWork(e: React.MouseEvent) {
    e.preventDefault();
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        background: scrolled ? "rgba(10,10,10,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 300ms var(--ease-default), backdrop-filter 300ms var(--ease-default)",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "var(--text-xl)",
          color: "var(--text-primary)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}
      >
        Abhishek Kanthed
      </Link>

      {/* Right links */}
      <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        <a
          href="#work"
          onClick={scrollToWork}
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            textDecoration: "none",
            transition: "color var(--duration-fast)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")
          }
        >
          Work
        </a>
        <a
          href="https://drive.google.com/file/d/1i-idUD4-0z9VnGdOk_b9SGPMmEGfqJQ1/view"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            textDecoration: "none",
            transition: "color var(--duration-fast)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")
          }
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
