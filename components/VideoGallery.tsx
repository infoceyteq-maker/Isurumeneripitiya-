import { ArrowUpRight, Youtube } from "lucide-react";
import Reveal from "./Reveal";
import { videos, youtubeVideosUrl } from "@/lib/site";

/**
 * VideoGallery
 * Responsive grid of real YouTube embeds from the official channel
 * (@isurumeneripitiya): 1 column on mobile, 2 on tablet, 3 on desktop.
 *
 * Each tile is a plain, Next.js-friendly <iframe> (no client JS needed, so the
 * whole section stays a React Server Component) using the privacy-enhanced
 * youtube-nocookie domain and native lazy loading.
 *
 * To add / reorder / swap videos, edit the `videos` array in /lib/site.ts.
 */
export default function VideoGallery() {
  return (
    <section
      id="videos"
      className="relative border-t border-ash-800 bg-ink-soft"
    >
      <div className="section">
        {/* Section header */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Video Gallery</p>
              <h2 className="section-title">Watch &amp; experience.</h2>
              <p className="section-sub">
                Music videos, live performances, and studio sessions from the
                official YouTube channel.
              </p>
            </div>

            <a
              href={youtubeVideosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost shrink-0"
            >
              <Youtube className="h-4 w-4" />
              Visit channel
            </a>
          </div>
        </Reveal>

        {/* Responsive video grid — 1 / 2 / 3 columns */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <Reveal key={video.id} delay={(i % 3) * 0.08}>
              <article className="group h-full overflow-hidden rounded-xl border border-ash-800 bg-ink-card shadow-lg transition-colors duration-300 hover:border-ash-600">
                {/* 16:9 player */}
                <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full rounded-t-xl border-0"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                {/* Caption */}
                <div className="flex items-center justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium text-white">
                      {video.title}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-widest2 text-ash-500">
                      {video.meta}
                    </p>
                  </div>

                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${video.title} on YouTube`}
                    className="shrink-0 text-ash-500 transition-colors duration-300 hover:text-white"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA below the grid */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <a
              href={youtubeVideosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <Youtube className="h-4 w-4" />
              View All Videos on YouTube
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
