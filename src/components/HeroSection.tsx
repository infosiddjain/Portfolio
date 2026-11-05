"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { CONTACT } from "@/data/contact";
import { playStoreApps } from "@/data/projects";
import { Magnetic } from "./motion/Magnetic";
import { isTouchDevice, onAppReady, prefersReducedMotion } from "./motion/MotionProvider";
import { HeroScene } from "./three/HeroScene";

function RotatingBadge() {
  const text = "AVAILABLE FOR NEW PROJECTS • FREELANCE & CONTRACT • ";
  return (
    <div className="relative grid h-32 w-32 place-items-center">
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink text-[8.4px] font-semibold uppercase tracking-[0.18em]">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="grid h-12 w-12 place-items-center rounded-full bg-lime">
        <FiArrowDownRight className="h-5 w-5" />
      </span>
    </div>
  );
}

export function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const icons = playStoreApps.filter((p) => p.icon).slice(0, 5);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.set(".hero-word", { yPercent: 115 });
      if (!isTouchDevice()) gsap.set("[data-hero-fade]", { y: 30, opacity: 0 });
    }, root);
    const off = onAppReady(() => {
      ctx.add(() => {
        gsap.to(".hero-word", { yPercent: 0, duration: 1.2, stagger: 0.06, ease: "power4.out" });
        if (!isTouchDevice())
          gsap.to("[data-hero-fade]", { y: 0, opacity: 1, duration: 1, stagger: 0.08, delay: 0.5, ease: "power3.out" });
      });
    });
    return () => {
      off();
      ctx.revert();
    };
  }, []);

  return (
    <section id="top" ref={root} className="relative overflow-hidden pt-28 md:pt-32">
      <div aria-hidden className="bg-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,black,transparent)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted" data-hero-fade>
          <span className="flex items-center gap-2 text-ink">
            <span className="pulse-dot h-2 w-2 rounded-full bg-success" /> Available for freelance & contract work
          </span>
          <span>[ React Native · Next.js · Node.js ]</span>
          <span className="hidden md:block">Est. 2021 — {CONTACT.timezone}</span>
        </div>

        <div className="grid items-center gap-6 pb-12 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4 lg:pb-20">
          <div>
            <p className="mb-5 max-w-xl text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft md:text-[15px]" data-hero-fade>
              Apps for health, fitness &amp; sports-tech — and the businesses behind them
            </p>
            <h1 className="display text-[clamp(3rem,7.2vw,7.6rem)] text-ink" aria-label="Apps and websites that grow businesses">
              {[["Apps &", ""], ["websites", ""], ["that", "text-outline"], ["grow", ""], ["businesses.", "hl"]].map(
                ([w, c], i) => (
                  <React.Fragment key={i}>
                    <span className="split-line" aria-hidden>
                      <span className={`hero-word split-word ${c === "hl" ? "" : c}`}>
                        {c === "hl" ? (
                          <span className="relative isolate">
                            <span className="absolute inset-x-[-0.06em] bottom-[0.08em] top-[0.18em] -z-10 bg-lime" />
                            {w}
                          </span>
                        ) : (
                          w
                        )}
                      </span>
                    </span>
                    {i === 1 || i === 3 ? <br /> : " "}
                  </React.Fragment>
                )
              )}
            </h1>

            <div className="mt-10 grid gap-8 md:grid-cols-[auto_1fr] md:items-end">
              <div className="hidden md:block" data-hero-fade>
                <RotatingBadge />
              </div>
              <div>
                <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl" data-hero-fade>
                  I&apos;m <strong className="font-semibold text-ink">Siddharth Jain</strong> — I design, build and
                  launch mobile apps, SaaS platforms and business websites. From idea to Play Store, App Store
                  and the web.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3" data-hero-fade>
                  <Magnetic>
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-lime hover:text-ink"
                    >
                      Start a project
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-ink transition-transform duration-500 group-hover:rotate-45 group-hover:bg-ink group-hover:text-lime">
                        <FiArrowUpRight className="h-5 w-5" />
                      </span>
                    </a>
                  </Magnetic>
                  <a
                    href="#work"
                    className="rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:border-ink"
                  >
                    See selected work
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5" data-hero-fade>
                  <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {icons.map((p) => (
                      <Image key={p.id} src={p.icon!} alt="" width={40} height={40} className="h-10 w-10 rounded-xl bg-white ring-[3px] ring-white" />
                    ))}
                  </div>
                  <p className="text-sm leading-tight text-muted">
                    <strong className="block text-ink">{playStoreApps.length} apps on Google Play</strong>
                    built & published by me
                  </p>
                  </div>
                  <a href="#work" className="group flex items-center gap-3 border-l border-line pl-6 sm:pl-8">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink font-display text-xs font-bold text-lime">
                      USA
                    </span>
                    <span className="text-sm leading-tight text-muted">
                      <strong className="block text-ink group-hover:underline">Used by USA Baseball scouts</strong>
                      via GameRun — a client app I worked on
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative" data-hero-fade>
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
