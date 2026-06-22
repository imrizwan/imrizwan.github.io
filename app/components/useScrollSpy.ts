"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view using an IntersectionObserver and
 * keeps the URL hash in sync, so sections are deep-linkable and shareable.
 *
 * @param ids ordered list of section element ids to observe
 * @returns the id of the section currently considered "active"
 */
export function useScrollSpy(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Track intersection ratios so we can pick the most-visible section.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let best = "";
        let bestRatio = 0;
        for (const id of ids) {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }

        if (best) setActiveId(best);
      },
      {
        // Bias the "active" band toward the upper-middle of the viewport.
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  // Reflect the active section in the URL hash without scroll jank or history spam.
  useEffect(() => {
    if (!activeId || typeof window === "undefined") return;
    const next = activeId === "home" ? " " : `#${activeId}`;
    if (window.location.hash !== `#${activeId}`) {
      window.history.replaceState(null, "", next === " " ? window.location.pathname : next);
    }
  }, [activeId]);

  return activeId;
}
