"use client";

import { FaDownload } from "react-icons/fa";

/** Triggers the browser's print dialog so the CV can be saved as a PDF. */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white text-xs tracking-[0.2em] uppercase font-bold hover:bg-blue-600 transition-colors duration-300 rounded"
    >
      <FaDownload aria-hidden="true" className="text-sm" />
      Download PDF
    </button>
  );
}
