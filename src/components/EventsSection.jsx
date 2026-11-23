
// // src/components/EventsSection.jsx

// import { motion } from "motion/react";
// import {
//   CalendarDays,
//   Clock,
//   MapPin,
//   ArrowUpRight,
//   Flower2,
//   Heart,
//   Sparkles,
// } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const eventIcons = {
//   haldi: "🌼",
//   mehendi: "🌿",
//   sangeet: "🎶",
//   wedding: "💍",
//   reception: "🥂",
// };

// const EventsSection = () => {
//   const events = weddingData.events || [];

//   return (
//     <section
//       id="events"
//       className="relative overflow-hidden bg-[#FDF6E9] px-5 py-20 sm:py-24"
//     >
//       {/* Background Decorations */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#F8E1E7]/40 blur-3xl" />
//         <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-4xl">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-center"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3 text-[#C9A227]">
//             <span className="h-px w-12 bg-[#C9A227]/60" />
//             <Flower2 size={23} />
//             <span className="h-px w-12 bg-[#C9A227]/60" />
//           </div>

//           <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#5C4A3D]">
//             Save the dates
//           </p>

//           <h2 className="font-serif text-3xl text-[#6B0F1A] sm:text-5xl">
//             Wedding Celebrations
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#5C4A3D] sm:text-base">
//             From joyful celebrations to the sacred wedding rituals,
//             we would love to have you with us at every special moment.
//           </p>

//           <p className="mt-4 text-xl text-[#C9A227]">
//             ଶୁଭ ମୁହୂର୍ତ୍ତ
//           </p>
//         </motion.div>

//         {/* Events Timeline */}
//         <div className="relative">

//           {/* Timeline Line */}
//           <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[#C9A227]/50 sm:left-6" />

//           <div className="space-y-8">

//             {events.map((event, index) => (
//               <motion.div
//                 key={event.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.1,
//                 }}
//                 className="relative flex gap-5 sm:gap-7"
//               >

//                 {/* Timeline Icon */}
//                 <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/70 bg-[#FFFaf0] text-lg shadow-md sm:h-12 sm:w-12">
//                   {eventIcons[event.id] || "✨"}
//                 </div>

//                 {/* Event Card */}
//                 <div className="min-w-0 flex-1 rounded-xl border border-[#C9A227]/30 bg-[#FFFaf0] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">

//                   {/* Event Header */}
//                   <div className="mb-4 flex flex-wrap items-start justify-between gap-3">

//                     <div>
//                       <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#C9A227]">
//                         Celebration {String(index + 1).padStart(2, "0")}
//                       </p>

//                       <h3 className="font-serif text-xl leading-snug text-[#6B0F1A] sm:text-2xl">
//                         {event.name}
//                       </h3>

//                       {event.nameOdia && (
//                         <p className="mt-1 text-sm text-[#9B7620]">
//                           {event.nameOdia}
//                         </p>
//                       )}
//                     </div>

//                     <Sparkles
//                       size={19}
//                       className="shrink-0 text-[#C9A227]"
//                     />
//                   </div>

//                   {/* Date and Time */}
//                   <div className="mb-4 grid grid-cols-1 gap-3 rounded-lg bg-[#FDF6E9] p-3 sm:grid-cols-2">

//                     <div className="flex items-center gap-3">
//                       <CalendarDays
//                         size={19}
//                         className="shrink-0 text-[#C9A227]"
//                       />
//                       <div>
//                         <p className="text-[10px] uppercase tracking-wider text-[#5C4A3D]">
//                           Date
//                         </p>
//                         <p className="text-sm font-medium text-[#6B0F1A]">
//                           {event.date}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <Clock
//                         size={19}
//                         className="shrink-0 text-[#C9A227]"
//                       />
//                       <div>
//                         <p className="text-[10px] uppercase tracking-wider text-[#5C4A3D]">
//                           Time
//                         </p>
//                         <p className="text-sm font-medium text-[#6B0F1A]">
//                           {event.time}
//                         </p>
//                       </div>
//                     </div>

//                   </div>

//                   {/* Description */}
//                   <p className="mb-5 text-sm leading-relaxed text-[#5C4A3D]">
//                     {event.description}
//                   </p>

//                   {/* Venue */}
//                   <div className="mb-5 flex items-start gap-3">
//                     <MapPin
//                       size={19}
//                       className="mt-0.5 shrink-0 text-[#C9A227]"
//                     />

