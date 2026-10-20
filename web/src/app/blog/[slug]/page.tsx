import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/Shell";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <Link href="/blog/" className="text-sm font-semibold text-brand-green hover:underline">← All posts</Link>
        <p className="mt-4 text-sm opacity-60">{post.date}</p>
        <h1 className="mt-1 text-3xl font-bold text-brand-blue">{post.title}</h1>
        <div className="mt-6 space-y-4 text-lg opacity-90">
          {post.body.map((para) => <p key={para}>{para}</p>)}
        </div>
      </main>
      <Footer />
    </>
  );
}
