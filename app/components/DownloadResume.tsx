import React from "react";

export default function DownloadResume() {
  return (
    <div className="flex justify-center">
      <a
        href="https://drive.google.com/drive/folders/1GNTmMZ6JdR_e-u90SB53dUAJsv91BUjJ"
        target="_blank"
        className="px-8 py-4 font-sans text-sm tracking-widest uppercase border border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-300 rounded-none shadow-sm"
      >
        Download Resume
      </a>
    </div>
  );
}
