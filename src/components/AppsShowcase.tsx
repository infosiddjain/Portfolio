"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { PLAY_DEVELOPER_URL, playStoreApps } from "@/data/projects";
import { prefersReducedMotion } from "./motion/MotionProvider";
import { AppScreen, Phone } from "./three/Phone";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pinned horizontal gallery of 3D phones (desktop). Phones swing in Y as they
 * travel and straighten when centred. On touch screens it's a native swipe row.
 */
export function AppsShowcase() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const el = track.current!;
      const distance = () => el.scrollWidth - window.innerWidth + 80;
      const tween = gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set(".apps-progress", { scaleX: self.progress });
          },
        },
      });

      gsap.utils.toArray<HTMLElement>(".app-phone", el).forEach((phone) => {
        gsap.fromTo(
          phone,
          { rotateY: -32, rotateZ: 4, y: 40 },
          {
            rotateY: 32,
            rotateZ: -4,
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: phone,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="apps" ref={section} className="relative overflow-hidden bg-ink text-white lg:h-screen">
      <div aria-hidden className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div aria-hidden className="absolute left-1/3 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-electric/25 blur-[120px]" />

      <div className="relative flex h-full flex-col py-16 lg:py-10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-end justify-between gap-6 px-5 md:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">[ Published on Google Play ]</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,5.5vw,5.5rem)]">
              <span className="text-lime">{playStoreApps.length}</span> apps. Built,
              <br />
              shipped <span className="text-outline-light">& live.</span>
            </h2>
          </div>
          <a
            href={PLAY_DEVELOPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 py-2 pl-5 pr-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-white hover:text-ink"
          >
            <FaGooglePlay className="h-4 w-4" /> Developer page
            <span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-ink transition-transform group-hover:rotate-45">
              <FiArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="relative mt-10 flex-1 lg:mt-6">
          <div
            ref={track}
            className="flex h-full snap-x snap-mandatory items-center gap-6 overflow-x-auto px-5 pb-6 [scrollbar-width:none] md:px-10 lg:snap-none lg:gap-10 lg:overflow-visible lg:pb-0 lg:pl-[8vw]"
          >
            {playStoreApps.map((app, i) => (
              <a
                key={app.id}
                href={app.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Open"
                className="perspective group w-[230px] shrink-0 snap-center md:w-[250px] lg:w-[clamp(180px,24vh,260px)]"
              >
                <div className="app-phone preserve-3d">
                  <Phone className="transition-transform duration-500 group-hover:-translate-y-3">
                    <AppScreen app={app} compact />
                  </Phone>
                </div>
                <div className="mt-6 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">[{String(i + 1).padStart(2, "0")}]</p>
                    <p className="mt-1 font-display text-xl font-bold tracking-tight">{app.name}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-white/55">{app.tagline}</p>
                  </div>
                  <span className="mt-5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 transition-colors group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                    <FiArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
            <div className="hidden w-[20vw] shrink-0 lg:block" />
          </div>
        </div>

        <div className="mx-auto hidden w-full max-w-[1440px] px-10 lg:block">
          <div className="h-px w-full bg-white/10">
            <div className="apps-progress h-px origin-left scale-x-0 bg-lime" />
          </div>
        </div>
      </div>
    </section>
  );
}
