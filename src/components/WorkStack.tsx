"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAndroid, FaApple, FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { projects, type Project } from "@/data/projects";
import { prefersReducedMotion } from "./motion/MotionProvider";
import { Split } from "./motion/Split";
import { Tilt } from "./motion/Tilt";
import { AppScreen, Phone } from "./three/Phone";

gsap.registerPlugin(ScrollTrigger);

const FEATURED = ["gamerun", "dil-ki-bhakti", "fighter-aura", "sahej-health", "hub-form", "snakepad"];
const featured = FEATURED.map((id) => projects.find((p) => p.id === id)!).filter(Boolean);

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

function Links({ p, dark }: { p: Project; dark: boolean }) {
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  const ghost = `inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
    dark ? "border-white/20 text-white hover:bg-white hover:text-ink" : "border-ink/15 text-ink hover:bg-ink hover:text-white"
  }`;
  return (
    <div className="flex flex-wrap gap-2">
      {p.links.web && (
        <a href={p.links.web} {...ext} className="group inline-flex items-center gap-2 rounded-full bg-lime py-2.5 pl-4 pr-2.5 text-xs font-semibold uppercase tracking-wider text-ink">
          Live site
          <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </a>
      )}
      {p.links.playStore && (
        <a href={p.links.playStore} {...ext} className={ghost}>
          <FaGooglePlay className="h-3 w-3" /> Google Play
        </a>
      )}
      {p.links.appStore && (
        <a href={p.links.appStore} {...ext} className={ghost}>
          <FaApple className="h-3.5 w-3.5" /> App Store
        </a>
      )}
      {p.links.apk && (
        <a href={p.links.apk} {...ext} className={ghost}>
          <FaAndroid className="h-3.5 w-3.5" /> APK
        </a>
      )}
    </div>
  );
}

function Media({ p }: { p: Project }) {
  const showPhone = Boolean(p.icon);
  return (
    <div className="perspective relative h-full w-full sm:min-h-[460px]">
      {p.image ? (
        <Tilt
          max={8}
          data-cursor="View"
          className="relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] sm:absolute sm:left-0 sm:top-[6%] sm:w-[88%]"
        >
          <a href={p.links.web ?? p.links.playStore ?? "#"} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <div className="flex items-center gap-1.5 border-b border-black/5 bg-white px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              {p.links.web && (
                <span className="ml-3 truncate rounded-md bg-black/5 px-2.5 py-0.5 text-[10px] text-muted">
                  {hostOf(p.links.web)}
                </span>
              )}
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.image}
                alt={`${p.name} website`}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover object-top transition-transform duration-[1.4s] ease-out group-hover/tilt:scale-105"
              />
            </div>
          </a>
        </Tilt>
      ) : (
        <div
          className="relative grid aspect-[16/10] w-full place-items-center overflow-hidden rounded-2xl sm:absolute sm:left-0 sm:top-[6%] sm:w-[88%]"
          style={{ background: `radial-gradient(circle at 30% 30%, ${p.accent}55, ${p.accent}22 50%, transparent), linear-gradient(135deg, ${p.accent}22, #ffffff)` }}
        >
          <div className="bg-grid absolute inset-0 opacity-60" />
          <p className="display relative text-[clamp(2.5rem,6vw,5rem)] opacity-15" style={{ color: p.accent }}>
            {p.name}
          </p>
        </div>
      )}

      {showPhone && (
        <div className="absolute bottom-0 right-0 hidden w-[34%] max-w-[210px] sm:block" data-parallax="0.08">
          <div style={{ transform: "rotateY(-18deg) rotateX(4deg) rotateZ(3deg)" }}>
            <Phone>
              <AppScreen app={p} compact />
            </Phone>
          </div>
        </div>
      )}
    </div>
  );
}

export function WorkStack() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card", root.current);
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        gsap.to(card.querySelector(".stack-inner"), {
          scale: 0.9,
          rotateX: -6,
          ease: "none",
          scrollTrigger: { trigger: next, start: "top bottom", end: "top 110px", scrub: true },
        });
        gsap.to(card.querySelector(".stack-shade"), {
          opacity: 0.55,
          ease: "none",
          scrollTrigger: { trigger: next, start: "top bottom", end: "top 110px", scrub: true },
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="work" className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
      <div className="mb-14 grid gap-8 md:mb-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted" data-reveal>
            [ Selected work — {featured.length} of {projects.length} ]
          </p>
          <Split className="display mt-5 text-[clamp(3rem,8vw,8rem)]" text={"Selected\n*work*"} />
        </div>
        <p className="max-w-md text-lg leading-relaxed text-muted lg:justify-self-end" data-reveal>
          Client platforms and my own products — AI sports analytics, healthcare, devotional apps,
          real-time games and SaaS. Every one is live.
        </p>
      </div>

      <div ref={root} className="space-y-8 lg:space-y-0">
        {featured.map((p, i) => {
          const dark = i % 2 === 0;
          return (
            <article
              key={p.id}
              className="stack-card perspective lg:sticky lg:top-[96px] lg:h-[calc(100vh-120px)] lg:min-h-[620px] lg:pb-8"
              style={{ zIndex: i + 1 }}
            >
              <div
                className={`stack-inner relative h-full origin-top overflow-hidden rounded-[2rem] border ${
                  dark ? "border-white/10 bg-ink text-white" : "border-line bg-paper-2 text-ink"
                }`}
              >
                <div
                  aria-hidden
                  className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
                  style={{ background: `${p.accent}${dark ? "40" : "30"}` }}
                />
                <div className="relative grid h-full gap-8 p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-14">
                  <div className="flex flex-col">
                    <div className={`flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-white/50" : "text-muted"}`}>
                      <span>[{String(i + 1).padStart(2, "0")}]</span>
                      <span>{p.category === "client" ? `Client — ${p.client}` : "Own product"}</span>
                    </div>
                    <h3 className="display mt-6 text-[clamp(2.8rem,6vw,6rem)]">{p.name}</h3>
                    <p className={`mt-4 text-xl font-medium leading-snug md:text-2xl ${dark ? "text-white/90" : "text-ink"}`}>
                      {p.tagline}
                    </p>
                    <p className={`mt-4 max-w-lg leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>{p.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tools.map((t) => (
                        <span
                          key={t}
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${dark ? "border-white/15 text-white/80" : "border-ink/10 text-ink-soft"}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-8">
                      <p className={`mb-3 text-xs uppercase tracking-[0.18em] ${dark ? "text-white/40" : "text-muted"}`}>Role — {p.role}</p>
                      <Links p={p} dark={dark} />
                    </div>
                  </div>
                  <Media p={p} />
                </div>
                <div aria-hidden className="stack-shade pointer-events-none absolute inset-0 bg-black opacity-0" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
