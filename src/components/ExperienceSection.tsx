"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiences, formatPeriod } from "@/data/experiences";

const ExperienceSection: React.FC = () => {
  return (
    <div className="py-16">
      <div className="mb-16 text-center">
        <p className="text-[11px] uppercase tracking-[0.5em] text-amber-200/70">
          Chapter II
        </p>
        <h2 className="gold-text mt-3 font-[family-name:var(--font-montaga)] text-4xl md:text-6xl">
          Experience
        </h2>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-amber-300/60 via-violet-500/40 to-transparent md:left-1/2" />
        {experiences.map((exp, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: left ? -60 : 60, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`relative mb-12 pl-10 md:w-1/2 md:pl-0 ${
                left ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <span
                className={`absolute top-6 h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_20px_4px_rgba(212,175,55,0.6)] left-[7px] ${
                  left ? "md:-right-[6px] md:left-auto" : "md:-left-[6px]"
                }`}
              />
              <div className="glass rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
                <span className="text-xs uppercase tracking-widest text-amber-200/80">
                  <span suppressHydrationWarning>{formatPeriod(exp)}</span>
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-montaga)] text-2xl text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-neutral-300">
                  {exp.company}<br /><span className="text-neutral-500">{exp.location}</span>
                </p>
                <ul className={`mt-4 space-y-2 text-sm text-neutral-400 ${left ? "md:text-right" : ""}`}>
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
