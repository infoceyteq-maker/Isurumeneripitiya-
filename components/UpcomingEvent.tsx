import Image from "next/image";
import { CalendarDays, Clock, Facebook, MapPin, MessageCircle, Ticket } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Event data — edit here to advertise the next show.
 * (Kept local to the component so the whole section is drop-in portable.)
 */
const event = {
  name: "Nil Warnitha — A Soulful Music Evening with Isuru Meneripitiya",
  date: "10th October",
  time: "6.00 PM Onwards",
  venue: "Atelier Cafe, Kandy",
  status: "Limited Seats Available",
  flyer: "/images/event-flyer.jpg",
  ticketsWhatsApp: "https://wa.me/94724690061",
  promoFacebook: "https://web.facebook.com/share/r/19bof8J11n/",
};

/**
 * UpcomingEvent
 * Premium "advertisement" card for the next live performance.
 *
 * Layout: flyer on the left, details + CTAs on the right (desktop);
 * stacked with the flyer on top (mobile).
 * The section sits on #111 so it lifts away from the pure-black page.
 */
export default function UpcomingEvent() {
  return (
    <section
      id="event"
      className="relative border-t border-gray-800 bg-[#111] px-6 py-20 sm:px-8 md:py-28"
    >
      {/* Ambient glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[85%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          {/* The premium card: gradient hairline border + deep shadow */}
          <div className="rounded-3xl bg-gradient-to-br from-gray-700/70 via-gray-800/30 to-transparent p-px shadow-2xl shadow-black/70">
            <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-zinc-900/95 p-6 sm:p-8 md:grid-cols-2 md:gap-12 lg:p-12">
              {/* ---------- Flyer ---------- */}
              <div className="group relative mx-auto w-full max-w-sm md:max-w-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gray-800 bg-black shadow-2xl shadow-black/60">
                  <Image
                    src={event.flyer}
                    alt={`${event.name} — event flyer`}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  />
                </div>

                {/* Floating date chip */}
                <div className="absolute -right-2 -top-3 rounded-xl border border-gray-700 bg-black/90 px-4 py-2 text-center backdrop-blur-sm sm:-right-3">
                  <p className="text-xl font-bold leading-none text-white">10</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest2 text-gray-400">
                    Oct
                  </p>
                </div>
              </div>

              {/* ---------- Details + CTAs ---------- */}
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Upcoming Event
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-white">
                  Nil Warnitha
                  <span className="mt-2 block text-lg font-medium text-gray-300 sm:text-xl">
                    A Soulful Music Evening with Isuru Meneripitiya
                  </span>
                </h2>

                {/* Accent bar */}
                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gray-500 md:mx-0" />

                {/* Date / time / venue */}
                <ul className="mt-7 space-y-4 text-sm sm:text-base">
                  <li className="flex items-center justify-center gap-3 md:justify-start">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-black">
                      <CalendarDays className="h-4 w-4 text-gray-400" />
                    </span>
                    <span className="text-gray-300">
                      <span className="font-medium text-white">
                        {event.date}
                      </span>{" "}
                      <span className="text-gray-600">|</span>{" "}
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-gray-500" />
                        {event.time}
                      </span>
                    </span>
                  </li>

                  <li className="flex items-center justify-center gap-3 md:justify-start">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-black">
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </span>
                    <span className="text-gray-300">{event.venue}</span>
                  </li>
                </ul>

                {/* Status badge */}
                <div className="mt-7 flex justify-center md:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-900/60 bg-red-950/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-red-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    {event.status}
                  </span>
                </div>

                {/* CTAs */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  {/* Primary: white / black text */}
                  <a
                    href={event.ticketsWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_34px_-8px_rgba(255,255,255,0.65)]"
                  >
                    <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    Book Tickets via WhatsApp
                  </a>

                  {/* Secondary: outlined */}
                  <a
                    href={event.promoFacebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    <Facebook className="h-4 w-4" />
                    Watch Promo on Facebook
                  </a>
                </div>

                <p className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500 md:justify-start">
                  <Ticket className="h-3.5 w-3.5" />
                  Reservations confirmed on a first-come basis.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
