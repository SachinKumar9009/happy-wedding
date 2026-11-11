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
        max-width: 390px !important;
      }

      .invitation-content {
        padding: 34px 22px 14px !important;
      }

      .invitation-ornament {
        width: 76px !important;
      }

      .invitation-greeting {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        font-size: 18px !important;
      }

      .invitation-odia {
        margin-bottom: 10px !important;
        font-size: 11px !important;
      }

      .invitation-title {
        margin-top: 12px !important;
        margin-bottom: 10px !important;
      }

      .invitation-name {
        font-size: clamp(28px, 8vw, 34px) !important;
        line-height: 1.1 !important;
      }

      .invitation-ampersand {
        margin-top: 1px !important;
        margin-bottom: 1px !important;
        font-size: 25px !important;
      }

      .invitation-date-section {
        margin-top: 10px !important;
        margin-bottom: 8px !important;
      }

      .invitation-day {
        margin-bottom: 3px !important;
        font-size: 11px !important;
      }

      .invitation-date {
        margin-bottom: 10px !important;
        font-size: 19px !important;
      }

      .invitation-open {
        margin-top: 12px !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
      }

      .invitation-blessing {
        margin-top: 8px !important;
        font-size: 14px !important;
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
        font-size: 29px !important;
      }

      .invitation-card {
        max-width: 350px !important;
      }
    }

    @media (max-height: 560px) and (max-width: 600px) {
      .invitation-content {
        padding-top: 18px !important;
        padding-bottom: 10px !important;
      }

      .invitation-ornament {
        width: 60px !important;
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
   Gold divider
----------------------------------- */

const GoldDivider = () => (
  <div className="invitation-divider flex items-center justify-center gap-3 w-full">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C6A04A]" />

    <svg viewBox="0 0 30 24" className="w-7 h-6 shrink-0">
      <path
        d="M15 2 L24 12 L15 22 L6 12 Z"
        fill="none"
        stroke="#C6A04A"
        strokeWidth="1.5"
      />
      <path
        d="M15 7 L20 12 L15 17 L10 12 Z"
        fill="#C6A04A"
      />
    </svg>

    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C6A04A]" />
  </div>
);

/* ----------------------------------
   Royal ornament
----------------------------------- */

