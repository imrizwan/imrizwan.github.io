import React from "react";

export default function DownloadResume() {
  return (
    <div className="flex justify-center my-12">
      <a
        href="https://drive.google.com/drive/folders/1GNTmMZ6JdR_e-u90SB53dUAJsv91BUjJ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Full Resume from Google Drive (opens in new tab)"
        className="group relative inline-flex items-center gap-3 px-8 py-4 font-sans text-sm tracking-widest uppercase border border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-300 rounded-none overflow-hidden"
      >
        <span className="relative z-10">Download Resume</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="relative z-10 group-hover:translate-x-1 transition-transform"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </a>
    </div>
  );
}
