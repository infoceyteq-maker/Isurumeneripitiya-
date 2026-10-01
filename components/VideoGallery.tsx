"use client";

import { useState } from "react";
import { Play, Youtube } from "lucide-react";
import Reveal from "./Reveal";
import { videos, site } from "@/lib/site";

/**
 * VideoGallery
 * Responsive grid of YouTube videos.
 *
 * Performance note: each tile first renders the lightweight YouTube thumbnail
 * (facade pattern). The real iframe is only mounted after the user clicks,
 * so the page stays fast no matter how many videos are listed.
 *
 * To swap in real content, edit the `videos` array in /lib/site.ts and replace
 * each `id` with the YouTube video ID from @isurumeneripitiya.
 */
export default function VideoGallery() {
  // Tracks which video IDs have been activated (iframe mounted)
  const [playing, setPlaying] = useState<Record<string, boolean>>({});

  return (
    <section
      id="videos"
      className="relative border-t border-ash-800 bg-ink-soft"
    >
      <div className="section">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Video Gallery</p>
              <h2 className="section-title">Watch &amp; experience.</h2>
              <p className="section-sub">
                Music videos, live performances and studio sessions from the
                official YouTube channel.
              </p>
            </div>
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost shrink-0"
            >
              <Youtube className="h-4 w-4" />
              Visit channel
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => {
            const isPlaying = Boolean(playing[video.id]);

            return (
              <Reveal key={video.id + i} delay={(i % 3) * 0.08}>
                <article className="card group overflow-hidden">
                  <div className="relative aspect-video w-full bg-black">
                    {isPlaying ? (
                      // Real player – only mounted on demand
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setPlaying((p) => ({ ...p, [video.id]: true }))
                        }
                        aria-label={`Play ${video.title}`}
                        className="absolute inset-0 h-full w-full"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                          alt={video.title}
                          loading="lazy"
                          className="h-full w-full object-cover opacity-80 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/60 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                          <Play className="h-5 w-5 translate-x-[1px] fill-white text-white transition-colors duration-300 group-hover:fill-black group-hover:text-black" />
                        </span>
                      </button>
                    )}
                  </div>

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
                      className="shrink-0 text-ash-500 transition-colors hover:text-white"
                    >
                      <Youtube className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
