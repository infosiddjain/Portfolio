"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Dot + trailing ring cursor for mouse users. Any element with
 * data-cursor="Label" grows the ring into a labelled lime bubble.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const dx = gsap.quickTo(dot.current, "x", { duration: 0.08, ease: "power3" });
    const dy = gsap.quickTo(dot.current, "y", { duration: 0.08, ease: "power3" });
    const rx = gsap.quickTo(ring.current, "x", { duration: 0.45, ease: "power3" });
    const ry = gsap.quickTo(ring.current, "y", { duration: 0.45, ease: "power3" });

    let shown = false;
    const move = (e: PointerEvent) => {
      if (!shown) {
        shown = true;
        gsap.set([dot.current, ring.current], { x: e.clientX, y: e.clientY });
        gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.3 });
      }
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor], a, button") as HTMLElement | null;
      const text = target?.dataset.cursor ?? "";
      setLabel(text);
      ring.current?.classList.toggle("is-link", Boolean(target) && !text);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div aria-hidden className={enabled ? "" : "hidden"}>
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[150] grid opacity-0 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition-[width,height,background-color,border-color] duration-300 ${
          label
            ? "h-24 w-24 border-0 bg-lime shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)]"
            : // white + difference blend = black on light sections, white on dark ones
              "h-9 w-9 border-[1.5px] border-white mix-blend-difference [&.is-link]:h-14 [&.is-link]:w-14 [&.is-link]:bg-white"
        }`}
      >
        {label && (
          <span className="text-[11px] font-bold uppercase tracking-widest text-ink">{label}</span>
        )}
      </div>
      <div
        ref={dot}
        className={`pointer-events-none fixed left-0 top-0 z-[151] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 mix-blend-difference ${
          label ? "invisible" : ""
        }`}
      />
    </div>
  );
}
