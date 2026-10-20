import Link from "next/link";
import { Header, Footer } from "@/components/Shell";

// DRAFT text: the owner should edit the story in their own words.
export default function About() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-blue">About BookBridge STEM</h1>

        <h2 className="mt-8 text-xl font-bold text-brand-green">Our idea</h2>
        <p className="mt-2 opacity-90">
          BookBridge STEM is a student-led project. We collect Science, Technology, Engineering,
          Art and Math books that students in the US no longer use, and we send them to learners
          in Vietnam. Our slogan says it best: turn your unused books into a student&apos;s dream.
        </p>

        <h2 className="mt-8 text-xl font-bold text-brand-green">Why we started</h2>
        <p className="mt-2 opacity-90">
          A good STEM book can spark a lifelong interest in science or building things, but books
          like these can be costly and hard to find. At the same time, many of us have copies
          sitting on a shelf. We want to connect the two.
        </p>

        <h2 className="mt-8 text-xl font-bold text-brand-green">Who we are</h2>
        <p className="mt-2 opacity-90">
          We are a student, learning to code and wanting to make something useful. We are not a
          registered nonprofit yet, so we cannot give tax receipts, and we never ask for money.
        </p>

        <h2 className="mt-8 text-xl font-bold text-brand-green">What we promise</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 opacity-90">
          <li>Books only. We never ask for money.</li>
          <li>We review every request before anything is shipped.</li>
          <li>We only collect the information we need. See our <Link href="/privacy/" className="underline">privacy page</Link>.</li>
        </ul>

        <p className="mt-10">
          <Link href="/donate/" className="rounded-full bg-brand-green px-7 py-3 font-semibold text-white hover:opacity-90">
            Donate books
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
