// // src/components/InvitationIntro.jsx
// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { weddingData } from "../config/weddingData";

// const InvitationIntro = ({ onOpen }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => {
//     setIsOpen(true);
//     // Small delay so the animation can play before revealing the site
//     setTimeout(() => {
//       onOpen();
//     }, 900);
//   };

//   return (
//     <AnimatePresence>
//       {!isOpen && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFFaf0]"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Decorative background elements */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#F8E1E7] opacity-60 blur-3xl" />
//             <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#F8E1E7] opacity-50 blur-3xl" />
//           </div>

//           {/* Main Invitation Card */}
//           <motion.div
//             className="relative z-10 w-[90%] max-w-md mx-auto"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 1.05, opacity: 0, y: -30 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             {/* Gold border frame */}
//             <div className="border-[1.5px] border-[#C9A227]/70 p-1 rounded-sm">
//               <div className="border border-[#C9A227]/40 bg-[#FFFaf0] px-6 py-10 sm:px-8 sm:py-12 text-center shadow-xl">
                
//                 {/* Top decorative line */}
//                 <div className="flex items-center justify-center gap-3 mb-6">
//                   <div className="h-[1px] w-12 bg-[#C9A227]/60" />
//                   <div className="w-2 h-2 rotate-45 border border-[#C9A227]" />
//                   <div className="h-[1px] w-12 bg-[#C9A227]/60" />
//                 </div>

//                 {/* Small label */}
//                 <p className="text-[#5C4A3D] text-xs tracking-[0.25em] uppercase mb-4">
//                   You are invited
//                 </p>

//                 {/* Couple Names */}
//                 <h1 className="font-serif text-3xl sm:text-4xl text-[#6B0F1A] leading-tight mb-2">
//                   {weddingData.couple.groom.name}
//                 </h1>
                
//                 <p className="text-[#C9A227] text-sm tracking-widest my-3">
//                   &
//                 </p>
                
//                 <h1 className="font-serif text-3xl sm:text-4xl text-[#6B0F1A] leading-tight mb-6">
//                   {weddingData.couple.bride.name}
//                 </h1>

//                 {/* Date */}
//                 <p className="text-[#2C1810] text-sm tracking-wide mb-1">
//                   {weddingData.wedding.day}
//                 </p>
//                 <p className="text-[#6B0F1A] font-medium text-lg mb-8">
//                   {weddingData.wedding.displayDate}
//                 </p>

//                 {/* Bottom decorative line */}
//                 <div className="flex items-center justify-center gap-3 mb-8">
//                   <div className="h-[1px] w-12 bg-[#C9A227]/60" />
//                   <div className="w-2 h-2 rotate-45 border border-[#C9A227]" />
//                   <div className="h-[1px] w-12 bg-[#C9A227]/60" />
//                 </div>

//                 {/* Open Button */}
//                 <button
//                   onClick={handleOpen}
//                   className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-[#6B0F1A] text-[#FFFaf0] text-sm tracking-widest uppercase rounded-full overflow-hidden transition-all duration-300 hover:bg-[#4A0E14] active:scale-95"
//                 >
//                   <span className="relative z-10">Open Invitation</span>
//                 </button>

//                 {/* Tiny Odia blessing */}
//                 <p className="mt-8 text-[#5C4A3D] text-md tracking-wide">
//                   ଶୁଭ ବିବାହ
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default InvitationIntro;






// // src/components/InvitationIntro.jsx
// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { weddingData } from "../config/weddingData";

// const InvitationIntro = ({ onOpen }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => {
//     setIsOpen(true);
//     // Delay so exit animations complete cleanly before showing the main site
//     setTimeout(() => {
//       onOpen();
//     }, 900);
//   };

//   return (
//     <AnimatePresence>
//       {!isOpen && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A192F]"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Subtle Ambient Gold Glow Background */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//             <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//           </div>

//           {/* Main Card */}
//           <motion.div
//             className="relative z-10 w-[90%] max-w-md mx-auto"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 1.05, opacity: 0, y: -30 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             {/* Outer Gold Border Frame */}
//             <div className="border-[1.5px] border-[#D4AF37]/60 p-1.5 rounded-sm shadow-2xl backdrop-blur-sm">
//               <div className="border border-[#D4AF37]/30 bg-[#0D1B2A] px-6 py-10 sm:px-8 sm:py-12 text-center relative">
                
