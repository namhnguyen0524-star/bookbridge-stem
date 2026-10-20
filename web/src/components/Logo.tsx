// Logo: a tree of knowledge sprouting from an open book.
// It is an SVG (a picture made of math shapes), so it stays sharp at any size.
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="BookBridge STEM logo: a tree growing from an open book"
    >
      {/* open book (two pages, blue) */}
      <path d="M6 40 Q20 34 32 42 Q44 34 58 40 L58 54 Q44 48 32 56 Q20 48 6 54 Z" fill="#1f6fb2" />
      <path d="M32 42 L32 56" stroke="#ffffff" strokeWidth="1.5" />
      {/* trunk growing out of the book's spine */}
      <path d="M32 42 L32 26" stroke="#7a5a3a" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 34 L24 27 M32 31 L40 24" stroke="#7a5a3a" strokeWidth="2" strokeLinecap="round" />
      {/* leafy crown (green) */}
      <circle cx="32" cy="16" r="10" fill="#2e9e6b" />
      <circle cx="22" cy="24" r="6.5" fill="#46b883" />
      <circle cx="42" cy="22" r="6.5" fill="#46b883" />
    </svg>
  );
}
