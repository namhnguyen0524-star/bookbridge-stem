import { Header, Footer } from "@/components/Shell";

const steps = [
  ["1. Tell us about your books", "Fill in a short form: titles, subjects and your city. No account needed."],
  ["2. We review it", "A BookBridge team member checks your request and replies with next steps."],
  ["3. Pack and send", "We explain how to pack the books. Shipping details are being worked out."],
  ["4. A student reads", "The books reach Vietnamese learners who can use them."],
];

export default function HowItWorks() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-blue">How it works</h1>
        <p className="mt-2 opacity-80">From your bookshelf to a student&apos;s hands in four steps.</p>
        <ol className="mt-8 space-y-4">
          {steps.map(([title, text]) => (
            <li key={title} className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-brand-green">{title}</h2>
              <p className="mt-1 opacity-80">{text}</p>
            </li>
          ))}
        </ol>
      </main>
      <Footer />
    </>
  );
}
