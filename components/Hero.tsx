"use client";

import { motion } from "framer-motion";
import { Apple, ArrowDown, MapPin, Play } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Hero
 * Full-bleed hero built around /images/hero-bg.jpg — a wide shot with the
 * artist on the RIGHT and solid black negative space on the LEFT.
 *
 * Layout strategy:
 *  - The section itself is `bg-black`, and the image is a `background-image`
 *    on an absolutely-positioned layer, so the photo's black edges melt into
 *    the page with no visible seam at any viewport width.
 *  - Desktop: content is constrained to the left ~55% so it sits over the
 *    empty black area and never collides with the artist.
 *  - Mobile: the image is pushed to the right and dimmed behind a vertical
 *    gradient scrim, with the copy centered on top for guaranteed contrast.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* ---------- Background image layer ----------
          Mobile  : bg-cover, zoomed toward the artist (the scrim dims it).
          md and up: bg-contain pinned right, so the ultra-wide frame is never
          cropped — the photo's own black background blends into bg-black. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-black bg-cover bg-[position:76%_30%] bg-no-repeat md:bg-contain md:bg-right"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* ---------- Readability scrims ----------
          Mobile: strong bottom-up + left-right wash so the centered copy
          always reads. Desktop: a soft left-side fade only, keeping the
          artist fully visible on the right. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-black/70 md:hidden"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 to-black/30 md:bg-gradient-to-r md:from-black md:via-black/80 md:to-transparent"
      />
      {/* Feathered edges so the photo never shows a hard boundary */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-black to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-black/90 to-transparent"
      />

      {/* ---------- Content ---------- */}
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36">
        <div
          className="
            flex flex-col items-center text-center
            md:max-w-[58%] md:items-start md:text-left
            lg:max-w-[52%]
          "
        >
          {/* Location badge */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-widest2 text-gray-300 backdrop-blur-sm"
          >
            <MapPin className="h-3.5 w-3.5" />
            {site.location}
          </motion.p>

          {/* Artist name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)] sm:text-6xl lg:text-7xl"
          >
            Isuru
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Meneripitiya
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg"
          >
            <span className="font-medium text-white">
              Singer &amp; Music Director
            </span>{" "}
            — crafting melodies, arrangements and productions rooted in Sri
            Lankan soul with a contemporary edge.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            {/* Filled: white background, black text */}
            <a
              href={site.socials.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_34px_-8px_rgba(255,255,255,0.65)]"
            >
              <Apple className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Listen on Apple Music
            </a>

            {/* Outlined: white border, white text */}
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-black/30 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              <Play className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              Watch on YouTube
            </a>
          </motion.div>

          {/* Quick stats strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid w-full max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            {[
              { k: "Original", v: "Releases" },
              { k: "Live", v: "Performances" },
              { k: "Music", v: "Direction" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-lg font-semibold text-white sm:text-xl">
                  {s.k}
                </dt>
                <dd className="text-[11px] uppercase tracking-widest2 text-gray-400">
                  {s.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] uppercase tracking-widest2 text-gray-500 transition-colors hover:text-white lg:inline-flex"
      >
        Scroll
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </a>
    </section>
  );
}
