import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import VideoGallery from "@/components/VideoGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

/**
 * Home — single-page artist profile.
 * Section order: Hero → About → Music → Videos → Contact → Footer.
 */
export default function Home() {
  // Structured data so search engines understand this is a musician's site
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: site.name,
    alternateName: site.fullName,
    genre: "Sinhala, Pop",
    url: "https://isurumeneripitiya.com",
    image: "/images/hero-bg.jpg",
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ginigathhena",
      addressCountry: "LK",
    },
    sameAs: Object.values(site.socials),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Music />
        <VideoGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
