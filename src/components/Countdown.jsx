// import { useEffect, useState } from "react";
// import { motion } from "motion/react";
// import { Heart, Sparkles } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// // Convert wedding date and time into an IST timestamp
// const getWeddingTimestamp = () => {
//   const { date, time } = weddingData.wedding;

//   const [hoursMinutes, period] = time.split(" ");
//   let [hours, minutes] = hoursMinutes.split(":").map(Number);

//   if (period.toUpperCase() === "PM" && hours !== 12) {
//     hours += 12;
//   }

//   if (period.toUpperCase() === "AM" && hours === 12) {
//     hours = 0;
//   }

//   const dateTime = `${date}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00+05:30`;

//   return new Date(dateTime).getTime();
// };

// const calculateCountdown = () => {
//   const difference = getWeddingTimestamp() - Date.now();

//   if (difference <= 0) {
//     return {
//       days: 0,
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//       completed: true,
//     };
//   }

//   return {
//     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//     minutes: Math.floor((difference / (1000 * 60)) % 60),
//     seconds: Math.floor((difference / 1000) % 60),
//     completed: false,
//   };
// };

// const Countdown = () => {
//   const [countdown, setCountdown] = useState(calculateCountdown);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown(calculateCountdown());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const timeUnits = [
//     { label: "Days", value: countdown.days },
//     { label: "Hours", value: countdown.hours },
//     { label: "Minutes", value: countdown.minutes },
//     { label: "Seconds", value: countdown.seconds },
//   ];

//   return (
//     <section
//       id="countdown"
//       className="relative overflow-hidden bg-[#4A0E14] px-5 py-16 sm:py-20"
//     >
//       {/* Background Decoration */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
//         <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#F8E1E7]/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-4xl text-center">

//         {/* Top Decoration */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-5 flex items-center justify-center gap-3 text-[#C9A227]"
//         >
//           <span className="h-px w-12 bg-[#C9A227]/70" />
//           <Heart size={20} />
//           <span className="h-px w-12 bg-[#C9A227]/70" />
//         </motion.div>

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#E8D5A5]">
//             A Beautiful Beginning
//           </p>

//           <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFaf0]">
//             Counting Every Moment
//           </h2>

//           <p className="mt-4 text-sm sm:text-base text-[#E8D5A5]">
//             Until Happy & Demo's Wedding
//           </p>
//         </motion.div>

//         {/* Countdown Timer */}
//         {countdown.completed ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="mt-12 rounded-xl border border-[#C9A227]/50 bg-white/5 px-5 py-10"
//           >
//             <Sparkles
//               size={35}
//               className="mx-auto mb-4 text-[#C9A227]"
//             />

//             <h3 className="font-serif text-3xl text-[#FFFaf0]">
//               The Celebration Has Begun!
//             </h3>

//             <p className="mt-3 text-[#E8D5A5]">
//               Happy & Demo's special day is here. ଶୁଭ ବିବାହ!
//             </p>
//           </motion.div>
//         ) : (
//           <div className="mt-12 grid grid-cols-4 gap-2 sm:gap-5">
//             {timeUnits.map((unit, index) => (
//               <motion.div
//                 key={unit.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: index * 0.12,
//                   duration: 0.6,
//                 }}
//                 className="rounded-lg border border-[#C9A227]/40 bg-[#FFFaf0]/5 px-1 py-5 sm:px-4 sm:py-7"
//               >
//                 <p className="font-serif text-3xl sm:text-5xl font-medium tabular-nums text-[#E8D5A5]">
//                   {String(unit.value).padStart(2, "0")}
//                 </p>

//                 <p className="mt-2 text-[10px] sm:text-sm uppercase tracking-wider text-[#FFFaf0]/80">
//                   {unit.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* Wedding Date */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-10"
//         >
//           <div className="mx-auto mb-4 h-px w-20 bg-[#C9A227]/60" />

//           <p className="font-serif text-xl text-[#FFFaf0]">
//             {weddingData.wedding.displayDate}
//           </p>

//           <p className="mt-2 text-sm text-[#E8D5A5]">
//             {weddingData.wedding.time} IST
//           </p>

//           <p className="mt-5 text-xl text-[#C9A227]">
//             ଶୁଭ ବିବାହ
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Countdown;







