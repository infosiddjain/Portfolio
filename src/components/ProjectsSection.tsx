"use client";
import React, { useEffect, useMemo, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { FEATURED_IDS, projects as allProjects, type Project } from "@/data/projects";
import { Split } from "./motion/Split";
import { Tilt } from "./motion/Tilt";
import { AppScreen, Phone } from "./three/Phone";

type Filter = "all" | "client" | "app" | "game" | "web";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "client", label: "Client work" },
  { id: "app", label: "Mobile apps" },
  { id: "game", label: "Games" },
  { id: "web", label: "Web & SaaS" },
];

// The archive skips the case studies already shown in "Selected work".
const projects = allProjects.filter((p) => !(FEATURED_IDS as readonly string[]).includes(p.id));

const KIND_LABEL = { app: "Mobile app", game: "Game", web: "Web platform" } as const;
const STATUS_LABEL = { "coming-soon": "Coming soon", apk: "Beta", live: "Live" } as const;
const INITIAL = 6;

const matches = (p: Project, f: Filter) =>
  f === "all" || (f === "client" ? p.category === "client" : p.kind === f);

// "All" opens with a varied mix instead of a run of similar apps.
const PINNED = ["learn-refill", "hot-job", "divansh-transport", "cpukit", "timeatlas", "calculator-zip", "puzzle-buzz", "ludo-masti", "math-concepts"];
const rank = (p: Project) => {
  const i = PINNED.indexOf(p.id);
  return i === -1 ? PINNED.length : i;
};
const ordered = [...projects].sort((a, b) => rank(a) - rank(b));

function Card({ p, index }: { p: Project; index: number }) {
  const href = p.links.web ?? p.links.playStore ?? p.links.appStore ?? "#";
  const status = p.status ?? "live";
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Tilt max={7} className="overflow-hidden rounded-[1.6rem] bg-paper-2" data-cursor="View">
        <a href={href} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Open ${p.name}`}>
          <div className="relative aspect-[4/3] overflow-hidden">
            {p.image ? (
              <Image
                src={p.image}
                alt={`${p.name} preview`}
                fill
                sizes="(min-width: 1024px) 440px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
              />
            ) : (
              <div className="absolute inset-0" style={{ background: `linear-gradient(150deg, ${p.accent}22, ${p.accent}55)` }}>
                <div className="absolute left-1/2 top-[12%] w-[34%] -translate-x-1/2 transition-transform duration-700 group-hover:-translate-y-2">
                  <Phone>
                    <AppScreen app={p} compact />
                  </Phone>
                </div>
              </div>
            )}
            {/* hover veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute bottom-4 right-4 grid h-12 w-12 translate-y-3 scale-75 place-items-center rounded-full bg-lime text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              <FiArrowUpRight className="h-5 w-5" />
            </span>
            <div className="absolute left-4 top-4 flex gap-1.5">
              <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                {p.category === "client" ? "Client" : KIND_LABEL[p.kind]}
              </span>
              {status !== "live" && (
                <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-lime">
                  {STATUS_LABEL[status]}
                </span>
              )}
            </div>
          </div>
        </a>
      </Tilt>

      <div className="mt-5 flex items-start gap-4">
        {p.icon && (
          <Image src={p.icon} alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-xl ring-1 ring-black/5" />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{p.name}</h3>
            <span className="text-xs text-muted">[{String(index + 1).padStart(2, "0")}]</span>
          </div>
          <p className="mt-1 text-[15px] leading-snug text-muted">{p.tagline}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-wider">
            {p.links.web && (
              <a href={p.links.web} target="_blank" rel="noopener noreferrer" className="border-b border-ink pb-0.5 hover:border-lime hover:bg-lime">
                Website ↗
              </a>
            )}
            {p.links.playStore && (
              <a href={p.links.playStore} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 border-b border-ink pb-0.5 hover:border-lime hover:bg-lime">
                <FaGooglePlay className="h-2.5 w-2.5" /> Play
              </a>
            )}
            {p.links.appStore && (
              <a href={p.links.appStore} target="_blank" rel="noopener noreferrer" className="border-b border-ink pb-0.5 hover:border-lime hover:bg-lime">
                App Store ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);

  const counts = useMemo(
    () => Object.fromEntries(FILTERS.map((f) => [f.id, projects.filter((p) => matches(p, f.id)).length])) as Record<Filter, number>,
    []
  );
  // Grid height changes shift every scroll trigger below it.
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 750);
    return () => clearTimeout(id);
  }, [filter, expanded]);

  const visible = ordered.filter((p) => matches(p, filter));
  const shown = expanded ? visible : visible.slice(0, INITIAL);

  return (
    <section id="products" className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <div className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted" data-reveal>
            [ Archive — more apps, games & tools ]
          </p>
          <Split className="display mt-5 text-[clamp(3rem,7vw,7rem)]" text={"Also\n*shipped*"} />
        </div>
        <p className="max-w-md text-lg leading-relaxed text-muted lg:justify-self-end" data-reveal>
          More products I&apos;ve designed, built and launched — utility apps, games, SaaS tools and
          websites. Click any card to open it live.
        </p>
      </div>

      <div role="tablist" aria-label="Filter projects" className="mb-12 flex gap-2 overflow-x-auto border-b border-line pb-6 [scrollbar-width:none]">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setFilter(f.id);
                setExpanded(false);
              }}
              className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                active ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {active && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-lime" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
              )}
              <span className="relative">
                {f.label} <sup className="text-[10px]">{counts[f.id]}</sup>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <Card key={p.id} p={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length > INITIAL && (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-7 pr-2 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-lime hover:text-ink"
          >
            {expanded ? "Show less" : `Show all ${visible.length}`}
            <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-ink transition-transform group-hover:rotate-90 group-hover:bg-ink group-hover:text-lime">
              {expanded ? "−" : "+"}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
