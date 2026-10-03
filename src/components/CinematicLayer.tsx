"use client";
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useMotionValue,
} from "framer-motion";

/** How long the opening title card stays up; the hero times its entrance off this. */
export const INTRO_MS = 900;

/**
 * Site-wide "film" layer: opening title sequence, drifting aurora light,
 * film grain, letterbox vignette, scroll progress and a cursor light.
 * Everything is pointer-events-none so it never blocks the UI.
 */
export function CinematicLayer() {
  const [intro, setIntro] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), INTRO_MS);
    // Cursor light only makes sense for a real mouse — skip the listener on touch.
    if (!window.matchMedia("(pointer: fine)").matches) return () => clearTimeout(t);
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);

  return (
    <>
      {/* Aurora "footage" */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05060d]">
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
        <div className="aurora aurora-c" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      {/* Film grain */}
      <div aria-hidden className="film-grain pointer-events-none fixed inset-0 z-[60] hidden opacity-[0.07] mix-blend-overlay md:block" />

      {/* Cursor light */}
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14),transparent_65%)] md:block"
      />

      {/* Scroll progress (film timeline) */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-amber-300 via-pink-400 to-violet-500"
      />

      {/* Opening title sequence */}
      <AnimatePresence>
        {intro && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            initial={{ clipPath: "inset(0 0 0% 0)" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[10px] uppercase tracking-[0.6em] text-amber-200/70 md:text-xs"
            >
              A portfolio film by
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-[family-name:var(--font-montaga)] text-4xl text-white md:text-7xl"
            >
              Siddharth Jain
            </motion.h1>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.6, ease: "easeInOut" }}
              className="mt-8 block h-px w-48 origin-left bg-gradient-to-r from-amber-300 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
