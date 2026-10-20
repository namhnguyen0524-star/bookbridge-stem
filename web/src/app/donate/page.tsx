import { Header, Footer } from "@/components/Shell";

// Placeholder: the real donation form comes next (after we choose where form data is stored).
export default function Donate() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-blue">Donate books</h1>
        <p className="mt-3 rounded-2xl bg-soft p-5">
          The donation form is coming soon. Thank you for wanting to help!
        </p>
      </main>
      <Footer />
    </>
  );
}
