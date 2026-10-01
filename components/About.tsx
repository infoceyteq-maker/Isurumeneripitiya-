import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { GraduationCap, Mic2, SlidersHorizontal } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

/**
 * Portrait for the About section — fully automatic.
 *
 * This is a Server Component, so we can simply check whether the photo exists
 * on disk at render/build time:
 *   • file present  → two-column layout (portrait left, bio right)
 *   • file missing  → clean, image-free text layout (no broken image, ever)
 *
 * ▶ To show the real photo: just drop it at
 *      /public/images/about-image.jpg      (4:5 portrait works best)
 *   and restart / redeploy. No code changes required.
 *   .jpg, .jpeg, .png and .webp are all detected.
 */
const CANDIDATES = [
  "/images/about-image.jpg",
  "/images/about-image.jpeg",
  "/images/about-image.png",
  "/images/about-image.webp",
];

function findAboutImage(): string | null {
  for (const rel of CANDIDATES) {
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}

/** Short list of disciplines rendered as cards under the bio. */
const disciplines = [
  {
    icon: Mic2,
    title: "Live Performance",
    copy: "Stage shows, concerts and private events across Sri Lanka.",
  },
  {
    icon: SlidersHorizontal,
    title: "Music Direction",
    copy: "Arranging, directing and shaping the final sound of a production.",
  },
  {
    icon: GraduationCap,
    title: "Music Classes",
    copy: "Vocal and theory coaching for students of every level.",
  },
];

/**
 * About
 * Biography of the artist.
 *
 * Layout adapts to whether a portrait is available:
 *  - with `aboutImage`  → two columns (portrait left, bio right), stacked on mobile.
 *  - without            → a centred, typographic text layout.
 */
export default function About() {
  const aboutImage = findAboutImage();
  const hasImage = Boolean(aboutImage);

  return (
    <section
      id="about"
      className="relative border-t border-gray-800 bg-black px-6 py-20 sm:px-8 md:py-28"
    >
      <div
        className={
          hasImage
            ? "mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-20"
            : "mx-auto max-w-3xl"
        }
      >
        {/* ---------- Portrait (only when an image is set) ---------- */}
        {hasImage && (
          <Reveal from="left">
            <figure className="group relative mx-auto w-full max-w-md md:max-w-none">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 rounded-2xl border border-gray-800/70 transition-colors duration-500 group-hover:border-gray-700 sm:-inset-4"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gray-800 bg-black shadow-2xl shadow-black/80">
                <Image
                  src={aboutImage as string}
                  alt={`${site.fullName} — ${site.role}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                />
              </div>
              <figcaption className="mt-4 text-center text-[11px] uppercase tracking-widest2 text-gray-500 md:text-left">
                {site.fullName} · {site.location}
              </figcaption>
            </figure>
          </Reveal>
        )}

        {/* ---------- Biography ---------- */}
        <div className={hasImage ? "" : "text-center"}>
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gray-500">
              About the artist
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              About Isuru
            </h2>

            {/* Accent bar */}
            <div
              className={`mb-6 mt-5 h-1 w-16 rounded-full bg-gray-500 ${
                hasImage ? "" : "mx-auto"
              }`}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className={`space-y-5 text-base leading-relaxed text-gray-400 ${
                hasImage ? "" : "text-left sm:text-center"
              }`}
            >
              <p>
                <span className="font-medium text-white">
                  Isuru Meneripitiya
                </span>{" "}
                is a passionate Singer and Music Director based in Ginigathhena,
                Sri Lanka. Music, for him, has never been a profession first —
                it began as a conversation between a voice and a guitar in the
                quiet of the hill country, and it has stayed that honest ever
                since.
              </p>

              <p>
                His work is defined by a dedication to{" "}
                <span className="text-gray-200">soulful music</span>: melodies
                that carry weight, arrangements that leave room to breathe, and
                vocals that serve the lyric rather than overpower it. As a music
                director he shapes every layer of a record — composition,
                instrumentation and the balance between restraint and release —
                blending traditional Sri Lankan melody with contemporary studio
                craft.
              </p>

              <p>
                Beyond the studio, Isuru is a committed teacher. Through his{" "}
                <span className="text-gray-200">music classes</span> he mentors
                young vocalists and musicians in technique, theory and stage
                confidence, passing on the discipline behind the art. On stage,
                his <span className="text-gray-200">live performances</span> —
                from intimate acoustic sessions to full-band concerts — are
                where that craft truly comes alive.
              </p>

              <p>
                His original music is available worldwide on Apple Music and
                iTunes, with music videos and live sessions published on his
                official YouTube channel.
              </p>
            </div>
          </Reveal>

          {/* Disciplines */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal key={d.title} delay={0.15 + i * 0.08}>
                <div className="h-full rounded-xl border border-gray-800 bg-neutral-950 p-5 text-left transition-colors duration-300 hover:border-gray-600">
                  <d.icon className="h-5 w-5 text-gray-400" aria-hidden />
                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    {d.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
