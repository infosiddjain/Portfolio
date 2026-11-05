"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { FiStar } from "react-icons/fi";
import { playStoreApps, projects } from "@/data/projects";
import { isTouchDevice, onAppReady, prefersReducedMotion } from "../motion/MotionProvider";
import { AppScreen, Phone } from "./Phone";

const shot = (id: string) => projects.find((p) => p.id === id)?.image ?? "";

/**
 * 3D hero stage: a floating phone cycling through live apps, browser windows
 * angled behind it, and the app icons orbiting in 3D. The whole stage leans
 * toward the mouse.
 */
export function HeroScene() {
  const stage = useRef<HTMLDivElement>(null);
  const icons = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const orbitApps = playStoreApps.filter((a) => a.icon);

  // Cycle phone screen
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % playStoreApps.length), 2600);
    return () => clearInterval(id);
  }, []);

  // Orbit + mouse lean + entrance
  useEffect(() => {
    const reduced = prefersReducedMotion();
    let raf = 0;
    let t = 0;
    let lastTs = 0;
    const n = orbitApps.length;

    const place = (theta: number) => {
      const w = stage.current?.offsetWidth ?? 500;
      const rx = w * 0.5;
      const ry = w * 0.12;
      icons.current.forEach((el, i) => {
        if (!el) return;
        const a = theta + (i / n) * Math.PI * 2;
        const x = Math.cos(a) * rx;
        const y = Math.sin(a) * ry;
        const depth = Math.sin(a); // -1 back … 1 front
        const s = 0.62 + (depth + 1) * 0.24;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s})`;
        el.style.zIndex = depth > 0 ? "30" : "5";
        el.style.opacity = String(0.45 + (depth + 1) * 0.275);
        el.style.filter = depth < -0.3 ? "blur(1px)" : "none";
      });
    };

    let onScreen = true;
    const loop = (ts: number) => {
      const dt = lastTs ? Math.min(ts - lastTs, 50) : 16;
      lastTs = ts;
      t += dt * 0.00022;
      place(t);
      if (onScreen) raf = requestAnimationFrame(loop);
    };
    place(0.6);
    // Only spin while the hero is visible.
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting;
      cancelAnimationFrame(raf);
      lastTs = 0;
      if (onScreen && !reduced) raf = requestAnimationFrame(loop);
    });
    if (stage.current) io.observe(stage.current);

    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.to(".hs-float", { y: -14, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".hs-float-b", { y: 12, duration: 3.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }, stage);

    const off = onAppReady(() => {
      if (reduced || isTouchDevice()) return;
      gsap.fromTo(
        stage.current,
        { opacity: 0, scale: 0.85, rotateX: 25 },
        { opacity: 1, scale: 1, rotateX: 0, duration: 1.6, ease: "expo.out", delay: 0.15 }
      );
    });

    const lean = (e: PointerEvent) => {
      if (!stage.current || e.pointerType !== "mouse") return;
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      gsap.to(stage.current.querySelector(".hs-world"), {
        rotateY: px * 16,
        rotateX: -py * 12,
        duration: 1.2,
        ease: "power3.out",
      });
    };
    window.addEventListener("pointermove", lean, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ctx.revert();
      off();
      window.removeEventListener("pointermove", lean);
    };
  }, [orbitApps.length]);

  return (
    <div ref={stage} className="perspective relative mx-auto aspect-[1/1.05] w-full max-w-[560px]" aria-hidden>
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(61,90,254,0.28),rgba(198,244,50,0.18)_45%,transparent_70%)] blur-2xl" />

      <div className="hs-world preserve-3d absolute inset-0">
        {/* back browser windows */}
        <div className="hs-float-b preserve-3d absolute left-[-6%] top-[14%] w-[58%]">
        <div
          className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl"
          style={{ transform: "translateZ(-160px) rotateY(28deg) rotateZ(-3deg)" }}
        >
          <div className="flex gap-1 border-b border-black/5 px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
          </div>
          <div className="relative aspect-[16/10]">
            <Image src={shot("gamerun")} alt="" fill sizes="320px" className="object-cover object-top" />
          </div>
        </div>
        </div>
        <div className="hs-float preserve-3d absolute right-[-8%] top-[46%] w-[56%]">
        <div
          className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl"
          style={{ transform: "translateZ(-120px) rotateY(-30deg) rotateZ(3deg)" }}
        >
          <div className="flex gap-1 border-b border-black/5 px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
          </div>
          <div className="relative aspect-[16/10]">
            <Image src={shot("fighter-aura")} alt="" fill sizes="320px" className="object-cover object-top" />
          </div>
        </div>
        </div>

        {/* orbiting icons */}
        <div className="absolute left-1/2 top-[54%] h-0 w-0">
          {orbitApps.map((a, i) => (
            <div
              key={a.id}
              ref={(el) => {
                icons.current[i] = el;
              }}
              className="absolute -left-7 -top-7 h-14 w-14 will-change-transform"
            >
              <Image src={a.icon!} alt="" width={56} height={56} className="h-14 w-14 rounded-2xl bg-white shadow-xl ring-1 ring-black/5" />
            </div>
          ))}
        </div>

        {/* phone */}
        <div className="absolute left-1/2 top-1/2 z-20 w-[44%] -translate-x-1/2 -translate-y-1/2">
          <div className="hs-float preserve-3d">
          <div style={{ transform: "rotateY(-14deg) rotateX(6deg) rotateZ(2deg)" }}>
            <Phone>
              {playStoreApps.map((app, i) => (
                <div
                  key={app.id}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? "scale(1)" : "scale(1.06)",
                  }}
                >
                  <AppScreen app={app} />
                </div>
              ))}
            </Phone>
          </div>
          </div>
        </div>

        {/* floating chips */}
        <div className="hs-float-b absolute left-[2%] top-[66%] z-40">
        <div className="rounded-2xl border border-black/5 bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
          <p className="flex items-center gap-1 font-display text-lg font-bold">
            4.8 <FiStar className="h-4 w-4 fill-amber-400 text-amber-400" />
          </p>
          <p className="text-[11px] text-muted">Dil Ki Bhakti · Google Play</p>
        </div>
        </div>
        <div className="hs-float absolute right-[0%] top-[8%] z-40">
        <div className="rounded-2xl bg-ink px-4 py-3 text-white shadow-xl">
          <p className="font-display text-lg font-bold text-lime">{playStoreApps.length} apps</p>
          <p className="text-[11px] text-white/60">live on Google Play</p>
        </div>
        </div>
      </div>
    </div>
  );
}
