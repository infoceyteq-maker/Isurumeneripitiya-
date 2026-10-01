"use client";

import { ImageIcon } from "lucide-react";
import { useState } from "react";

/**
 * MediaFrame
 * Displays a photo and gracefully degrades to a styled "drop your image here"
 * placeholder if the file does not exist yet (e.g. before /images/hero.jpg
 * has been added). Keeps the layout pixel-perfect either way.
 */
type MediaFrameProps = {
  src: string;
  alt: string;
  /** Tailwind aspect ratio class, e.g. "aspect-[4/5]". */
  ratio?: string;
  className?: string;
  priority?: boolean;
};

export default function MediaFrame({
  src,
  alt,
  ratio = "aspect-[4/5]",
  className = "",
  priority = false,
}: MediaFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`group relative isolate overflow-hidden rounded-2xl border border-ash-800 bg-ink-card ${ratio} ${className}`}
    >
      {!failed ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale-[25%] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
        />
      ) : (
        // Fallback placeholder – tells you exactly which file to drop in.
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-ash-gradient p-6 text-center">
          <ImageIcon className="h-7 w-7 text-ash-500" aria-hidden />
          <p className="text-xs font-medium uppercase tracking-widest2 text-ash-400">
            Add photo
          </p>
          <code className="rounded-md border border-ash-700 bg-black/60 px-2 py-1 text-[11px] text-ash-300">
            {src}
          </code>
        </div>
      )}

      {/* Subtle vignette so text placed over images stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
}
