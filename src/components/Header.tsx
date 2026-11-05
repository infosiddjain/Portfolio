"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
import { CONTACT } from "@/data/contact";
import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/data/socialLinks";

function useIstClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);
  const time = useIstClock();
  const pathname = usePathname();
  const base = pathname === "/" ? "" : "/";
  const href = (h: string) => `${base}${h.replace(/^\//, "")}`;

  // Hide on scroll down, show on scroll up.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo(0, 0);
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > last && y > 400);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = (window as Window & { __lenis?: { stop(): void; start(): void } }).__lenis;
    if (!overlay.current) return;
    if (open) {
      lenis?.stop();
      gsap.set(overlay.current, { display: "flex" });
      gsap.fromTo(overlay.current, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "expo.inOut" });
      gsap.fromTo(".menu-item", { yPercent: 110 }, { yPercent: 0, duration: 0.8, stagger: 0.05, delay: 0.25, ease: "power4.out" });
    } else {
      lenis?.start();
      gsap.to(overlay.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.6,
        ease: "expo.inOut",
        onComplete: () => {
          if (overlay.current) gsap.set(overlay.current, { display: "none" });
        },
      });
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled && !open ? "bg-white/80 backdrop-blur-xl" : ""}`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10">
          <a href={href("/#top")} className="flex items-center gap-3" aria-label="Siddharth Jain — home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-sm font-bold text-lime">
              SJ
            </span>
            <span className="hidden font-display text-lg font-bold uppercase tracking-tight text-ink sm:block">
              Siddharth Jain<sup className="ml-0.5 text-[10px]">®</sup>
            </span>
          </a>

          <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-muted xl:block">
            Hapur, India / <span suppressHydrationWarning className="tabular-nums text-ink">{time}</span> IST
          </p>

          <div className="flex items-center gap-2">
            <a
              href={href("/#work")}
              className="hidden rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-white md:block"
            >
              ( Work )
            </a>
            <a
              href={href("/#contact")}
              className="hidden rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-lime hover:text-ink sm:block"
            >
              ( Start a project )
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold uppercase tracking-wider transition-colors ${
                open ? "bg-lime text-ink" : "bg-paper-2 text-ink hover:bg-lime"
              }`}
            >
              <span className="relative block h-2.5 w-4">
                <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all ${open ? "top-1 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all ${open ? "top-1 -rotate-45" : "top-2"}`} />
              </span>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        ref={overlay}
        className="fixed inset-0 z-[80] hidden flex-col justify-between bg-ink px-5 pb-8 pt-28 text-white md:px-10"
        data-lenis-prevent
      >
        <nav aria-label="Main" className="mx-auto w-full max-w-[1440px]">
          <ul>
            {navigationItems.map((item, i) => (
              <li key={item.id} className="overflow-hidden border-b border-white/10">
                <a
                  href={href(item.href)}
                  onClick={() => setOpen(false)}
                  className="menu-item group flex items-baseline gap-4 py-3 md:gap-8"
                >
                  <span className="text-xs text-white/60 md:text-sm">[{String(i + 1).padStart(2, "0")}]</span>
                  <span className="display text-[13vw] transition-colors group-hover:text-lime md:text-[7vw]">
                    {item.label}
                  </span>
                  <FiArrowUpRight className="ml-auto h-8 w-8 -rotate-45 text-lime opacity-0 transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-end justify-between gap-6 text-sm text-white/60">
          <div>
            <p>{CONTACT.email}</p>
            <p>{CONTACT.phone}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((s) => (
              <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="uppercase tracking-wider hover:text-lime">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
