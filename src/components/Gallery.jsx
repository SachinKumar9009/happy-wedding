
// src/components/Gallery.jsx

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Images,
  Flower2,
} from "lucide-react";
import { weddingData } from "../config/weddingData";

const Gallery = () => {
  const photos = weddingData.gallery || [];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const isLightboxOpen = selectedIndex !== null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + photos.length) % photos.length
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current + 1) % photos.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  // Mobile swipe navigation
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    setTouchStartX(null);
  };

  if (photos.length === 0) return null;

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#FDF6E9] px-5 py-20 sm:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#F8E1E7]/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3 text-[#C9A227]">
            <span className="h-px w-12 bg-[#C9A227]/60" />
            <Flower2 size={23} />
            <span className="h-px w-12 bg-[#C9A227]/60" />
          </div>

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#5C4A3D]">
            Beautiful moments, forever memories
          </p>

          <h2 className="font-serif text-3xl text-[#6B0F1A] sm:text-5xl">
            Our Memories
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#5C4A3D] sm:text-base">
            A collection of beautiful moments, happiness,
            love and memories that make life special.
          </p>

          <p className="mt-4 text-xl text-[#C9A227]">
            ସ୍ମୃତିର କିଛି ମୁହୂର୍ତ୍ତ
          </p>
        </motion.div>

        {/* Photo Count */}
        <div className="mb-7 flex items-center justify-center gap-2 text-sm text-[#5C4A3D]">
          <Images size={17} className="text-[#C9A227]" />
          <span>{photos.length} Beautiful Memories</span>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">

          {photos.map((photo, index) => (
            <motion.button
              key={photo.id}
              type="button"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
              }}
              onClick={() => setSelectedIndex(index)}
              aria-label={`View photo ${index + 1}: ${photo.alt}`}
              className={`group relative overflow-hidden rounded-xl border border-[#C9A227]/30 bg-[#FFFaf0] text-left shadow-md transition-shadow hover:shadow-xl ${
                index === 0
                  ? "row-span-2 aspect-[3/4]"
                  : index === 5
                    ? "row-span-2 aspect-[3/4]"
                    : "aspect-square"
              }`}
            >
              <img
                src={photo.image}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/65 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />

              {/* Category */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-widest text-white sm:text-sm">
                  {photo.category}
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFaf0]/90 text-[#6B0F1A]">
                  <Heart size={16} />
                </div>
              </div>
            </motion.button>
          ))}

        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center"
        >
          <Heart
            size={22}
            className="mx-auto mb-4 fill-[#F8E1E7] text-[#6B0F1A]"
          />

          <p className="font-serif text-lg text-[#6B0F1A] sm:text-xl">
            Every picture tells a beautiful story.
          </p>
        </motion.div>
      </div>

      {/* Full-Screen Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Wedding photo viewer"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={25} />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-5"
            >
              <ChevronLeft size={27} />
            </button>

            {/* Selected Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={(event) => event.stopPropagation()}
                className="flex max-h-[85vh] max-w-5xl flex-col items-center"
              >
                <img
                  src={photos[selectedIndex].image}
                  alt={photos[selectedIndex].alt}
                  className="max-h-[75vh] max-w-full rounded-lg object-contain"
                />

                <div className="mt-5 text-center">
                  <p className="text-sm uppercase tracking-widest text-[#C9A227]">
                    {photos[selectedIndex].category}
                  </p>

                  <p className="mt-2 text-sm text-white/80">
                    {selectedIndex + 1} / {photos.length}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-5"
            >
              <ChevronRight size={27} />
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
