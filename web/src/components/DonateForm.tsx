"use client";

import { useState } from "react";
import { FORMSPREE_FORM_ID } from "@/lib/config";

// The form sends its answers to Formspree, which emails them to you.
const input = "mt-1 w-full rounded-xl border border-soft bg-white p-3";

export default function DonateForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  if (!FORMSPREE_FORM_ID) {
    return <p className="mt-6 rounded-2xl bg-soft p-5">The form is not connected yet. Please check back soon!</p>;
  }
  if (status === "done") {
    return (
      <p className="mt-6 rounded-2xl bg-soft p-5">
        Thank you! We got your request and will email you with next steps.
      </p>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <label className="block">Your name
        <input name="name" required maxLength={80} className={input} />
      </label>
      <label className="block">Email (so we can reply)
        <input name="email" type="email" required maxLength={120} className={input} />
      </label>
      <label className="block">Book titles
        <textarea name="titles" required maxLength={1000} rows={4} className={input}
          placeholder="One title per line" />
      </label>
      <label className="block">Main subject
        <select name="subject" required className={input}>
          {["Science", "Technology", "Engineering", "Art", "Math", "Mixed"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="block">Condition
        <select name="condition" required className={input}>
          <option>Like new</option>
          <option>Good (no missing pages, light writing)</option>
        </select>
      </label>
      <label className="block">Number of books
        <input name="count" type="number" min={1} max={500} required className={input} />
      </label>
      <label className="block">Nickname for the leaderboard (optional)
        <input name="nickname" maxLength={30} className={input} placeholder="Leave empty to stay private" />
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="show_on_leaderboard" value="yes" className="mt-1" />
        I agree to show my nickname and book count publicly on the leaderboard.
      </label>
      {/* hidden trap field: real people never see it, spam bots fill it in */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />
      <button disabled={status === "sending"}
        className="rounded-full bg-brand-green px-7 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-50">
        {status === "sending" ? "Sending..." : "Send my donation request"}
      </button>
      {status === "error" && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}