//                     <div className="min-w-0">
//                       <p className="text-xs font-semibold text-[#6B0F1A]">
//                         {event.venue}
//                       </p>

//                       <p className="mt-1 break-words text-xs leading-relaxed text-[#5C4A3D]">
//                         {event.address}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Google Maps Button */}
//                   {event.mapLink && (
//                     <a
//                       href={event.mapLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#6B0F1A] px-5 py-3 text-xs font-medium tracking-wide text-[#FFFaf0] transition-colors hover:bg-[#4A0E14] active:scale-95"
//                     >
//                       <MapPin size={15} />
//                       Get Directions
//                       <ArrowUpRight size={15} />
//                     </a>
//                   )}

//                 </div>
//               </motion.div>
//             ))}

//           </div>
//         </div>

//         {/* Bottom Message */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-16 text-center"
//         >
//           <Heart
//             size={22}
//             className="mx-auto mb-4 fill-[#F8E1E7] text-[#6B0F1A]"
//           />

//           <p className="font-serif text-lg text-[#6B0F1A] sm:text-xl">
//             Your presence will make our celebrations more special.
//           </p>

//           <p className="mt-2 text-sm text-[#5C4A3D]">
//             We look forward to celebrating with you!
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default EventsSection;








// // src/components/EventsSection.jsx

// import { motion } from "motion/react";
// import {
//   CalendarDays,
//   Clock,
//   MapPin,
//   ArrowUpRight,
//   Flower2,
//   Heart,
//   Sparkles,
// } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const eventIcons = {
//   haldi: "🌼",
//   mehendi: "🌿",
//   sangeet: "🎶",
//   wedding: "💍",
//   reception: "🥂",
// };

// const EventsSection = () => {
//   const events = weddingData.events || [];

//   return (
//     <section
//       id="events"
//       className="relative overflow-hidden bg-[#0A192F] px-5 py-20 sm:py-24 border-b border-[#D4AF37]/20"
//     >
//       {/* Ambient Lighting Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//         <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-4xl">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-center"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3 text-[#D4AF37]">
//             <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
//             <Flower2 size={23} />
//             <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
//           </div>

//           <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#E6C687]/80 font-light">
//             Save the dates
//           </p>

//           <h2 className="font-serif text-3xl text-[#D4AF37] sm:text-5xl tracking-wide">
//             Wedding Celebrations
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#F4F1EA]/80 sm:text-base font-light">
//             From joyful celebrations to the sacred wedding rituals,
//             we would love to have you with us at every special moment.
//           </p>

//           <p className="mt-4 text-xl text-[#D4AF37] font-light tracking-widest">
//             ଶୁଭ ମୁହୂର୍ତ୍ତ
//           </p>
//         </motion.div>

//         {/* Events Timeline */}
//         <div className="relative">

//           {/* Timeline Line */}
//           <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-transparent sm:left-6" />

//           <div className="space-y-8">

//             {events.map((event, index) => (
//               <motion.div
//                 key={event.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.1,
//                 }}
//                 className="relative flex gap-5 sm:gap-7"
//               >

//                 {/* Timeline Icon */}
//                 <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#0D1B2A] text-lg shadow-lg sm:h-12 sm:w-12">
//                   {eventIcons[event.id] || "✨"}
//                 </div>

//                 {/* Event Card */}
//                 <div className="min-w-0 flex-1 rounded-xl border border-[#D4AF37]/30 bg-[#0D1B2A]/80 backdrop-blur-md p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] sm:p-7">

//                   {/* Event Header */}
//                   <div className="mb-4 flex flex-wrap items-start justify-between gap-3">

//                     <div>
//                       <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#E6C687]/80 font-light">
//                         Celebration {String(index + 1).padStart(2, "0")}
//                       </p>

//                       <h3 className="font-serif text-xl leading-snug text-[#D4AF37] sm:text-2xl tracking-wide">
//                         {event.name}
//                       </h3>

//                       {event.nameOdia && (
//                         <p className="mt-1 text-sm text-[#E6C687] font-light">
//                           {event.nameOdia}
//                         </p>
//                       )}
//                     </div>

//                     <Sparkles
//                       size={19}
//                       className="shrink-0 text-[#D4AF37]"
//                     />
//                   </div>

