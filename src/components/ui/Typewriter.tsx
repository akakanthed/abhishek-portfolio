"use client";
import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "the hardest problems make the best design work.",
  "most enterprise tools are designed for demos, not for Tuesdays.",
  "the hardest workflows deserve the most patient design.",
  "removing a feature takes more conviction than adding one.",
  "the best tools don't feel like tools.",
];

const TYPE_MS = 55;
const BACK_MS = 30;
const HOLD_MS = 1800;
const PAUSE_MS = 400;

export default function Typewriter({ phrases = PHRASES }: { phrases?: string[] }) {
  const [text, setText] = useState("");
  const [reduced, setReduced] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setText(phrases[0]);
      return;
    }

    let i = 0;
    let j = 0;
    let phase: "type" | "hold" | "back" | "pause" = "type";

    const tick = () => {
      const phrase = phrases[i];
      if (phase === "type") {
        j++;
        setText(phrase.slice(0, j));
        if (j === phrase.length) {
          phase = "hold";
          timerRef.current = setTimeout(tick, HOLD_MS);
          return;
        }
        timerRef.current = setTimeout(tick, TYPE_MS);
      } else if (phase === "hold") {
        phase = "back";
        timerRef.current = setTimeout(tick, BACK_MS);
      } else if (phase === "back") {
        j--;
        setText(phrase.slice(0, j));
        if (j === 0) {
          phase = "pause";
          timerRef.current = setTimeout(tick, PAUSE_MS);
          return;
        }
        timerRef.current = setTimeout(tick, BACK_MS);
      } else {
        i = (i + 1) % phrases.length;
        phase = "type";
        timerRef.current = setTimeout(tick, TYPE_MS);
      }
    };
    timerRef.current = setTimeout(tick, TYPE_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [reduced, phrases]);

  return (
    <span style={{ display: "inline-block", minHeight: "1.05em" }}>
      {text}
      <span
        aria-hidden
        style={{
          display: "inline-block",
          marginLeft: "2px",
          animation: reduced ? "none" : "blink 1s steps(2, end) infinite",
        }}
      >
        |
      </span>
    </span>
  );
}