//                 {/* Top Odia Greeting */}
//                 <p className="text-[#D4AF37] text-md tracking-wider uppercase mb-5 font-light">
//                   ଓଁ ଶ୍ରୀ ଶ୍ରୀ ଗଣେଶାୟ ନମଃ
//                 </p>

//                 {/* Top Decorative Ornament */}
//                 <div className="flex items-center justify-center gap-3 mb-6">
//                   <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
//                   <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#0D1B2A]" />
//                   <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
//                 </div>

//                 {/* Header Label */}
//                 <p className="text-[#E6C687] text-xs tracking-[0.3em] uppercase mb-4 font-light">
//                   You are invited
//                 </p>

//                 {/* Groom Name */}
//                 <h1 className="font-serif text-3xl sm:text-4xl text-[#D4AF37] leading-tight mb-2 tracking-wide font-normal">
//                   {weddingData.couple.groom.name}
//                 </h1>
                
//                 {/* Ampersand Divider */}
//                 <p className="text-[#F4F1EA]/70 text-sm tracking-widest my-3 font-serif italic">
//                   &
//                 </p>
                
//                 {/* Bride Name */}
//                 <h1 className="font-serif text-3xl sm:text-4xl text-[#D4AF37] leading-tight mb-6 tracking-wide font-normal">
//                   {weddingData.couple.bride.name}
//                 </h1>

//                 {/* Date Section */}
//                 <p className="text-[#F4F1EA]/80 text-xs sm:text-sm tracking-widest uppercase mb-1">
//                   {weddingData.wedding.day}
//                 </p>
//                 <p className="text-[#C5A059] font-medium text-base sm:text-lg tracking-wide mb-8">
//                   {weddingData.wedding.displayDate}
//                 </p>

//                 {/* Bottom Decorative Ornament */}
//                 <div className="flex items-center justify-center gap-3 mb-8">
//                   <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
//                   <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#0D1B2A]" />
//                   <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
//                 </div>

//                 {/* Royal Gold CTA Button */}
//                 <button
//                   onClick={handleOpen}
//                   className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-[#0A192F] text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-95"
//                 >
//                   <span className="relative z-10">Open Invitation</span>
//                 </button>

//                 {/* Odia Blessing */}
//                 <p className="mt-8 text-[#E6C687]/80 text-base tracking-widest font-light">
//                   ଶୁଭ ବିବାହ
//                 </p>

//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default InvitationIntro;


import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { weddingData } from "../config/weddingData";

/* ----------------------------------
   Responsive compact mobile styling
----------------------------------- */

const ResponsiveStyles = () => (
  <style>{`
    @media (max-width: 600px) and (max-height: 700px) {
      .invitation-layout {
        min-height: 100svh !important;
        padding: 8px 12px !important;
      }

      .invitation-card {
        max-width: 380px !important;
      }

      .invitation-content {
        padding: 28px 20px 14px !important;
      }

      .invitation-ornament {
        width: 82px !important;
      }

      .invitation-greeting {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        font-size: 18px !important;
      }

      .invitation-odia {
        margin-bottom: 8px !important;
        font-size: 11px !important;
      }

      .invitation-title {
        margin-top: 10px !important;
        margin-bottom: 8px !important;
      }

      .invitation-name {
        font-size: clamp(32px, 8.5vw, 40px) !important;
        line-height: 1.08 !important;
      }

      .invitation-ampersand {
        margin-top: 1px !important;
        margin-bottom: 1px !important;
        font-size: 26px !important;
      }

      .invitation-date-section {
        margin-top: 8px !important;
        margin-bottom: 6px !important;
      }

      .invitation-day {
        margin-bottom: 2px !important;
        font-size: 11px !important;
      }

      .invitation-date {
        margin-bottom: 8px !important;
        font-size: 19px !important;
      }

      .invitation-open {
        margin-top: 10px !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
      }

      .invitation-blessing {
        margin-top: 8px !important;
        font-size: 15px !important;
      }

      .invitation-divider {
        gap: 8px !important;
      }
    }

    @media (max-width: 380px) and (max-height: 750px) {
      .invitation-content {
        padding-left: 16px !important;
        padding-right: 16px !important;
      }

      .invitation-name {
        font-size: 32px !important;
      }

      .invitation-card {
        max-width: 344px !important;
      }
    }

    @media (max-height: 560px) and (max-width: 600px) {
      .invitation-content {
        padding-top: 18px !important;
        padding-bottom: 10px !important;
      }

      .invitation-ornament {
        width: 64px !important;
      }

      .invitation-title {
        margin-top: 8px !important;
        margin-bottom: 6px !important;
      }

      .invitation-date-section {
        margin-top: 6px !important;
        margin-bottom: 5px !important;
      }

      .invitation-open {
        margin-top: 8px !important;
      }

      .invitation-blessing {
        margin-top: 5px !important;
      }
    }
  `}</style>
);

