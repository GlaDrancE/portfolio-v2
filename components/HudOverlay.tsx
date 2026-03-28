"use client";

import { useEffect, useState } from "react";

interface HudLineProps {
  text: string;
  initialDelay?: number;  // ms before first char appears
  typeSpeed?: number;     // ms per character
  pauseAfter?: number;    // ms to hold before retyping
  className?: string;
}

function HudLine({
  text,
  initialDelay = 0,
  typeSpeed = 30,
  pauseAfter = 6000,
  className = "",
}: HudLineProps) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"waiting" | "typing" | "pausing">("waiting");

  useEffect(() => {
    // Initial delay before first run
    const init = setTimeout(() => setPhase("typing"), initialDelay);
    return () => clearTimeout(init);
  }, [initialDelay]);

  useEffect(() => {
    if (phase === "typing") {
      if (displayed.length < text.length) {
        const t = setTimeout(
          () => setDisplayed(text.slice(0, displayed.length + 1)),
          typeSpeed + Math.random() * 20 // slight jitter per char
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setDisplayed("");
          setPhase("typing");
        }, pauseAfter);
        return () => clearTimeout(t);
      }
    }
  }, [phase, displayed, text, typeSpeed, pauseAfter]);

  return (
    <div className={`hud-text ${className}`}>
      {displayed}
      {phase === "typing" && displayed.length < text.length && (
        <span className="opacity-70">_</span>
      )}
    </div>
  );
}

const HUD_ITEMS = [
  {
    text: "PROX_LINK_ESTABLISHED: 0.002ms",
    className: "absolute top-24 left-12",
    initialDelay: 300,
    typeSpeed: 28,
    pauseAfter: 9000,
  },
  {
    text: "SYS_TEMP: 32C // VOLTAGE: NOMINAL",
    className: "absolute top-1/3 right-20 rotate-90",
    initialDelay: 900,
    typeSpeed: 22,
    pauseAfter: 11000,
  },
  {
    text: "CORE_LOAD [||||||||||--] 82%",
    className: "absolute bottom-1/4 left-10",
    initialDelay: 1600,
    typeSpeed: 35,
    pauseAfter: 7500,
  },
  {
    text: "RECV: packets: 4092 errors: 0 dropped: 0",
    className: "absolute top-1/4 left-1/4",
    initialDelay: 2400,
    typeSpeed: 20,
    pauseAfter: 13000,
  },
  {
    text: "KERNEL_REV: 6.4.12-GENTOO-HDS",
    className: "absolute bottom-12 right-1/4",
    initialDelay: 1100,
    typeSpeed: 32,
    pauseAfter: 8500,
  },
];

export default function HudOverlay() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
      {HUD_ITEMS.map((item, i) => (
        <HudLine
          key={i}
          text={item.text}
          className={item.className}
          initialDelay={item.initialDelay}
          typeSpeed={item.typeSpeed}
          pauseAfter={item.pauseAfter}
        />
      ))}
    </div>
  );
}
