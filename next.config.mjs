/**
 * Next.js configuration — including HTTP security headers.
 *
 * NOTE: this project uses ESM (`next.config.mjs`). If you prefer CommonJS,
 * rename the file to `next.config.js` and swap `export default nextConfig;`
 * for `module.exports = nextConfig;` — the contents are otherwise identical.
 */

/**
 * Content-Security-Policy.
 *
 * Tuned for exactly what this site loads:
 *  - YouTube embeds        → youtube-nocookie.com, ytimg.com (thumbnails)
 *  - Apple Music embed     → embed.music.apple.com, mzstatic.com (artwork)
 *  - Self-hosted Inter     → fonts come from /_next, so 'self' is enough
 *
 * 'unsafe-inline' is required for Next.js' inline bootstrap script and for
 * styled-jsx / Tailwind's injected styles in dev. 'unsafe-eval' is only
 * needed by the dev-mode React refresh runtime, so it is added conditionally.
 */
const isDev = process.env.NODE_ENV === "development";

const ContentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https://i.ytimg.com https://*.ytimg.com https://*.mzstatic.com",
  "font-src 'self' data:",
  // Embedded players
  "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com https://embed.music.apple.com",
  "media-src 'self' https://*.mzstatic.com",
  // Next.js dev websocket + Apple/YouTube XHR
  `connect-src 'self' https://embed.music.apple.com https://*.mzstatic.com${
    isDev ? " ws: wss:" : ""
  }`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Force HTTPS for 2 years, including subdomains (safe once the domain is HTTPS-only)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Block clickjacking (CSP frame-ancestors is the modern equivalent)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stop MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't leak full URLs to third parties
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable browser features this site never uses
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()",
  },
  // Legacy XSS filter (harmless, still read by some older browsers)
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Don't advertise the framework/version to attackers
  poweredByHeader: false,

  // Serve modern formats for the artist photos
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        // Apply to every route
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
