"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./MotionProvider";

gsap.registerPlugin(ScrollTrigger);

/**
 * Makes the CSS marquees inside its parent react to scrolling: they speed up
 * with scroll velocity and flip direction when you scroll back up, then ease
 * back to cruising speed.
 */
export function MarqueeVelocity() {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = anchor.current?.parentElement;
    if (!root) return;
    const anims = Array.from(root.querySelectorAll<HTMLElement>(".marquee-track")).flatMap((el) => el.getAnimations());
    if (!anims.length) return;
    // Start far into the loop so reversing never reaches time 0 (where a reversed animation would finish and stop).
    anims.forEach((a) => {
      a.currentTime = 30_000 * 200;
    });

    const state = { rate: 1, dir: 1 };
    const st = ScrollTrigger.create({
      trigger: root,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const v = self.getVelocity();
        state.dir = v < 0 ? -1 : 1;
        state.rate = Math.min(1 + Math.abs(v) / 400, 6);
      },
    });
    const tick = () => {
      state.rate += (1 - state.rate) * 0.06; // ease back to cruise
      const r = state.rate * state.dir;
      anims.forEach((a) => {
        a.playbackRate = r;
      });
    };
    gsap.ticker.add(tick);
    return () => {
      st.kill();
      gsap.ticker.remove(tick);
    };
  }, []);

  return <span ref={anchor} hidden />;
}
