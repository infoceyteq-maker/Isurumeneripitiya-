"use client";

import { motion } from "framer-motion";
import { Apple, ArrowDown, Play, MapPin } from "lucide-react";
import MediaFrame from "./MediaFrame";
import { site } from "@/lib/site";

/**
 * Hero
 * Full-height opening statement: name, tagline, two primary CTAs
 * (Apple Music + YouTube) and the main cover photo (/images/hero.jpg).
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28"
    >
      {/* Ambient background: radial ash glow + fine grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-ash-700/25 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-ash-800/40 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1c1c1c 1px, transparent 1px), linear-gradient(to bottom, #1c1c1c 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 35%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          }}
        />
      </div>

      <div className="section grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-ash-700 bg-white/[0.03] px-4 py-1.5 text-[11px] uppercase tracking-widest2 text-ash-300"
          >
            <MapPin className="h-3.5 w-3.5" />
            {site.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Isuru
            <br />
            <span className="bg-gradient-to-r from-white via-ash-200 to-ash-500 bg-clip-text text-transparent">
              Meneripitiya
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ash-300 sm:text-lg"
          >
            <span className="text-white">Singer &amp; Music Director</span> —
            crafting melodies, arrangements and productions rooted in Sri Lankan
            soul with a contemporary edge.
          </motion.p>

          {/* Primary calls to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={site.socials.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <Apple className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Listen on Apple Music
            </a>
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group"
            >
              <Play className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              Watch on YouTube
            </a>
          </motion.div>

          {/* Quick stats strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ash-800 pt-6"
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
                <dd className="text-[11px] uppercase tracking-widest2 text-ash-400">
                  {s.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Cover photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-ash-800/80" />
          <MediaFrame
            src="/images/hero.jpg"
            alt={`${site.fullName} — ${site.role}`}
            ratio="aspect-[4/5]"
            priority
          />
          {/* Floating caption chip */}
          <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-ash-700 bg-black/80 px-4 py-3 backdrop-blur-md sm:left-8 sm:right-auto">
            <p className="text-[11px] uppercase tracking-widest2 text-ash-400">
              Artist
            </p>
            <p className="text-sm font-medium text-white">{site.fullName}</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] uppercase tracking-widest2 text-ash-500 transition-colors hover:text-white lg:inline-flex"
      >
        Scroll
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </a>
    </section>
  );
}
