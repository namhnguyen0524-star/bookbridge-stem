import { Header, Footer } from "@/components/Shell";
import { SHOW_LEADERBOARD } from "@/lib/config";

// Plain-language privacy page. Keep it in sync with what the donate form really collects.
const sections: [string, string[]][] = [
  ["What we collect", [
    "When you send a donation request we collect: your name, your email, the books you describe (titles, subject, condition, how many), and, only if you choose to give one, a nickname.",
    "We do not collect payments, passwords, or your home address on this website.",
  ]],
  ["Why we collect it", [
    "We use your name and email to reply about your books. We use the book details to decide whether the books are useful and to plan shipping.",
  ]],
  ["The public leaderboard", [
    "Your nickname and book count appear on the leaderboard only if you tick the box that says you agree. Only books we have actually received are counted. If you leave the box unticked, you stay private.",
  ]],
  ["Who else handles your information", [
    "Form answers go through Formspree, a company that delivers form messages to our email. This website is hosted on GitHub Pages, and GitHub may keep standard technical logs of visits. We do not sell your information, and we do not use advertising or tracking cookies.",
  ]],
  ["How long we keep it", [
    "We keep your request while we handle your donation and for a short time afterward. You can ask us to delete it at any time.",
  ]],
  ["Your choices", [
    "To see, fix, or delete your information, reply to any email we send you and tell us.",
  ]],
  ["Young donors", [
    "If you are under 13, please ask a parent or guardian to fill in the form for you.",
  ]],
];

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-blue">Privacy</h1>
        <p className="mt-2 opacity-80">
          In short: we collect only what we need to handle your books, we never sell it, and you
          can ask us to delete it. This is a student project, so we keep things simple.
        </p>
        {sections.filter(([title]) => SHOW_LEADERBOARD || title !== "The public leaderboard").map(([title, paras]) => (
          <section key={title} className="mt-8">
            <h2 className="text-xl font-bold text-brand-green">{title}</h2>
            {paras.map((p) => (
              <p key={p} className="mt-2 opacity-90">{p}</p>
            ))}
          </section>
        ))}
        <p className="mt-10 text-sm opacity-70">Last updated: October 2026.</p>
      </main>
      <Footer />
    </>
  );
}
