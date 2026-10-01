"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

/**
 * Contact
 * Contact details (location / email / phone), a WhatsApp CTA and a
 * lightweight booking form.
 *
 * The form is intentionally backend-free: it composes a pre-filled email and
 * hands it to the visitor's mail client. Swap `handleSubmit` for a POST to an
 * API route (or Formspree / Resend) if you later want server-side delivery.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
  };

  const details = [
    {
      icon: MapPin,
      label: "Location",
      value: site.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(site.location)}`,
    },
    { icon: Mail, label: "Email", value: site.email, href: site.emailHref },
    { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  ];

  return (
    <section id="contact" className="relative border-t border-ash-800">
      <div className="section">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Bookings &amp; collaborations.</h2>
          <p className="section-sub">
            Available for live performances, studio sessions, music direction
            and original composition work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          {/* Details + WhatsApp */}
          <div className="flex flex-col gap-4">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08} from="left">
                <a
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card group flex items-center gap-4 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ash-700 bg-black transition-colors duration-300 group-hover:border-white">
                    <d.icon className="h-5 w-5 text-ash-400 transition-colors duration-300 group-hover:text-white" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-widest2 text-ash-500">
                      {d.label}
                    </span>
                    <span className="block truncate text-sm text-white sm:text-base">
                      {d.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.26} from="left">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-ash-700 bg-white p-5 text-black transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.6)]"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-black">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-widest2 text-ash-600">
                      Fastest reply
                    </span>
                    <span className="block text-sm font-semibold sm:text-base">
                      Chat on WhatsApp
                    </span>
                  </span>
                </span>
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Enquiry form */}
          <Reveal from="right">
            <form
              onSubmit={handleSubmit}
              className="card space-y-5 p-6 sm:p-8"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Your name"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[11px] uppercase tracking-widest2 text-ash-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your event, project or collaboration…"
                  className="mt-2 w-full resize-none rounded-xl border border-ash-700 bg-black px-4 py-3 text-sm text-white placeholder:text-ash-600 outline-none transition-colors focus:border-white"
                />
              </div>

              <button type="submit" className="btn-primary group w-full">
                Send message
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-center text-[11px] text-ash-500">
                Opens your email client · or message directly on WhatsApp
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Small labelled input used by the contact form. */
function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[11px] uppercase tracking-widest2 text-ash-400"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-ash-700 bg-black px-4 py-3 text-sm text-white placeholder:text-ash-600 outline-none transition-colors focus:border-white"
      />
    </div>
  );
}
