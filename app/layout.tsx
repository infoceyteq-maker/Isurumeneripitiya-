import type { Metadata, Viewport } from "next";
// Inter, self-hosted (no external Google Fonts request at runtime)
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://isurumeneripitiya.com"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.fullName} is a Sri Lankan musician, singer and music director based in ${site.location}. Listen on Apple Music and watch on YouTube.`,
  keywords: [
    "Isuru Meneripitiya",
    "Isuru Chaturanga Meneripitiya",
    "Sri Lankan singer",
    "music director",
    "Ginigathhena",
    "Sinhala music",
  ],
  authors: [{ name: site.fullName }],
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.role}`,
    description: `Official website of ${site.fullName}, singer and music director based in ${site.location}.`,
    siteName: site.name,
    images: ["/images/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: `Official website of ${site.fullName}, singer and music director.`,
    images: ["/images/hero.jpg"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink font-sans text-white">{children}</body>
    </html>
  );
}
