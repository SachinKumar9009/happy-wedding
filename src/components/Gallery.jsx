// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import {
//   X,
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   Images,
//   Flower2,
// } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const Gallery = () => {
//   const photos = weddingData.gallery || [];

//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [touchStartX, setTouchStartX] = useState(null);

//   const isLightboxOpen = selectedIndex !== null;

//   const closeLightbox = () => {
//     setSelectedIndex(null);
//   };

//   const showPrevious = () => {
//     setSelectedIndex((current) =>
//       current === null
//         ? null
//         : (current - 1 + photos.length) % photos.length
//     );
//   };

//   const showNext = () => {
//     setSelectedIndex((current) =>
//       current === null
//         ? null
//         : (current + 1) % photos.length
//     );
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     if (!isLightboxOpen) return;

//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") closeLightbox();
//       if (event.key === "ArrowLeft") showPrevious();
//       if (event.key === "ArrowRight") showNext();
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     // Prevent background scrolling
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "";
//     };
//   }, [isLightboxOpen]);

//   // Mobile swipe navigation
//   const handleTouchStart = (event) => {
//     setTouchStartX(event.touches[0].clientX);
//   };

//   const handleTouchEnd = (event) => {
//     if (touchStartX === null) return;

//     const touchEndX = event.changedTouches[0].clientX;
//     const difference = touchStartX - touchEndX;

//     if (Math.abs(difference) > 50) {
//       if (difference > 0) {
//         showNext();
//       } else {
//         showPrevious();
//       }
//     }

//     setTouchStartX(null);
//   };

//   if (photos.length === 0) return null;

//   return (
//     <section
//       id="gallery"
//       className="relative overflow-hidden bg-[#FDF6E9] px-5 py-20 sm:py-24"
//     >
//       {/* Background Decorations */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#F8E1E7]/40 blur-3xl" />
//         <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-6xl">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-12 text-center"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3 text-[#C9A227]">
//             <span className="h-px w-12 bg-[#C9A227]/60" />
//             <Flower2 size={23} />
//             <span className="h-px w-12 bg-[#C9A227]/60" />
//           </div>

//           <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#5C4A3D]">
//             Beautiful moments, forever memories
//           </p>

//           <h2 className="font-serif text-3xl text-[#6B0F1A] sm:text-5xl">
//             Our Memories
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#5C4A3D] sm:text-base">
//             A collection of beautiful moments, happiness,
//             love and memories that make life special.
//           </p>

//           <p className="mt-4 text-xl text-[#C9A227]">
//             ସ୍ମୃତିର କିଛି ମୁହୂର୍ତ୍ତ
//           </p>
//         </motion.div>

//         {/* Photo Count */}
//         <div className="mb-7 flex items-center justify-center gap-2 text-sm text-[#5C4A3D]">
//           <Images size={17} className="text-[#C9A227]" />
//           <span>{photos.length} Beautiful Memories</span>
//         </div>

//         {/* Photo Grid */}
//         <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">

//           {photos.map((photo, index) => (
//             <motion.button
//               key={photo.id}
//               type="button"
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 delay: (index % 3) * 0.1,
//               }}
//               onClick={() => setSelectedIndex(index)}
//               aria-label={`View photo ${index + 1}: ${photo.alt}`}
//               className={`group relative overflow-hidden rounded-xl border border-[#C9A227]/30 bg-[#FFFaf0] text-left shadow-md transition-shadow hover:shadow-xl ${
//                 index === 0
//                   ? "row-span-2 aspect-[3/4]"
//                   : index === 5
//                     ? "row-span-2 aspect-[3/4]"
//                     : "aspect-square"
//               }`}
//             >
//               <img
//                 src={photo.image}
//                 alt={photo.alt}
//                 loading="lazy"
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* Image Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/65 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />

//               {/* Category */}
//               <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
//                 <span className="text-xs font-medium uppercase tracking-widest text-white sm:text-sm">
//                   {photo.category}
//                 </span>

//                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFaf0]/90 text-[#6B0F1A]">
//                   <Heart size={16} />
//                 </div>
//               </div>
//             </motion.button>
//           ))}

//         </div>

//         {/* Bottom Message */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-14 text-center"
//         >
//           <Heart
//             size={22}
//             className="mx-auto mb-4 fill-[#F8E1E7] text-[#6B0F1A]"
//           />

//           <p className="font-serif text-lg text-[#6B0F1A] sm:text-xl">
//             Every picture tells a beautiful story.
//           </p>
//         </motion.div>
//       </div>

//       {/* Full-Screen Lightbox */}
//       <AnimatePresence>
//         {isLightboxOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             onClick={closeLightbox}
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Wedding photo viewer"
//           >
//             {/* Close Button */}
//             <button
//               type="button"
//               onClick={closeLightbox}
//               aria-label="Close gallery"
//               className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
//             >
//               <X size={25} />
//             </button>

