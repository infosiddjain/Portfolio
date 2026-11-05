"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { READY_EVENT, prefersReducedMotion } from "./MotionProvider";

const markReady = () => {
  (window as Window & { __appReady?: boolean }).__appReady = true;
  window.dispatchEvent(new Event(READY_EVENT));
};

/** Short counter intro (≈1.3s) that wipes up, then signals the hero to animate. */
export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDone(true);
      markReady();
      return;
    }
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        setDone(true);
      },
    });
    tl.to(counter, {
      v: 100,
      duration: 1.1,
      ease: "power2.inOut",
      onUpdate: () => {
        if (num.current) num.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
      },
    })
      .to(".pl-bar", { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, 0)
      .to(".pl-inner", { yPercent: -30, opacity: 0, duration: 0.45, ease: "power2.in" })
      .add(markReady, "-=0.1")
      .to(root.current, { yPercent: -100, duration: 0.8, ease: "expo.inOut" }, "-=0.25");
    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={root}
      aria-hidden
      className="fixed inset-0 z-[200] flex flex-col justify-between bg-ink p-6 text-white md:p-10"
    >
      <div className="pl-inner flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
        <span>Siddharth Jain®</span>
        <span>Portfolio — {new Date().getFullYear()}</span>
      </div>
      <div className="pl-inner">
        <p className="display text-[22vw] leading-none md:text-[16vw]">
          <span ref={num}>000</span>
        </p>
        <div className="mt-4 h-px w-full bg-white/15">
          <div className="pl-bar h-px origin-left scale-x-0 bg-lime" />
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">
          Apps · Websites · Games · SaaS
        </p>
      </div>
    </div>
  );
}
