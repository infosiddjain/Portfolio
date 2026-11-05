import React from "react";
import { CONTACT } from "@/data/contact";
import { navigationItems } from "@/data/navigation";
import { PLAY_DEVELOPER_URL } from "@/data/projects";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 md:px-10">
        <div className="grid gap-10 border-b border-line pb-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">[ Have an idea? ]</p>
            <a href="/#contact" className="display mt-4 inline-block text-[clamp(2rem,4vw,3.6rem)] hover:bg-lime">
              Start a project ↗
            </a>
            <p className="mt-4 max-w-sm text-muted">
              Freelance React Native & Next.js developer — mobile apps, SaaS platforms and business websites.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Explore</p>
            <ul className="mt-4 space-y-2 font-medium">
              {navigationItems.map((n) => (
                <li key={n.id}>
                  <a href={n.href} className="hover:bg-lime">{n.label}</a>
                </li>
              ))}
              <li>
                <a href={PLAY_DEVELOPER_URL} target="_blank" rel="noopener noreferrer" className="hover:bg-lime">Google Play ↗</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Connect</p>
            <ul className="mt-4 space-y-2 font-medium">
              <li><a href={`mailto:${CONTACT.email}`} className="hover:bg-lime">{CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneHref} className="hover:bg-lime">{CONTACT.phone}</a></li>
              {socialLinks.map((s) => (
                <li key={s.id}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:bg-lime">{s.label} ↗</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 py-6 text-xs uppercase tracking-[0.16em] text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Siddharth Jain</p>
          <p>{CONTACT.location}</p>
          <p>Built with Next.js, GSAP & Tailwind</p>
        </div>
      </div>

      <p aria-hidden className="display select-none whitespace-nowrap px-3 text-center text-[12.4vw] leading-[0.8] text-ink">
        Siddharth<span className="text-outline">Jain</span>
      </p>
    </footer>
  );
}
