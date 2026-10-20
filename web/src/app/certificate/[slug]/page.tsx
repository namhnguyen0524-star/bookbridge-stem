import { notFound } from "next/navigation";
import Logo from "@/components/Logo";
import PrintButton from "@/components/PrintButton";
import { topTen } from "@/lib/leaderboard";

// Certificates only exist for the current top 10 (plus a labeled sample), so people
// cannot make one for themselves by editing the web address.
const SAMPLE = { slug: "sample", name: "Your Name Here", books: 25 };

export function generateStaticParams() {
  return [SAMPLE.slug, ...topTen().map((d) => d.slug)].map((slug) => ({ slug }));
}
export const dynamicParams = false;

export default async function Certificate({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const top = topTen();
  const isSample = slug === SAMPLE.slug;
  const donor = isSample ? SAMPLE : top.find((d) => d.slug === slug);
  if (!donor) notFound();
  const rank = isSample ? 1 : top.findIndex((d) => d.slug === slug) + 1;

  return (
    <main className="flex flex-1 flex-col items-center gap-4 p-6">
      <div className="print:hidden"><PrintButton /></div>
      {/* the certificate itself: a bordered landscape page */}
      <section className="relative w-full max-w-4xl rounded-lg border-8 border-double border-brand-blue bg-white p-10 text-center shadow print:shadow-none">
        {isSample && (
          <p className="absolute right-4 top-3 text-sm font-bold uppercase tracking-widest text-red-600">Sample</p>
        )}
        <div className="flex justify-center"><Logo size={80} /></div>
        <p className="mt-2 text-lg font-semibold tracking-widest text-brand-green">BOOKBRIDGE STEM</p>
        <h1 className="mt-4 text-4xl font-bold text-brand-blue">Certificate of Generosity</h1>
        <p className="mt-6">This certificate is proudly given to</p>
        <p className="mt-2 text-4xl font-bold">{donor.name}</p>
        <p className="mx-auto mt-6 max-w-xl">
          for donating <strong>{donor.books} STEM {donor.books === 1 ? "book" : "books"}</strong> to
          students in Vietnam, and for ranking <strong>#{rank}</strong> among our top 10 donors.
        </p>
        <p className="mt-10 border-t border-soft pt-4 text-sm opacity-70">
          Signed, the BookBridge STEM team · A student-led project
        </p>
      </section>
    </main>
  );
}
