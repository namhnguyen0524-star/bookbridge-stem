import Link from "next/link";
import { Header, Footer } from "@/components/Shell";
import DonateForm from "@/components/DonateForm";

export default function Donate() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-blue">Donate books</h1>
        <p className="mt-2 opacity-80">
          Tell us about your books. We review every request and email you the next steps. You
          ship the books yourself, and we never ask for money. Books should be in good shape:
          no missing pages, light writing is OK.
        </p>
        <DonateForm />
        <p className="mt-6 text-sm opacity-70">
          We use your details only to handle your books. Read our <Link href="/privacy/" className="underline">privacy page</Link>.
        </p>
      </main>
      <Footer />
    </>
  );
}
