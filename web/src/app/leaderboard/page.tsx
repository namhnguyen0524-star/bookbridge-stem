import Link from "next/link";
import { Header, Footer } from "@/components/Shell";
import { rankedDonors } from "@/lib/leaderboard";

export default function Leaderboard() {
  const donors = rankedDonors();
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-blue">Leaderboard</h1>
        <p className="mt-2 opacity-80">
          Donors ranked by how many books they have given. Only books we have received and
          checked are counted. The top 10 donors each earn a certificate.
        </p>

        {donors.length === 0 ? (
          <p className="mt-8 rounded-2xl bg-soft p-6 text-center">
            No donors yet. <Link href="/donate/" className="font-semibold text-brand-green">Be the first!</Link>
          </p>
        ) : (
          <ol className="mt-8 space-y-3">
            {donors.map((d, i) => (
              <li key={d.slug} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                <span className="flex items-center gap-3">
                  <span className="w-8 text-xl font-bold text-brand-green">{i + 1}</span>
                  <span className="font-semibold">{d.name}</span>
                </span>
                <span className="flex items-center gap-4">
                  <span>{d.books} {d.books === 1 ? "book" : "books"}</span>
                  {i < 10 && (
                    <Link href={`/certificate/${d.slug}/`} className="text-sm font-semibold text-brand-blue hover:underline">
                      Certificate
                    </Link>
                  )}
                </span>
              </li>
            ))}
          </ol>
        )}

        <p className="mt-8 text-sm opacity-70">
          Names shown are nicknames that donors chose. Want to see what a certificate looks like?{" "}
          <Link href="/certificate/sample/" className="underline">View a sample</Link>.
        </p>
      </main>
      <Footer />
    </>
  );
}