// import { useEffect, useState } from "react";
// import { motion } from "motion/react";
// import { Heart, Sparkles } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// // Convert wedding date and time into an IST timestamp
// const getWeddingTimestamp = () => {
//   const { date, time } = weddingData.wedding;

//   const [hoursMinutes, period] = time.split(" ");
//   let [hours, minutes] = hoursMinutes.split(":").map(Number);

//   if (period.toUpperCase() === "PM" && hours !== 12) {
//     hours += 12;
//   }

//   if (period.toUpperCase() === "AM" && hours === 12) {
//     hours = 0;
//   }

//   const dateTime = `${date}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00+05:30`;

//   return new Date(dateTime).getTime();
// };

// const calculateCountdown = () => {
//   const difference = getWeddingTimestamp() - Date.now();

//   if (difference <= 0) {
//     return {
//       days: 0,
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//       completed: true,
//     };
//   }

//   return {
//     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//     minutes: Math.floor((difference / (1000 * 60)) % 60),
//     seconds: Math.floor((difference / 1000) % 60),
//     completed: false,
//   };
// };

// const Countdown = () => {
//   const [countdown, setCountdown] = useState(calculateCountdown);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown(calculateCountdown());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const timeUnits = [
//     { label: "Days", value: countdown.days },
//     { label: "Hours", value: countdown.hours },
//     { label: "Minutes", value: countdown.minutes },
//     { label: "Seconds", value: countdown.seconds },
//   ];

//   return (
//     <section
//       id="countdown"
//       className="relative overflow-hidden bg-[#0D1B2A] px-5 py-16 sm:py-20 border-y border-[#D4AF37]/20"
//     >
//       {/* Ambient Lighting Decoration */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//         <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-4xl text-center">

//         {/* Top Heart Divider */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-5 flex items-center justify-center gap-3 text-[#D4AF37]"
//         >
//           <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
//           <Heart size={20} className="fill-[#D4AF37]/20" />
//           <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
//         </motion.div>

//         {/* Headings */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#E6C687]/80 font-light">
//             A Beautiful Beginning
//           </p>

//           <h2 className="font-serif text-3xl sm:text-5xl text-[#D4AF37] tracking-wide">
//             Counting Every Moment
//           </h2>

//           <p className="mt-4 text-sm sm:text-base text-[#F4F1EA]/80 font-light">
//             Until {weddingData.couple.groom.name} & {weddingData.couple.bride.name}'s Wedding
//           </p>
//         </motion.div>

//         {/* Countdown Timer Display */}
//         {countdown.completed ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="mt-12 rounded-xl border border-[#D4AF37]/40 bg-[#0A192F]/80 backdrop-blur-md px-5 py-10 shadow-2xl"
//           >
//             <Sparkles
//               size={35}
//               className="mx-auto mb-4 text-[#D4AF37]"
//             />

//             <h3 className="font-serif text-3xl text-[#D4AF37]">
//               The Celebration Has Begun!
//             </h3>

//             <p className="mt-3 text-[#F4F1EA]/90 font-light">
//               {weddingData.couple.groom.name} & {weddingData.couple.bride.name}'s special day is here. ଶୁଭ ବିବାହ!
//             </p>
//           </motion.div>
//         ) : (
//           <div className="mt-12 grid grid-cols-4 gap-2 sm:gap-5">
//             {timeUnits.map((unit, index) => (
//               <motion.div
//                 key={unit.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: index * 0.12,
//                   duration: 0.6,
//                 }}
//                 className="rounded-lg border border-[#D4AF37]/30 bg-[#0A192F]/60 backdrop-blur-sm px-1 py-5 sm:px-4 sm:py-7 shadow-lg"
//               >
//                 <p className="font-serif text-3xl sm:text-5xl font-medium tabular-nums text-[#D4AF37]">
//                   {String(unit.value).padStart(2, "0")}
//                 </p>

//                 <p className="mt-2 text-[10px] sm:text-sm uppercase tracking-widest text-[#E6C687]/70 font-light">
//                   {unit.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* Wedding Date Details */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-10"
//         >
//           <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

//           <p className="font-serif text-xl text-[#F4F1EA]">
//             {weddingData.wedding.displayDate}
//           </p>

//           <p className="mt-2 text-sm text-[#E6C687]/80 font-light tracking-wide">
//             {weddingData.wedding.time} IST
//           </p>

