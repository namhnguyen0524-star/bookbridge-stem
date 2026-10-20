import Link from "next/link";
import Logo from "./Logo";

// Header + footer shared by every page.
export function Header() {
  return (
    <header className="border-b border-soft bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-brand-blue">
          <Logo size={36} />
          BookBridge STEM
        </Link>
        <nav className="flex gap-5 text-sm font-medium">
          <Link href="/how-it-works/" className="hover:text-brand-green">How it works</Link>
          <Link href="/leaderboard/" className="hover:text-brand-green">Leaderboard</Link>
          <Link href="/donate/" className="hover:text-brand-green">Donate</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-soft bg-white py-8 text-center text-sm opacity-80">
      <p>BookBridge STEM · a student-led project connecting US readers with Vietnamese learners.</p>
      <p className="mt-1">Not a registered nonprofit yet. Donations are books only, never money.</p>
    </footer>
  );
}
