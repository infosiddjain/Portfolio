"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
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

/** Phones & tablets: skip the intro and smooth-scroll so content paints immediately. */
export const isTouchDevice = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

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
  const pathname = usePathname();

  // Smooth scroll — created once and kept across page navigations.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    // Native scrolling is already smooth on touch screens — Lenis only costs main-thread time there.
    if (isTouchDevice()) return;

    const lenis = new Lenis({
      lerp: 0.085, // lower = silkier glide
      wheelMultiplier: 0.95,
      smoothWheel: true,
      anchors: { offset: -80 },
    });
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete (window as Window & { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // Scroll effects — rebuilt for every page so new routes animate too.
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = (window as Window & { __lenis?: Lenis }).__lenis;
    if (!window.location.hash) {
      lenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    }
    lenis?.resize();

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

    // Let the new page lay out, then measure.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      cancelAnimationFrame(id);
      ctx.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
