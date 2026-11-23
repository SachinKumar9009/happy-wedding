
// // src/components/VenueSection.jsx

// import { motion } from "motion/react";
// import {
//   MapPin,
//   Navigation,
//   Car,
//   Shirt,
//   Flower2,
//   Heart,
//   MapPinned,
// } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const VenueSection = () => {
//   const venue = weddingData.venue;

//   const openDirections = () => {
//     const mapUrl =
//       venue.mapLink && venue.mapLink !== "https://maps.google.com"
//         ? venue.mapLink
//         : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//             venue.address
//           )}`;

//     window.open(mapUrl, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <section
//       id="venue"
//       className="relative overflow-hidden bg-[#FFFaf0] px-5 py-20 sm:py-24"
//     >
//       {/* Background Decorations */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#F8E1E7]/40 blur-3xl" />
//         <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-5xl">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-14 text-center"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3 text-[#C9A227]">
//             <span className="h-px w-12 bg-[#C9A227]/60" />
//             <Flower2 size={23} />
//             <span className="h-px w-12 bg-[#C9A227]/60" />
//           </div>

//           <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#5C4A3D]">
//             Join us at our celebration
//           </p>

//           <h2 className="font-serif text-3xl text-[#6B0F1A] sm:text-5xl">
//             Wedding Venue
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#5C4A3D] sm:text-base">
//             We would be delighted to celebrate this special
//             occasion with you at our wedding venue.
//           </p>

//           <p className="mt-4 text-xl text-[#C9A227]">
//             ଆପଣଙ୍କୁ ସ୍ୱାଗତ
//           </p>
//         </motion.div>

//         {/* Venue Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="overflow-hidden rounded-2xl border border-[#C9A227]/30 bg-[#FDF6E9] shadow-xl shadow-[#6B0F1A]/10"
//         >

//           {/* Venue Image */}
//           <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#6B0F1A] via-[#8E3842] to-[#C9A227] sm:h-80">

//             {venue.image ? (
//               <img
//                 src={venue.image}
//                 alt={venue.name}
//                 loading="lazy"
//                 className="h-full w-full object-cover"
//               />
//             ) : (
//               <div className="flex h-full flex-col items-center justify-center px-5 text-center text-[#FFFaf0]">
//                 <MapPinned size={55} strokeWidth={1} />
//                 <p className="mt-5 font-serif text-3xl sm:text-4xl">
//                   {venue.name}
//                 </p>
//                 <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#FFFaf0]/80">
//                   Wedding Celebration Venue
//                 </p>
//               </div>
//             )}

//             {/* Image Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/40 to-transparent" />

//             <div className="absolute bottom-5 left-5 right-5">
//               <p className="font-serif text-2xl text-white sm:text-3xl">
//                 {venue.name}
//               </p>
//             </div>

//           </div>

//           {/* Venue Information */}
//           <div className="grid grid-cols-1 gap-8 p-6 sm:p-9 md:grid-cols-2 md:gap-12">

//             {/* Address Details */}
//             <div>
//               <div className="mb-5 flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8E1E7]">
//                   <MapPin size={21} className="text-[#6B0F1A]" />
//                 </div>

//                 <div>
//                   <p className="text-xs uppercase tracking-widest text-[#C9A227]">
//                     Our Location
//                   </p>
//                   <h3 className="font-serif text-xl text-[#6B0F1A]">
//                     Find the Venue
//                   </h3>
//                 </div>
//               </div>

//               <p className="text-sm leading-relaxed text-[#5C4A3D]">
//                 {venue.address}
//               </p>

//               <button
//                 onClick={openDirections}
//                 className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#6B0F1A] px-6 py-3 text-sm font-medium text-[#FFFaf0] transition-all hover:bg-[#4A0E14] active:scale-95"
//               >
//                 <Navigation size={17} />
//                 Get Directions
//               </button>
//             </div>

//             {/* Additional Information */}
//             <div>
//               <div className="mb-5 flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8E1E7]">
//                   <Heart size={21} className="text-[#6B0F1A]" />
//                 </div>

//                 <div>
//                   <p className="text-xs uppercase tracking-widest text-[#C9A227]">
//                     Guest Information
//                   </p>
//                   <h3 className="font-serif text-xl text-[#6B0F1A]">
//                     Before You Arrive
//                   </h3>
//                 </div>
//               </div>

