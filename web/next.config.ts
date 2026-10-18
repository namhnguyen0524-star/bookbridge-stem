import type { NextConfig } from "next";

// GitHub Pages hosts plain static files, so we export the site as static HTML.
// It lives at https://namhnguyen0524-star.github.io/bookbridge-stem (free address).
// NOTE: static hosting cannot send custom security headers. We add what we can via
// <meta> tags in layout.tsx and will get full headers when we move to a real host/domain.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bookbridge-stem",
  images: { unoptimized: true }, // Pages has no image-resizing server
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
