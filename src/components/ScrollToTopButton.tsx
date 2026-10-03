"use client";

import React, { useState, useEffect } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // setState bails out when the value is unchanged, so this stays cheap per scroll tick.
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed items-center bg-transparent bg-[linear-gradient(to_right,rgb(236,72,153),rgb(124,58,237))] hidden text-center z-50 p-4 rounded-full right-4 bottom-6 md:right-6 md:bottom-8 ${
        isVisible ? "flex" : "hidden"
      }`}
    >
      <img
        src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-23.svg"
        alt="Icon"
        className="box-border h-4 w-4"
      />
    </button>
  );
}
