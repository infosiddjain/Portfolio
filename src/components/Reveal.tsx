"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Scene-style entrance: fades up when scrolled into view.
 * Only opacity/transform are animated (GPU-composited) — a blur filter on
 * whole sections forces a full repaint every frame and janks on phones.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
