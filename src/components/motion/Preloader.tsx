"use client";
import { useEffect } from "react";
import { READY_EVENT, isAppReady } from "./MotionProvider";

/**
 * No intro screen — the site opens straight on the hero. This only signals
 * "app ready" on mount so the hero's entrance animation starts immediately.
 */
export function Preloader() {
  useEffect(() => {
    if (isAppReady()) return;
    (window as Window & { __appReady?: boolean }).__appReady = true;
    window.dispatchEvent(new Event(READY_EVENT));
  }, []);
  return null;
}
