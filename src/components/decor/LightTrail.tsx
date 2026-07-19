"use client";

import { motion, useReducedMotion } from "framer-motion";

// A single controlled teal-to-violet accent trail — used once in the hero.
export default function LightTrail() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full -z-10"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id="tlb-trail" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
          <stop offset="45%" stopColor="#2dd4bf" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <motion.path
        d="M -100 620 C 250 520, 500 200, 1300 60"
        stroke="url(#tlb-trail)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.7 : 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: reduceMotion ? 0 : 1.8, ease: "easeOut", delay: 0.2 }}
      />
    </svg>
  );
}
