"use client";

import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 900);
    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const toTop = () => {
    const lenis = (window as Window & { __lenis?: { scrollTo(t: number): void } }).__lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={toTop}
      aria-label="Scroll to top"
      className={`fixed bottom-4 right-4 z-[70] grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full bg-ink text-lime shadow-xl transition-all duration-500 hover:bg-lime hover:text-ink md:bottom-8 md:right-8 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <FiArrowUp className="h-5 w-5" />
    </button>
  );
}