//                   {/* Date and Time */}
//                   <div className="mb-4 grid grid-cols-1 gap-3 rounded-lg bg-[#0A192F]/60 border border-[#D4AF37]/20 p-3 sm:grid-cols-2">

//                     <div className="flex items-center gap-3">
//                       <CalendarDays
//                         size={19}
//                         className="shrink-0 text-[#D4AF37]"
//                       />
//                       <div>
//                         <p className="text-[10px] uppercase tracking-wider text-[#E6C687]/70 font-light">
//                           Date
//                         </p>
//                         <p className="text-sm font-medium text-[#F4F1EA]">
//                           {event.date}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <Clock
//                         size={19}
//                         className="shrink-0 text-[#D4AF37]"
//                       />
//                       <div>
//                         <p className="text-[10px] uppercase tracking-wider text-[#E6C687]/70 font-light">
//                           Time
//                         </p>
//                         <p className="text-sm font-medium text-[#F4F1EA]">
//                           {event.time}
//                         </p>
//                       </div>
//                     </div>

//                   </div>

//                   {/* Description */}
//                   <p className="mb-5 text-sm leading-relaxed text-[#F4F1EA]/80 font-light">
//                     {event.description}
//                   </p>

//                   {/* Venue */}
//                   <div className="mb-5 flex items-start gap-3">
//                     <MapPin
//                       size={19}
//                       className="mt-0.5 shrink-0 text-[#D4AF37]"
//                     />

//                     <div className="min-w-0">
//                       <p className="text-xs font-semibold text-[#D4AF37] tracking-wide">
//                         {event.venue}
//                       </p>

//                       <p className="mt-1 break-words text-xs leading-relaxed text-[#F4F1EA]/70 font-light">
//                         {event.address}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Google Maps Button */}
//                   {event.mapLink && (
//                     <a
//                       href={event.mapLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] px-5 py-3 text-xs font-semibold tracking-widest text-[#0A192F] uppercase transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95"
//                     >
//                       <MapPin size={15} />
//                       Get Directions
//                       <ArrowUpRight size={15} />
//                     </a>
//                   )}

//                 </div>
//               </motion.div>
//             ))}

//           </div>
//         </div>

//         {/* Bottom Message */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-16 text-center"
//         >
//           <Heart
//             size={22}
//             className="mx-auto mb-4 fill-[#D4AF37]/20 text-[#D4AF37]"
//           />

//           <p className="font-serif text-lg text-[#F4F1EA] sm:text-xl tracking-wide">
//             Your presence will make our celebrations more special.
//           </p>

//           <p className="mt-2 text-sm text-[#E6C687]/80 font-light">
//             We look forward to celebrating with you!
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default EventsSection;











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
  Crown,
  Sun,
  Leaf,
  Music,
  Gem,
  Wine,
} from "lucide-react";
import { weddingData } from "../config/weddingData";

const eventIconMap = {
  haldi: Sun,
  mehendi: Leaf,
  sangeet: Music,
  wedding: Gem,
  reception: Wine,
};

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

