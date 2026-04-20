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
        <a
          href="https://www.linkedin.com/in/akanthed/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            color: "var(--text-secondary)",
            transition: "color var(--duration-fast)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")
          }
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
