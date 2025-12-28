"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaBriefcase, 
  FaProjectDiagram, 
  FaCertificate, 
  FaAward, 
  FaGlobe,
  FaEnvelope,
  FaDownload
} from "react-icons/fa";

import Home from "./components/Home";
const sections = [
  { id: "home", name: "Overview", icon: FaHome, component: Home },
  { id: "about", name: "About", icon: FaUser, component: dynamic(() => import("./components/About"), { ssr: false }) },
  { id: "skills", name: "Expertise", icon: FaCode, component: dynamic(() => import("./components/Skills"), { ssr: false }) },
  { id: "experience", name: "Experience", icon: FaBriefcase, component: dynamic(() => import("./components/Experience"), { ssr: false }) },
  { id: "projects", name: "Selected Works", icon: FaProjectDiagram, component: dynamic(() => import("./components/Projects"), { ssr: false }) },
  { id: "certificates", name: "Certifications", icon: FaCertificate, component: dynamic(() => import("./components/Certificates"), { ssr: false }) },
  { id: "awards", name: "Honors", icon: FaAward, component: dynamic(() => import("./components/Awards"), { ssr: false }) },
  { id: "languages", name: "Languages", icon: FaGlobe, component: dynamic(() => import("./components/Languages"), { ssr: false }) },
  { id: "contact", name: "Contact", icon: FaEnvelope, component: dynamic(() => import("./components/Contact"), { ssr: false }) },
];

import data from "./data.json";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  const ActiveComponent = sections.find((s) => s.id === activeSection)?.component || Home;
  const activeName = sections.find((s) => s.id === activeSection)?.name || "Overview";

  return (
    <main className="flex flex-col h-screen bg-[var(--bg)] text-[var(--text)] overflow-hidden">
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-24 flex items-center justify-between gap-8">
          <div className="flex flex-col shrink-0">
            <span className="text-lg md:text-2xl font-serif font-medium tracking-tight leading-none">{data.personal_information.full_name}</span>

            <div className="overflow-hidden h-4 mt-1">
              <span 
                key={activeSection}
                className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[var(--accent)] block animate-in slide-in-from-bottom-2 duration-500"
              >
                {activeName}
              </span>
            </div>
          </div>
          
          <nav className="flex items-center gap-2 md:gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2 pr-4" aria-label="Main navigation">
            {sections.slice(0, 8).map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                aria-label={`Go to ${section.name} section`}
                aria-current={activeSection === section.id ? "page" : undefined}
                className={`p-2 md:p-4 rounded-none transition-all duration-300 flex flex-col items-center gap-1.5 shrink-0 group ${
                  activeSection === section.id 
                    ? "text-[var(--accent)] border-b-2 border-[var(--accent)]" 
                    : "text-[var(--text-muted)] hover:text-[var(--text)] border-b-2 border-transparent"
                }`}
                title={section.name}
              >
                <section.icon aria-hidden="true" className={`text-xl md:text-2xl transition-transform ${activeSection === section.id ? "scale-110" : "group-hover:scale-110"}`} />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] hidden lg:block font-bold">
                  {section.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content Area */}
      {/* Content Area */}
      <div 
        className="flex-1 overflow-y-auto no-scrollbar scroll-smooth focus:outline-none" 
        id="main-content"
        tabIndex={-1}
        role="main"
      >
        <div className="animate-in fade-in zoom-in-95 duration-700 ease-out">
          <ActiveComponent />
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <footer className="sticky bottom-0 z-50 w-full border-t border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-24 flex items-center justify-between">
          <button 
            onClick={() => setActiveSection("contact")}
            aria-label="Open contact section"
            className={`flex items-center gap-3 px-4 md:px-8 h-full transition-all duration-300 relative group ${
              activeSection === "contact" 
                ? "text-[var(--accent)]" 
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            <FaEnvelope aria-hidden="true" className="text-xl shrink-0" />
            <span className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase hidden sm:block font-bold">Inquiries</span>
            {activeSection === "contact" && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--accent)] animate-in fade-in duration-500"></div>
            )}
          </button>
          
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/drive/folders/1GNTmMZ6JdR_e-u90SB53dUAJsv91BUjJ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV (opens in new tab)"
              className="flex items-center gap-3 px-8 md:px-12 py-3 md:py-4 bg-[var(--text)] text-[var(--bg)] text-[10px] md:text-xs tracking-[0.3em] uppercase hover:bg-[var(--accent)] transition-all duration-500 font-bold group"
            >
              <FaDownload aria-hidden="true" className="text-base group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
