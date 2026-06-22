/** Smoothly scroll to a section by id, honoring prefers-reduced-motion. */
export function scrollToSection(id: string): void {
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
