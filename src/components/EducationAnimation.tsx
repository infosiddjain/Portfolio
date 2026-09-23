"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Lottie + its JSON are large; keep them out of the initial bundle and only
// fetch them once the Education section is about to scroll into view.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function EducationAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        fetch("/education.json")
          .then((r) => r.json())
          .then(setData)
          .catch(() => {});
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="aspect-[1330/920] w-full">
      {data && <Lottie animationData={data} loop className="h-full w-full" />}
    </div>
  );
}
