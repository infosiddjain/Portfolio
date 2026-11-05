import React from "react";
import Image from "next/image";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { CONTACT } from "@/data/contact";
import { educations } from "@/data/educations";
import { Split } from "./motion/Split";
import { YearsOfExperience } from "./YearsOfExperience";

const reasons = [
  { title: "Direct line", text: "You talk to the developer — not an account manager." },
  { title: "Product mindset", text: "I ship my own apps, so I think about users, store rules and growth." },
  { title: "Weekly demos", text: "Working builds every week and replies within hours in IST." },
  { title: "Full ownership", text: "Clean code, documented, and fully handed over to you." },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper-2 py-24 [--outline-fill:#f4f4f0] md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted" data-reveal>[ About me ]</p>
        <Split className="display mt-5 text-[clamp(2.6rem,6.5vw,6.5rem)]" text={"A developer\nwho _ships._"} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative">
            <div data-clip className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <div data-parallax="0.08" className="absolute inset-[-8%]">
                <Image src="/logo.jpg" alt="Siddharth Jain" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-ink px-5 py-4 text-white shadow-2xl md:-right-6">
              <p className="display text-4xl text-lime">
                <YearsOfExperience />
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">Years shipping</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">[ Who I am ]</p>
            <p className="mt-4 text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl" data-reveal>
              I&apos;m Siddharth Jain, a Software Engineer building web and mobile products with React Native,
              Next.js, Node.js and MongoDB — for teams in India and the US.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted" data-reveal>
              Alongside client work I build and publish my own apps and games. That means I understand the whole
              journey: design in Figma, development, Play Store review, launch and every update after.
            </p>

            <div className="mt-10 border-t border-ink">
              {reasons.map((r, i) => (
                <div key={r.title} className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/15 py-5 md:grid-cols-[4rem_14rem_1fr]" data-reveal>
                  <span className="text-sm font-semibold text-muted">[{String(i + 1).padStart(2, "0")}]</span>
                  <span className="font-display text-lg font-bold uppercase tracking-tight">{r.title}</span>
                  <span className="col-span-2 text-muted md:col-span-1">{r.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">[ Education ]</p>
                <ul className="mt-3 space-y-1.5 text-[15px]">
                  {educations.map((e) => (
                    <li key={e.id} className="flex flex-wrap gap-x-3">
                      <span className="font-semibold text-ink">{e.degree}</span>
                      <span className="text-muted">{e.institution} · {e.period}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={CONTACT.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 self-start rounded-full bg-ink py-2 pl-6 pr-2 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-lime hover:text-ink"
              >
                <FiDownload className="h-4 w-4" /> Resume
                <span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-ink transition-transform group-hover:rotate-45">
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
