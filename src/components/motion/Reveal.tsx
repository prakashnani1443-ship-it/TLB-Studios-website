"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  /** HTML tag to render — use "li" inside an <ol>/<ul>. Defaults to "div". */
  as?: "div" | "li";
};

const tags = { div: motion.div, li: motion.li };

// Scroll-triggered fade/rise used across sections. Falls back to a static
// render when the user prefers reduced motion.
export default function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = tags[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.01 : 0.6, delay, ease: "easeOut" },
    },
  };

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </Tag>
  );
}
