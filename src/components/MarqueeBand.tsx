import React from "react";
import { MarqueeVelocity } from "./motion/MarqueeVelocity";

const ITEMS = ["Mobile Apps", "Web Platforms", "SaaS Tools", "Business Websites", "Games", "Dashboards", "UI / UX"];

/** Two counter-scrolling bands of huge type — one solid, one outlined, slightly rotated. */
export function MarqueeBand() {
  const row = (outline: boolean) =>
    [...ITEMS, ...ITEMS].map((t, i) => (
      <span key={i} className="flex items-center">
        <span className={`display px-6 text-[clamp(2.6rem,6vw,5.5rem)] ${outline ? "text-outline" : ""}`}>{t}</span>
        <span className={`text-[clamp(1.6rem,3vw,2.8rem)] ${outline ? "text-ink/30" : "text-lime"}`}>✦</span>
      </span>
    ));

  return (
    <section aria-hidden className="relative overflow-hidden py-10 md:py-16">
      <MarqueeVelocity />
      <div className="-rotate-2 bg-ink py-4 text-white md:py-6">
        <div className="marquee-track">{row(false)}</div>
      </div>
      <div className="mt-2 rotate-1 border-y border-line bg-paper py-3 md:py-5">
        <div className="marquee-track reverse">{row(true)}</div>
      </div>
    </section>
  );
}
