"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.dataset.theme;
    if (attr === "dark" || attr === "light") return attr;
  }
  return "light";
}

/** Light/dark toggle. The actual <html data-theme> is set pre-paint by the
 *  inline script in layout.tsx; this component flips and persists it. */
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage may be unavailable (private mode) — ignore */
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="p-2 md:p-3 shrink-0 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 rounded-full"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch. */}
      {mounted && isDark ? (
        <FaSun aria-hidden="true" className="text-lg md:text-xl" />
      ) : (
        <FaMoon aria-hidden="true" className="text-lg md:text-xl" />
      )}
    </button>
  );
}