//             {/* Previous Button */}
//             <button
//               type="button"
//               onClick={(event) => {
//                 event.stopPropagation();
//                 showPrevious();
//               }}
//               aria-label="Previous photo"
//               className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-5"
//             >
//               <ChevronLeft size={27} />
//             </button>

//             {/* Selected Image */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedIndex}
//                 initial={{ opacity: 0, scale: 0.96 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.96 }}
//                 transition={{ duration: 0.2 }}
//                 onClick={(event) => event.stopPropagation()}
//                 className="flex max-h-[85vh] max-w-5xl flex-col items-center"
//               >
//                 <img
//                   src={photos[selectedIndex].image}
//                   alt={photos[selectedIndex].alt}
//                   className="max-h-[75vh] max-w-full rounded-lg object-contain"
//                 />

//                 <div className="mt-5 text-center">
//                   <p className="text-sm uppercase tracking-widest text-[#C9A227]">
//                     {photos[selectedIndex].category}
//                   </p>

//                   <p className="mt-2 text-sm text-white/80">
//                     {selectedIndex + 1} / {photos.length}
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Next Button */}
//             <button
//               type="button"
//               onClick={(event) => {
//                 event.stopPropagation();
//                 showNext();
//               }}
//               aria-label="Next photo"
//               className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-5"
//             >
//               <ChevronRight size={27} />
//             </button>

//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Gallery;








// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import {
//   X,
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   Images,
//   Flower2,
// } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const Gallery = () => {
//   const photos = weddingData.gallery || [];

//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [touchStartX, setTouchStartX] = useState(null);

//   const isLightboxOpen = selectedIndex !== null;

//   const closeLightbox = () => {
//     setSelectedIndex(null);
//   };

//   const showPrevious = () => {
//     setSelectedIndex((current) =>
//       current === null
//         ? null
//         : (current - 1 + photos.length) % photos.length
//     );
//   };

//   const showNext = () => {
//     setSelectedIndex((current) =>
//       current === null
//         ? null
//         : (current + 1) % photos.length
//     );
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     if (!isLightboxOpen) return;

//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") closeLightbox();
//       if (event.key === "ArrowLeft") showPrevious();
//       if (event.key === "ArrowRight") showNext();
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     // Prevent background scrolling
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "";
//     };
//   }, [isLightboxOpen]);

//   // Mobile swipe navigation
//   const handleTouchStart = (event) => {
//     setTouchStartX(event.touches[0].clientX);
//   };

//   const handleTouchEnd = (event) => {
//     if (touchStartX === null) return;

//     const touchEndX = event.changedTouches[0].clientX;
//     const difference = touchStartX - touchEndX;

//     if (Math.abs(difference) > 50) {
//       if (difference > 0) {
//         showNext();
//       } else {
//         showPrevious();
//       }
//     }

//     setTouchStartX(null);
//   };

//   if (photos.length === 0) return null;

//   return (
//     <section
//       id="gallery"
//       className="relative overflow-hidden bg-[#0A192F] px-5 py-20 sm:py-24 border-b border-[#D4AF37]/20"
//     >
//       {/* Ambient Lighting Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//         <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-6xl">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-12 text-center"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3 text-[#D4AF37]">
//             <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
//             <Flower2 size={23} />
//             <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
//           </div>

//           <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#E6C687]/80 font-light">
//             Beautiful moments, forever memories
//           </p>

//           <h2 className="font-serif text-3xl text-[#D4AF37] sm:text-5xl tracking-wide">
//             Our Memories
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#F4F1EA]/80 sm:text-base font-light">
//             A collection of beautiful moments, happiness,
//             love and memories that make life special.
//           </p>

//           <p className="mt-4 text-xl text-[#D4AF37] font-light tracking-widest">
//             ସ୍ମୃତିର କିଛି ମୁହୂର୍ତ୍ତ
//           </p>
//         </motion.div>

//         {/* Photo Count */}
//         <div className="mb-7 flex items-center justify-center gap-2 text-sm text-[#E6C687]/90 font-light">
//           <Images size={17} className="text-[#D4AF37]" />
//           <span>{photos.length} Beautiful Memories</span>
//         </div>

//         {/* Photo Grid */}
//         <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">

//           {photos.map((photo, index) => (
//             <motion.button
//               key={photo.id}
//               type="button"
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 delay: (index % 3) * 0.1,
//               }}
//               onClick={() => setSelectedIndex(index)}
//               aria-label={`View photo ${index + 1}: ${photo.alt}`}
//               className={`group relative overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#0D1B2A] text-left shadow-lg transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] ${
//                 index === 0
//                   ? "row-span-2 aspect-[3/4]"
//                   : index === 5
//                     ? "row-span-2 aspect-[3/4]"
//                     : "aspect-square"
//               }`}
//             >
//               <img
//                 src={photo.image}
//                 alt={photo.alt}
//                 loading="lazy"
//                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               {/* Image Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

