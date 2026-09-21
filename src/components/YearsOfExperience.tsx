"use client";
import { totalYears } from "@/data/experiences";

/** Total years since career start (06 Sep 2021); recalculated in the browser on every visit. */
export function YearsOfExperience() {
  return <span suppressHydrationWarning>{totalYears()}+</span>;
}
