import { Apple, Facebook, Instagram, Youtube } from "lucide-react";
import { site } from "@/lib/site";

/** Centered social icon links. */
const socials = [
  { icon: Facebook, label: "Facebook", href: site.socials.facebook },
  { icon: Instagram, label: "Instagram", href: site.socials.instagram },
  { icon: Youtube, label: "YouTube", href: site.socials.youtube },
  { icon: Apple, label: "Apple Music / iTunes", href: site.socials.appleMusic },
];

/**
 * Footer
 * Minimalist footer: wordmark, centered social icons, copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ash-800 bg-black">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-widest2 text-white"
          >
            {site.name}
          </a>

          <div className="hairline max-w-xs" />

          {/* Social icons */}
          <ul className="flex items-center justify-center gap-3 sm:gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ash-700 text-ash-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-[11px] uppercase tracking-widest2 text-ash-500">
            {site.category} · {site.location}
          </p>

          <p className="text-xs text-ash-500">
            © {year} {site.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