/* ----------------------------------
   Champagne-gold divider
----------------------------------- */

const GoldDivider = () => (
  <div className="invitation-divider flex items-center justify-center gap-3 w-full">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E9D7A5] to-[#D5B66F]" />

    <svg viewBox="0 0 36 24" className="w-8 h-6 shrink-0" aria-hidden="true">
      <circle
        cx="18"
        cy="12"
        r="7.5"
        fill="#F4EFF8"
        stroke="#D5B66F"
        strokeWidth="1.2"
      />
      <circle cx="18" cy="12" r="2.6" fill="#A58AC5" />
      <circle cx="8" cy="12" r="1.5" fill="#E8B8D0" />
      <circle cx="28" cy="12" r="1.5" fill="#E8B8D0" />
    </svg>

    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#E9D7A5] to-[#D5B66F]" />
  </div>
);

/* ----------------------------------
   Watercolor & gold floral frame emblem
----------------------------------- */

const FloralMedallionOrnament = () => (
  <svg
    viewBox="0 0 180 112"
    className="invitation-ornament w-28 sm:w-36 mx-auto"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="lavenderBloomWash" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#A58AC5" stopOpacity="0.34" />
        <stop offset="65%" stopColor="#E8B8D0" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#F4EFF8" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Soft watercolor wash behind medallion */}
    <ellipse cx="90" cy="56" rx="74" ry="44" fill="url(#lavenderBloomWash)" />

    {/* Delicate champagne-gold circular frame */}
    <circle
      cx="90"
      cy="54"
      r="33"
      fill="#FFFCFA"
      fillOpacity="0.88"
      stroke="#D5B66F"
      strokeWidth="1.35"
    />
    <circle
      cx="90"
      cy="54"
      r="28.5"
      fill="none"
      stroke="#E9D7A5"
      strokeWidth="0.9"
      strokeDasharray="2.5 2.5"
    />

    {/* Left botanical sprig & lavender / blush blossoms */}
    <path
      d="M58 64 C41 56 26 42 15 26"
      fill="none"
      stroke="#A58AC5"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <ellipse
      cx="38"
      cy="48"
      rx="9"
      ry="4.2"
      transform="rotate(-28 38 48)"
      fill="#C5B2DA"
      fillOpacity="0.65"
    />
    <ellipse
      cx="28"
      cy="39"
      rx="7.5"
      ry="3.6"
      transform="rotate(-42 28 39)"
      fill="#E8B8D0"
      fillOpacity="0.7"
    />
    <circle cx="48" cy="34" r="6" fill="#C5B2DA" fillOpacity="0.75" />
    <circle cx="48" cy="34" r="2.2" fill="#D5B66F" />
    <circle cx="33" cy="27" r="5" fill="#E8B8D0" fillOpacity="0.8" />
    <circle cx="33" cy="27" r="1.8" fill="#D5B66F" />

    {/* Right botanical sprig & lavender / blush blossoms */}
    <path
      d="M122 64 C139 56 154 42 165 26"
      fill="none"
      stroke="#A58AC5"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <ellipse
      cx="142"
      cy="48"
      rx="9"
      ry="4.2"
      transform="rotate(28 142 48)"
      fill="#C5B2DA"
      fillOpacity="0.65"
    />
    <ellipse
      cx="152"
      cy="39"
      rx="7.5"
      ry="3.6"
      transform="rotate(42 152 39)"
      fill="#E8B8D0"
      fillOpacity="0.7"
    />
    <circle cx="132" cy="34" r="6" fill="#C5B2DA" fillOpacity="0.75" />
    <circle cx="132" cy="34" r="2.2" fill="#D5B66F" />
    <circle cx="147" cy="27" r="5" fill="#E8B8D0" fillOpacity="0.8" />
    <circle cx="147" cy="27" r="1.8" fill="#D5B66F" />

    {/* Center top & bottom floral accents on circular frame */}
    <circle cx="90" cy="21" r="6.5" fill="#E8B8D0" fillOpacity="0.8" />
    <circle cx="84.5" cy="22.5" r="4.5" fill="#C5B2DA" fillOpacity="0.75" />
    <circle cx="95.5" cy="22.5" r="4.5" fill="#C5B2DA" fillOpacity="0.75" />
    <circle cx="90" cy="21" r="2.2" fill="#D5B66F" />

    <path
      d="M74 91 Q90 101 106 91"
      fill="none"
      stroke="#D5B66F"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="90" cy="87" r="4.2" fill="#A58AC5" fillOpacity="0.7" />
  </svg>
);

