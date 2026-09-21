"use client";
import { motion } from "framer-motion";
import React from "react";
import { socialLinks } from "@/data/socialLinks";
import { CodeBlock } from "./CodeBlock";

export function HeroSection() {
  return (
    <section className="relative items-center box-border flex flex-col justify-between py-4 md:py-12">
      <div className="items-start box-border gap-x-[normal] grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:gap-x-12 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-12">
        <div className="items-start box-border flex flex-col justify-center order-2 pt-2 pb-20 px-2 md:order-1 md:py-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="mb-5 text-[11px] uppercase tracking-[0.5em] text-amber-200/70"
          >
            Software Engineer · Full-stack · Mobile
          </motion.p>
          <h1 className="font-[family-name:var(--font-montaga)] text-4xl leading-[1.15] md:text-[64px]">
            {[
              ["Crafting", ""],
              ["digital", ""],
              ["experiences", "gold-text"],
              ["that", ""],
              ["feel", ""],
              ["alive.", "gold-text"],
            ].map(([w, c], i) => (
              <span key={i} className="mr-3 inline-block overflow-hidden align-bottom">
                <motion.span
                  className={`inline-block ${c}`}
                  initial={{ y: "110%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: 2.7 + i * 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 1 }}
            className="mt-6 max-w-md text-sm text-neutral-400"
          >
            Hi, I&apos;m <span className="text-white">Siddharth Jain</span> — building fast, elegant web and mobile products.
          </motion.p>
          <div className="items-center box-border gap-x-5 flex gap-y-5 my-12">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-pink-500 box-border block"
              >
                <img
                  src={link.iconSrc}
                  alt="Icon"
                  className="box-border h-[30px] w-[30px]"
                />
              </a>
            ))}
          </div>
          <div className="items-center box-border gap-x-3 flex gap-y-3">
            <a
              href="#contact"
              className="bg-[linear-gradient(to_right,rgb(124,58,237),rgb(236,72,153))] box-border block p-px rounded-full"
            >
              <button className="text-xs font-medium items-center bg-gray-900 gap-x-1 flex tracking-[0.6px] leading-4 gap-y-1 text-center uppercase p-3 rounded-full md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5 md:px-8 md:py-4 cursor-pointer">
                <span className="text-xs font-medium box-border block tracking-[0.6px] leading-4 md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5">
                  Contact me
                </span>
                <img
                  src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-6.svg"
                  alt="Icon"
                  className="text-xs font-medium box-border h-4 tracking-[0.6px] leading-4 w-4 md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5"
                />
              </button>
            </a>
            <a
              role="button"
              href="https://drive.google.com/file/d/1slzP4UZvHQEXvyMbcvq07TzgCDQEr7qf/preview"
              className="text-xs font-medium items-center bg-[linear-gradient(to_right,rgb(236,72,153),rgb(124,58,237))] box-border gap-x-1 flex tracking-[0.6px] leading-4 gap-y-1 text-center uppercase p-3 rounded-full md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5 md:px-8 md:py-4"
            >
              <span className="text-xs font-medium box-border block tracking-[0.6px] leading-4 md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5">
                Get Resume
              </span>
              <img
                src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-7.svg"
                alt="Icon"
                className="text-xs font-medium box-border h-4 tracking-[0.6px] leading-4 w-4 md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5"
              />
            </a>
          </div>
        </div>
        <div className="relative glass box-border order-1 border border-blue-950/60 rounded-lg border-solid md:order-2">
          <div className="box-border flex">
            <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0),rgb(236,72,153),rgb(124,58,237))] box-border h-px w-full"></div>
            <div className="bg-[linear-gradient(to_right,rgb(124,58,237),rgba(0,0,0,0))] box-border h-px w-full"></div>
          </div>
          <div className="box-border px-4 py-5 md:px-8">
            <div className="box-border flex">
              <div className="bg-red-400 box-border h-3 w-3 rounded-full"></div>
              <div className="bg-orange-400 box-border h-3 w-3 ml-2 rounded-full"></div>
              <div className="bg-green-200 box-border h-3 w-3 ml-2 rounded-full"></div>
            </div>
          </div>
          <CodeBlock />
        </div>
      </div>
    </section>
  );
}
