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






// src/components/InvitationIntro.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { weddingData } from "../config/weddingData";

const InvitationIntro = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Delay so exit animations complete cleanly before showing the main site
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A192F]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle Ambient Gold Glow Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
          </div>

          {/* Main Card */}
          <motion.div
            className="relative z-10 w-[90%] max-w-md mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Outer Gold Border Frame */}
            <div className="border-[1.5px] border-[#D4AF37]/60 p-1.5 rounded-sm shadow-2xl backdrop-blur-sm">
              <div className="border border-[#D4AF37]/30 bg-[#0D1B2A] px-6 py-10 sm:px-8 sm:py-12 text-center relative">
                
                {/* Top Odia Greeting */}
                <p className="text-[#D4AF37] text-md tracking-wider uppercase mb-5 font-light">
                  ଓଁ ଶ୍ରୀ ଶ୍ରୀ ଗଣେଶାୟ ନମଃ
                </p>

                {/* Top Decorative Ornament */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                  <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#0D1B2A]" />
                  <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
                </div>

                {/* Header Label */}
                <p className="text-[#E6C687] text-xs tracking-[0.3em] uppercase mb-4 font-light">
                  You are invited
                </p>

                {/* Groom Name */}
                <h1 className="font-serif text-3xl sm:text-4xl text-[#D4AF37] leading-tight mb-2 tracking-wide font-normal">
                  {weddingData.couple.groom.name}
                </h1>
                
                {/* Ampersand Divider */}
                <p className="text-[#F4F1EA]/70 text-sm tracking-widest my-3 font-serif italic">
                  &
                </p>
                
                {/* Bride Name */}
                <h1 className="font-serif text-3xl sm:text-4xl text-[#D4AF37] leading-tight mb-6 tracking-wide font-normal">
                  {weddingData.couple.bride.name}
                </h1>

                {/* Date Section */}
                <p className="text-[#F4F1EA]/80 text-xs sm:text-sm tracking-widest uppercase mb-1">
                  {weddingData.wedding.day}
                </p>
                <p className="text-[#C5A059] font-medium text-base sm:text-lg tracking-wide mb-8">
                  {weddingData.wedding.displayDate}
                </p>

                {/* Bottom Decorative Ornament */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                  <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#0D1B2A]" />
                  <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
                </div>

                {/* Royal Gold CTA Button */}
                <button
                  onClick={handleOpen}
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-[#0A192F] text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-95"
                >
                  <span className="relative z-10">Open Invitation</span>
                </button>

                {/* Odia Blessing */}
                <p className="mt-8 text-[#E6C687]/80 text-base tracking-widest font-light">
                  ଶୁଭ ବିବାହ
                </p>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InvitationIntro;