/* ----------------------------------
   Corner & edge watercolor floral accents
----------------------------------- */

const CornerFloralAccents = () => (
  <>
    {/* Top-left floral cluster */}
    <svg
      viewBox="0 0 180 180"
      className="pointer-events-none absolute -top-2 -left-2 w-28 h-28 sm:w-36 sm:h-36 z-20"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="34" fill="#E8B8D0" fillOpacity="0.28" />
      <circle cx="54" cy="24" r="26" fill="#C5B2DA" fillOpacity="0.28" />
      <path
        d="M14 14 C46 28 74 52 96 84"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <ellipse
        cx="56"
        cy="34"
        rx="11"
        ry="5.5"
        transform="rotate(24 56 34)"
        fill="#C5B2DA"
        fillOpacity="0.72"
      />
      <ellipse
        cx="34"
        cy="58"
        rx="11"
        ry="5.5"
        transform="rotate(62 34 58)"
        fill="#E8B8D0"
        fillOpacity="0.75"
      />
      <circle cx="38" cy="36" r="9.5" fill="#E8B8D0" fillOpacity="0.82" />
      <circle cx="46" cy="31" r="7" fill="#DCAAC3" fillOpacity="0.78" />
      <circle cx="32" cy="44" r="7" fill="#C5B2DA" fillOpacity="0.8" />
      <circle cx="38" cy="36" r="2.6" fill="#D5B66F" />
      <circle cx="72" cy="54" r="6.5" fill="#C5B2DA" fillOpacity="0.78" />
      <circle cx="72" cy="54" r="2" fill="#D5B66F" />
    </svg>

    {/* Top-right floral cluster */}
    <svg
      viewBox="0 0 180 180"
      className="pointer-events-none absolute -top-2 -right-2 w-28 h-28 sm:w-36 sm:h-36 z-20 -scale-x-100"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="34" fill="#C5B2DA" fillOpacity="0.28" />
      <circle cx="54" cy="24" r="26" fill="#E8B8D0" fillOpacity="0.28" />
      <path
        d="M14 14 C46 28 74 52 96 84"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <ellipse
        cx="56"
        cy="34"
        rx="11"
        ry="5.5"
        transform="rotate(24 56 34)"
        fill="#C5B2DA"
        fillOpacity="0.72"
      />
      <ellipse
        cx="34"
        cy="58"
        rx="11"
        ry="5.5"
        transform="rotate(62 34 58)"
        fill="#E8B8D0"
        fillOpacity="0.75"
      />
      <circle cx="38" cy="36" r="9.5" fill="#C5B2DA" fillOpacity="0.82" />
      <circle cx="46" cy="31" r="7" fill="#E8B8D0" fillOpacity="0.78" />
      <circle cx="32" cy="44" r="7" fill="#DCAAC3" fillOpacity="0.8" />
      <circle cx="38" cy="36" r="2.6" fill="#D5B66F" />
      <circle cx="72" cy="54" r="6.5" fill="#E8B8D0" fillOpacity="0.78" />
      <circle cx="72" cy="54" r="2" fill="#D5B66F" />
    </svg>

    {/* Bottom-left floral cluster */}
    <svg
      viewBox="0 0 160 160"
      className="pointer-events-none absolute -bottom-2 -left-2 w-24 h-24 sm:w-32 sm:h-32 z-20 -scale-y-100"
      aria-hidden="true"
    >
      <circle cx="26" cy="26" r="30" fill="#C5B2DA" fillOpacity="0.25" />
      <path
        d="M14 14 C40 26 64 46 82 72"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="34" cy="34" r="8.5" fill="#C5B2DA" fillOpacity="0.8" />
      <circle cx="44" cy="30" r="6" fill="#E8B8D0" fillOpacity="0.78" />
      <circle cx="34" cy="34" r="2.2" fill="#D5B66F" />
    </svg>

    {/* Bottom-right floral cluster */}
    <svg
      viewBox="0 0 160 160"
      className="pointer-events-none absolute -bottom-2 -right-2 w-24 h-24 sm:w-32 sm:h-32 z-20 -scale-x-100 -scale-y-100"
      aria-hidden="true"
    >
      <circle cx="26" cy="26" r="30" fill="#E8B8D0" fillOpacity="0.25" />
      <path
        d="M14 14 C40 26 64 46 82 72"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="34" cy="34" r="8.5" fill="#E8B8D0" fillOpacity="0.8" />
      <circle cx="44" cy="30" r="6" fill="#C5B2DA" fillOpacity="0.78" />
      <circle cx="34" cy="34" r="2.2" fill="#D5B66F" />
    </svg>
  </>
);

