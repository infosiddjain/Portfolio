"use client";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FEATURED_IDS,
  projects as allProjects,
  type Project,
} from "@/data/projects";
import { Split } from "./motion/Split";

// The archive skips the case studies already shown in "Selected work",
// except these, which belong in the website catalog too.
const ALSO_IN_ARCHIVE = ["gamerun"];
const projects = allProjects.filter(
  (p) =>
    ALSO_IN_ARCHIVE.includes(p.id) ||
    !(FEATURED_IDS as readonly string[]).includes(p.id),
);

const STATUS_LABEL = { "coming-soon": "Coming soon", apk: "Beta" } as const;
/** Rows shown at first, and how many more each "Show more" click adds. */
const PAGE = 9;

// Opens with a varied mix instead of a run of similar products.
const PINNED = [
  "gamerun",
  "career-canvas",
  "learn-refill",
  "hot-job",
  "signature-studio",
  "timeatlas",
  "cpukit",
  "ludo-masti",
  "divansh-transport",
  "calculator-zip",
  "puzzle-buzz",
  "math-concepts",
  "yt-pulse",
];
const rank = (p: Project) => {
  const i = PINNED.indexOf(p.id);
  return i === -1 ? PINNED.length : i;
};
const ordered = [...projects].sort((a, b) => rank(a) - rank(b));

const hrefOf = (p: Project) =>
  p.links.web ?? p.links.playStore ?? p.links.appStore ?? "#";
const domain = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};
const num = (i: number) => String(i + 1).padStart(2, "0");
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Shot({ p, sizes }: { p: Project; sizes: string }) {
  return p.image ? (
    <Image
      src={p.image}
      alt={`${p.name} website`}
      fill
      sizes={sizes}
      className="object-cover object-top"
    />
  ) : (
    <div
      className="absolute inset-0 grid place-items-center"
      style={{ background: `linear-gradient(140deg, ${p.accent}, #0a0a0a)` }}
    >
      <span className="display text-3xl text-white/80">{p.name}</span>
    </div>
  );
}

