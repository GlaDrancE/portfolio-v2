"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// ─── words & accent config ────────────────────────────────────────────────────
const WORDS = ["ENGINEERING", "ELEGANT", "SOLUTIONS", "FOR", "COMPLEX", "LOGIC."];
const ACCENT_WORD = "ELEGANT";
const FULL_TEXT = WORDS.join(" ");

// ─── typewriter config ────────────────────────────────────────────────────────
const TYPE_SPEED = 55;
const INITIAL_DELAY = 400;

// ─── font pool ────────────────────────────────────────────────────────────────
const FONTS = [
  { var: "--font-headline", label: "Space Grotesk" },
  { var: "--font-label", label: "JetBrains Mono" },
  { var: "--font-orbitron", label: "Orbitron" },
  { var: "--font-vt323", label: "VT323" },
  { var: "--font-fira-code", label: "Fira Code" },
  // { var: "--font-press-start", label: "Press Start 2P" },
  { var: "--font-audiowide", label: "Audiowide" },
  { var: "--font-rajdhani", label: "Rajdhani" },
];

function pickOtherFont(currentVar: string): string {
  const others = FONTS.filter((f) => f.var !== currentVar);
  return others[Math.floor(Math.random() * others.length)].var;
}

// ─── component ────────────────────────────────────────────────────────────────
export default function HeroHeadline() {
  const [charCount, setCharCount] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [wordFonts, setWordFonts] = useState<string[]>(
    () => WORDS.map(() => "--font-headline")
  );

  // Locked dimensions — measured once after typewriting completes
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [lockedHeight, setLockedHeight] = useState<number | null>(null);

  // ── Phase 1: typewriter ──────────────────────────────────────────────────
  useEffect(() => {
    const init = setTimeout(() => {
      const iv = setInterval(() => {
        setCharCount((c) => {
          if (c >= FULL_TEXT.length) {
            clearInterval(iv);
            setTypingDone(true);
            return c;
          }
          return c + 1;
        });
      }, TYPE_SPEED);
      return () => clearInterval(iv);
    }, INITIAL_DELAY);
    return () => clearTimeout(init);
  }, []);

  // ── Lock height right after typing finishes (before font cycling mutates layout)
  useLayoutEffect(() => {
    if (typingDone && h1Ref.current && lockedHeight === null) {
      setLockedHeight(h1Ref.current.getBoundingClientRect().height + 24);
    }
  }, [typingDone, lockedHeight]);

  // ── Phase 2: font cycling ────────────────────────────────────────────────
  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!typingDone) return;

    const schedule = () => {
      const delay = 200 + Math.random() * 800;
      cycleRef.current = setTimeout(() => {
        const wordIdx = Math.floor(Math.random() * WORDS.length);
        setWordFonts((prev) => {
          const next = [...prev];
          next[wordIdx] = pickOtherFont(next[wordIdx]);
          return next;
        });
        schedule();
      }, delay);
    };

    schedule();
    return () => { if (cycleRef.current) clearTimeout(cycleRef.current); };
  }, [typingDone]);

  // ── Typewriter render ────────────────────────────────────────────────────
  if (!typingDone) {
    let pos = 0;
    const accentStart = (() => {
      for (const w of WORDS) {
        if (w === ACCENT_WORD) return pos;
        pos += w.length + 1;
      }
      return 0;
    })();
    const accentEnd = accentStart + ACCENT_WORD.length;

    const before = FULL_TEXT.slice(0, Math.min(charCount, accentStart));
    const accent = charCount > accentStart
      ? FULL_TEXT.slice(accentStart, Math.min(charCount, accentEnd))
      : "";
    const after = charCount > accentEnd
      ? FULL_TEXT.slice(accentEnd, charCount)
      : "";

    return (
      <h1
        ref={h1Ref}
        className="font-headline text-[2.5rem] sm:text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-none"
      >
        {before}
        {accent && <span className="text-primary">{accent}</span>}
        {after}
        <span
          className="inline-block w-[0.55em] h-[0.85em] bg-primary ml-[2px] align-middle"
          style={{ animation: "terminal-blink 1s step-end infinite" }}
        />
      </h1>
    );
  }

  // ── Font-cycling render (height locked) ──────────────────────────────────
  return (
    <h1
      ref={h1Ref}
      className="text-[2.25rem] sm:text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight"
      style={lockedHeight ? { height: lockedHeight } : undefined}
    >
      {WORDS.map((word, i) => (
        <span
          key={i}
          className={`inline-block transition-[font-family] duration-300 ${word === ACCENT_WORD ? "text-primary" : ""
            }`}
          style={{ fontFamily: `var(${wordFonts[i]})` }}
        >
          {word}
          {i < WORDS.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </h1>
  );
}
