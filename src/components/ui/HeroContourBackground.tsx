"use client";

import { useEffect, useRef } from "react";
import { heroPhase } from "./heroPhase";

const LEVELS = [
  { threshold: -2.0, alpha: 0.06 },
  { threshold: -1.3, alpha: 0.08 },
  { threshold: -0.6, alpha: 0.1 },
  { threshold: 0.0, alpha: 0.13 },
  { threshold: 0.5, alpha: 0.12 },
  { threshold: 1.0, alpha: 0.1 },
  { threshold: 1.5, alpha: 0.08 },
  { threshold: 2.0, alpha: 0.06 },
  { threshold: 2.5, alpha: 0.05 },
  { threshold: 3.0, alpha: 0.04 },
  { threshold: 3.5, alpha: 0.03 },
];

const GRID = 14;
const GRAIN_SVG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

export default function HeroContourBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let mouseX = width / 2;
    let mouseY = height / 2;
    let smoothX = mouseX;
    let smoothY = mouseY;

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    const noise = (x: number, y: number, t: number) => {
      let v = 0;
      v += Math.sin(x * 0.008 + t * 0.15) * 1.0;
      v += Math.sin(y * 0.006 - t * 0.12) * 1.0;
      v += Math.sin((x + y) * 0.005 + t * 0.08) * 0.8;
      v += Math.sin(Math.sqrt(x * x * 0.00003 + y * y * 0.00003) * 4 - t * 0.1) * 1.2;
      v += Math.sin(x * 0.015 - t * 0.05) * 0.4;
      v += Math.sin(y * 0.012 + t * 0.07) * 0.4;
      v += Math.sin((x * 0.009 - y * 0.007) + t * 0.06) * 0.6;
      const dx = x - smoothX;
      const dy = y - smoothY;
      const distSq = dx * dx + dy * dy;
      v += Math.exp(-distSq / (180 * 180)) * 2.5;
      return v;
    };

    // Marching squares — draw isoline for one threshold across the grid.
    const drawContour = (threshold: number, t: number) => {
      const cols = Math.ceil(width / GRID) + 1;
      const rows = Math.ceil(height / GRID) + 1;
      for (let iy = 0; iy < rows - 1; iy++) {
        for (let ix = 0; ix < cols - 1; ix++) {
          const x0 = ix * GRID;
          const y0 = iy * GRID;
          const x1 = x0 + GRID;
          const y1 = y0 + GRID;

          const v0 = noise(x0, y0, t);
          const v1 = noise(x1, y0, t);
          const v2 = noise(x1, y1, t);
          const v3 = noise(x0, y1, t);

          let state = 0;
          if (v0 > threshold) state |= 1;
          if (v1 > threshold) state |= 2;
          if (v2 > threshold) state |= 4;
          if (v3 > threshold) state |= 8;
          if (state === 0 || state === 15) continue;

          const lerp = (a: number, b: number) => (threshold - a) / (b - a);
          const top = { x: x0 + lerp(v0, v1) * GRID, y: y0 };
          const right = { x: x1, y: y0 + lerp(v1, v2) * GRID };
          const bottom = { x: x0 + lerp(v3, v2) * GRID, y: y1 };
          const left = { x: x0, y: y0 + lerp(v0, v3) * GRID };

          const line = (a: { x: number; y: number }, b: { x: number; y: number }) => {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          };

          switch (state) {
            case 1:
            case 14:
              line(left, top);
              break;
            case 2:
            case 13:
              line(top, right);
              break;
            case 3:
            case 12:
              line(left, right);
              break;
            case 4:
            case 11:
              line(right, bottom);
              break;
            case 5:
              line(left, top);
              line(right, bottom);
              break;
            case 6:
            case 9:
              line(top, bottom);
              break;
            case 7:
            case 8:
              line(left, bottom);
              break;
            case 10:
              line(top, right);
              line(left, bottom);
              break;
          }
        }
      }
    };

    let time = 0;
    let raf = 0;

    const render = () => {
      smoothX += (mouseX - smoothX) * 0.06;
      smoothY += (mouseY - smoothY) * 0.06;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      const visibleLevels = Math.min(
        LEVELS.length,
        Math.floor(5 + heroPhase.current * 1.5),
      );

      for (let i = 0; i < visibleLevels; i++) {
        const level = LEVELS[i];
        ctx.beginPath();
        ctx.strokeStyle = `rgba(240,236,228,${level.alpha})`;
        drawContour(level.threshold, time);
        ctx.stroke();
      }

      if (!reduced) time += 0.008;
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(12,11,10,0.25) 50%, rgba(12,11,10,0.7) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
          opacity: 0.025,
          backgroundImage: GRAIN_SVG,
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
