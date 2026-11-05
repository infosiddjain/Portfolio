"use client";
import React, { useEffect, useRef } from "react";
import { skillGroups } from "@/data/skills";
import { prefersReducedMotion } from "../motion/MotionProvider";

const skills = skillGroups.flatMap((g) => g.skills);
const extra = ["Push Notifications", "Play Console", "Vercel", "Auth / JWT", "WebSockets", "SEO", "Skia", "Reanimated", "MDX", "Payments"];
const nodes = [
  ...skills.map((s) => ({ label: s.name, icon: s.iconSrc as string | undefined })),
  ...extra.map((label) => ({ label, icon: undefined as string | undefined })),
];

/**
 * A rotating 3D "network" of the tech stack: labels sit on a Fibonacci sphere,
 * nearby nodes are joined by lines drawn on a canvas behind them. The mouse
 * steers the rotation.
 */
export function TechSphere() {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const els = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const n = nodes.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    const base = nodes.map((_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      return [Math.cos(th) * r, y, Math.sin(th) * r] as const;
    });
    // precompute neighbour pairs by 3D distance
    const pairs: [number, number][] = [];
    for (let i = 0; i < n; i++)
      for (let j = i + 1; j < n; j++) {
        const d = Math.hypot(base[i][0] - base[j][0], base[i][1] - base[j][1], base[i][2] - base[j][2]);
        if (d < 0.9) pairs.push([i, j]);
      }

    let ax = 0.35;
    let ay = 0;
    let vx = 0.0011;
    let vy = 0.0024;
    let raf = 0;
    let visible = true;
    const reduced = prefersReducedMotion();
    const ctx = canvas.current!.getContext("2d")!;

    const frame = () => {
      const w = wrap.current!.offsetWidth;
      const h = wrap.current!.offsetHeight;
      const R = Math.min(w, h) * 0.42;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.current!.width !== w * dpr) {
        canvas.current!.width = w * dpr;
        canvas.current!.height = h * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      ay += vy;
      ax += vx;
      const cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);
      const proj = base.map(([x, y, z]) => {
        const x1 = x * cy - z * sy;
        const z1 = x * sy + z * cy;
        const y1 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;
        const p = 1.6 / (2.6 - z2);
        return { x: w / 2 + x1 * R * p, y: h / 2 + y1 * R * p, z: z2, p };
      });

      // orbit rings
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(61,90,254,0.18)";
      ctx.beginPath();
      ctx.ellipse(w / 2, h / 2, R * 1.12, R * 1.12, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([3, 6]);
      ctx.beginPath();
      ctx.ellipse(w / 2, h / 2, R * 1.3, R * 0.36, -0.35, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // edges
      for (const [i, j] of pairs) {
        const a = proj[i], b = proj[j];
        const depth = (a.z + b.z + 2) / 4; // 0 back … 1 front
        ctx.strokeStyle = depth > 0.6 ? `rgba(61,90,254,${0.15 + depth * 0.45})` : `rgba(10,10,10,${0.06 + depth * 0.25})`;
        ctx.lineWidth = 0.5 + depth * 1.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      // node dots
      for (const q of proj) {
        const depth = (q.z + 1) / 2;
        ctx.fillStyle = depth > 0.55 ? "#3d5afe" : `rgba(10,10,10,${0.15 + depth * 0.3})`;
        ctx.beginPath();
        ctx.arc(q.x, q.y, 1.5 + depth * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      // labels
      proj.forEach((q, i) => {
        const el = els.current[i];
        if (!el) return;
        const depth = (q.z + 1) / 2;
        el.style.transform = `translate3d(${q.x}px, ${q.y}px, 0) translate(-50%, -50%) scale(${0.6 + depth * 0.55})`;
        el.style.opacity = String(0.2 + depth * 0.8);
        el.style.zIndex = String(Math.round(depth * 100));
        el.style.filter = depth < 0.35 ? "blur(1.5px)" : "none";
      });

      if (!reduced && visible) raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(frame);
    });
    io.observe(wrap.current!);
    frame();

    const steer = (e: PointerEvent) => {
      const r = wrap.current!.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      vy = 0.0024 + px * 0.012;
      vx = 0.0011 - py * 0.008;
    };
    const calm = () => {
      vy = 0.0024;
      vx = 0.0011;
    };
    const el = wrap.current!;
    el.addEventListener("pointermove", steer);
    el.addEventListener("pointerleave", calm);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("pointermove", steer);
      el.removeEventListener("pointerleave", calm);
    };
  }, []);

  return (
    <div ref={wrap} className="relative aspect-square w-full touch-pan-y select-none" data-cursor="Explore">
      <canvas ref={canvas} className="absolute inset-0 h-full w-full" aria-hidden />
      {nodes.map((n, i) => (
        <div
          key={n.label}
          ref={(el) => {
            els.current[i] = el;
          }}
          className="absolute left-0 top-0 flex items-center gap-2 whitespace-nowrap rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-sm font-semibold text-ink shadow-sm will-change-transform"
        >
          {n.icon && <img src={n.icon} alt="" className="h-4 w-4" loading="lazy" />}
          {n.label}
        </div>
      ))}
    </div>
  );
}
