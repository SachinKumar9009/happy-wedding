
// src/components/EventsSection.jsx

import { motion } from "motion/react";
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowUpRight,
  Flower2,
  Heart,
  Sparkles,
} from "lucide-react";
import { weddingData } from "../config/weddingData";

const eventIcons = {
  haldi: "🌼",
  mehendi: "🌿",
  sangeet: "🎶",
  wedding: "💍",
  reception: "🥂",
};

const EventsSection = () => {
  const events = weddingData.events || [];

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#FDF6E9] px-5 py-20 sm:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#F8E1E7]/40 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3 text-[#C9A227]">
            <span className="h-px w-12 bg-[#C9A227]/60" />
            <Flower2 size={23} />
            <span className="h-px w-12 bg-[#C9A227]/60" />
          </div>

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#5C4A3D]">
            Save the dates
          </p>

          <h2 className="font-serif text-3xl text-[#6B0F1A] sm:text-5xl">
            Wedding Celebrations
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#5C4A3D] sm:text-base">
            From joyful celebrations to the sacred wedding rituals,
            we would love to have you with us at every special moment.
          </p>

          <p className="mt-4 text-xl text-[#C9A227]">
            ଶୁଭ ମୁହୂର୍ତ୍ତ
          </p>
        </motion.div>

        {/* Events Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[#C9A227]/50 sm:left-6" />

          <div className="space-y-8">

            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="relative flex gap-5 sm:gap-7"
              >

                {/* Timeline Icon */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/70 bg-[#FFFaf0] text-lg shadow-md sm:h-12 sm:w-12">
                  {eventIcons[event.id] || "✨"}
                </div>

                {/* Event Card */}
                <div className="min-w-0 flex-1 rounded-xl border border-[#C9A227]/30 bg-[#FFFaf0] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">

                  {/* Event Header */}
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">

                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#C9A227]">
                        Celebration {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="font-serif text-xl leading-snug text-[#6B0F1A] sm:text-2xl">
                        {event.name}
                      </h3>

                      {event.nameOdia && (
                        <p className="mt-1 text-sm text-[#9B7620]">
                          {event.nameOdia}
                        </p>
                      )}
                    </div>

                    <Sparkles
                      size={19}
                      className="shrink-0 text-[#C9A227]"
                    />
                  </div>

                  {/* Date and Time */}
                  <div className="mb-4 grid grid-cols-1 gap-3 rounded-lg bg-[#FDF6E9] p-3 sm:grid-cols-2">

                    <div className="flex items-center gap-3">
                      <CalendarDays
                        size={19}
                        className="shrink-0 text-[#C9A227]"
                      />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-[#5C4A3D]">
                          Date
                        </p>
                        <p className="text-sm font-medium text-[#6B0F1A]">
                          {event.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock
                        size={19}
                        className="shrink-0 text-[#C9A227]"
                      />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-[#5C4A3D]">
                          Time
                        </p>
                        <p className="text-sm font-medium text-[#6B0F1A]">
                          {event.time}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-[#5C4A3D]">
                    {event.description}
                  </p>

                  {/* Venue */}
                  <div className="mb-5 flex items-start gap-3">
                    <MapPin
                      size={19}
                      className="mt-0.5 shrink-0 text-[#C9A227]"
                    />

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#6B0F1A]">
                        {event.venue}
                      </p>

                      <p className="mt-1 break-words text-xs leading-relaxed text-[#5C4A3D]">
                        {event.address}
                      </p>
                    </div>
                  </div>

                  {/* Google Maps Button */}
                  {event.mapLink && (
                    <a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#6B0F1A] px-5 py-3 text-xs font-medium tracking-wide text-[#FFFaf0] transition-colors hover:bg-[#4A0E14] active:scale-95"
                    >
                      <MapPin size={15} />
                      Get Directions
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Heart
            size={22}
            className="mx-auto mb-4 fill-[#F8E1E7] text-[#6B0F1A]"
          />

          <p className="font-serif text-lg text-[#6B0F1A] sm:text-xl">
            Your presence will make our celebrations more special.
          </p>

          <p className="mt-2 text-sm text-[#5C4A3D]">
            We look forward to celebrating with you!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default EventsSection;
