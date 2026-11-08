
// src/components/VenueSection.jsx

import { motion } from "motion/react";
import {
  MapPin,
  Navigation,
  Car,
  Shirt,
  Flower2,
  Heart,
  MapPinned,
} from "lucide-react";
import { weddingData } from "../config/weddingData";

const VenueSection = () => {
  const venue = weddingData.venue;

  const openDirections = () => {
    const mapUrl =
      venue.mapLink && venue.mapLink !== "https://maps.google.com"
        ? venue.mapLink
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            venue.address
          )}`;

    window.open(mapUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="venue"
      className="relative overflow-hidden bg-[#FFFaf0] px-5 py-20 sm:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#F8E1E7]/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3 text-[#C9A227]">
            <span className="h-px w-12 bg-[#C9A227]/60" />
            <Flower2 size={23} />
            <span className="h-px w-12 bg-[#C9A227]/60" />
          </div>

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#5C4A3D]">
            Join us at our celebration
          </p>

          <h2 className="font-serif text-3xl text-[#6B0F1A] sm:text-5xl">
            Wedding Venue
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#5C4A3D] sm:text-base">
            We would be delighted to celebrate this special
            occasion with you at our wedding venue.
          </p>

          <p className="mt-4 text-xl text-[#C9A227]">
            ଆପଣଙ୍କୁ ସ୍ୱାଗତ
          </p>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl border border-[#C9A227]/30 bg-[#FDF6E9] shadow-xl shadow-[#6B0F1A]/10"
        >

          {/* Venue Image */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#6B0F1A] via-[#8E3842] to-[#C9A227] sm:h-80">

            {venue.image ? (
              <img
                src={venue.image}
                alt={venue.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-5 text-center text-[#FFFaf0]">
                <MapPinned size={55} strokeWidth={1} />
                <p className="mt-5 font-serif text-3xl sm:text-4xl">
                  {venue.name}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#FFFaf0]/80">
                  Wedding Celebration Venue
                </p>
              </div>
            )}

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/40 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-serif text-2xl text-white sm:text-3xl">
                {venue.name}
              </p>
            </div>

          </div>

          {/* Venue Information */}
          <div className="grid grid-cols-1 gap-8 p-6 sm:p-9 md:grid-cols-2 md:gap-12">

            {/* Address Details */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8E1E7]">
                  <MapPin size={21} className="text-[#6B0F1A]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#C9A227]">
                    Our Location
                  </p>
                  <h3 className="font-serif text-xl text-[#6B0F1A]">
                    Find the Venue
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[#5C4A3D]">
                {venue.address}
              </p>

              <button
                onClick={openDirections}
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#6B0F1A] px-6 py-3 text-sm font-medium text-[#FFFaf0] transition-all hover:bg-[#4A0E14] active:scale-95"
              >
                <Navigation size={17} />
                Get Directions
              </button>
            </div>

            {/* Additional Information */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8E1E7]">
                  <Heart size={21} className="text-[#6B0F1A]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#C9A227]">
                    Guest Information
                  </p>
                  <h3 className="font-serif text-xl text-[#6B0F1A]">
                    Before You Arrive
                  </h3>
                </div>
              </div>

              {/* Parking */}
              <div className="mb-5 flex items-start gap-3">
                <Car
                  size={20}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <div>
                  <p className="text-sm font-medium text-[#6B0F1A]">
                    Parking
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#5C4A3D]">
                    {venue.notes?.toLowerCase().includes("parking")
                      ? "Parking information: " + venue.notes
                      : venue.notes || "Please contact the family for parking details."}
                  </p>
                </div>
              </div>

              {/* Dress Code */}
              <div className="flex items-start gap-3">
                <Shirt
                  size={20}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <div>
                  <p className="text-sm font-medium text-[#6B0F1A]">
                    Dress Code
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#5C4A3D]">
                    Traditional Indian or formal attire is preferred.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Bottom Invitation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <Heart
            size={22}
            className="mx-auto mb-4 fill-[#F8E1E7] text-[#6B0F1A]"
          />

          <p className="font-serif text-lg text-[#6B0F1A] sm:text-xl">
            We can't wait to welcome you!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default VenueSection;
