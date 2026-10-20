import Link from "next/link";
import { Header, Footer } from "@/components/Shell";
import { sortedPosts } from "@/data/posts";

export default function Blog() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-blue">Blog</h1>
        <p className="mt-2 opacity-80">News and stories from BookBridge STEM.</p>
        <div className="mt-8 space-y-4">
          {sortedPosts().map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}/`} className="block rounded-2xl bg-white p-6 shadow-sm hover:shadow">
              <p className="text-sm opacity-60">{p.date}</p>
              <h2 className="mt-1 text-xl font-semibold text-brand-blue">{p.title}</h2>
              <p className="mt-1 opacity-80">{p.summary}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
