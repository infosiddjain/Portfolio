"use client";

import React, { useState, useEffect } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
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
      className={`fixed items-center bg-transparent bg-[linear-gradient(to_right,rgb(236,72,153),rgb(124,58,237))] hidden text-center z-50 p-4 rounded-full right-6 bottom-8 ${
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
