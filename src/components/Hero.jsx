// import { motion } from "motion/react";
// import { Heart, Sparkles, CalendarDays, Clock, ChevronDown } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const Hero = () => {
//   const scrollToEvents = () => {
//     document.getElementById("events")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-[90svh] flex items-center justify-center overflow-hidden bg-[#FFFaf0] px-5 py-20"
//     >
//       {/* Background Decorations */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">

//         <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#F8E1E7]/60 blur-3xl" />

//         <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />

//         <div className="absolute inset-5 sm:inset-10 border border-[#C9A227]/20 rounded-sm" />

//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 w-full max-w-3xl mx-auto text-center">

//         {/* Decorative Top Icon */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center mb-7"
//         >
//           <div className="flex items-center gap-3 text-[#C9A227]">
//             <span className="h-px w-12 bg-[#C9A227]" />
//             <Sparkles size={22} />
//             <span className="h-px w-12 bg-[#C9A227]" />
//           </div>
//         </motion.div>

//         {/* Wedding Announcement */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#5C4A3D] mb-5"
//         >
//           Together with their families
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.9 }}
//           className="font-serif text-4xl sm:text-6xl md:text-7xl leading-tight text-[#6B0F1A]"
//         >
//           {weddingData.couple.groom.name}
//         </motion.h1>

//         {/* And Symbol */}
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="flex items-center justify-center gap-3 my-3"
//         >
//           <span className="h-px w-10 bg-[#C9A227]/70" />
//           <Heart
//             size={22}
//             className="text-[#C9A227] fill-[#C9A227]/20"
//           />
//           <span className="h-px w-10 bg-[#C9A227]/70" />
//         </motion.div>

//         {/* Bride Name */}
//         <motion.h2
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.9 }}
//           className="font-serif text-4xl sm:text-6xl md:text-7xl leading-tight text-[#6B0F1A]"
//         >
//           {weddingData.couple.bride.name}
//         </motion.h2>

//         {/* Wedding Message */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="mt-7 text-sm sm:text-base tracking-wide text-[#5C4A3D]"
//         >
//           Joyfully invite you to celebrate their wedding
//         </motion.p>

//         {/* Odia Blessing */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 1 }}
//           className="mt-3 text-xl text-[#6B0F1A]"
//         >
//           ଶୁଭ ବିବାହ
//         </motion.p>

//         {/* Wedding Date and Time */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.4, duration: 0.8 }}
//           className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10"
//         >
//           <div className="flex items-center gap-3 text-[#6B0F1A]">
//             <CalendarDays size={21} className="text-[#C9A227]" />
//             <div className="text-left">
//               <p className="text-xs text-[#5C4A3D]">Wedding Date</p>
//               <p className="font-medium">
//                 {weddingData.wedding.displayDate}
//               </p>
//             </div>
//           </div>

//           <div className="hidden sm:block h-10 w-px bg-[#C9A227]/40" />

//           <div className="flex items-center gap-3 text-[#6B0F1A]">
//             <Clock size={21} className="text-[#C9A227]" />
//             <div className="text-left">
//               <p className="text-xs text-[#5C4A3D]">Wedding Time</p>
//               <p className="font-medium">
//                 {weddingData.wedding.time}
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Explore Button */}
//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.7, duration: 0.8 }}
//           onClick={scrollToEvents}
//           className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#6B0F1A] px-8 py-3 text-sm font-medium tracking-widest text-[#FFFaf0] uppercase transition-all duration-300 hover:bg-[#4A0E14] active:scale-95 shadow-lg shadow-[#6B0F1A]/15"
//         >
//           Explore Invitation
//           <ChevronDown size={18} />
//         </motion.button>

//         {/* Bottom Decoration */}
//         <motion.div
//           animate={{ y: [0, 7, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="mt-12 flex justify-center text-[#C9A227]"
//         >
//           <Sparkles size={18} />
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;






// import { motion } from "motion/react";
// import { Heart, Sparkles, CalendarDays, Clock, ChevronDown } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const Hero = () => {
//   const scrollToEvents = () => {
//     document.getElementById("events")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-[90svh] flex items-center justify-center overflow-hidden bg-[#0A192F] px-5 py-20"
//     >
//       {/* Background Decorations */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//         <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//         <div className="absolute inset-5 sm:inset-10 border border-[#D4AF37]/20 rounded-sm" />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 w-full max-w-3xl mx-auto text-center">

