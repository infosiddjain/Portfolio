import React from "react";
import { skillGroups } from "@/data/skills";
import { Split } from "./motion/Split";
import { TechSphere } from "./three/TechSphere";

export function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-line bg-paper-2 [--outline-fill:#f4f4f0]">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted" data-reveal>[ Tech stack ]</p>
          <Split className="display mt-5 text-[clamp(2.8rem,6vw,6rem)]" text={"The *engine*\nbehind it"} />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted" data-reveal>
            A connected stack I use every day — chosen for speed, reliability and products that are easy to grow.
            Move your mouse over the sphere.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line" data-reveal>
            {skillGroups.map((g) => (
              <div key={g.title} className="bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{g.title}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-ink">{g.skills.map((s) => s.name).join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[640px]">
          <TechSphere />
        </div>
      </div>
    </section>
  );
}