//               {/* Parking */}
//               <div className="mb-5 flex items-start gap-3">
//                 <Car
//                   size={20}
//                   className="mt-0.5 shrink-0 text-[#C9A227]"
//                 />

//                 <div>
//                   <p className="text-sm font-medium text-[#6B0F1A]">
//                     Parking
//                   </p>
//                   <p className="mt-1 text-sm leading-relaxed text-[#5C4A3D]">
//                     {venue.notes?.toLowerCase().includes("parking")
//                       ? "Parking information: " + venue.notes
//                       : venue.notes || "Please contact the family for parking details."}
//                   </p>
//                 </div>
//               </div>

//               {/* Dress Code */}
//               <div className="flex items-start gap-3">
//                 <Shirt
//                   size={20}
//                   className="mt-0.5 shrink-0 text-[#C9A227]"
//                 />

//                 <div>
//                   <p className="text-sm font-medium text-[#6B0F1A]">
//                     Dress Code
//                   </p>
//                   <p className="mt-1 text-sm leading-relaxed text-[#5C4A3D]">
//                     Traditional Indian or formal attire is preferred.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </motion.div>

//         {/* Bottom Invitation */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-12 text-center"
//         >
//           <Heart
//             size={22}
//             className="mx-auto mb-4 fill-[#F8E1E7] text-[#6B0F1A]"
//           />

//           <p className="font-serif text-lg text-[#6B0F1A] sm:text-xl">
//             We can't wait to welcome you!
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default VenueSection;










// // src/components/VenueSection.jsx

// import { motion } from "motion/react";
// import {
//   MapPin,
//   Navigation,
//   Car,
//   Shirt,
//   Flower2,
//   Heart,
//   MapPinned,
// } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const VenueSection = () => {
//   const venue = weddingData.venue;

//   const openDirections = () => {
//     const mapUrl =
//       venue.mapLink && venue.mapLink !== "https://maps.google.com"
//         ? venue.mapLink
//         : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//             venue.address
//           )}`;

//     window.open(mapUrl, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <section
//       id="venue"
//       className="relative overflow-hidden bg-[#0A192F] px-5 py-20 sm:py-24 border-b border-[#D4AF37]/20"
//     >
//       {/* Background Ambient Lighting */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//         <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-5xl">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-14 text-center"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3 text-[#D4AF37]">
//             <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
//             <Flower2 size={23} />
//             <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
//           </div>

//           <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#E6C687]/80 font-light">
//             Join us at our celebration
//           </p>

//           <h2 className="font-serif text-3xl text-[#D4AF37] sm:text-5xl tracking-wide">
//             Wedding Venue
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#F4F1EA]/80 sm:text-base font-light">
//             We would be delighted to celebrate this special
//             occasion with you at our wedding venue.
//           </p>

//           <p className="mt-4 text-xl text-[#D4AF37] font-light tracking-widest">
//             ଆପଣଙ୍କୁ ସ୍ୱାଗତ
//           </p>
//         </motion.div>

//         {/* Venue Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#0D1B2A]/80 backdrop-blur-md shadow-2xl shadow-black/40"
//         >

//           {/* Venue Image Area */}
//           <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#0D1B2A] to-[#D4AF37]/40 sm:h-80">

//             {venue.image ? (
//               <img
//                 src={venue.image}
//                 alt={venue.name}
//                 loading="lazy"
//                 className="h-full w-full object-cover"
//               />
//             ) : (
//               <div className="flex h-full flex-col items-center justify-center px-5 text-center text-[#D4AF37]">
//                 <MapPinned size={55} strokeWidth={1} />
//                 <p className="mt-5 font-serif text-3xl sm:text-4xl text-[#F4F1EA]">
//                   {venue.name}
//                 </p>
//                 <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#E6C687]/80 font-light">
//                   Wedding Celebration Venue
//                 </p>
//               </div>
//             )}

//             {/* Image Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/40 to-transparent" />

//             <div className="absolute bottom-5 left-5 right-5">
//               <p className="font-serif text-2xl text-[#D4AF37] sm:text-3xl tracking-wide">
//                 {venue.name}
//               </p>
//             </div>

//           </div>

