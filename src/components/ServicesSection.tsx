"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Split } from "./motion/Split";

// `from`: starting price shown as a chip, e.g. "₹2L" — leave "" to hide it.
const services: {
  title: string;
  tag: string;
  timeline: string;
  from?: string;
  also?: boolean;
  text: string;
  points: string[];
}[] = [
  {
    title: "Mobile Apps",
    tag: "React Native · Android & iOS",
    timeline: "MVP in 6–8 weeks",
    from: "₹2L",
    text: "Cross-platform apps designed, built and published to Google Play and the App Store — the same way I ship my own 10 live apps.",
    points: ["Store listing, review & policy compliance", "Push notifications, offline mode, deep links", "Payments, auth, analytics & crash reporting"],
  },
  {
    title: "Web Apps & SaaS",
    tag: "Next.js · Node.js · MongoDB",
    timeline: "3–5 weeks",
    from: "₹80k",
    text: "Dashboards, admin panels, portals and SaaS products — fast, secure and built to scale with your users.",
    points: ["Role-based dashboards & admin panels", "REST APIs & third-party integrations", "Auth, billing & multi-tenant setups"],
  },
  {
    also: true,
    title: "Business Websites",
    tag: "SEO · Speed · Conversion",
    timeline: "1–2 weeks",
    text: "Company websites and landing pages that load instantly, rank on Google and turn visitors into enquiries.",
    points: ["Lead forms & WhatsApp enquiries", "Local SEO & Google indexing", "Mobile-first, 95+ Lighthouse scores"],
  },
  {
    also: true,
    title: "Games & Interactive",
    tag: "Skia · Reanimated · WebSockets",
    timeline: "Scoped per project",
    text: "Casual games, real-time multiplayer and playful interactive experiences — like Fighter Aura, Snakepad and Ludo Masti.",
    points: ["60 FPS animation engines", "Real-time rooms & matchmaking", "Offline play & progression systems"],
  },
  {
    title: "Care & Retainer",
    tag: "Ongoing partnership",
    timeline: "Monthly",
    from: "₹25k/month",
    text: "New features, bug fixes, store and SDK updates and performance work for your existing app or website.",
    points: ["Priority support in IST", "Store policy & dependency updates", "Monthly progress report"],
  },
];

// Three core offers up front; the rest stay available but don't dilute the pitch.
const main = services.filter((s) => !s.also);
const extra = services.filter((s) => s.also);

export function ServicesSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <div className="mb-14 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted" data-reveal>[ Services ]</p>
          <Split className="display mt-5 text-[clamp(3rem,7vw,7rem)]" text={"What I *build*\nfor you"} />
        </div>
        <p className="max-w-md text-lg leading-relaxed text-muted lg:justify-self-end" data-reveal>
          One developer from design to launch. You talk directly to the person writing your code — no agency
          layers, no hand-offs.
        </p>
      </div>

      <div className="border-t border-ink">
        {main.map((s, i) => {
          const active = open === i;
          return (
            <div key={s.title} className="group border-b border-ink/15" data-reveal>
              <button
                type="button"
                onClick={() => setOpen(active ? -1 : i)}
                aria-expanded={active}
                className="relative flex w-full items-center gap-4 overflow-hidden py-7 text-left md:gap-10 md:py-9"
              >
                <span className={`absolute inset-0 origin-bottom bg-lime transition-transform duration-500 ease-out ${active ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}`} />
                <span className="relative w-14 shrink-0 text-sm font-semibold text-muted md:w-20">( {String(i + 1).padStart(2, "0")} )</span>
                <span className="display relative flex-1 text-[clamp(1.9rem,4.6vw,4.4rem)] transition-transform duration-500 group-hover:translate-x-3">
                  {s.title}
                </span>
                <span className="relative hidden text-sm font-medium uppercase tracking-wider text-ink-soft lg:block">{s.tag}</span>
                <span
                  className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink transition-all duration-500 md:h-14 md:w-14 ${
                    active ? "rotate-90 bg-ink text-lime" : "group-hover:bg-ink group-hover:text-lime"
                  }`}
                >
                  <FiArrowUpRight className="h-5 w-5" />
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
                    <div className="grid gap-8 pb-10 md:grid-cols-2 lg:grid-cols-[5rem_1fr_1fr_auto] lg:gap-10">
                      <span className="hidden lg:block" />
                      <p className="max-w-lg text-lg leading-relaxed text-ink-soft">{s.text}</p>
                      <ul className="space-y-3">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-3 text-[15px] text-ink">
                            <FiCheck className="mt-1 h-4 w-4 shrink-0 text-success" /> {p}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col items-start gap-4 md:col-span-2 md:flex-row md:items-center lg:col-span-1 lg:flex-col lg:items-end">
                        <span className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider text-lime">{s.timeline}</span>
                        {s.from && (
                          <span className="rounded-full bg-lime px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink">From {s.from}</span>
                        )}
                        <a href="#contact" className="border-b border-ink text-sm font-semibold uppercase tracking-wider hover:bg-lime">
                          Get started ↗
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-[auto_1fr] md:items-center md:gap-10" data-reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">[ Also available ]</p>
        <div className="flex flex-wrap gap-3">
          {extra.map((s) => (
            <a
              key={s.title}
              href="#contact"
              title={s.text}
              className="group inline-flex items-center gap-3 rounded-full border border-ink/15 py-2 pl-5 pr-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:border-ink hover:bg-lime"
            >
              {s.title}
              <span className="text-xs font-medium normal-case tracking-normal text-muted group-hover:text-ink">{s.timeline}</span>
              <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
