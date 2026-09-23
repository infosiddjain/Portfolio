"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { isMobile, projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";

type Filter = "all" | "client" | "product" | "mobile";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "client", label: "Client Work" },
  { id: "product", label: "My Products" },
  { id: "mobile", label: "Mobile Apps" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

function matches(p: Project, f: Filter) {
  if (f === "all") return true;
  if (f === "mobile") return isMobile(p);
  return p.category === f;
}

/* ───────────────────────── Media ───────────────────────── */

function BrowserMedia({ project, large }: { project: Project; large: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0c14] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.03] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        {project.links.web && (
          <span className="ml-3 truncate rounded-md bg-white/5 px-2.5 py-0.5 text-[10px] tracking-wide text-neutral-400">
            {hostOf(project.links.web)}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image!}
          alt={`${project.name} homepage`}
          fill
          sizes={large ? "(min-width: 1024px) 720px, 100vw" : "(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"}
          className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080f]/70 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function AppMedia({ project, large }: { project: Project; large: boolean }) {
  const accent = project.accent ?? "#d4af37";
  return (
    <div
      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-white/10 ${
        large ? "lg:aspect-auto lg:h-full lg:min-h-[340px]" : ""
      }`}
      style={{
        background: `radial-gradient(circle at 50% 45%, ${accent}55, transparent 60%), linear-gradient(160deg, #11121c, #07080f)`,
      }}
    >
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:28px_28px]" />
      {project.icon && (
        <div className="relative transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-105">
          <div
            className="absolute -inset-6 rounded-full blur-2xl"
            style={{ background: `${accent}66` }}
          />
          <Image
            src={project.icon}
            alt={`${project.name} app icon`}
            width={112}
            height={112}
            className="relative h-24 w-24 rounded-[26px] bg-white shadow-2xl ring-1 ring-white/20 md:h-28 md:w-28"
          />
        </div>
      )}
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-white/50">
        {project.links.appStore ? "Live on App Store" : "Live on Google Play"}
      </span>
    </div>
  );
}

/* ───────────────────────── Links ───────────────────────── */

function LinkButtons({ project }: { project: Project }) {
  const { web, playStore, appStore } = project.links;
  const base =
    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300";
  return (
    <div className="flex flex-wrap gap-2">
      {web && (
        <a
          href={web}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} bg-gradient-to-r from-[#f5e6a8] to-[#d4af37] text-[#1a1405] hover:shadow-[0_0_24px_rgba(212,175,55,0.45)]`}
        >
          Live Site <FiArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      {playStore && (
        <a
          href={playStore}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} border border-white/15 text-neutral-200 hover:border-amber-200/60 hover:text-amber-100`}
        >
          <FaGooglePlay className="h-3 w-3" /> Google Play
        </a>
      )}
      {appStore && (
        <a
          href={appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} border border-white/15 text-neutral-200 hover:border-amber-200/60 hover:text-amber-100`}
        >
          <FaApple className="h-3.5 w-3.5" /> App Store
        </a>
      )}
    </div>
  );
}

/* ───────────────────────── Card ───────────────────────── */

function ProjectCard({ project, column }: { project: Project; column: number }) {
  const large = Boolean(project.featured);

  const onMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      exit={{ opacity: 0, scale: 0.97 }}
      // stagger left → right across each grid row
      transition={{ duration: 0.8, delay: column * 0.09, ease: EASE }}
      onMouseMove={onMove}
      className={`project-card group relative flex flex-col overflow-hidden rounded-3xl p-4 transition-[border-color,transform] duration-500 hover:-translate-y-1.5 hover:border-amber-200/30 md:p-5 ${
        large ? "md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-10 lg:p-8" : ""
      }`}
    >
      {/* cursor spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(420px_circle_at_var(--mx)_var(--my),rgba(212,175,55,0.12),transparent_60%)]" />
      {/* top hairline */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

      <div className={`relative ${large ? "lg:w-[60%] lg:shrink-0" : ""}`}>
        {project.image ? (
          <BrowserMedia project={project} large={large} />
        ) : (
          <AppMedia project={project} large={large} />
        )}
        {project.image && project.icon && (
          <Image
            src={project.icon}
            alt=""
            width={56}
            height={56}
            className="absolute -bottom-5 left-4 h-12 w-12 rounded-2xl bg-white shadow-xl ring-2 ring-[#0b0c14] md:h-14 md:w-14"
          />
        )}
      </div>

      <div
        className={`relative flex flex-1 flex-col ${
          project.image && project.icon ? "pt-9" : "pt-5"
        } ${large ? "lg:pt-0" : ""}`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/70">
            {project.category === "client" ? project.client : "Own Product"}
          </span>
          {large && (
            <span className="rounded-full border border-amber-200/30 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-amber-200/80">
              Featured
            </span>
          )}
        </div>

        <h3
          className={`mt-2 font-[family-name:var(--font-montaga)] text-white ${
            large ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {project.name}
        </h3>
        <p className="mt-1.5 text-sm text-neutral-300">{project.tagline}</p>
        <p
          className={`mt-3 text-sm leading-relaxed text-neutral-500 ${
            large ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[11px] text-neutral-400"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          <LinkButtons project={project} />
          <span className="text-[11px] text-neutral-500">{project.role}</span>
        </div>
      </div>
    </motion.article>
  );
}

/* ───────────────────────── Section ───────────────────────── */

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(
    () =>
      Object.fromEntries(
        FILTERS.map((f) => [f.id, projects.filter((p) => matches(p, f.id)).length])
      ) as Record<Filter, number>,
    []
  );
  const visible = projects.filter((p) => matches(p, filter));

  // Column each card lands in (featured cards take a full row), for the reveal stagger.
  const columns: number[] = [];
  let slot = 0;
  for (const p of visible) {
    if (p.featured) {
      columns.push(0);
      slot = 0;
    } else {
      columns.push(slot % 3);
      slot++;
    }
  }

  const stats = [
    { value: projects.length, label: "Projects shipped" },
    { value: counts.client, label: "Client platforms" },
    { value: counts.mobile, label: "Live store apps" },
    { value: projects.filter((p) => p.links.web).length, label: "Live websites" },
  ];

  return (
    <div className="relative py-16">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.5em] text-amber-200/70">
            Chapter III
          </p>
          <h2 className="gold-text mt-3 font-[family-name:var(--font-montaga)] text-4xl md:text-6xl">
            Selected Work
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
            Platforms shipped for brands and startups, alongside products I
            designed, built and launched on the web, Google Play and the App Store.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mb-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#07080f]/90 px-4 py-5 text-center">
              <div className="gold-text font-[family-name:var(--font-montaga)] text-3xl md:text-4xl">
                {s.value}+
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Filters */}
      <div className="mb-10 flex justify-center">
        <div className="glass flex max-w-full gap-1 overflow-x-auto rounded-full p-1 [scrollbar-width:none]">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={active}
                className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 md:px-5 md:text-sm ${
                  active ? "text-[#1a1405]" : "text-neutral-400 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f5e6a8] to-[#d4af37]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {f.label}
                  <span className={`ml-1.5 text-[10px] ${active ? "opacity-70" : "opacity-50"}`}>
                    {counts[f.id]}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-flow-dense grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} column={columns[i]} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