//           <p className="mt-5 text-xl text-[#D4AF37] font-light tracking-widest">
//             ଶୁଭ ବିବାହ
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Countdown;








import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Sparkles, Crown } from "lucide-react";
import { weddingData } from "../config/weddingData";

// Convert wedding date and time into IST timestamp
const getWeddingTimestamp = () => {
  const { date, time } = weddingData.wedding;

  const [hoursMinutes, period] = time.trim().split(/\s+/);
  let [hours, minutes] = hoursMinutes.split(":").map(Number);

  if (period?.toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  }

  if (period?.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  const dateTime = `${date}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00+05:30`;

  return new Date(dateTime).getTime();
};

// Calculate remaining time
const calculateCountdown = () => {
  const difference = getWeddingTimestamp() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      completed: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    completed: false,
  };
};

// Decorative champagne-gold & floral divider
const GoldDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E9D7A5] to-[#D5B66F]" />

    <span className="w-2.5 h-2.5 rounded-full border border-[#D5B66F] bg-[#E8B8D0]/75" />

    <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#E9D7A5] to-[#D5B66F]" />
  </div>
);

// Subtle watercolor corner botanical accent
const CornerFloralAccent = () => (
  <>
    <svg
      viewBox="0 0 150 150"
      className="pointer-events-none absolute -top-2 -left-2 w-24 h-24 sm:w-32 sm:h-32 opacity-85"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="34" fill="#C5B2DA" fillOpacity="0.22" />
      <path
        d="M14 14 C38 26 60 44 78 70"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="34" cy="34" r="8.5" fill="#C5B2DA" fillOpacity="0.78" />
      <circle cx="44" cy="28" r="6" fill="#E8B8D0" fillOpacity="0.78" />
      <circle cx="34" cy="34" r="2" fill="#D5B66F" />
    </svg>

    <svg
      viewBox="0 0 150 150"
      className="pointer-events-none absolute -bottom-2 -right-2 w-24 h-24 sm:w-32 sm:h-32 opacity-85 -scale-x-100 -scale-y-100"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="34" fill="#E8B8D0" fillOpacity="0.22" />
      <path
        d="M14 14 C38 26 60 44 78 70"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="34" cy="34" r="8.5" fill="#E8B8D0" fillOpacity="0.78" />
      <circle cx="44" cy="28" r="6" fill="#C5B2DA" fillOpacity="0.78" />
      <circle cx="34" cy="34" r="2" fill="#D5B66F" />
    </svg>
  </>
);

// Single countdown unit
const TimeUnit = ({ value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.12,
      duration: 0.7,
      ease: "easeOut",
    }}
    className="relative group"
  >
    {/* Champagne-gold & soft border frame */}
    <div className="relative p-[1.5px] rounded-xl bg-gradient-to-b from-[#E9D7A5] via-[#D5B66F] to-[#E6D9EA] shadow-[0_14px_30px_-14px_rgba(112,85,143,0.2)]">
      <div className="relative rounded-xl bg-gradient-to-b from-[#FFFFFF] via-[#FFFCFA] to-[#F4EFF8] px-1.5 py-4 sm:px-4 sm:py-8 border border-[#E6D9EA]/80">
        {/* Corner champagne-gold accents */}
        <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#D5B66F]" />
        <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#D5B66F]" />
        <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#D5B66F]" />
        <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#D5B66F]" />

        {/* Small top floral dot */}
        <div className="flex justify-center mb-3">
          <div className="w-2 h-2 rounded-full bg-[#E8B8D0] border border-[#D5B66F]" />
        </div>

        {/* Countdown Number */}
        <AnimatePresence mode="popLayout">
          <motion.p
            key={value}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="font-serif font-semibold text-3xl sm:text-5xl md:text-6xl text-[#70558F] tabular-nums leading-none"
          >
            {String(value).padStart(2, "0")}
          </motion.p>
        </AnimatePresence>

        {/* Champagne-gold divider */}
        <div className="w-8 h-px mx-auto my-4 bg-gradient-to-r from-transparent via-[#D5B66F] to-transparent" />

        {/* Unit label */}
        <p className="text-[9px] sm:text-xs font-medium uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#82758A]">
          {label}
        </p>
      </div>
    </div>
  </motion.div>
);

