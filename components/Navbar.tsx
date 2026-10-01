"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, site } from "@/lib/site";

/**
 * Navbar
 * Sticky, glassmorphic navigation bar (translucent black/ash + backdrop blur).
 * - Becomes more opaque after the user scrolls.
 * - Highlights the section currently in view.
 * - Collapses into an animated mobile drawer under `md`.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Elevate the bar once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: mark the nav link of the section currently on screen
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ash-800/80 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/55"
          : "border-b border-transparent bg-black/20 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-8"
      >
        {/* Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-sm font-semibold tracking-widest2 uppercase text-white"
        >
          <span className="h-5 w-[2px] bg-white transition-all duration-300 group-hover:h-6" />
          {site.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  active === link.href
                    ? "text-white"
                    : "text-ash-300 hover:text-white"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-ash-700 bg-white/5"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={site.socials.appleMusic}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-ash-700 px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black md:inline-flex"
        >
          Listen
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ash-700 text-white transition-colors hover:border-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ash-800 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ash-800/70 py-4 text-base text-ash-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <a
                href={site.socials.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-5 w-full"
              >
                Listen on Apple Music
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