//               {/* Category & Icon */}
//               <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
//                 <span className="text-xs font-light uppercase tracking-widest text-[#F4F1EA] sm:text-sm">
//                   {photo.category}
//                 </span>

//                 <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0D1B2A]/90 text-[#D4AF37]">
//                   <Heart size={16} className="fill-[#D4AF37]/20" />
//                 </div>
//               </div>
//             </motion.button>
//           ))}

//         </div>

//         {/* Bottom Message */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-14 text-center"
//         >
//           <Heart
//             size={22}
//             className="mx-auto mb-4 fill-[#D4AF37]/20 text-[#D4AF37]"
//           />

//           <p className="font-serif text-lg text-[#F4F1EA] sm:text-xl tracking-wide">
//             Every picture tells a beautiful story.
//           </p>
//         </motion.div>
//       </div>

//       {/* Full-Screen Lightbox */}
//       <AnimatePresence>
//         {isLightboxOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             onClick={closeLightbox}
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A192F]/95 backdrop-blur-md p-4"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Wedding photo viewer"
//           >
//             {/* Close Button */}
//             <button
//               type="button"
//               onClick={closeLightbox}
//               aria-label="Close gallery"
//               className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#0D1B2A]/80 text-[#D4AF37] transition hover:bg-[#D4AF37]/20 hover:scale-105"
//             >
//               <X size={23} />
//             </button>

//             {/* Previous Button */}
//             <button
//               type="button"
//               onClick={(event) => {
//                 event.stopPropagation();
//                 showPrevious();
//               }}
//               aria-label="Previous photo"
//               className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#0D1B2A]/80 text-[#D4AF37] transition hover:bg-[#D4AF37]/20 hover:scale-105 sm:left-5"
//             >
//               <ChevronLeft size={25} />
//             </button>

//             {/* Selected Image */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedIndex}
//                 initial={{ opacity: 0, scale: 0.96 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.96 }}
//                 transition={{ duration: 0.2 }}
//                 onClick={(event) => event.stopPropagation()}
//                 className="flex max-h-[85vh] max-w-5xl flex-col items-center"
//               >
//                 <img
//                   src={photos[selectedIndex].image}
//                   alt={photos[selectedIndex].alt}
//                   className="max-h-[75vh] max-w-full rounded-lg border border-[#D4AF37]/30 object-contain shadow-2xl"
//                 />

//                 <div className="mt-5 text-center">
//                   <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-light">
//                     {photos[selectedIndex].category}
//                   </p>

//                   <p className="mt-1 text-xs text-[#E6C687]/80 font-light">
//                     {selectedIndex + 1} / {photos.length}
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Next Button */}
//             <button
//               type="button"
//               onClick={(event) => {
//                 event.stopPropagation();
//                 showNext();
//               }}
//               aria-label="Next photo"
//               className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#0D1B2A]/80 text-[#D4AF37] transition hover:bg-[#D4AF37]/20 hover:scale-105 sm:right-5"
//             >
//               <ChevronRight size={25} />
//             </button>

//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Gallery;







import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Images,
  Flower2,
  Crown,
  Sparkles,
} from "lucide-react";
import { weddingData } from "../config/weddingData";

