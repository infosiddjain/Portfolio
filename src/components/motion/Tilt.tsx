"use client";
import React, { useRef } from "react";

/** Mouse-driven 3D tilt with a moving glare. Disabled for touch automatically (no hover). */
export function Tilt({
  children,
  className = "",
  max = 10,
  glare = true,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
    el.style.setProperty("--gx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`group/tilt relative transition-transform duration-300 ease-out will-change-transform preserve-3d ${className}`}
      {...rest}
    >
      {children}
      {glare && (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100 [background:radial-gradient(500px_circle_at_var(--gx)_var(--gy),rgba(255,255,255,0.35),transparent_45%)]" />
      )}
    </div>
  );
}