//           {/* Venue Information */}
//           <div className="grid grid-cols-1 gap-8 p-6 sm:p-9 md:grid-cols-2 md:gap-12">

//             {/* Address Details */}
//             <div>
//               <div className="mb-5 flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A192F]">
//                   <MapPin size={21} className="text-[#D4AF37]" />
//                 </div>

//                 <div>
//                   <p className="text-xs uppercase tracking-widest text-[#E6C687]/80 font-light">
//                     Our Location
//                   </p>
//                   <h3 className="font-serif text-xl text-[#D4AF37] tracking-wide">
//                     Find the Venue
//                   </h3>
//                 </div>
//               </div>

//               <p className="text-sm leading-relaxed text-[#F4F1EA]/80 font-light">
//                 {venue.address}
//               </p>

//               <button
//                 onClick={openDirections}
//                 className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0A192F] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 shadow-lg"
//               >
//                 <Navigation size={17} />
//                 Get Directions
//               </button>
//             </div>

//             {/* Additional Information */}
//             <div>
//               <div className="mb-5 flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A192F]">
//                   <Heart size={21} className="text-[#D4AF37] fill-[#D4AF37]/20" />
//                 </div>

//                 <div>
//                   <p className="text-xs uppercase tracking-widest text-[#E6C687]/80 font-light">
//                     Guest Information
//                   </p>
//                   <h3 className="font-serif text-xl text-[#D4AF37] tracking-wide">
//                     Before You Arrive
//                   </h3>
//                 </div>
//               </div>

//               {/* Parking */}
//               <div className="mb-5 flex items-start gap-3">
//                 <Car
//                   size={20}
//                   className="mt-0.5 shrink-0 text-[#D4AF37]"
//                 />

//                 <div>
//                   <p className="text-sm font-medium text-[#F4F1EA]">
//                     Parking
//                   </p>
//                   <p className="mt-1 text-sm leading-relaxed text-[#F4F1EA]/70 font-light">
//                     {venue.notes?.toLowerCase().includes("parking")
//                       ? "Parking information: " + venue.notes
//                       : venue.notes || "Please contact the family for parking details."}
//                   </p>
//                 </div>
//               </div>

//               {/* Dress Code */}
//               <div className="flex items-start gap-3">
//                 <Shirt
//                   size={20}
//                   className="mt-0.5 shrink-0 text-[#D4AF37]"
//                 />

//                 <div>
//                   <p className="text-sm font-medium text-[#F4F1EA]">
//                     Dress Code
//                   </p>
//                   <p className="mt-1 text-sm leading-relaxed text-[#F4F1EA]/70 font-light">
//                     Traditional Indian or formal attire is preferred.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </motion.div>

//         {/* Bottom Invitation */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-12 text-center"
//         >
//           <Heart
//             size={22}
//             className="mx-auto mb-4 fill-[#D4AF37]/20 text-[#D4AF37]"
//           />

//           <p className="font-serif text-lg text-[#F4F1EA] sm:text-xl tracking-wide">
//             We can't wait to welcome you!
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default VenueSection;






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
  Crown,
  Sparkles,
} from "lucide-react";
import { weddingData } from "../config/weddingData";

const GoldDivider = () => (
  <div className="flex items-center justify-center gap-3">
    <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#E9D7A5] to-[#D5B66F]" />
    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D5B66F]/65 bg-[#F4EFF8]">
      <Flower2 size={15} className="text-[#70558F]" />
    </span>
    <span className="h-px w-12 bg-gradient-to-l from-transparent via-[#E9D7A5] to-[#D5B66F]" />
  </div>
);