const EventsSection = () => {
  const events = weddingData.events || [];

  return (
    <section
      id="events"
      className="relative overflow-hidden border-y border-[#E6D9EA] bg-gradient-to-b from-[#F4EFF8] via-[#FFFCFA] to-[#EDE5F3]/75 px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* Lavender & Blush Watercolor Backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#E8B8D0]/22 blur-[110px]" />
        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#C5B2DA]/25 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.15]"
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

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <GoldDivider />

          <p className="mb-3 mt-6 text-[11px] font-medium uppercase tracking-[0.35em] text-[#B69A54]">
            Save the Dates
          </p>

          <h2 className="font-serif text-3xl font-medium tracking-wide text-[#70558F] sm:text-5xl">
            Wedding Celebrations
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#D5B66F] to-transparent" />

          <p className="mx-auto mt-5 max-w-xl text-sm font-normal leading-relaxed text-[#51465B] sm:text-base">
            From joyful celebrations to the sacred wedding rituals,
            we would love to have you with us at every special moment.
          </p>

          <p className="mt-5 font-serif text-xl tracking-[0.2em] text-[#B69A54]">
            ଶୁଭ ମୁହୂର୍ତ୍ତ
          </p>
        </motion.div>

        {/* Events Timeline */}
        <div className="relative">
          {/* Champagne-Gold & Lilac Vertical Timeline Spine */}
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-[#D5B66F] via-[#C5B2DA] to-transparent sm:left-6" />

          <div className="space-y-9">
            {events.map((event, index) => {
              const EventIcon = eventIconMap[event.id] || Sparkles;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="relative flex gap-4 sm:gap-7"
                >
                  {/* Timeline Marker */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D5B66F] bg-[#FFFFFF] text-[#70558F] shadow-[0_8px_20px_-6px_rgba(112,85,143,0.22),inset_0_0_0_3px_#F4EFF8] sm:h-12 sm:w-12">
                    <EventIcon size={19} strokeWidth={1.6} />
                  </div>

                  {/* Invitation Event Card */}
                  <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#E6D9EA] bg-gradient-to-br from-[#FFFFFF] via-[#FFFCFA] to-[#F4EFF8] p-5 shadow-[0_16px_38px_-16px_rgba(112,85,143,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D5B66F] hover:shadow-[0_20px_44px_-16px_rgba(112,85,143,0.24)] sm:p-7">
                    {/* Delicate Inner Champagne-Gold Frame */}
                    <div className="pointer-events-none absolute inset-2.5 rounded-xl border border-[#D5B66F]/30" />

                    {/* Top-right subtle blush watercolor bloom */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#E8B8D0]/20 blur-2xl" />

                    {/* Event Header */}
                    <div className="relative z-10 mb-5 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[#B69A54]">
                          Celebration {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="font-serif text-xl font-semibold leading-snug tracking-wide text-[#70558F] sm:text-2xl">
                          {event.name}
                        </h3>

                        {event.nameOdia && (
                          <p className="mt-1.5 font-serif text-sm text-[#82758A]">
                            {event.nameOdia}
                          </p>
                        )}
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D5B66F]/60 bg-[#F4EFF8]">
                        <Sparkles size={16} className="text-[#A58AC5]" />
                      </div>
                    </div>

                    <div className="relative z-10 mb-5">
                      <GoldDivider />
                    </div>

                    {/* Date and Time */}
                    <div className="relative z-10 mb-5 grid grid-cols-1 gap-3 rounded-xl border border-[#E6D9EA] bg-[#FFFFFF]/85 p-4 sm:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D5B66F]/60 bg-[#F4EFF8]">
                          <CalendarDays size={16} className="text-[#70558F]" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B69A54]">
                            Date
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-[#51465B]">
                            {event.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D5B66F]/60 bg-[#F4EFF8]">
                          <Clock size={16} className="text-[#70558F]" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B69A54]">
                            Time
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-[#51465B]">
                            {event.time}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="relative z-10 mb-5 text-sm font-normal leading-relaxed text-[#51465B]">
                      {event.description}
                    </p>

                    {/* Venue */}
                    <div className="relative z-10 mb-5 flex items-start gap-3">
                      <MapPin
                        size={18}
                        className="mt-0.5 shrink-0 text-[#A58AC5]"
                      />

                      <div className="min-w-0">
                        <p className="text-sm font-semibold tracking-wide text-[#70558F]">
                          {event.venue}
                        </p>

                        <p className="mt-1 break-words text-xs font-normal leading-relaxed text-[#82758A]">
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
                        className="group relative z-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D5B66F] bg-gradient-to-b from-[#FFFFFF] via-[#F4EFF8] to-[#EDE5F3] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#70558F] shadow-[0_8px_20px_-8px_rgba(112,85,143,0.22),inset_0_0_0_1px_rgba(233,215,165,0.75)] transition-all duration-300 hover:scale-[1.03] hover:border-[#B69A54] active:scale-95"
                      >
                        <MapPin size={15} className="text-[#B69A54]" />
                        Get Directions
                        <ArrowUpRight
                          size={15}
                          className="text-[#B69A54] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {events.length === 0 && (
              <p className="py-8 text-center text-sm text-[#82758A]">
                Wedding celebrations will be announced soon.
              </p>
            )}
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
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D5B66F]" />
            <Crown size={20} className="text-[#70558F]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D5B66F]" />
          </div>

          <Heart
            size={22}
            className="mx-auto mb-4 fill-[#E8B8D0]/65 text-[#70558F]"
          />

          <p className="font-serif text-lg tracking-wide text-[#70558F] sm:text-xl">
            Your presence will make our celebrations more special.
          </p>

          <p className="mt-2.5 text-sm font-normal text-[#82758A]">
            We look forward to celebrating with you!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;