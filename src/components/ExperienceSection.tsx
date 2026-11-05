"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import { experiences, formatPeriod } from "@/data/experiences";
import { Split } from "./motion/Split";

const year = (iso: string | null) => (iso ? new Date(iso).getFullYear() : "Now");

export default function ExperienceSection() {
  const [open, setOpen] = useState<string | null>(experiences[0]?.id ?? null);

  return (
    <section id="experience" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <div className="mb-14 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted" data-reveal>[ Career ]</p>
          <Split className="display mt-5 text-[clamp(3rem,7vw,7rem)]" text={"*Experience*"} />
        </div>
        <p className="max-w-md text-lg leading-relaxed text-muted lg:justify-self-end" data-reveal>
          Full-time roles with product companies in India and the United States — remote, and always shipping
          to real users.
        </p>
      </div>

      <div className="border-t border-ink">
        {experiences.map((exp) => {
          const active = open === exp.id;
          const [company, type] = exp.company.split(" · ");
          return (
            <div key={exp.id} className="border-b border-ink/15" data-reveal>
              <button
                type="button"
                onClick={() => setOpen(active ? null : exp.id)}
                aria-expanded={active}
                className="group grid w-full grid-cols-[1fr_auto] items-center gap-4 py-7 text-left lg:grid-cols-[11rem_1.4fr_1fr_auto] lg:gap-8 lg:py-9"
              >
                <span className="order-2 text-sm font-semibold text-muted lg:order-none">
                  {year(exp.start)} — {year(exp.end)}
                </span>{" "}
                <span className="col-span-2 lg:col-span-1">
                  <span className="block font-display text-2xl font-bold uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {company}
                  </span>
                  {" "}
                  <span className="mt-1 block text-[15px] text-ink-soft">{exp.title}</span>
                </span>{" "}
                <span className="hidden text-sm text-muted lg:block">
                  {exp.location}
                  <br />
                  {type}
                </span>
                <span
                  className={`order-3 grid h-11 w-11 place-items-center justify-self-end rounded-full border border-ink transition-all duration-500 lg:order-none ${
                    active ? "rotate-180 bg-ink text-lime" : exp.end === null ? "bg-lime" : "group-hover:bg-lime"
                  }`}
                >
                  <FiArrowDownRight className="h-5 w-5" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 pb-10 lg:grid-cols-[11rem_1fr] lg:gap-8">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        <span suppressHydrationWarning>{formatPeriod(exp)}</span>
                      </span>
                      <ul className="grid gap-3 md:grid-cols-2 md:gap-x-10">
                        {exp.description.map((d) => (
                          <li key={d} className="flex gap-3 leading-relaxed text-ink-soft">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
