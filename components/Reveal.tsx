"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Reveal
 * Lightweight framer-motion wrapper that fades + lifts its children
 * into view once, when they enter the viewport.
 */
type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Direction the element travels from. */
  from?: "up" | "down" | "left" | "right";
};

const offsets = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offsets[from] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
