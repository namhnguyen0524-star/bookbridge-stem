import { Header, Footer } from "@/components/Shell";

// Each step has a short title, a plain explanation, and a "why it matters" line.
const steps = [
  {
    title: "1. Tell us about your books",
    text: "Fill in a short form with the book titles, the subject (science, technology, engineering, art or math), the condition, and your city. You do not need an account.",
    why: "This lets us check that the books are useful before anyone spends time or money on shipping.",
  },
  {
    title: "2. We review your request",
    text: "A BookBridge team member reads your form and replies by email. We may ask a question or two, such as the edition of a textbook or how many books you have.",
    why: "Reviewing each request keeps the program safe and makes sure the books match what students need.",
  },
  {
    title: "3. Pack and send",
    text: "We tell you how to pack the books and where to send them. Shipping details are still being worked out, so the exact steps may change.",
    why: "Good packing keeps books clean and dry on the long trip across the ocean.",
  },
  {
    title: "4. A student reads your book",
    text: "Your books reach learners in Vietnam through schools or libraries. The goal is for each book to be read by many students over many years.",
    why: "One book can help dozens of people, which is why donating books is powerful.",
  },
];

const faq = [
  ["What kinds of books can I donate?", "Science, technology, engineering, art and math books in good shape, with no missing pages or heavy writing. Textbooks, reference books, and STEM stories are all welcome. Books in English are fine, since many Vietnamese students are learning English."],
  ["Does it cost me money?", "We never ask for money. Donations are books only. Who pays for shipping is still being decided, and we will explain it clearly before you send anything."],
  ["Is BookBridge STEM a nonprofit?", "Not yet. It is a student-led project, so we cannot give tax receipts. We will say so clearly if that ever changes."],
  ["What happens to my information?", "We only collect what is needed to contact you about your books, such as your name, email and city. We will not sell it."],
  ["I'm a student or school in Vietnam. How can I get books?", "Requests from Vietnamese schools and libraries are coming soon. For now we are building the donor side first, so we know how many books to expect."],
];

export default function HowItWorks() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-blue">How it works</h1>
        <p className="mt-3 text-lg opacity-80">
          Many students in the US have STEM books that sit on a shelf after one class. Many
          students in Vietnam would love to read them. BookBridge STEM is the bridge between the
          two. Here is the full journey of a book.
        </p>

        <ol className="mt-8 space-y-4">
          {steps.map((s) => (
            <li key={s.title} className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-brand-green">{s.title}</h2>
              <p className="mt-1 opacity-90">{s.text}</p>
              <p className="mt-2 text-sm opacity-70">Why it matters: {s.why}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 text-2xl font-bold text-brand-blue">Why STEM books?</h2>
        <p className="mt-2 opacity-80">
          STEM stands for Science, Technology, Engineering and Math. We add Art, because creativity
          matters in every one of them. Good STEM books are expensive and hard to find in many
          places, and they can open the door to careers like doctor, programmer, or engineer.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-brand-blue">Common questions</h2>
        <dl className="mt-4 space-y-4">
          {faq.map(([q, a]) => (
            <div key={q} className="rounded-2xl bg-soft p-5">
              <dt className="font-semibold">{q}</dt>
              <dd className="mt-1 opacity-85">{a}</dd>
            </div>
          ))}
        </dl>
      </main>
      <Footer />
    </>
  );
}
