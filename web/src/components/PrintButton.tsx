"use client";

// "Use client" means this runs in the visitor's browser (needed for window.print).
export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-full bg-brand-green px-6 py-2 font-semibold text-white hover:opacity-90"
    >
      Print or save as PDF
    </button>
  );
}
