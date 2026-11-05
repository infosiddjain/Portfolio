"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;

// Set after the first page mounts, so the curtain only plays on in-site navigation —
// never on the first load (keeps the first paint instant).
let navigated = false;

/**
 * Re-mounts on every navigation: an ink curtain lifts off the new page while
 * it fades in. Only opacity on the wrapper — a transform here would break the
 * fixed header and pinned sections inside.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => typeof window !== "undefined" && navigated);
  useEffect(() => {
    navigated = true;
  }, []);

  if (!animate) return <>{children}</>;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[120] origin-top bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, ease: EASE, delay: 0.05 }}
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
        {children}
      </motion.div>
    </>
  );
}
