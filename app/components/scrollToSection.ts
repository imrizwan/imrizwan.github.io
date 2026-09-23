"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";

/** Matches sticky header: h-16 mobile, h-24 desktop (+ a little breathing room). */
function getHeaderOffset(): number {
  if (typeof window === "undefined") return -80;
  return window.matchMedia("(min-width: 768px)").matches ? -112 : -80;
}

/** Native fallback when Lenis is unavailable (CV page, SSR, reduced motion path). */
function scrollToSectionNative(id: string): void {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  el.scrollIntoView({
    behavior: prefersReduced ? "auto" : "smooth",
    block: "start",
  });
}

/**
 * Smoothly scroll to a section by id via Lenis when present,
 * otherwise fall back to native scrollIntoView.
 */
export function useScrollToSection(): (id: string) => void {
  const lenis = useLenis();

  return useCallback(
    (id: string) => {
      if (lenis) {
        lenis.scrollTo(`#${id}`, { offset: getHeaderOffset() });
        return;
      }
      scrollToSectionNative(id);
    },
    [lenis]
  );
}
