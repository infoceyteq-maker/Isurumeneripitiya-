/**
 * Single source of truth for all artist data.
 * Update values here and they propagate across the whole site.
 */

export const site = {
  name: "Isuru Meneripitiya",
  fullName: "Isuru Chaturanga Meneripitiya",
  role: "Singer & Music Director",
  category: "Musician — Singer / Music Director",
  location: "Ginigathhena, Sri Lanka",
  phone: "+94 773704292",
  phoneHref: "tel:+94773704292",
  whatsapp: "https://wa.me/94773704292",
  email: "Isurumeneripitiyai@gmail.com",
  emailHref: "mailto:Isurumeneripitiyai@gmail.com",
  socials: {
    facebook: "https://web.facebook.com/isuru.ravencross",
    instagram: "https://instagram.com/meneripitiyaisuru",
    appleMusic:
      "https://music.apple.com/lk/artist/isuru-meneripitiya/1531632854",
    youtube: "https://youtube.com/@isurumeneripitiya",
  },
} as const;

/** Navigation links – ids must match the section ids rendered on the page. */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * Releases shown in the Music section.
 * Swap `appleUrl` with the direct Apple Music song/album link when available.
 */
export const releases = [
  {
    title: "Sihina Lowak",
    year: "2024",
    type: "Single",
    description:
      "An intimate acoustic ballad built around layered vocal harmonies and a restrained string arrangement.",
    appleUrl: site.socials.appleMusic,
    youtubeUrl: site.socials.youtube,
  },
  {
    title: "Nil Ahase",
    year: "2023",
    type: "Single",
    description:
      "A cinematic pop production blending traditional Sri Lankan melody with modern studio textures.",
    appleUrl: site.socials.appleMusic,
    youtubeUrl: site.socials.youtube,
  },
  {
    title: "Adaren Mage",
    year: "2022",
    type: "Single",
    description:
      "A warm, melodic love song written, arranged and directed in full by Isuru Meneripitiya.",
    appleUrl: site.socials.appleMusic,
    youtubeUrl: site.socials.youtube,
  },
] as const;

/** Direct link to the channel's video tab (used by the gallery CTA). */
export const youtubeVideosUrl =
  "https://www.youtube.com/@isurumeneripitiya/videos";

/**
 * Video gallery items — real uploads from the official channel
 * (@isurumeneripitiya).
 *
 * `id` is the YouTube video ID: the part after `watch?v=`.
 * To add or reorder videos, just edit this array — the grid maps over it.
 */
export const videos = [
  { id: "fgTPYG7A1WE", title: "Nura Denuwan", meta: "Official Video" },
  { id: "uHPfhhq8QQY", title: "Sanda Awith Weediyata", meta: "Official Video" },
  { id: "aClkLvw6Z5M", title: "Nil Warnitha", meta: "Live Performance" },
  { id: "IyLg1kFjvUw", title: "Latest Video", meta: "New Release" },
  { id: "ntRDFsQjw_Y", title: "Nil Warnitha", meta: "Music Video" },
] as const;
