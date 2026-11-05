import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import type { Project } from "@/data/projects";

/** Branded launch/home screen for an app, drawn in CSS — sits inside <Phone>. */
export function AppScreen({ app, compact = false }: { app: Project; compact?: boolean }) {
  const accent = app.accent ?? "#3d5afe";
  return (
    <div
      className="absolute inset-0 flex flex-col text-white"
      style={{ background: `linear-gradient(165deg, ${accent} 0%, ${accent}dd 38%, #0a0a0a 120%)` }}
    >
      {/* status bar */}
      <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-semibold opacity-90">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-3 rounded-sm bg-white/90" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center px-5 pt-[18%] text-center">
        {app.icon ? (
          <Image
            src={app.icon}
            alt=""
            width={96}
            height={96}
            className={`rounded-[22%] bg-white shadow-2xl ring-1 ring-white/30 ${compact ? "h-16 w-16" : "h-20 w-20"}`}
          />
        ) : (
          <div className="grid h-20 w-20 place-items-center rounded-[22%] bg-white/15 font-display text-2xl font-bold">
            {app.name.slice(0, 2)}
          </div>
        )}
        <p className={`mt-4 font-display font-bold leading-tight tracking-tight ${compact ? "text-lg" : "text-xl"}`}>
          {app.name}
        </p>
        <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-white/75">{app.tagline}</p>

        {/* faux UI */}
        <div className="mt-[12%] w-full space-y-2">
          {[0.9, 0.7, 0.8].map((w, i) => (
            <div key={i} className="flex items-center gap-2 rounded-xl bg-white/12 p-2 backdrop-blur-sm">
              <span className="h-6 w-6 shrink-0 rounded-lg bg-white/25" />
              <span className="space-y-1">
                <span className="block h-1.5 rounded bg-white/50" style={{ width: `${w * 90}px` }} />
                <span className="block h-1.5 w-12 rounded bg-white/25" />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 pb-6">
        <div className="flex items-center justify-center gap-1.5 rounded-full bg-white py-2.5 text-[11px] font-bold text-ink">
          {app.links.playStore ? (
            <>
              <FaGooglePlay className="h-3 w-3" /> Get it on Google Play
            </>
          ) : app.links.appStore ? (
            <>
              <FaApple className="h-3.5 w-3.5" /> Download on the App Store
            </>
          ) : (
            <>
              <FiGlobe className="h-3 w-3" /> Coming soon to stores
            </>
          )}
        </div>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-white/60" />
      </div>
    </div>
  );
}

/** CSS phone frame. Pass any screen content as children. */
export function Phone({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`phone ${className}`} style={style}>
      <div className="phone-screen">{children}</div>
    </div>
  );
}