const RoyalOrnament = () => (
  <svg
    viewBox="0 0 160 90"
    className="invitation-ornament w-24 sm:w-32 mx-auto"
  >
    <path
      d="M80 5 C68 27 38 16 24 42 C44 34 53 57 80 73 C107 57 116 34 136 42 C122 16 92 27 80 5Z"
      stroke="#C6A04A"
      strokeWidth="1.5"
      fill="rgba(198,160,74,0.08)"
    />

    <path
      d="M80 19 Q55 43 80 65 Q105 43 80 19Z"
      stroke="#E8CA82"
      strokeWidth="1.5"
      fill="none"
    />

    <path
      d="M80 28 Q67 44 80 56 Q93 44 80 28Z"
      fill="#C6A04A"
    />

    <path
      d="M24 42 Q10 25 5 42 Q17 44 28 58 M136 42 Q150 25 155 42 Q143 44 132 58"
      stroke="#C6A04A"
      fill="none"
      strokeWidth="1.5"
    />

    <path
      d="M65 75 Q80 86 95 75"
      stroke="#E8CA82"
      fill="none"
    />
  </svg>
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
            className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto bg-[#09150F]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Palace background */}

            <div className="fixed inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#203D29_0%,#102319_55%,#08130D_100%)]" />

              <div
                className="absolute inset-0 opacity-[0.09]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, transparent 45%, #C6A04A 47%, transparent 49%)",
                  backgroundSize: "54px 54px",
                }}
              />

              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#C6A04A]/10 blur-[100px]" />
            </div>

            {/* Royal side curtains */}

            <div className="fixed inset-y-0 left-0 w-3 sm:w-8 pointer-events-none bg-gradient-to-r from-[#29090E] via-[#641E26] to-transparent opacity-80" />

            <div className="fixed inset-y-0 right-0 w-3 sm:w-8 pointer-events-none bg-gradient-to-l from-[#29090E] via-[#641E26] to-transparent opacity-80" />

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
                {/* Outer gold frame */}

                <div className="relative p-[3px] rounded-t-[46%] rounded-b-lg bg-gradient-to-b from-[#E8CA82] via-[#98702F] to-[#C6A04A] shadow-[0_0_35px_rgba(198,160,74,0.18)]">

                  {/* Inner invitation */}

                  <div className="relative overflow-hidden rounded-t-[46%] rounded-b-md border border-[#E8CA82]/50 bg-[#102319]">

                    {/* Inner ornamental background */}

                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#29432D_0%,transparent_65%)]" />

                      <div className="absolute inset-3 border border-[#C6A04A]/20 rounded-t-[46%] rounded-b-sm" />

                      <div className="absolute inset-5 border border-[#C6A04A]/10 rounded-t-[46%] rounded-b-sm" />
                    </div>

                    {/* Decorative arch top */}

                    <div className="absolute inset-x-0 top-0 h-36 sm:h-44 pointer-events-none">
                      <svg
                        viewBox="0 0 440 190"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M12 190 Q12 8 220 5 Q428 8 428 190"
                          fill="none"
                          stroke="#C6A04A"
                          strokeWidth="1.4"
                        />

                        <path
                          d="M23 190 Q23 20 220 17 Q417 20 417 190"
                          fill="none"
                          stroke="#C6A04A"
                          strokeOpacity=".35"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>

                    {/* Side ornamental accents */}

                    <div className="absolute left-3 top-[30%] w-2 h-2 rotate-45 border border-[#C6A04A] opacity-70" />

                    <div className="absolute right-3 top-[30%] w-2 h-2 rotate-45 border border-[#C6A04A] opacity-70" />

                    {/* Invitation content */}

                    <div className="invitation-content relative z-10 flex flex-col items-center text-center px-6 sm:px-12 pt-16 sm:pt-20 pb-7 sm:pb-9">

                      {/* Royal emblem */}

                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <RoyalOrnament />
                      </motion.div>

                      {/* Ganesh greeting */}

                      <p className="invitation-greeting font-serif text-xl sm:text-2xl text-[#E8CA82] mt-1 mb-1">
                        ॐ
                      </p>

                      <p className="invitation-odia text-[#E8CA82] text-xs sm:text-sm tracking-wider mb-5">
                        ଓଁ ଶ୍ରୀ ଶ୍ରୀ ଗଣେଶାୟ ନମଃ
                      </p>

                      <GoldDivider />

                      {/* Invitation heading */}

                      <p className="invitation-title text-[#F3E8CF] text-[11px] sm:text-xs tracking-[0.35em] uppercase mt-6 mb-5">
                        You Are Invited
                      </p>

                      {/* Groom */}

                      <motion.h1
                        className="invitation-name font-serif text-[clamp(2.2rem,9vw,3.6rem)] text-[#E8CA82] leading-tight tracking-wide break-words max-w-full"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {groom.name}
                      </motion.h1>

                      {/* Ampersand */}

                      <div className="flex items-center justify-center gap-3 w-full max-w-[230px] my-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C6A04A]" />

                        <span className="invitation-ampersand font-serif italic text-3xl text-[#E8CA82]">
                          &
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C6A04A]" />
                      </div>

                      {/* Bride */}

                      <motion.h1
                        className="invitation-name font-serif text-[clamp(2.2rem,9vw,3.6rem)] text-[#E8CA82] leading-tight tracking-wide break-words max-w-full"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {bride.name}
                      </motion.h1>

                      {/* Wedding date */}

                      <div className="invitation-date-section w-full mt-6 mb-4">
                        <GoldDivider />
                      </div>

                      <p className="invitation-day text-[#F3E8CF] text-xs sm:text-sm tracking-[0.3em] uppercase mb-2">
                        {day}
                      </p>

                      <p className="invitation-date font-serif text-lg sm:text-2xl text-[#E8CA82] tracking-wider mb-5">
                        {displayDate}
                      </p>

                      <GoldDivider />

                      {/* Open invitation button */}

                      <motion.button
                        type="button"
                        onClick={handleOpen}
                        whileHover={{ scale: 1.035 }}
                        whileTap={{ scale: 0.96 }}
                        className="invitation-open relative overflow-hidden mt-6 w-full max-w-[290px] rounded-full border-2 border-[#E8CA82] bg-gradient-to-b from-[#F3DEA5] via-[#C6A04A] to-[#9A702D] px-5 py-3.5 text-[#241708] shadow-[0_5px_20px_rgba(198,160,74,0.2)]"
                      >
                        <motion.span
                          className="absolute inset-y-0 w-1/4 -skew-x-12 bg-white/30"
                          animate={{
                            x: ["-150%", "500%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        />

                        <span className="relative z-10 font-serif font-bold text-xs sm:text-sm tracking-[0.18em] uppercase">
                          Open Invitation
                        </span>
                      </motion.button>

                      {/* Odia blessing */}

                      <p className="invitation-blessing mt-5 text-[#E8CA82] text-base sm:text-lg font-serif tracking-widest">
                        ଶୁଭ ବିବାହ
                      </p>

                      {/* Bottom ornament */}

                      <div className="mt-2 w-16 h-px bg-gradient-to-r from-transparent via-[#C6A04A] to-transparent" />

                    </div>
                  </div>
                </div>

                {/* Gold bottom platform */}

                <div className="h-[3px] mx-5 bg-gradient-to-r from-transparent via-[#E8CA82] to-transparent" />

              </motion.section>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default InvitationIntro;