/* ----------------------------------
   Invitation intro
----------------------------------- */

const InvitationIntro = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const timeoutRef = useRef(null);
  const openingRef = useRef(false);

  const { groom, bride } = weddingData.couple;
  const { day, displayDate } = weddingData.wedding;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleOpen = () => {
    if (openingRef.current) return;

    openingRef.current = true;
    setIsOpen(true);

    timeoutRef.current = setTimeout(() => {
      onOpen?.();
    }, 900);
  };

  return (
    <>
      <ResponsiveStyles />

      <AnimatePresence>
        {!isOpen && (
          <motion.main
            className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto bg-[#FFFCFA] text-[#51465B]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Soft ivory, lavender & blush watercolor backdrop */}
            <div className="fixed inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#F4EFF8_0%,#FFFCFA_55%,#FFFFFF_100%)]" />

              <div
                className="absolute inset-0 opacity-[0.22]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(197, 178, 218, 0.35) 0%, transparent 45%), radial-gradient(circle at 80% 25%, rgba(232, 184, 208, 0.35) 0%, transparent 45%), radial-gradient(circle at 50% 85%, rgba(237, 229, 243, 0.5) 0%, transparent 55%)",
                }}
              />

              <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-[#E8B8D0]/20 blur-[110px]" />
            </div>

            {/* Delicate champagne-gold & lavender side ribbons */}
            <div className="fixed inset-y-0 left-0 w-2 sm:w-5 pointer-events-none bg-gradient-to-r from-[#EDE5F3]/80 via-[#E9D7A5]/25 to-transparent" />

            <div className="fixed inset-y-0 right-0 w-2 sm:w-5 pointer-events-none bg-gradient-to-l from-[#EDE5F3]/80 via-[#E9D7A5]/25 to-transparent" />

            {/* Main responsive layout */}
            <div className="invitation-layout relative z-10 min-h-[100svh] flex items-center justify-center px-4 py-5 sm:py-8">
              <motion.section
                className="invitation-card relative w-full max-w-[440px] mx-auto"
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <CornerFloralAccents />

                {/* Champagne-gold & soft border outer frame */}
                <div className="relative p-[2px] rounded-t-[46%] rounded-b-2xl bg-gradient-to-b from-[#E9D7A5] via-[#D5B66F] to-[#E6D9EA] shadow-[0_20px_50px_-18px_rgba(112,85,143,0.22)]">
                  {/* Inner ivory & lavender invitation card */}
                  <div className="relative overflow-hidden rounded-t-[46%] rounded-b-xl border border-[#E6D9EA] bg-gradient-to-b from-[#FFFFFF] via-[#FFFCFA] to-[#F4EFF8]">
                    {/* Inner delicate borders */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#EDE5F3_0%,transparent_65%)] opacity-70" />

                      <div className="absolute inset-3 border border-[#D5B66F]/35 rounded-t-[46%] rounded-b-lg" />

                      <div className="absolute inset-5 border border-[#E6D9EA] rounded-t-[46%] rounded-b-lg" />
                    </div>

                    {/* Decorative arch top */}
                    <div className="absolute inset-x-0 top-0 h-36 sm:h-44 pointer-events-none">
                      <svg
                        viewBox="0 0 440 190"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 190 Q12 8 220 5 Q428 8 428 190"
                          fill="none"
                          stroke="#D5B66F"
                          strokeWidth="1.25"
                          strokeOpacity="0.8"
                        />

                        <path
                          d="M23 190 Q23 20 220 17 Q417 20 417 190"
                          fill="none"
                          stroke="#E9D7A5"
                          strokeOpacity="0.7"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>

                    {/* Side floral/gold accents */}
                    <div className="hidden sm:block absolute left-3.5 top-[32%] w-2 h-2 rounded-full bg-[#E8B8D0] border border-[#D5B66F]" />
                    <div className="hidden sm:block absolute right-3.5 top-[32%] w-2 h-2 rounded-full bg-[#C5B2DA] border border-[#D5B66F]" />

                    {/* Invitation content */}
                    <div className="invitation-content relative z-10 flex flex-col items-center text-center px-6 sm:px-12 pt-14 sm:pt-18 pb-7 sm:pb-9">
                      {/* Circular floral medallion emblem */}
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <FloralMedallionOrnament />
                      </motion.div>

                      {/* Greeting */}
                      <p className="invitation-greeting font-serif text-xl sm:text-2xl text-[#70558F] mt-1 mb-0.5">
                        ॐ
                      </p>

                      <p className="invitation-odia text-[#82758A] text-xs sm:text-sm tracking-wider mb-5">
                        ଓଁ ଶ୍ରୀ ଶ୍ରୀ ଗଣେଶାୟ ନମଃ
                      </p>

                      <GoldDivider />

                      {/* Invitation heading */}
                      <p className="invitation-title text-[#82758A] text-[11px] sm:text-xs font-medium tracking-[0.32em] uppercase mt-5 mb-4">
                        You Are Invited
                      </p>

                      {/* Groom */}
                      <motion.h1
                        className="invitation-name font-serif font-medium text-[clamp(2.35rem,9vw,3.75rem)] text-[#70558F] leading-tight tracking-wide break-words max-w-full"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {groom.name}
                      </motion.h1>

                      {/* Ampersand */}
                      <div className="flex items-center justify-center gap-3 w-full max-w-[230px] my-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D5B66F]" />

                        <span className="invitation-ampersand font-serif italic text-3xl text-[#B69A54]">
                          &
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D5B66F]" />
                      </div>

                      {/* Bride */}
                      <motion.h1
                        className="invitation-name font-serif font-medium text-[clamp(2.35rem,9vw,3.75rem)] text-[#70558F] leading-tight tracking-wide break-words max-w-full"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {bride.name}
                      </motion.h1>

                      {/* Wedding date */}
                      <div className="invitation-date-section w-full mt-5 mb-4">
                        <GoldDivider />
                      </div>

                      <p className="invitation-day text-[#82758A] text-xs sm:text-sm font-medium tracking-[0.28em] uppercase mb-1.5">
                        {day}
                      </p>

                      <p className="invitation-date font-serif font-semibold text-lg sm:text-2xl text-[#70558F] tracking-wider mb-5">
                        {displayDate}
                      </p>

                      <GoldDivider />

                      {/* Open invitation button */}
                      <motion.button
                        type="button"
                        onClick={handleOpen}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="invitation-open relative overflow-hidden mt-6 w-full max-w-[290px] rounded-full border border-[#D5B66F] bg-gradient-to-b from-[#FFFFFF] via-[#F4EFF8] to-[#EDE5F3] px-5 py-3.5 text-[#70558F] shadow-[0_8px_24px_-6px_rgba(112,85,143,0.22),inset_0_0_0_1px_rgba(233,215,165,0.75)]"
                      >
                        <motion.span
                          className="absolute inset-y-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-[#E9D7A5]/55 to-transparent"
                          animate={{
                            x: ["-150%", "500%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        />

                        <span className="relative z-10 font-serif font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase text-[#70558F]">
                          Open Invitation
                        </span>
                      </motion.button>

                      {/* Odia blessing */}
                      <p className="invitation-blessing mt-5 text-[#B69A54] text-base sm:text-lg font-serif tracking-widest">
                        ଶୁଭ ବିବାହ
                      </p>

                      {/* Bottom ornament */}
                      <div className="mt-2 w-16 h-px bg-gradient-to-r from-transparent via-[#D5B66F] to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Champagne-gold bottom trim */}
                <div className="h-[2px] mx-6 bg-gradient-to-r from-transparent via-[#D5B66F] to-transparent" />
              </motion.section>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default InvitationIntro;