import { Apple, ArrowUpRight, Disc3, Play } from "lucide-react";
import Reveal from "./Reveal";
import { releases, site } from "@/lib/site";

/**
 * Music
 * Official Apple Music artist embed + a styled list of releases.
 *
 * The embed URL is simply the artist URL with the `embed.` subdomain:
 *   https://music.apple.com/...        ->  https://embed.music.apple.com/...
 * Swap in an album/song URL the same way to feature a specific release.
 */
const APPLE_EMBED_SRC =
  "https://embed.music.apple.com/lk/artist/isuru-meneripitiya/1531632854";

export default function Music() {
  return (
    <section id="music" className="relative border-t border-ash-800">
      <div className="section">
        <Reveal>
          <p className="eyebrow">Music &amp; Releases</p>
          <h2 className="section-title">Listen to the catalogue.</h2>
          <p className="section-sub">
            Original singles and productions, streaming worldwide on Apple
            Music and iTunes.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          {/* Apple Music embed */}
          <Reveal from="left">
            <div className="overflow-hidden rounded-2xl border border-ash-800 bg-ink-card p-2 sm:p-3">
              <div className="mb-3 flex items-center justify-between px-2 pt-1">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ash-400">
                  <Apple className="h-3.5 w-3.5" /> Apple Music
                </span>
                <a
                  href={site.socials.appleMusic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-ash-300 transition-colors hover:text-white"
                >
                  Open <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <iframe
                title={`${site.name} on Apple Music`}
                src={APPLE_EMBED_SRC}
                allow="autoplay *; encrypted-media *; clipboard-write"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                loading="lazy"
                className="h-[450px] w-full rounded-xl border-0 bg-black"
              />
            </div>
          </Reveal>

          {/* Release list */}
          <div className="flex flex-col gap-4">
            {releases.map((release, i) => (
              <Reveal key={release.title} delay={i * 0.08} from="right">
                <article className="card group flex items-start gap-4 p-5 sm:p-6">
                  {/* Artwork placeholder */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-ash-700 bg-black transition-colors duration-300 group-hover:border-white">
                    <Disc3 className="h-6 w-6 text-ash-400 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold text-white">
                        {release.title}
                      </h3>
                      <span className="rounded-full border border-ash-700 px-2 py-0.5 text-[10px] uppercase tracking-widest2 text-ash-400">
                        {release.type} · {release.year}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-ash-400 sm:text-sm">
                      {release.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href={release.appleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium text-black transition-colors hover:bg-ash-200"
                      >
                        <Apple className="h-3.5 w-3.5" /> Apple Music
                      </a>
                      <a
                        href={release.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-ash-700 px-3.5 py-1.5 text-[11px] font-medium text-ash-200 transition-colors hover:border-white hover:text-white"
                      >
                        <Play className="h-3.5 w-3.5" /> YouTube
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.3} from="right">
              <a
                href={site.socials.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full"
              >
                View full discography
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