const GoldDivider = () => (
  <div className="flex items-center justify-center gap-3">
    <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C6A04A]" />
    <Flower2 size={17} className="text-[#C6A04A]" />
    <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C6A04A]" />
  </div>
);

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

  // Keyboard Navigation
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  // Mobile Swipe Navigation
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
      className="relative overflow-hidden border-b border-[#C6A04A]/20 bg-[#0D1B16] px-5 py-20 sm:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#C6A04A]/10 blur-[100px]" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#C6A04A]/10 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #E8CA82 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
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
          <GoldDivider />

          <p className="mb-3 mt-6 text-[11px] font-light uppercase tracking-[0.35em] text-[#E8CA82]/80">
            Beautiful Moments, Forever Memories
          </p>

          <h2 className="font-serif text-3xl tracking-wide text-[#E8CA82] sm:text-5xl">
            Our Memories
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#C6A04A] to-transparent" />

          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-[#F3E8CF]/75 sm:text-base">
            A collection of beautiful moments, happiness,
            love and memories that make life special.
          </p>

          <p className="mt-5 font-serif text-xl tracking-[0.15em] text-[#C6A04A]">
            ସ୍ମୃତିର କିଛି ମୁହୂର୍ତ୍ତ
          </p>
        </motion.div>

        {/* Photo Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-9 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#C6A04A]/40" />

          <div className="flex items-center gap-2 rounded-full border border-[#C6A04A]/30 bg-[#14251C] px-5 py-2">
            <Images size={16} className="text-[#E8CA82]" />
            <span className="text-[10px] font-light uppercase tracking-[0.2em] text-[#F3E8CF]">
              {photos.length} Beautiful Memories
            </span>
          </div>

          <span className="h-px w-8 bg-[#C6A04A]/40" />
        </motion.div>

        {/* Royal Photo Gallery */}
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
              className={`group relative overflow-hidden rounded-xl border border-[#C6A04A]/40 bg-[#14251C] p-1 text-left shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#E8CA82]/80 hover:shadow-[0_10px_30px_rgba(198,160,74,0.15)] ${
                index === 0 || index === 5
                  ? "row-span-2 aspect-[3/4]"
                  : "aspect-square"
              }`}
            >
              {/* Inner Photo Frame */}
              <div className="relative h-full w-full overflow-hidden rounded-lg border border-[#C6A04A]/20">

                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B16]/95 via-[#0D1B16]/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Ornament */}
                <div className="absolute left-3 right-3 top-3 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Sparkles size={16} className="text-[#E8CA82]" />

                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C6A04A]/60 bg-[#0D1B16]/70">
                    <Crown size={13} className="text-[#E8CA82]" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3 sm:p-4">

                  <div className="min-w-0">
                    <p className="mb-1 text-[9px] font-light uppercase tracking-[0.2em] text-[#C6A04A]">
                      Memory {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="truncate text-[10px] font-light uppercase tracking-[0.12em] text-[#F3E8CF] sm:text-xs">
                      {photo.category}
                    </p>
                  </div>

                  <div className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C6A04A]/50 bg-[#14251C]/90 text-[#E8CA82] transition-all duration-300 group-hover:bg-[#C6A04A] group-hover:text-[#102319]">
                    <Heart size={15} className="fill-current" />
                  </div>
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
          className="mt-16 text-center"
        >
          <div className="mb-5">
            <GoldDivider />
          </div>

          <Heart
            size={22}
            className="mx-auto mb-4 fill-[#C6A04A]/20 text-[#C6A04A]"
          />

          <p className="font-serif text-lg tracking-wide text-[#F3E8CF] sm:text-xl">
            Every picture tells a beautiful story.
          </p>

          <p className="mt-3 text-sm font-light text-[#C6A04A]/80">
            Moments may pass, but memories stay forever.
          </p>
        </motion.div>

      </div>

      {/* Full-Screen Royal Lightbox */}
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08120E]/95 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Wedding photo viewer"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A04A]/50 bg-[#14251C]/90 text-[#E8CA82] transition-all duration-300 hover:rotate-90 hover:bg-[#C6A04A]/20 sm:right-7 sm:top-7"
            >
              <X size={23} />
            </button>

            {/* Previous Button */}
            {photos.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A04A]/50 bg-[#14251C]/90 text-[#E8CA82] transition-all duration-300 hover:bg-[#C6A04A]/20 sm:left-5 sm:h-12 sm:w-12"
              >
                <ChevronLeft size={25} />
              </button>
            )}

            {/* Selected Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
                className="flex max-h-[85vh] max-w-5xl flex-col items-center"
              >
                {/* Decorative Image Frame */}
                <div className="rounded-xl border border-[#C6A04A]/60 bg-[#14251C] p-2 shadow-[0_0_50px_rgba(198,160,74,0.12)] sm:p-3">
                  <div className="overflow-hidden rounded-lg border border-[#C6A04A]/25">
                    <img
                      src={photos[selectedIndex].image}
                      alt={photos[selectedIndex].alt}
                      className="max-h-[68vh] max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Image Caption */}
                <div className="mt-5 text-center">
                  <div className="mb-3 flex items-center justify-center gap-2">
                    <span className="h-px w-7 bg-[#C6A04A]/60" />
                    <Flower2 size={15} className="text-[#C6A04A]" />
                    <span className="h-px w-7 bg-[#C6A04A]/60" />
                  </div>

                  <p className="text-xs font-light uppercase tracking-[0.25em] text-[#E8CA82]">
                    {photos[selectedIndex].category}
                  </p>

                  <p className="mt-2 text-[11px] font-light tracking-widest text-[#C6A04A]/70">
                    {String(selectedIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            {photos.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A04A]/50 bg-[#14251C]/90 text-[#E8CA82] transition-all duration-300 hover:bg-[#C6A04A]/20 sm:right-5 sm:h-12 sm:w-12"
              >
                <ChevronRight size={25} />
              </button>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;