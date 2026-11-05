"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./motion/MotionProvider";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Discovery call", text: "A free 15–20 minute call to understand your goals, users and budget." },
  { title: "Scope & quote", text: "A written feature list, timeline and fixed price — no surprises later." },
  { title: "Design & build", text: "Figma screens first, then working builds you can test every week." },
  { title: "Launch", text: "I deploy the site or publish the app to Google Play and the App Store." },
  { title: "Support", text: "30 days of free bug fixes after launch, then optional monthly care." },
];

export function ProcessSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-line",
        { scaleX: 0 },
        { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".process-grid", start: "top 75%", end: "bottom 45%", scrub: true } }
      );
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((el, i) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".process-grid", start: "top 80%", once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={root} className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div aria-hidden className="absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-lime/10 blur-[120px]" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">[ How I work ]</p>
            <h2 className="display mt-5 text-[clamp(3rem,7vw,7rem)]">
              Simple.
              <br />
              <span className="text-lime">Transparent.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-white/60 lg:justify-self-end">
            You always know what&apos;s being built, when it ships and what it costs.
          </p>
        </div>

        <div className="process-grid relative">
          <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-white/10 lg:block">
            <div className="process-line h-px origin-left bg-lime" />
          </div>
          <ol className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="process-step relative">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-ink font-display text-lg font-bold text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
