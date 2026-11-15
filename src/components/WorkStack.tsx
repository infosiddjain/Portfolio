"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { FEATURED_IDS, projects, type Project } from "@/data/projects";
import { Split } from "./motion/Split";
import { Tilt } from "./motion/Tilt";
import { AppScreen, Phone } from "./three/Phone";

const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)!).filter(Boolean);

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");
const num = (i: number) => String(i + 1).padStart(2, "0");

function Links({ p }: { p: Project }) {
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  const ghost =
    "inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-white";
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href={`/work/${p.id}`}
        className="group inline-flex items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-lime hover:text-ink"
      >
        Read case study
        <span className="grid h-6 w-6 place-items-center rounded-full bg-lime text-ink transition-transform group-hover:rotate-45">
          <FiArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </Link>
      {p.links.web && (
        <a href={p.links.web} {...ext} className={ghost}>
          Live site ↗
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
    </div>
  );
}

/** The coloured "stage": brand-colour backdrop, giant index number, browser + phone. */
function Stage({ p, index }: { p: Project; index: number }) {
  const accent = p.accent ?? "#0a0a0a";
  return (
    <Link
      href={`/work/${p.id}`}
      data-cursor="Open"
      aria-label={`${p.name} case study`}
      className="group relative block overflow-hidden rounded-[2rem] p-5 sm:p-8 md:p-10"
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${accent}, ${accent}cc 45%, #0a0a0a 120%)`,
      }}
    >
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" />
      <span
        aria-hidden
        className="display pointer-events-none absolute -bottom-[0.18em] -left-[0.04em] select-none text-[clamp(8rem,22vw,20rem)] leading-none text-white/15"
      >
        {num(index)}
      </span>

      <div className="relative flex min-h-[260px] items-center sm:min-h-[380px] lg:min-h-[460px]">
        {p.image ? (
          <Tilt
            max={6}
            className="relative w-full overflow-hidden rounded-xl bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:w-[88%]"
          >
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
                sizes="(min-width: 1024px) 720px, 100vw"
                className="object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
            </div>
          </Tilt>
        ) : (
          // App-only project: big icon + name instead of a website shot.
          <div className="flex w-full flex-col items-start gap-5 sm:w-[60%]">
            {p.icon && (
              <Image
                src={p.icon}
                alt=""
                width={112}
                height={112}
                className="h-20 w-20 rounded-[24%] shadow-2xl ring-4 ring-white/20 sm:h-28 sm:w-28"
              />
            )}
            <p className="display text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.9] text-white">{p.name}</p>
            <p className="max-w-xs text-sm text-white/75">{p.tagline}</p>
          </div>
        )}

        {p.icon && (
          <div
            className={`absolute bottom-0 right-0 hidden max-w-[210px] sm:block ${p.image ? "w-[30%]" : "w-[34%] max-w-[230px]"}`}
          >
            <div
              className="transition-transform duration-700 group-hover:-translate-y-2"
              style={{ transform: "rotateY(-14deg) rotateZ(4deg)" }}
            >
              <Phone>
                <AppScreen app={p} compact />
              </Phone>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

function Info({ p, index }: { p: Project; index: number }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        <span className="text-ink">({num(index)})</span>
        <span className="h-px w-8 bg-ink/20" />
        <span>{p.category === "client" ? `Client — ${p.client}` : "Own product"}</span>
      </div>

      <h3 className="display mt-5 text-[clamp(2.6rem,5.4vw,5.4rem)] leading-[0.9]">
        <Link href={`/work/${p.id}`} className="transition-colors hover:text-electric">
          {p.name}
        </Link>
      </h3>
      <p className="mt-5 text-xl font-medium leading-snug text-ink md:text-2xl">{p.tagline}</p>
      <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">{p.description}</p>

      {p.results && (
        <dl className="mt-8 grid grid-cols-2 gap-6">
          {p.results.map((r) => (
            <div key={r.label} className="border-t-2 border-lime pt-4">
              <dt className="font-display text-2xl font-bold tracking-tight md:text-3xl">{r.value}</dt>
              <dd className="mt-1 text-sm leading-snug text-ink-soft">{r.label}</dd>
            </div>
          ))}
        </dl>
      )}

      <p className="mt-8 text-sm text-ink-soft">
        <span className="font-semibold uppercase tracking-[0.14em] text-ink">Role</span> — {p.role}
        <span className="mx-2 text-ink/25">/</span>
        {p.tools.join(" · ")}
      </p>

      <div className="mt-8">
        <Links p={p} />
      </div>
    </div>
  );
}

export function WorkStack() {
  return (
    <section id="work" className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
      <div className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted" data-reveal>
            [ Selected work — {featured.length} case studies ]
          </p>
          <Split className="display mt-5 text-[clamp(3rem,8vw,8rem)]" text={"Selected\n*work*"} />
        </div>
        <p className="max-w-md text-lg leading-relaxed text-muted lg:justify-self-end" data-reveal>
          Client platforms first — AI sports analytics for US coaches, a diabetes-care app and a
          lead-generating business site — then my own products. Every one is live.
        </p>
      </div>

      <div className="space-y-20 md:space-y-28 lg:space-y-36">
        {featured.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={p.id}
              data-reveal
              className="grid items-center gap-8 md:gap-10 lg:grid-cols-12 lg:gap-14"
            >
              <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                <Stage p={p} index={i} />
              </div>
              <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                <Info p={p} index={i} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
