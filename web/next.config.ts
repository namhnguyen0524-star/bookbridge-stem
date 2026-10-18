import type { NextConfig } from "next";

// Security headers: instructions sent to the browser that block common attacks.
// A strict Content-Security-Policy (CSP) will be added once login is built.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }, // always use HTTPS
  { key: "X-Content-Type-Options", value: "nosniff" }, // don't guess file types
  { key: "X-Frame-Options", value: "DENY" }, // other sites can't embed ours (stops clickjacking)
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false, // don't advertise what we run on
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  cacheComponents: true,
  partialPrefetching: true,
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
