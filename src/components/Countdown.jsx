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

// Decorative gold divider
const GoldDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C6A04A]" />

    <span className="w-2 h-2 rotate-45 border border-[#E8CA82] bg-[#C6A04A]/20" />

    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C6A04A]" />
  </div>
);

// Single countdown unit
const TimeUnit = ({ value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.12,
      duration: 0.7,
      ease: "easeOut",
    }}
    className="relative group"
  >
    {/* Outer ornamental frame */}
    <div className="relative p-[1px] bg-gradient-to-b from-[#E8CA82] via-[#8D692E] to-[#C6A04A] shadow-[0_8px_25px_rgba(0,0,0,0.25)]">

      <div className="relative bg-gradient-to-b from-[#1C3525] to-[#0D1B16] px-1 py-5 sm:px-4 sm:py-8">

        {/* Corner decorations */}
        <span className="absolute top-1 left-1 w-3 h-3 border-t border-l border-[#E8CA82]/70" />
        <span className="absolute top-1 right-1 w-3 h-3 border-t border-r border-[#E8CA82]/70" />
        <span className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-[#E8CA82]/70" />
        <span className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-[#E8CA82]/70" />

        {/* Small top ornament */}
        <div className="flex justify-center mb-3">
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C6A04A]" />
        </div>

        {/* Countdown Number */}
        <AnimatePresence mode="popLayout">
          <motion.p
            key={value}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#E8CA82] tabular-nums leading-none drop-shadow-[0_2px_10px_rgba(198,160,74,0.2)]"
          >
            {String(value).padStart(2, "0")}
          </motion.p>
        </AnimatePresence>

        {/* Gold divider */}
        <div className="w-8 h-px mx-auto my-4 bg-[#C6A04A]/60" />

        {/* Unit label */}
        <p className="text-[9px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#F3E8CF]/80 font-light">
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
      className="relative overflow-hidden bg-[#0D1B16] px-4 sm:px-6 py-20 sm:py-28 border-y border-[#C6A04A]/20"
    >

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Emerald gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1C3525_0%,#102319_55%,#08130E_100%)]" />

        {/* Heritage pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, transparent 0 15px, #C6A04A 16px, transparent 17px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* Ambient gold glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#C6A04A]/10 blur-[120px]" />

        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#C6A04A]/5 blur-[100px]" />
        <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-[#C6A04A]/5 blur-[100px]" />

        {/* Decorative outer borders */}
        <div className="absolute inset-3 sm:inset-7 border border-[#C6A04A]/15" />
        <div className="absolute inset-5 sm:inset-10 border border-[#C6A04A]/10" />

      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Royal Crown */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-7"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C6A04A]/50 bg-[#C6A04A]/10 shadow-[0_0_25px_rgba(198,160,74,0.12)]">
            <Crown
              size={25}
              strokeWidth={1.3}
              className="text-[#E8CA82]"
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
          <p className="mb-4 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#C6A04A] font-light">
            A Beautiful Beginning
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#E8CA82] tracking-wide leading-tight">
            Counting Every Moment
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#F3E8CF]/75 font-light tracking-wide">
            Until the royal celebration of
          </p>

          <p className="mt-2 font-serif text-lg sm:text-xl text-[#E8CA82]">
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
            className="relative mt-12 max-w-2xl mx-auto p-[1px] bg-gradient-to-r from-transparent via-[#C6A04A] to-transparent"
          >
            <div className="bg-[#102319]/90 px-5 py-12 sm:py-16 border-y border-[#C6A04A]/30">

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles
                  size={38}
                  className="mx-auto mb-6 text-[#E8CA82]"
                />
              </motion.div>

              <h3 className="font-serif text-3xl sm:text-5xl text-[#E8CA82]">
                The Celebration Has Begun!
              </h3>

              <p className="mt-5 text-sm sm:text-base text-[#F3E8CF]/85 font-light leading-relaxed">
                {groom.name} & {bride.name}'s special day is here.
              </p>

              <p className="mt-4 text-xl sm:text-2xl text-[#E8CA82] font-serif tracking-widest">
                ଶୁଭ ବିବାହ
              </p>
            </div>
          </motion.div>

        ) : (

          /* Four Royal Countdown Units */
          <div className="mt-12 sm:mt-16 grid grid-cols-4 gap-2 sm:gap-5 md:gap-7 max-w-3xl mx-auto">
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
          className="mt-12 sm:mt-14"
        >
          <GoldDivider className="max-w-[220px] mx-auto mb-6" />

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A04A] mb-3">
            Save The Date
          </p>

          <p className="font-serif text-xl sm:text-2xl text-[#F3E8CF]">
            {weddingData.wedding.displayDate}
          </p>

          <p className="mt-2 text-sm text-[#E8CA82]/80 font-light tracking-widest">
            {weddingData.wedding.time} IST
          </p>

          <p className="mt-6 text-xl sm:text-2xl text-[#E8CA82] font-serif tracking-[0.2em]">
            ଶୁଭ ବିବାହ
          </p>
        </motion.div>

        {/* Bottom Ornament */}
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mt-9 flex justify-center items-center gap-3 text-[#C6A04A]"
        >
          <span className="h-px w-10 bg-[#C6A04A]/50" />
          <Heart size={16} className="fill-[#C6A04A]/20" />
          <span className="h-px w-10 bg-[#C6A04A]/50" />
        </motion.div>

      </div>
    </section>
  );
};

export default Countdown;