//         {/* Decorative Top Icon */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center mb-7"
//         >
//           <div className="flex items-center gap-3 text-[#D4AF37]">
//             <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
//             <Sparkles size={22} />
//             <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
//           </div>
//         </motion.div>

//         {/* Wedding Announcement */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#E6C687]/80 mb-5 font-light"
//         >
//           Together with their families
//         </motion.p>

//         {/* Groom Name */}
//         <motion.h1
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.9 }}
//           className="font-serif text-4xl sm:text-6xl md:text-7xl leading-tight text-[#D4AF37] tracking-wide"
//         >
//           {weddingData.couple.groom.name}
//         </motion.h1>

//         {/* And Symbol */}
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="flex items-center justify-center gap-3 my-4"
//         >
//           <span className="h-px w-10 bg-[#D4AF37]/50" />
//           <Heart
//             size={22}
//             className="text-[#D4AF37] fill-[#D4AF37]/20"
//           />
//           <span className="h-px w-10 bg-[#D4AF37]/50" />
//         </motion.div>

//         {/* Bride Name */}
//         <motion.h2
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.9 }}
//           className="font-serif text-4xl sm:text-6xl md:text-7xl leading-tight text-[#D4AF37] tracking-wide"
//         >
//           {weddingData.couple.bride.name}
//         </motion.h2>

//         {/* Wedding Message */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="mt-7 text-sm sm:text-base tracking-wide text-[#F4F1EA]/90 font-light"
//         >
//           Joyfully invite you to celebrate their wedding
//         </motion.p>

//         {/* Odia Blessing */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 1 }}
//           className="mt-3 text-xl text-[#E6C687] font-light tracking-widest"
//         >
//           ଶୁଭ ବିବାହ
//         </motion.p>

//         {/* Wedding Date and Time */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.4, duration: 0.8 }}
//           className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 bg-[#0D1B2A]/60 backdrop-blur-sm border border-[#D4AF37]/20 py-5 px-8 rounded-lg max-w-xl mx-auto shadow-xl"
//         >
//           <div className="flex items-center gap-3 text-[#F4F1EA]">
//             <CalendarDays size={21} className="text-[#D4AF37]" />
//             <div className="text-left">
//               <p className="text-xs text-[#E6C687]/80 uppercase tracking-wider font-light">Wedding Date</p>
//               <p className="font-medium text-sm sm:text-base text-[#F4F1EA]">
//                 {weddingData.wedding.displayDate}
//               </p>
//             </div>
//           </div>

//           <div className="hidden sm:block h-10 w-px bg-[#D4AF37]/30" />

//           <div className="flex items-center gap-3 text-[#F4F1EA]">
//             <Clock size={21} className="text-[#D4AF37]" />
//             <div className="text-left">
//               <p className="text-xs text-[#E6C687]/80 uppercase tracking-wider font-light">Wedding Time</p>
//               <p className="font-medium text-sm sm:text-base text-[#F4F1EA]">
//                 {weddingData.wedding.time}
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Explore Button */}
//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.7, duration: 0.8 }}
//           onClick={scrollToEvents}
//           className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest text-[#0A192F] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 shadow-lg"
//         >
//           Explore Invitation
//           <ChevronDown size={18} />
//         </motion.button>

//         {/* Bottom Decoration */}
//         <motion.div
//           animate={{ y: [0, 7, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="mt-12 flex justify-center text-[#D4AF37]"
//         >
//           <Sparkles size={18} />
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;








import { motion } from "motion/react";
import {
  Heart,
  Sparkles,
  CalendarDays,
  Clock,
  ChevronDown,
  Crown,
} from "lucide-react";
import { weddingData } from "../config/weddingData";

const GoldDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E9D7A5] to-[#D5B66F]" />

    <svg viewBox="0 0 36 28" className="w-8 h-7 shrink-0" aria-hidden="true">
      <circle
        cx="18"
        cy="14"
        r="7.5"
        fill="#F4EFF8"
        stroke="#D5B66F"
        strokeWidth="1.2"
      />
      <circle cx="18" cy="14" r="2.5" fill="#A58AC5" />
      <circle cx="8.5" cy="14" r="1.4" fill="#E8B8D0" />
      <circle cx="27.5" cy="14" r="1.4" fill="#E8B8D0" />
    </svg>

    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#E9D7A5] to-[#D5B66F]" />
  </div>
);

