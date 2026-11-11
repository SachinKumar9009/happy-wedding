
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
    <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C6A04A]" />
    <Flower2 size={17} className="text-[#C6A04A]" />
    <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C6A04A]" />
  </div>
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

          <p className="mb-3 mt-6 text-[11px] font-light uppercase tracking-[0.35em] text-[#E8CA82]/80">
            Join Us at Our Celebration
          </p>

          <h2 className="font-serif text-3xl tracking-wide text-[#E8CA82] sm:text-5xl">
            Wedding Venue
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#C6A04A] to-transparent" />

          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-[#F3E8CF]/75 sm:text-base">
            We would be delighted to celebrate this special
            occasion with you at our wedding venue.
          </p>

          <p className="mt-5 font-serif text-xl tracking-[0.2em] text-[#C6A04A]">
            ଆପଣଙ୍କୁ ସ୍ୱାଗତ
          </p>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl border border-[#C6A04A]/40 bg-gradient-to-br from-[#1C3525] via-[#14251C] to-[#102319] shadow-2xl shadow-black/40"
        >

          {/* Venue Image */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#1C3525] via-[#102319] to-[#C6A04A]/20 sm:h-96">

            {venue.image ? (
              <img
                src={venue.image}
                alt={venue.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-5 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#C6A04A]/50 bg-[#C6A04A]/10">
                  <MapPinned
                    size={48}
                    strokeWidth={1}
                    className="text-[#E8CA82]"
                  />
                </div>

                <p className="mt-5 font-serif text-3xl text-[#F3E8CF] sm:text-4xl">
                  {venue.name}
                </p>

                <p className="mt-3 text-[10px] font-light uppercase tracking-[0.3em] text-[#C6A04A]">
                  Wedding Celebration Venue
                </p>
              </div>
            )}

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B16] via-[#0D1B16]/30 to-transparent" />

            {/* Image Top Ornament */}
            <div className="absolute left-1/2 top-5 flex -translate-x-1/2 items-center gap-3 text-[#E8CA82]">
              <span className="h-px w-8 bg-[#C6A04A]/70" />
              <Crown size={21} />
              <span className="h-px w-8 bg-[#C6A04A]/70" />
            </div>

            {/* Venue Name */}
            <div className="absolute bottom-6 left-5 right-5 text-center sm:bottom-8">
              <p className="mb-2 text-[10px] font-light uppercase tracking-[0.3em] text-[#E8CA82]/80">
                The Celebration Awaits
              </p>

              <h3 className="font-serif text-2xl tracking-wide text-[#E8CA82] sm:text-4xl">
                {venue.name}
              </h3>

              <div className="mt-4">
                <GoldDivider />
              </div>
            </div>
          </div>

          {/* Venue Information */}
          <div className="grid grid-cols-1 gap-9 p-6 sm:p-9 md:grid-cols-2 md:gap-12">

            {/* Location Details */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C6A04A]/40 bg-[#0D1B16]">
                  <MapPin size={21} className="text-[#E8CA82]" />
                </div>

                <div>
                  <p className="text-[10px] font-light uppercase tracking-[0.25em] text-[#C6A04A]/80">
                    Our Location
                  </p>

                  <h3 className="font-serif text-xl tracking-wide text-[#E8CA82]">
                    Find the Venue
                  </h3>
                </div>
              </div>

              <div className="rounded-xl border border-[#C6A04A]/20 bg-[#0D1B16]/50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles size={14} className="text-[#C6A04A]" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#C6A04A]">
                    Venue Address
                  </p>
                </div>

                <p className="text-sm font-light leading-relaxed text-[#F3E8CF]/80">
                  {venue.address}
                </p>
              </div>

              <button
                onClick={openDirections}
                className="group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C6A04A]/70 bg-gradient-to-r from-[#C6A04A] via-[#E8CA82] to-[#C6A04A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#102319] shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(198,160,74,0.3)] active:scale-95"
              >
                <Navigation size={17} />
                Get Directions
                <Navigation
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Guest Information */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C6A04A]/40 bg-[#0D1B16]">
                  <Heart
                    size={21}
                    className="fill-[#C6A04A]/20 text-[#E8CA82]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-light uppercase tracking-[0.25em] text-[#C6A04A]/80">
                    Guest Information
                  </p>

                  <h3 className="font-serif text-xl tracking-wide text-[#E8CA82]">
                    Before You Arrive
                  </h3>
                </div>
              </div>

              {/* Parking */}
              <div className="mb-4 flex items-start gap-4 rounded-xl border border-[#C6A04A]/20 bg-[#0D1B16]/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C6A04A]/30 bg-[#C6A04A]/10">
                  <Car size={19} className="text-[#E8CA82]" />
                </div>

                <div>
                  <p className="text-sm font-medium tracking-wide text-[#E8CA82]">
                    Parking
                  </p>

                  <p className="mt-2 text-sm font-light leading-relaxed text-[#F3E8CF]/70">
                    {venue.notes?.toLowerCase().includes("parking")
                      ? "Parking information: " + venue.notes
                      : venue.notes || "Please contact the family for parking details."}
                  </p>
                </div>
              </div>

              {/* Dress Code */}
              <div className="flex items-start gap-4 rounded-xl border border-[#C6A04A]/20 bg-[#0D1B16]/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C6A04A]/30 bg-[#C6A04A]/10">
                  <Shirt size={19} className="text-[#E8CA82]" />
                </div>

                <div>
                  <p className="text-sm font-medium tracking-wide text-[#E8CA82]">
                    Dress Code
                  </p>

                  <p className="mt-2 text-sm font-light leading-relaxed text-[#F3E8CF]/70">
                    Traditional Indian or formal attire is preferred.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Card Bottom Ornament */}
          <div className="flex items-center justify-center gap-3 border-t border-[#C6A04A]/20 py-5">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6A04A]/60" />
            <Flower2 size={17} className="text-[#C6A04A]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6A04A]/60" />
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
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6A04A]/70" />
            <Heart
              size={20}
              className="fill-[#C6A04A]/20 text-[#C6A04A]"
            />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6A04A]/70" />
          </div>

          <p className="font-serif text-lg tracking-wide text-[#F3E8CF] sm:text-xl">
            We can't wait to welcome you!
          </p>

          <p className="mt-3 text-sm font-light text-[#C6A04A]/80">
            Your presence will make our celebration unforgettable.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default VenueSection;