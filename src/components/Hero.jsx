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
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C6A04A] to-[#C6A04A]" />

    <svg viewBox="0 0 36 28" className="w-9 h-7 shrink-0">
      <path
        d="M18 2 L29 14 L18 26 L7 14 Z"
        stroke="#C6A04A"
        strokeWidth="1.3"
        fill="none"
      />
      <path
        d="M18 8 L24 14 L18 20 L12 14 Z"
        fill="#C6A04A"
      />
    </svg>

    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C6A04A] to-[#C6A04A]" />
  </div>
);

const RoyalArch = () => (
  <svg
    viewBox="0 0 500 650"
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="none"
    fill="none"
  >
    {/* Main palace arch */}
    <path
      d="M12 650 V260 C12 105 105 12 250 12 C395 12 488 105 488 260 V650"
      stroke="#C6A04A"
      strokeWidth="2"
      opacity=".7"
    />

    {/* Inner arch */}
    <path
      d="M25 650 V265 C25 120 112 28 250 28 C388 28 475 120 475 265 V650"
      stroke="#E8CA82"
      strokeWidth="0.8"
      opacity=".45"
    />

    {/* Arch ornament */}
    <path
      d="M250 10 Q235 38 210 35 Q230 52 250 72 Q270 52 290 35 Q265 38 250 10Z"
      stroke="#C6A04A"
      strokeWidth="1.5"
    />

    <circle cx="250" cy="48" r="5" fill="#C6A04A" />

    {/* Side decorative motifs */}
    <path
      d="M12 270 Q35 240 55 270 Q35 300 12 270Z"
      stroke="#C6A04A"
      strokeWidth="1"
    />

    <path
      d="M488 270 Q465 240 445 270 Q465 300 488 270Z"
      stroke="#C6A04A"
      strokeWidth="1"
    />

    {/* Side pillars */}
    <path d="M12 300 H35 V650 H12" stroke="#C6A04A" opacity=".35" />
    <path d="M488 300 H465 V650 H488" stroke="#C6A04A" opacity=".35" />

    {/* Top floral decorations */}
    <path
      d="M105 75 Q130 40 155 75 Q130 90 105 75Z"
      stroke="#C6A04A"
      opacity=".35"
    />
    <path
      d="M395 75 Q370 40 345 75 Q370 90 395 75Z"
      stroke="#C6A04A"
      opacity=".35"
    />
  </svg>
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
      className="relative min-h-[90svh] flex items-center justify-center overflow-hidden bg-[#0D1B16] px-4 sm:px-6 py-24 sm:py-28"
    >
      {/* Royal Palace Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Emerald gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#203D29_0%,#14251C_50%,#08130E_100%)]" />

        {/* Subtle heritage pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, transparent 0 15px, #C6A04A 16px, transparent 17px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* Ambient golden glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full bg-[#C6A04A]/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#C6A04A]/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#C6A04A]/5 blur-[100px]" />

        {/* Decorative outer frame */}
        <div className="absolute inset-3 sm:inset-7 border border-[#C6A04A]/20" />
        <div className="absolute inset-5 sm:inset-10 border border-[#C6A04A]/10" />

        {/* Royal arch */}
        <div className="absolute inset-x-[3%] top-[3%] bottom-[3%] opacity-40">
          <RoyalArch />
        </div>
      </div>

      {/* Floating gold particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none w-1 h-1 rounded-full bg-[#E8CA82]"
          style={{
            left: `${(i * 19 + 8) % 100}%`,
            top: `${(i * 23 + 12) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.8, 0.15],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">

        {/* Royal Crown Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-7"
        >
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-[#C6A04A]/50 bg-[#C6A04A]/10 shadow-[0_0_25px_rgba(198,160,74,0.12)]">
            <Crown
              size={25}
              strokeWidth={1.3}
              className="text-[#E8CA82]"
            />
          </div>

          <GoldDivider className="w-44 mt-5" />
        </motion.div>

        {/* Announcement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[#E8CA82] text-[10px] sm:text-xs uppercase tracking-[0.35em] mb-5 font-light"
        >
          Together with their families
        </motion.p>

        {/* Groom Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-[#E8CA82] tracking-wide drop-shadow-[0_3px_15px_rgba(198,160,74,0.2)] break-words"
        >
          {groom.name}
        </motion.h1>

        {/* Royal Love Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex items-center justify-center gap-5 my-3 sm:my-5"
        >
          <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C6A04A]" />

          <Heart
            size={25}
            strokeWidth={1.4}
            className="text-[#C6A04A] fill-[#C6A04A]/20"
          />

          <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C6A04A]" />
        </motion.div>

        {/* Bride Name */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-[#E8CA82] tracking-wide drop-shadow-[0_3px_15px_rgba(198,160,74,0.2)] break-words"
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

          <p className="text-[#F3E8CF]/90 text-sm sm:text-base tracking-wide font-light">
            Joyfully invite you to celebrate their wedding
          </p>

          <p className="mt-3 text-xl sm:text-2xl text-[#E8CA82] font-serif tracking-widest">
            ଶୁଭ ବିବାହ
          </p>
        </motion.div>

        {/* Wedding Details */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative mt-9 max-w-[580px] mx-auto"
        >
          {/* Outer gold border */}
          <div className="p-[1px] bg-gradient-to-r from-transparent via-[#C6A04A]/70 to-transparent">
            <div className="bg-[#102319]/80 backdrop-blur-md border-y border-[#C6A04A]/20 px-5 sm:px-8 py-5 sm:py-6">

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">

                {/* Wedding Date */}
                <div className="flex items-center gap-4 text-left min-w-0">
                  <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-[#C6A04A]/40 bg-[#C6A04A]/10">
                    <CalendarDays
                      size={20}
                      className="text-[#E8CA82]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C6A04A] mb-1">
                      Wedding Date
                    </p>

                    <p className="font-serif text-base sm:text-lg text-[#F3E8CF]">
                      {displayDate}
                    </p>

                    <p className="text-[10px] text-[#E8CA82]/70 mt-1 tracking-wider">
                      {day}
                    </p>
                  </div>
                </div>

                {/* Vertical divider */}
                <div className="hidden sm:block h-12 w-px bg-[#C6A04A]/30" />

                {/* Wedding Time */}
                <div className="flex items-center gap-4 text-left min-w-0">
                  <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-[#C6A04A]/40 bg-[#C6A04A]/10">
                    <Clock
                      size={20}
                      className="text-[#E8CA82]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C6A04A] mb-1">
                      Wedding Time
                    </p>

                    <p className="font-serif text-base sm:text-lg text-[#F3E8CF]">
                      {time}
                    </p>

                    <p className="text-[10px] text-[#E8CA82]/70 mt-1 tracking-wider">
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
            scale: 1.04,
            boxShadow: "0 0 25px rgba(198,160,74,0.35)",
          }}
          whileTap={{ scale: 0.96 }}
          className="group relative mt-9 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#E8CA82] bg-gradient-to-b from-[#F3DEA5] via-[#C6A04A] to-[#9A702D] px-8 sm:px-10 py-4 text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#241708] uppercase shadow-lg transition-all duration-300"
        >
          <span className="relative z-10">
            Explore Invitation
          </span>

          <ChevronDown
            size={17}
            className="relative z-10 transition-transform duration-300 group-hover:translate-y-1"
          />

          {/* Shimmer */}
          <motion.span
            className="absolute inset-y-0 w-1/4 -skew-x-12 bg-white/30"
            animate={{ x: ["-150%", "500%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </motion.button>

        {/* Bottom royal decoration */}
        <motion.div
          animate={{ y: [0, 7, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-9 flex justify-center items-center gap-3 text-[#C6A04A]"
        >
          <span className="h-px w-8 bg-[#C6A04A]/50" />
          <Sparkles size={17} />
          <span className="h-px w-8 bg-[#C6A04A]/50" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;