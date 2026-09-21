"use client";
import React, { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Always open on the hero + navbar, not on a browser-restored scroll position.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  return (
    <nav className="sticky top-0 z-50 -mx-6 box-border border-b border-white/5 bg-[#05060d]/60 px-6 backdrop-blur-xl md:-mx-12 md:px-12">
      <div className="items-center box-border flex flex-wrap justify-between py-4">
        <a
          href="/"
          className="gold-text font-[family-name:var(--font-montaga)] text-2xl leading-9 md:text-3xl"
        >
          SIDDHARTH JAIN
        </a>
        <button
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          className="text-2xl text-white md:hidden"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
        <ul
          className={`text-sm w-full flex-col leading-5 list-none pl-0 md:flex md:w-auto md:flex-row ${
            isMobileMenuOpen ? "mt-4 flex" : "hidden"
          }`}
        >
          {navigationItems.map((item) => (
            <li key={item.id} className="box-border text-left md:ml-1">
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 tracking-widest text-neutral-300 transition-colors hover:text-amber-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