const Countdown = () => {
  const [countdown, setCountdown] = useState(calculateCountdown);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  const { groom, bride } = weddingData.couple;

  return (
    <section
      id="countdown"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4EFF8] via-[#FFFCFA] to-[#EDE5F3]/75 px-4 sm:px-6 py-14 sm:py-20 border-y border-[#E6D9EA]"
    >
      {/* Lavender & Blush Watercolor Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#EDE5F3_0%,#FFFCFA_62%,#F4EFF8_100%)] opacity-85" />

        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, transparent 0 15px, #C5B2DA 16px, transparent 17px)",
            backgroundSize: "65px 65px",
          }}
        />

        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#E8B8D0]/22 blur-[120px]" />

        <div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-[#C5B2DA]/25 blur-[105px]" />
        <div className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full bg-[#E8B8D0]/22 blur-[105px]" />

        {/* Delicate outer borders */}
        <div className="absolute inset-3 sm:inset-7 rounded-3xl border border-[#E6D9EA]" />
        <div className="absolute inset-5 sm:inset-10 rounded-2xl border border-[#D5B66F]/35" />

        <CornerFloralAccent />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Emblem Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-7"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#D5B66F] bg-[#FFFFFF] shadow-[0_10px_24px_-8px_rgba(112,85,143,0.2),inset_0_0_0_3px_#F4EFF8]">
            <Crown
              size={24}
              strokeWidth={1.35}
              className="text-[#70558F]"
            />
          </div>

          <GoldDivider className="w-40 mt-5" />
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em] text-[#B69A54]">
            A Beautiful Beginning
          </p>

          <h2 className="font-serif font-medium text-3xl sm:text-5xl md:text-6xl text-[#70558F] tracking-wide leading-tight">
            Counting Every Moment
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#51465B] font-normal tracking-wide">
            Until the celebration of
          </p>

          <p className="mt-2 font-serif font-semibold text-lg sm:text-xl text-[#70558F]">
            {groom.name} & {bride.name}
          </p>
        </motion.div>

        {/* Countdown Display */}
        {countdown.completed ? (
          /* Wedding Day Celebration */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 max-w-2xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-r from-transparent via-[#D5B66F] to-transparent"
          >
            <div className="rounded-2xl bg-[#FFFFFF]/95 px-5 py-12 sm:py-16 border border-[#E6D9EA] shadow-[0_16px_36px_-14px_rgba(112,85,143,0.2)]">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles
                  size={38}
                  className="mx-auto mb-6 text-[#A58AC5]"
                />
              </motion.div>

              <h3 className="font-serif font-medium text-3xl sm:text-5xl text-[#70558F]">
                The Celebration Has Begun!
              </h3>

              <p className="mt-5 text-sm sm:text-base text-[#51465B] font-normal leading-relaxed">
                {groom.name} & {bride.name}&apos;s special day is here.
              </p>

              <p className="mt-4 text-xl sm:text-2xl text-[#B69A54] font-serif tracking-widest">
                ଶୁଭ ବିବାହ
              </p>
            </div>
          </motion.div>
        ) : (
          /* Four Lavender & Gold Countdown Units */
          <div className="mt-8 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-5 md:gap-7 max-w-3xl mx-auto">
            {timeUnits.map((unit, index) => (
              <TimeUnit
                key={unit.label}
                value={unit.value}
                label={unit.label}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Wedding Date Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 sm:mt-14"
        >
          <GoldDivider className="max-w-[220px] mx-auto mb-6" />

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#B69A54] mb-3">
            Save The Date
          </p>

          <p className="font-serif font-semibold text-xl sm:text-2xl text-[#70558F]">
            {weddingData.wedding.displayDate}
          </p>

          <p className="mt-2 text-sm text-[#82758A] font-normal tracking-widest">
            {weddingData.wedding.time} IST
          </p>

          <p className="mt-6 text-xl sm:text-2xl text-[#B69A54] font-serif tracking-[0.2em]">
            ଶୁଭ ବିବାହ
          </p>
        </motion.div>

        {/* Bottom Floral Ornament */}
        <motion.div
          animate={{
            opacity: [0.55, 1, 0.55],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mt-9 flex justify-center items-center gap-3 text-[#D5B66F]"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D5B66F]" />
          <Heart size={16} className="text-[#70558F] fill-[#E8B8D0]/65" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D5B66F]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;