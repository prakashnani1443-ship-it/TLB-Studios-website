"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { label: "Think", cx: 200, cy: 60 },
  { label: "Learn", cx: 340, cy: 200 },
  { label: "Build", cx: 200, cy: 340 },
];

// Lightweight orbit / node visual referencing the Think → Learn → Build cycle.
// The dashed ring drifts slowly; the triangle and node labels stay fixed so
// they never desync from one another.
export default function OrbitNodes() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#1c2740"
          strokeWidth="1"
          strokeDasharray="2 8"
          style={{ transformOrigin: "200px 200px" }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        />
        <path
          d="M200 60 L340 200 L200 340 Z"
          fill="none"
          stroke="#2dd4bf"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />
        {nodes.map((node, i) => (
          <motion.circle
            key={node.label}
            cx={node.cx}
            cy={node.cy}
            r="7"
            fill={i === 1 ? "#8b5cf6" : "#2dd4bf"}
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }
            }
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-1/2 top-[10%] -translate-x-1/2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
          Think
        </span>
        <span className="absolute right-[6%] top-1/2 -translate-y-1/2 text-xs font-medium uppercase tracking-[0.16em] text-violet">
          Learn
        </span>
        <span className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
          Build
        </span>
      </div>
    </div>
  );
}
