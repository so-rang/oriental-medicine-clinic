"use client";

import { motion, useReducedMotion } from "motion/react";

export function HanokGate() {
  const prefersReduced = useReducedMotion();

  const leftVariants = prefersReduced
    ? { closed: { x: 0 }, open: { x: 0 } }
    : { closed: { x: 0 }, open: { x: "-105%" } };

  const rightVariants = prefersReduced
    ? { closed: { x: 0 }, open: { x: 0 } }
    : { closed: { x: 0 }, open: { x: "105%" } };

  const transition = { duration: 1.4, ease: [0.22, 0.61, 0.36, 1] as const, delay: 0.4 };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2">
        {/* LEFT door */}
        <motion.div
          initial="closed"
          animate="open"
          variants={leftVariants}
          transition={transition}
          className="relative h-full origin-right border-r border-ink/30 bg-gradient-to-l from-[#2a1f15] via-[#3a2a1b] to-[#1f160e] shadow-[inset_-8px_0_24px_rgba(0,0,0,0.4)]"
        >
          <GateGrain />
          <RingHandle side="right" />
        </motion.div>
        {/* RIGHT door */}
        <motion.div
          initial="closed"
          animate="open"
          variants={rightVariants}
          transition={transition}
          className="relative h-full origin-left border-l border-ink/30 bg-gradient-to-r from-[#2a1f15] via-[#3a2a1b] to-[#1f160e] shadow-[inset_8px_0_24px_rgba(0,0,0,0.4)]"
        >
          <GateGrain />
          <RingHandle side="left" />
        </motion.div>
      </div>
    </div>
  );
}

function GateGrain() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-30 mix-blend-overlay"
      viewBox="0 0 100 200"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="planks" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="100" y2="0" stroke="#000" strokeWidth="0.4" />
        </pattern>
        <pattern id="grain" x="0" y="0" width="2" height="100" patternUnits="userSpaceOnUse">
          <line x1="1" y1="0" x2="1" y2="100" stroke="#000" strokeWidth="0.15" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100" height="200" fill="url(#grain)" />
      <rect width="100" height="200" fill="url(#planks)" />
    </svg>
  );
}

function RingHandle({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 ${
        side === "left" ? "left-4 md:left-8" : "right-4 md:right-8"
      }`}
    >
      <div className="flex h-10 w-10 items-center justify-center md:h-14 md:w-14">
        <div className="h-full w-full rounded-full border-2 border-[#c19a5c] bg-gradient-to-b from-[#d9b277] to-[#8a6532] shadow-md" />
      </div>
    </div>
  );
}
