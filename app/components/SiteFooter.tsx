"use client";

import { FaDownload, FaEnvelope } from "react-icons/fa";
import { scrollToSection } from "./scrollToSection";

const CV_URL =
  "https://drive.google.com/drive/folders/1GNTmMZ6JdR_e-u90SB53dUAJsv91BUjJ";

/** Sticky footer CTA bar: jump to contact + download CV. */
export default function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-50 w-full border-t border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-24 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          aria-label="Jump to contact section"
          className="flex items-center gap-3 px-4 md:px-8 h-full text-[var(--text-muted)] hover:text-[var(--accent)] transition-all duration-300"
        >
          <FaEnvelope aria-hidden="true" className="text-xl shrink-0" />
          <span className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase hidden sm:block font-bold">
            Inquiries
          </span>
        </button>

        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV (opens in new tab)"
          className="flex items-center gap-3 px-8 md:px-12 py-3 md:py-4 bg-[var(--text)] text-[var(--bg)] text-[10px] md:text-xs tracking-[0.3em] uppercase hover:bg-[var(--accent)] transition-all duration-500 font-bold group"
        >
          <FaDownload aria-hidden="true" className="text-base group-hover:animate-bounce" />
          <span>Download CV</span>
        </a>
      </div>
    </footer>
  );
}