const FloralArchFrame = () => (
  <svg
    viewBox="0 0 500 650"
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
  >
    {/* Outer soft lilac-lavender arch */}
    <path
      d="M14 650 V260 C14 105 106 14 250 14 C394 14 486 105 486 260 V650"
      stroke="#C5B2DA"
      strokeWidth="1.4"
      opacity="0.65"
    />

    {/* Inner champagne-gold arch */}
    <path
      d="M26 650 V265 C26 122 114 30 250 30 C386 30 474 122 474 265 V650"
      stroke="#D5B66F"
      strokeWidth="1.1"
      opacity="0.7"
    />

    {/* Top floral crest */}
    <circle cx="250" cy="30" r="12" fill="#EDE5F3" stroke="#D5B66F" strokeWidth="1.2" />
    <circle cx="236" cy="34" r="7.5" fill="#E8B8D0" fillOpacity="0.75" />
    <circle cx="264" cy="34" r="7.5" fill="#C5B2DA" fillOpacity="0.75" />
    <circle cx="250" cy="30" r="3" fill="#B69A54" />

    {/* Left & right shoulder floral clusters */}
    <circle cx="88" cy="88" r="10" fill="#E8B8D0" fillOpacity="0.55" />
    <circle cx="102" cy="78" r="7" fill="#C5B2DA" fillOpacity="0.6" />
    <path d="M72 104 Q92 86 116 74" stroke="#A58AC5" strokeWidth="1.2" opacity="0.7" />

    <circle cx="412" cy="88" r="10" fill="#C5B2DA" fillOpacity="0.55" />
    <circle cx="398" cy="78" r="7" fill="#E8B8D0" fillOpacity="0.6" />
    <path d="M428 104 Q408 86 384 74" stroke="#A58AC5" strokeWidth="1.2" opacity="0.7" />

    {/* Side blush & gold accents */}
    <circle cx="14" cy="275" r="5" fill="#E8B8D0" stroke="#D5B66F" strokeWidth="1" />
    <circle cx="486" cy="275" r="5" fill="#C5B2DA" stroke="#D5B66F" strokeWidth="1" />
  </svg>
);

const CornerFloralSprigs = () => (
  <>
    {/* Top-left corner bouquet */}
    <svg
      viewBox="0 0 180 180"
      className="pointer-events-none absolute -top-2 -left-2 w-28 h-28 sm:w-40 sm:h-40 opacity-90"
      aria-hidden="true"
    >
      <circle cx="36" cy="36" r="42" fill="#E8B8D0" fillOpacity="0.22" />
      <circle cx="64" cy="32" r="30" fill="#C5B2DA" fillOpacity="0.22" />
      <path
        d="M16 16 C52 32 82 58 106 94"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <ellipse
        cx="62"
        cy="38"
        rx="12"
        ry="5.5"
        transform="rotate(24 62 38)"
        fill="#C5B2DA"
        fillOpacity="0.68"
      />
      <ellipse
        cx="38"
        cy="64"
        rx="12"
        ry="5.5"
        transform="rotate(62 38 64)"
        fill="#E8B8D0"
        fillOpacity="0.72"
      />
      <circle cx="44" cy="42" r="10" fill="#E8B8D0" fillOpacity="0.82" />
      <circle cx="54" cy="36" r="7.5" fill="#DCAAC3" fillOpacity="0.78" />
      <circle cx="36" cy="52" r="7.5" fill="#C5B2DA" fillOpacity="0.78" />
      <circle cx="44" cy="42" r="2.6" fill="#D5B66F" />
    </svg>

    {/* Top-right corner bouquet */}
    <svg
      viewBox="0 0 180 180"
      className="pointer-events-none absolute -top-2 -right-2 w-28 h-28 sm:w-40 sm:h-40 opacity-90 -scale-x-100"
      aria-hidden="true"
    >
      <circle cx="36" cy="36" r="42" fill="#C5B2DA" fillOpacity="0.22" />
      <circle cx="64" cy="32" r="30" fill="#E8B8D0" fillOpacity="0.22" />
      <path
        d="M16 16 C52 32 82 58 106 94"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <ellipse
        cx="62"
        cy="38"
        rx="12"
        ry="5.5"
        transform="rotate(24 62 38)"
        fill="#E8B8D0"
        fillOpacity="0.68"
      />
      <ellipse
        cx="38"
        cy="64"
        rx="12"
        ry="5.5"
        transform="rotate(62 38 64)"
        fill="#C5B2DA"
        fillOpacity="0.72"
      />
      <circle cx="44" cy="42" r="10" fill="#C5B2DA" fillOpacity="0.82" />
      <circle cx="54" cy="36" r="7.5" fill="#E8B8D0" fillOpacity="0.78" />
      <circle cx="36" cy="52" r="7.5" fill="#DCAAC3" fillOpacity="0.78" />
      <circle cx="44" cy="42" r="2.6" fill="#D5B66F" />
    </svg>

    {/* Bottom-left corner bouquet */}
    <svg
      viewBox="0 0 160 160"
      className="pointer-events-none absolute -bottom-2 -left-2 w-24 h-24 sm:w-36 sm:h-36 opacity-85 -scale-y-100"
      aria-hidden="true"
    >
      <circle cx="30" cy="30" r="34" fill="#C5B2DA" fillOpacity="0.22" />
      <path
        d="M16 16 C44 28 68 50 88 78"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="38" cy="38" r="9" fill="#C5B2DA" fillOpacity="0.78" />
      <circle cx="48" cy="32" r="6.5" fill="#E8B8D0" fillOpacity="0.75" />
      <circle cx="38" cy="38" r="2.2" fill="#D5B66F" />
    </svg>

    {/* Bottom-right corner bouquet */}
    <svg
      viewBox="0 0 160 160"
      className="pointer-events-none absolute -bottom-2 -right-2 w-24 h-24 sm:w-36 sm:h-36 opacity-85 -scale-x-100 -scale-y-100"
      aria-hidden="true"
    >
      <circle cx="30" cy="30" r="34" fill="#E8B8D0" fillOpacity="0.22" />
      <path
        d="M16 16 C44 28 68 50 88 78"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="38" cy="38" r="9" fill="#E8B8D0" fillOpacity="0.78" />
      <circle cx="48" cy="32" r="6.5" fill="#C5B2DA" fillOpacity="0.75" />
      <circle cx="38" cy="38" r="2.2" fill="#D5B66F" />
    </svg>
  </>
);

