import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Split } from "./motion/Split";

/** Client & manager quotes. Renders nothing until src/data/testimonials.ts has entries. */
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted" data-reveal>[ What clients say ]</p>
      <Split className="display mt-5 text-[clamp(3rem,7vw,7rem)]" text={"Kind *words*"} />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} data-reveal className="flex flex-col rounded-[1.6rem] border border-line bg-paper-2 p-7 md:p-8">
            <span aria-hidden className="font-display text-6xl leading-none text-lime [-webkit-text-stroke:1.5px_#0a0a0a]">“</span>
            <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-ink">{t.quote}</blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
              {t.photo ? (
                <Image src={t.photo} alt={t.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
              ) : (
                <span className="grid h-12 w-12 place-items-center rounded-full bg-ink font-display font-bold text-lime">
                  {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
              )}
              <span>
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="block text-sm text-muted">
                  {t.role}, {t.company}
                  {t.project ? ` · ${t.project}` : ""}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
