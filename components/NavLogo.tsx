"use client";

import { useEffect, useRef, useState } from "react";

const TEXT = "GladCode//";
const FONTS = ["--font-headline", "--font-orbitron", "--font-audiowide"];

function pickOther(current: string) {
  const pool = FONTS.filter((f) => f !== current);
  return pool[Math.floor(Math.random() * pool.length)];
}

type Phase = "idle" | "deleting" | "typing";

export default function NavLogo() {
  const [font, setFont] = useState("--font-headline");
  const [nextFont, setNextFont] = useState("--font-headline");
  const [chars, setChars] = useState(TEXT.length);
  const [phase, setPhase] = useState<Phase>("idle");

  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scheduler: trigger a font swap at random intervals ──────────────────
  useEffect(() => {
    const schedule = () => {
      cycleRef.current = setTimeout(() => {
        setPhase((p) => {
          if (p === "idle") {
            setNextFont(pickOther(font));
            return "deleting";
          }
          return p; // don't interrupt mid-animation
        });
        schedule();
      }, 1400 + Math.random() * 2600);
    };
    schedule();
    return () => { if (cycleRef.current) clearTimeout(cycleRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [font]);

  // ── Animation ticker ─────────────────────────────────────────────────────
  useEffect(() => {
    if (phase === "idle") return;

    const speed = phase === "deleting" ? 28 : 45;
    const t = setTimeout(() => {
      if (phase === "deleting") {
        if (chars > 0) {
          setChars((c) => c - 1);
        } else {
          setFont(nextFont);
          setPhase("typing");
        }
      } else if (phase === "typing") {
        if (chars < TEXT.length) {
          setChars((c) => c + 1);
        } else {
          setPhase("idle");
        }
      }
    }, speed + Math.random() * 12);

    return () => clearTimeout(t);
  }, [phase, chars, nextFont]);

  const showCursor = phase !== "idle";

  return (
    <span
      className="text-xl font-bold tracking-tighter text-cyan-400 w-40"
      style={{ fontFamily: `var(${font})` }}
    >
      {TEXT.slice(0, chars)}
      {showCursor && (
        <span
          className="inline-block w-[0.5em] h-[0.85em] bg-cyan-400 align-middle ml-[1px] opacity-80"
          style={{ animation: "terminal-blink 0.6s step-end infinite" }}
        />
      )}
    </span>
  );
}
