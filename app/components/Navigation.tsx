"use client";

import data from "../data.json";
import { navSections, sections } from "./sections";
import { useScrollSpy } from "./useScrollSpy";
import { scrollToSection } from "./scrollToSection";
import ThemeToggle from "./ThemeToggle";

/** Sticky header: name + live section label, scroll-spy icon nav, theme toggle. */
export default function Navigation() {
  const sectionIds = sections.map((s) => s.id);
  const activeId = useScrollSpy(sectionIds);
  const activeName = sections.find((s) => s.id === activeId)?.name ?? "Overview";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-24 flex items-center justify-between gap-4 md:gap-8">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex flex-col shrink-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          aria-label="Back to top"
        >
          <span className="text-lg md:text-2xl font-serif font-medium tracking-tight leading-none">
            {data.personal_information.full_name}
          </span>
          <span className="overflow-hidden h-4 mt-1 block">
            <span
              key={activeId}
              className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[var(--accent)] block animate-in slide-in-from-bottom-2 duration-500"
            >
              {activeName}
            </span>
          </span>
        </button>

        <nav
          className="flex items-center gap-1 md:gap-3 overflow-x-auto no-scrollbar scroll-smooth py-2"
          aria-label="Main navigation"
        >
          {navSections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                aria-label={`Go to ${section.name} section`}
                aria-current={isActive ? "true" : undefined}
                title={section.name}
                className={`p-2 md:p-4 transition-all duration-300 flex flex-col items-center gap-1.5 shrink-0 group border-b-2 ${
                  isActive
                    ? "text-[var(--accent)] border-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)] border-transparent"
                }`}
              >
                <section.icon
                  aria-hidden="true"
                  className={`text-xl md:text-2xl transition-transform ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] hidden lg:block font-bold">
                  {section.name.split(" ")[0]}
                </span>
              </button>
            );
          })}

          <span className="w-px h-6 bg-[var(--border)] mx-1 hidden md:block" aria-hidden="true" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
