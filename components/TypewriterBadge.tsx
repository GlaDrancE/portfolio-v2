"use client";

import { useEffect, useState } from "react";

const messages = [
  "INITIALIZING_KERNEL_MODE...",
  "LOC: NAGPUR, INDIA",
  "ROLE: FULL_STACK_DEVELOPER",
  "ORG: @ ENTUGO_PVT_LTD",
  "EXP: 3+ YEARS IN THE FIELD",
  "STATUS: AVAILABLE_FOR_FREELANCE",
  "STACK: FULL_STACK // WEB_APPS",
  "EDU: B-TECH_CSE // IN_PROGRESS",
  "CONTACT: ayushr1606@gmail.com",
  "PROJECTS: 15+ SHIPPED",
  "CLIENTS: 20+ SERVED // 5.0★",
];

const TYPE_SPEED = 45;
const DELETE_SPEED = 18;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 300;

export default function TypewriterBadge() {
  const [displayed, setDisplayed] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");

  useEffect(() => {
    const current = messages[msgIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          TYPE_SPEED
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed((d) => d.slice(0, -1)),
          DELETE_SPEED
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setMsgIndex((i) => (i + 1) % messages.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, phase, msgIndex]);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low/50 backdrop-blur border border-outline-variant/20">
      <span className="font-mono text-xs text-secondary tracking-tighter uppercase">
        {displayed}
        <span className="inline-block w-[1px] h-[10px] bg-secondary ml-[2px] align-middle animate-pulse" />
      </span>
    </div>
  );
}
