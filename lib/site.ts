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

/**
 * Video gallery items.
 * ⚠️ Replace each `id` with the real YouTube video ID from @isurumeneripitiya
 * (the part after `watch?v=`). Nothing else needs to change.
 */
export const videos = [
  { id: "dQw4w9WgXcQ", title: "Official Music Video", meta: "Studio Release" },
  { id: "ScMzIvxBSi4", title: "Live Performance", meta: "Stage / Live" },
  { id: "jNQXAC9IVRw", title: "Acoustic Session", meta: "Unplugged" },
  { id: "9bZkp7q19f0", title: "Studio Sessions", meta: "Behind the Scenes" },
  { id: "kJQP7kiw5Fk", title: "Music Direction Reel", meta: "Production" },
  { id: "3JZ_D3ELwOQ", title: "Cover Collection", meta: "Covers" },
] as const;