/** Desktop: the big "monitor" that previews whichever row is active. */
function Preview({ p, index }: { p: Project; index: number }) {
  const status = p.status && p.status !== "live" ? STATUS_LABEL[p.status] : null;
  return (
    <div className="flex flex-col gap-7">
      <a
        href={hrefOf(p)}
        {...ext}
        data-cursor="Visit"
        aria-label={`Open ${p.name}`}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)]"
      >
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.06] px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={p.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="min-w-0 flex-1 truncate rounded-full bg-white/10 px-3 py-1 text-center text-[11px] text-white/70"
            >
              {domain(hrefOf(p))}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          <AnimatePresence initial={false}>
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Shot p={p} sizes="(min-width: 1024px) 720px, 100vw" />
            </motion.div>
          </AnimatePresence>
          <span className="absolute bottom-4 right-4 grid h-14 w-14 place-items-center rounded-full bg-lime text-ink transition-transform duration-500 group-hover:rotate-45">
            <FiArrowUpRight className="h-6 w-6" />
          </span>
          {status && (
            <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-lime">
              {status}
            </span>
          )}
        </div>
      </a>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid gap-5"
        >
          <div className="flex items-start gap-4">
            {p.icon && (
              <Image
                src={p.icon}
                alt=""
                width={52}
                height={52}
                className="h-13 w-13 shrink-0 rounded-2xl ring-1 ring-white/10"
              />
            )}
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                [{num(index)}] — {p.role}
              </p>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-white/70">
                {p.description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {p.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75"
              >
                {t}
              </span>
            ))}
            {p.links.playStore && (
              <a
                href={p.links.playStore}
                {...ext}
                className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
              >
                <FaGooglePlay className="h-3 w-3" /> Google Play
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Row({
  p,
  index,
  active,
  onActivate,
}: {
  p: Project;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const href = hrefOf(p);
  return (
    <li className="border-b border-white/10">
      <a
        href={href}
        {...ext}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        className="group relative flex items-center gap-4 py-5 md:gap-6 lg:py-6"
      >
        {/* sliding highlight */}
        <span
          aria-hidden
          className={`absolute inset-y-0 left-0 w-[3px] origin-top bg-lime transition-transform duration-500 ${
            active ? "scale-y-100" : "scale-y-0"
          }`}
        />
        <span
          className={`w-9 shrink-0 pl-3 text-xs font-semibold tabular-nums transition-colors md:w-12 ${
            active ? "text-lime" : "text-white/40"
          }`}
        >
          {num(index)}
        </span>

        {/* thumbnail — phones & tablets only; desktop uses the big preview */}
        <span className="relative aspect-[16/10] w-24 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10 sm:w-32 lg:hidden">
          <Shot p={p} sizes="128px" />
        </span>

        <span className="min-w-0 flex-1">
          <span
            className={`display block break-words text-[clamp(1.35rem,3.2vw,2.6rem)] leading-[0.95] transition-all duration-500 ${
              active ? "text-white lg:translate-x-2" : "text-white/55 group-hover:text-white"
            }`}
          >
            {p.name}
          </span>
          <span className="mt-1.5 block truncate text-xs text-white/45 md:text-sm">
            {domain(href)}
          </span>
        </span>

        <span
          className={`hidden h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500 sm:grid md:h-11 md:w-11 ${
            active
              ? "rotate-45 border-lime bg-lime text-ink"
              : "border-white/20 text-white/70"
          }`}
        >
          <FiArrowUpRight className="h-4 w-4" />
        </span>
      </a>
    </li>
  );
}

export function ProjectsSection() {
  const [count, setCount] = useState(PAGE);
  const [active, setActive] = useState(0);
  const section = useRef<HTMLElement>(null);
  const allShown = count >= ordered.length;
  const shown = ordered.slice(0, count);

  // List height changes shift every scroll trigger below it.
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 750);
    return () => clearTimeout(id);
  }, [count]);

  const toggle = () => {
    if (allShown) {
      setCount(PAGE);
      setActive((a) => (a < PAGE ? a : 0));
      section.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setCount((c) => Math.min(c + PAGE, ordered.length));
    }
  };

  return (
    <section
      ref={section}
      id="products"
      className="relative mx-auto max-w-[1440px] px-3 py-16 sm:px-5 md:px-10 md:py-24"
    >
      <div className="relative overflow-clip rounded-[2rem] bg-ink px-5 py-14 text-white sm:px-8 md:px-12 md:py-20 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full blur-3xl transition-colors duration-700"
          style={{ background: `${shown[active]?.accent ?? "#c8f542"}33` }}
        />

        <div className="relative mb-12 grid gap-8 md:mb-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
              data-reveal
            >
              [ Live index — {ordered.length} more products ]
            </p>
            {/* Invert the outlined word for the dark panel. */}
            <div
              style={
                {
                  "--outline-fill": "#0a0a0a",
                  "--color-ink": "#ffffff",
                } as React.CSSProperties
              }
            >
              <Split
                className="display mt-5 text-[clamp(3rem,7vw,7rem)]"
                text={"Also\n*shipped*"}
              />
            </div>
          </div>
          <p
            className="max-w-md text-lg leading-relaxed text-white/65 lg:justify-self-end"
            data-reveal
          >
            Apps, games, web tools and websites I&apos;ve designed, built and
            launched. Hover a name to preview it — click to open it live.
          </p>
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-28">
              {shown[active] && <Preview p={shown[active]} index={active} />}
            </div>
          </div>

          <div className="min-w-0">
            <ul className="border-t border-white/10">
              {shown.map((p, i) => (
                <Row
                  key={p.id}
                  p={p}
                  index={i}
                  active={i === active}
                  onActivate={() => setActive(i)}
                />
              ))}
            </ul>

            {ordered.length > PAGE && (
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  Showing {Math.min(count, ordered.length)} of {ordered.length}
                </p>
                <button
                  type="button"
                  onClick={toggle}
                  className="group inline-flex items-center gap-3 rounded-full bg-lime py-2 pl-7 pr-2 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-white"
                >
                  {allShown ? "Show less" : "Show more"}
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-lime transition-transform group-hover:rotate-90">
                    {allShown ? "−" : "+"}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
