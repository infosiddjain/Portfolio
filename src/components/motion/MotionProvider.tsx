"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const READY_EVENT = "app:ready";

/** True once the preloader has finished (or was skipped). */
export function isAppReady() {
  return typeof window !== "undefined" && (window as Window & { __appReady?: boolean }).__appReady === true;
}

export function onAppReady(cb: () => void) {
  if (isAppReady()) {
    cb();
    return () => {};
  }
  window.addEventListener(READY_EVENT, cb, { once: true });
  return () => window.removeEventListener(READY_EVENT, cb);
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Site-wide motion: Lenis smooth scroll synced to GSAP ScrollTrigger, plus
 * declarative scroll effects driven by data attributes so sections stay
 * server components:
 *   data-reveal            fade + rise when scrolled into view
 *   data-split             words (.split-word) slide up from a mask
 *   data-count="42"        number counts up
 *   data-parallax="0.15"   drifts on scroll (fraction of its height)
 *   data-clip              image wipes in from the bottom
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: -80 },
    });
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Reveal
      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(reveals, { y: 50, opacity: 0 });
      ScrollTrigger.batch(reveals, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "power3.out" }),
      });

      // Split words (hero handles its own after the preloader)
      gsap.utils.toArray<HTMLElement>("[data-split]:not([data-split='hero'])").forEach((el) => {
        gsap.from(el.querySelectorAll(".split-word"), {
          yPercent: 115,
          rotate: 4,
          duration: 1,
          stagger: 0.045,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      // Counters
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const obj = { v: 0 };
        el.textContent = "0";
        gsap.to(obj, {
          v: end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
        });
      });

      // Parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amt = Number(el.dataset.parallax || 0.15);
        gsap.fromTo(
          el,
          { yPercent: -amt * 100 },
          {
            yPercent: amt * 100,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      // Clip-wipe images
      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(18% 8% 18% 8% round 28px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 95%", end: "top 35%", scrub: true },
          }
        );
      });
    });

    // Images finishing late change layout — keep trigger positions honest.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
