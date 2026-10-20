import Link from "next/link";
import Logo from "@/components/Logo";
import { Header, Footer } from "@/components/Shell";

// "Why are you here?" cards: each one sends a visitor to the right place.
const paths = [
  {
    title: "I have books to give",
    text: "Science, tech, engineering, art or math books you no longer use.",
    href: "/donate/",
    cta: "Donate books",
  },
  {
    title: "I want to understand the idea",
    text: "See the simple steps from your bookshelf to a student's hands.",
    href: "/how-it-works/",
    cta: "How it works",
  },
  {
    title: "I'm a student or school in Vietnam",
    text: "Requests from Vietnamese schools are coming soon.",
    href: "/how-it-works/",
    cta: "Learn more",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-16 text-center">
          <Logo size={96} />
          <h1 className="text-4xl font-bold text-brand-blue sm:text-5xl">
            Turn your unused books into a student&apos;s dream in Vietnam.
          </h1>
          <p className="max-w-2xl text-lg opacity-80">
            BookBridge STEM collects Science, Technology, Engineering, Art and Math books from
            students in the US and sends them to learners in Vietnam.
          </p>
          <Link
            href="/donate/"
            className="rounded-full bg-brand-green px-7 py-3 font-semibold text-white hover:opacity-90"
          >
            Donate books
          </Link>
        </section>

        <section className="bg-soft py-12">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-6 text-center text-2xl font-bold">What brings you here?</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {paths.map((p) => (
                <div key={p.title} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-blue">{p.title}</h3>
                  <p className="mt-2 flex-1 opacity-80">{p.text}</p>
                  <Link href={p.href} className="mt-4 font-semibold text-brand-green hover:underline">
                    {p.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
