import React from "react";
import { experiences, totalYears } from "@/data/experiences";
import { playStoreApps } from "@/data/projects";
import { Split } from "./motion/Split";

export function StatsSection() {
  const stats = [
    { n: totalYears(), suffix: "+", label: "Years of experience", note: "Since Sep 2021" },
    { n: playStoreApps.length, suffix: "", label: "Apps live on Google Play", note: "Plus Sahej Health on the App Store", href: "https://apps.apple.com/in/app/sahej-health-app/id6469026236" },
    { n: experiences.length, suffix: "", label: "Product companies", note: "Full-time, India & United States" },
    { n: 40, suffix: "+", label: "Organisations on GameRun", note: "Client platform I helped build" },
    { n: 2, suffix: "", label: "US client products", note: "Sports-tech & healthcare" },
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted" data-reveal>[ By the numbers ]</p>
          <Split
            className="display mt-5 text-[clamp(2.4rem,4.6vw,4.4rem)]"
            text={"One developer.\n*Full-stack* output."}
          />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted" data-reveal>
            I work like a small studio: product thinking, design, mobile, web, backend and store publishing —
            without the agency overhead.
          </p>
        </div>
        <div className="grid grid-cols-2 border-l border-t border-line md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              className={`group relative overflow-hidden border-b border-r border-line p-6 md:p-8 ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-lime transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <div className="relative">
                <p className="display text-[clamp(3rem,6vw,5.5rem)]">
                  <span data-count={s.n}>{s.n}</span>
                  {s.suffix}
                </p>
                <p className="mt-3 font-semibold uppercase tracking-wide text-ink">{s.label}</p>
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block border-b border-ink text-sm font-medium text-ink">
                    {s.note} ↗
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-muted">{s.note}</p>
                )}
              </div>
            </div>
          ))}
          <div data-reveal className="flex items-end border-b border-r border-line bg-ink p-6 text-white md:p-8">
            <p className="text-sm leading-relaxed text-white/70">
              <span className="mb-2 block font-display text-2xl font-bold text-lime">4.8★</span>
              Dil Ki Bhakti rating on Google Play
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
