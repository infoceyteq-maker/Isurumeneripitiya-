import { Mic2, Music4, SlidersHorizontal } from "lucide-react";
import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

/** Short list of disciplines rendered as cards under the bio. */
const disciplines = [
  {
    icon: Mic2,
    title: "Vocals",
    copy: "Lead and backing vocal performance across studio and live settings.",
  },
  {
    icon: SlidersHorizontal,
    title: "Music Direction",
    copy: "Arranging, directing and shaping the final sound of a production.",
  },
  {
    icon: Music4,
    title: "Composition",
    copy: "Original melodies and compositions written for voice and ensemble.",
  },
];

/**
 * About
 * Bio block + a 3-image gallery (/images/about1.jpg … about3.jpg).
 */
export default function About() {
  return (
    <section id="about" className="relative border-t border-ash-800 bg-ink-soft">
      <div className="section">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Gallery */}
          <Reveal from="left" className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <MediaFrame
                src="/images/about1.jpg"
                alt={`${site.name} performing live`}
                ratio="aspect-[3/4]"
                className="col-span-1"
              />
              <div className="flex flex-col gap-4">
                <MediaFrame
                  src="/images/about2.jpg"
                  alt={`${site.name} in the studio`}
                  ratio="aspect-square"
                />
                <MediaFrame
                  src="/images/about3.jpg"
                  alt={`${site.name} portrait`}
                  ratio="aspect-square"
                />
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow">About the artist</p>
              <h2 className="section-title">
                A voice from the hills of Ginigathhena.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-ash-300 sm:text-base">
                <p>
                  <span className="text-white">{site.fullName}</span> — known on
                  stage simply as {site.name} — is a Sri Lankan musician, singer
                  and music director based in {site.location}. His work moves
                  between heartfelt vocal performance and detailed studio
                  craftsmanship, blending traditional Sri Lankan melody with
                  modern production.
                </p>
                <p>
                  As a music director he shapes every layer of a record: the
                  arrangement, the instrumentation, the balance between
                  restraint and release. As a singer he brings a warm, honest
                  tone that carries a lyric without ever overpowering it.
                </p>
                <p>
                  His catalogue is available worldwide on Apple Music and
                  iTunes, with music videos, live sessions and behind-the-scenes
                  footage published on YouTube.
                </p>
              </div>
            </Reveal>

            {/* Disciplines */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {disciplines.map((d, i) => (
                <Reveal key={d.title} delay={0.15 + i * 0.08}>
                  <div className="card h-full p-5">
                    <d.icon className="h-5 w-5 text-ash-400" aria-hidden />
                    <h3 className="mt-4 text-sm font-semibold text-white">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ash-400">
                      {d.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