const Hero = () => {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const { groom, bride } = weddingData.couple;
  const { day, displayDate, time } = weddingData.wedding;

  return (
    <section
      id="home"
      className="relative min-h-[90svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFCFA] via-[#FFFFFF] to-[#F4EFF8] px-4 sm:px-6 py-24 sm:py-28"
    >
      {/* Watercolor Ivory, Lavender & Blush Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial floral washes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#EDE5F3_0%,#FFFCFA_58%,#FFFFFF_100%)] opacity-85" />

        {/* Subtle botanical dot lattice */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, transparent 0 15px, #C5B2DA 16px, transparent 17px)",
            backgroundSize: "68px 68px",
          }}
        />

        {/* Ambient lavender & blush watercolor clouds */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[32rem] h-[22rem] rounded-full bg-[#E8B8D0]/22 blur-[120px]" />
        <div className="absolute bottom-4 left-4 w-72 h-72 rounded-full bg-[#C5B2DA]/25 blur-[105px]" />
        <div className="absolute bottom-4 right-4 w-72 h-72 rounded-full bg-[#E8B8D0]/22 blur-[105px]" />

        {/* Delicate outer champagne-gold & lavender borders */}
        <div className="absolute inset-3 sm:inset-7 rounded-3xl border border-[#E6D9EA]" />
        <div className="absolute inset-5 sm:inset-10 rounded-2xl border border-[#D5B66F]/35" />

        {/* Floral arch outline */}
        <div className="absolute inset-x-[3%] top-[3%] bottom-[3%] opacity-65">
          <FloralArchFrame />
        </div>

        {/* Corner watercolor floral clusters */}
        <CornerFloralSprigs />
      </div>

      {/* Subtle floating blush & lavender petals/sparkles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute pointer-events-none w-1.5 h-1.5 rounded-full ${
            i % 2 === 0 ? "bg-[#C5B2DA]/70" : "bg-[#E8B8D0]/75"
          }`}
          style={{
            left: `${(i * 19 + 8) % 100}%`,
            top: `${(i * 23 + 12) % 90}%`,
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.25, 0.75, 0.25],
            scale: [0.8, 1.15, 0.8],
          }}
          transition={{
            duration: 4.5 + (i % 3),
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Emblem Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-7"
        >
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-[#D5B66F] bg-[#FFFFFF] shadow-[0_10px_25px_-8px_rgba(112,85,143,0.2),inset_0_0_0_3px_#F4EFF8]">
            <Crown
              size={24}
              strokeWidth={1.35}
              className="text-[#70558F]"
            />
          </div>

          <GoldDivider className="w-44 mt-5" />
        </motion.div>

        {/* Announcement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[#82758A] text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em] mb-5"
        >
          Together with their families
        </motion.p>

        {/* Groom Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-serif font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-[#70558F] tracking-wide break-words"
        >
          {groom.name}
        </motion.h1>

        {/* Floral Love Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex items-center justify-center gap-5 my-3 sm:my-5"
        >
          <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#E9D7A5] to-[#D5B66F]" />

          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F4EFF8] border border-[#D5B66F]/65">
            <Heart
              size={20}
              strokeWidth={1.5}
              className="text-[#70558F] fill-[#E8B8D0]/60"
            />
          </span>

          <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#E9D7A5] to-[#D5B66F]" />
        </motion.div>

        {/* Bride Name */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="font-serif font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-[#70558F] tracking-wide break-words"
        >
          {bride.name}
        </motion.h2>

        {/* Wedding Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-7"
        >
          <GoldDivider className="max-w-[250px] mx-auto mb-5" />

          <p className="text-[#51465B] text-sm sm:text-base tracking-wide font-normal">
            Joyfully invite you to celebrate their wedding
          </p>

          <p className="mt-3 text-xl sm:text-2xl text-[#B69A54] font-serif tracking-widest">
            ଶୁଭ ବିବାହ
          </p>
        </motion.div>

        {/* Wedding Date & Time Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative mt-9 max-w-[580px] mx-auto"
        >
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-[#D5B66F] to-transparent">
            <div className="rounded-2xl bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E6D9EA] shadow-[0_14px_34px_-16px_rgba(112,85,143,0.18)] px-5 sm:px-8 py-5 sm:py-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
                {/* Wedding Date */}
                <div className="flex items-center gap-4 text-left min-w-0">
                  <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-[#D5B66F]/70 bg-[#F4EFF8]">
                    <CalendarDays
                      size={20}
                      className="text-[#70558F]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#B69A54] mb-1">
                      Wedding Date
                    </p>

                    <p className="font-serif font-semibold text-base sm:text-lg text-[#70558F]">
                      {displayDate}
                    </p>

                    <p className="text-[11px] text-[#82758A] mt-0.5 tracking-wider">
                      {day}
                    </p>
                  </div>
                </div>

                {/* Vertical divider */}
                <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-[#D5B66F] to-transparent" />

                {/* Wedding Time */}
                <div className="flex items-center gap-4 text-left min-w-0">
                  <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-[#D5B66F]/70 bg-[#F4EFF8]">
                    <Clock
                      size={20}
                      className="text-[#70558F]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#B69A54] mb-1">
                      Wedding Time
                    </p>

                    <p className="font-serif font-semibold text-base sm:text-lg text-[#70558F]">
                      {time}
                    </p>

                    <p className="text-[11px] text-[#82758A] mt-0.5 tracking-wider">
                      We await your presence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Explore Invitation Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={scrollToEvents}
          whileHover={{
            scale: 1.035,
            boxShadow: "0 12px 28px -8px rgba(112, 85, 143, 0.25)",
          }}
          whileTap={{ scale: 0.96 }}
          className="group relative mt-9 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#D5B66F] bg-gradient-to-b from-[#FFFFFF] via-[#F4EFF8] to-[#EDE5F3] px-8 sm:px-10 py-4 text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#70558F] uppercase shadow-[0_10px_24px_-10px_rgba(112,85,143,0.2),inset_0_0_0_1px_rgba(233,215,165,0.75)] transition-all duration-300"
        >
          <span className="relative z-10">
            Explore Invitation
          </span>

          <ChevronDown
            size={17}
            className="relative z-10 text-[#B69A54] transition-transform duration-300 group-hover:translate-y-1"
          />

          {/* Shimmer */}
          <motion.span
            className="absolute inset-y-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-[#E9D7A5]/55 to-transparent"
            animate={{ x: ["-150%", "500%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </motion.button>

        {/* Bottom floral sparkle divider */}
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-9 flex justify-center items-center gap-3 text-[#B69A54]"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D5B66F]" />
          <Sparkles size={17} className="text-[#A58AC5]" />
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#D5B66F]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;