const CornerFloralAccent = () => (
  <>
    <svg
      viewBox="0 0 170 170"
      className="pointer-events-none absolute -top-2 -left-2 h-28 w-28 opacity-80 sm:h-36 sm:w-36"
      aria-hidden="true"
    >
      <circle cx="34" cy="34" r="38" fill="#E8B8D0" fillOpacity="0.22" />
      <circle cx="60" cy="28" r="26" fill="#C5B2DA" fillOpacity="0.22" />
      <path
        d="M16 16 C46 30 72 52 94 84"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="40" cy="40" r="9.5" fill="#E8B8D0" fillOpacity="0.8" />
      <circle cx="50" cy="34" r="6.8" fill="#C5B2DA" fillOpacity="0.78" />
      <circle cx="34" cy="50" r="6.8" fill="#DCAAC3" fillOpacity="0.75" />
      <circle cx="40" cy="40" r="2.2" fill="#D5B66F" />
    </svg>

    <svg
      viewBox="0 0 170 170"
      className="pointer-events-none absolute -bottom-2 -right-2 h-28 w-28 -scale-x-100 -scale-y-100 opacity-80 sm:h-36 sm:w-36"
      aria-hidden="true"
    >
      <circle cx="34" cy="34" r="38" fill="#C5B2DA" fillOpacity="0.22" />
      <circle cx="60" cy="28" r="26" fill="#E8B8D0" fillOpacity="0.22" />
      <path
        d="M16 16 C46 30 72 52 94 84"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="40" cy="40" r="9.5" fill="#C5B2DA" fillOpacity="0.8" />
      <circle cx="50" cy="34" r="6.8" fill="#E8B8D0" fillOpacity="0.78" />
      <circle cx="34" cy="50" r="6.8" fill="#DCAAC3" fillOpacity="0.75" />
      <circle cx="40" cy="40" r="2.2" fill="#D5B66F" />
    </svg>
  </>
);

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
      className="relative overflow-hidden border-b border-[#E6D9EA] bg-gradient-to-b from-[#FFFCFA] via-[#FFFFFF] to-[#F4EFF8] px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* Lavender & Blush Watercolor Backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#C5B2DA]/22 blur-[110px]" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E8B8D0]/22 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C5B2DA 1.25px, transparent 1.25px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="absolute inset-3 rounded-3xl border border-[#E6D9EA] sm:inset-7" />
        <div className="absolute inset-5 rounded-2xl border border-[#D5B66F]/30 sm:inset-10" />

        <CornerFloralAccent />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <GoldDivider />

          <p className="mb-3 mt-6 text-[11px] font-medium uppercase tracking-[0.35em] text-[#B69A54]">
            Join Us at Our Celebration
          </p>

          <h2 className="font-serif text-3xl font-medium tracking-wide text-[#70558F] sm:text-5xl">
            Wedding Venue
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#D5B66F] to-transparent" />

          <p className="mx-auto mt-5 max-w-xl text-sm font-normal leading-relaxed text-[#51465B] sm:text-base">
            We would be delighted to celebrate this special
            occasion with you at our wedding venue.
          </p>

          <p className="mt-5 font-serif text-xl tracking-[0.2em] text-[#B69A54]">
            ଆପଣଙ୍କୁ ସ୍ୱାଗତ
          </p>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-[#E6D9EA] bg-gradient-to-br from-[#FFFFFF] via-[#FFFCFA] to-[#F4EFF8] shadow-[0_20px_50px_-18px_rgba(112,85,143,0.22)]"
        >
          {/* Venue Image Showcase */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#EDE5F3] via-[#F4EFF8] to-[#FFFCFA] sm:h-96">
            {venue.image ? (
              <img
                src={venue.image}
                alt={venue.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-5 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D5B66F] bg-[#FFFFFF] shadow-sm">
                  <MapPinned
                    size={46}
                    strokeWidth={1.15}
                    className="text-[#70558F]"
                  />
                </div>

                <p className="mt-5 font-serif text-3xl text-[#70558F] sm:text-4xl">
                  {venue.name}
                </p>

                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#B69A54]">
                  Wedding Celebration Venue
                </p>
              </div>
            )}

            {/* Soft Ivory & Lavender Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFCFA] via-[#FFFCFA]/35 to-transparent" />

            {/* Image Top Crown Badge */}
            <div className="absolute left-1/2 top-5 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#D5B66F]/75 bg-[#FFFFFF]/90 px-4 py-1.5 backdrop-blur-md shadow-sm">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#D5B66F]" />
              <Crown size={18} className="text-[#70558F]" />
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#D5B66F]" />
            </div>

            {/* Venue Name Overlay */}
            <div className="absolute bottom-5 left-5 right-5 text-center sm:bottom-7">
              <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#B69A54]">
                The Celebration Awaits
              </p>

              <h3 className="font-serif text-2xl font-semibold tracking-wide text-[#70558F] sm:text-4xl">
                {venue.name}
              </h3>

              <div className="mt-3">
                <GoldDivider />
              </div>
            </div>
          </div>

          {/* Venue Information */}
          <div className="grid grid-cols-1 gap-9 p-6 sm:p-9 md:grid-cols-2 md:gap-12">
            {/* Location Details */}
            <div>
              <div className="mb-6 flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D5B66F]/70 bg-[#F4EFF8]">
                  <MapPin size={21} className="text-[#70558F]" />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#B69A54]">
                    Our Location
                  </p>

                  <h3 className="font-serif text-xl font-semibold tracking-wide text-[#70558F]">
                    Find the Venue
                  </h3>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E6D9EA] bg-[#FFFFFF]/90 p-5 shadow-[0_10px_25px_-14px_rgba(112,85,143,0.16)]">
                <div className="mb-2.5 flex items-center gap-2">
                  <Sparkles size={14} className="text-[#A58AC5]" />
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B69A54]">
                    Venue Address
                  </p>
                </div>

                <p className="text-sm font-normal leading-relaxed text-[#51465B]">
                  {venue.address}
                </p>
              </div>

              <button
                type="button"
                onClick={openDirections}
                className="group mt-6 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#D5B66F] bg-gradient-to-b from-[#FFFFFF] via-[#F4EFF8] to-[#EDE5F3] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#70558F] shadow-[0_10px_24px_-10px_rgba(112,85,143,0.22),inset_0_0_0_1px_rgba(233,215,165,0.75)] transition-all duration-300 hover:scale-[1.03] hover:border-[#B69A54] active:scale-95"
              >
                <Navigation size={16} className="text-[#B69A54]" />
                Get Directions
                <Navigation
                  size={14}
                  className="text-[#B69A54] transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Guest Information */}
            <div>
              <div className="mb-6 flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D5B66F]/70 bg-[#F4EFF8]">
                  <Heart
                    size={20}
                    className="fill-[#E8B8D0]/65 text-[#70558F]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#B69A54]">
                    Guest Information
                  </p>

                  <h3 className="font-serif text-xl font-semibold tracking-wide text-[#70558F]">
                    Before You Arrive
                  </h3>
                </div>
              </div>

              {/* Parking */}
              <div className="mb-4 flex items-start gap-4 rounded-2xl border border-[#E6D9EA] bg-[#FFFFFF]/90 p-4 shadow-[0_10px_25px_-14px_rgba(112,85,143,0.16)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D5B66F]/65 bg-[#F4EFF8]">
                  <Car size={18} className="text-[#70558F]" />
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wide text-[#70558F]">
                    Parking
                  </p>

                  <p className="mt-1.5 text-sm font-normal leading-relaxed text-[#51465B]">
                    {venue.notes?.toLowerCase().includes("parking")
                      ? "Parking information: " + venue.notes
                      : venue.notes || "Please contact the family for parking details."}
                  </p>
                </div>
              </div>

              {/* Dress Code */}
              <div className="flex items-start gap-4 rounded-2xl border border-[#E6D9EA] bg-[#FFFFFF]/90 p-4 shadow-[0_10px_25px_-14px_rgba(112,85,143,0.16)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D5B66F]/65 bg-[#F4EFF8]">
                  <Shirt size={18} className="text-[#70558F]" />
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wide text-[#70558F]">
                    Dress Code
                  </p>

                  <p className="mt-1.5 text-sm font-normal leading-relaxed text-[#51465B]">
                    Traditional Indian or formal attire is preferred.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Bottom Ornament */}
          <div className="flex items-center justify-center gap-3 border-t border-[#E6D9EA] bg-[#F4EFF8]/50 py-5">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D5B66F]" />
            <Flower2 size={17} className="text-[#A58AC5]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D5B66F]" />
          </div>
        </motion.div>

        {/* Bottom Invitation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D5B66F]" />
            <Heart
              size={20}
              className="fill-[#E8B8D0]/65 text-[#70558F]"
            />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D5B66F]" />
          </div>

          <p className="font-serif text-lg tracking-wide text-[#70558F] sm:text-xl">
            We can&apos;t wait to welcome you!
          </p>

          <p className="mt-2.5 text-sm font-normal text-[#82758A]">
            Your presence will make our celebration unforgettable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;