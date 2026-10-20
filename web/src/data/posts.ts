// All blog posts live here. To add a post: copy one object, change the text, push.
// "body" is a list of paragraphs. Newest posts go first. Dates are YYYY-MM-DD.
export type Post = { slug: string; title: string; date: string; summary: string; body: string[] };

export const posts: Post[] = [
  {
    slug: "welcome-to-bookbridge-stem",
    title: "Welcome to BookBridge STEM",
    date: "2026-10-19",
    summary: "Why we are building a bridge for STEM books between the US and Vietnam.",
    body: [
      "Welcome! BookBridge STEM is a student-led project with one simple idea: books are meant to be read, not to sit on a shelf.",
      "Many of us in the US have science, technology, engineering, art and math books that we finished with years ago. Students in Vietnam would be glad to read them. We want to connect the two.",
      "Right now we are building the website and getting ready for our first donations. You can send a donation request on the Donate page, and we will email you the next steps.",
      "Thank you for being here at the very beginning. We will share updates on this blog as the project grows.",
    ],
  },
];

export const sortedPosts = () => [...posts].sort((a, b) => b.date.localeCompare(a.date));
