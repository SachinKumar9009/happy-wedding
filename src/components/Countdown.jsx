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







import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import { weddingData } from "../config/weddingData";

// Convert wedding date and time into an IST timestamp
const getWeddingTimestamp = () => {
  const { date, time } = weddingData.wedding;

  const [hoursMinutes, period] = time.split(" ");
  let [hours, minutes] = hoursMinutes.split(":").map(Number);

  if (period.toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  }

  if (period.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  const dateTime = `${date}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00+05:30`;

  return new Date(dateTime).getTime();
};

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

  return (
    <section
      id="countdown"
      className="relative overflow-hidden bg-[#0D1B2A] px-5 py-16 sm:py-20 border-y border-[#D4AF37]/20"
    >
      {/* Ambient Lighting Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Top Heart Divider */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-5 flex items-center justify-center gap-3 text-[#D4AF37]"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <Heart size={20} className="fill-[#D4AF37]/20" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#E6C687]/80 font-light">
            A Beautiful Beginning
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#D4AF37] tracking-wide">
            Counting Every Moment
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#F4F1EA]/80 font-light">
            Until {weddingData.couple.groom.name} & {weddingData.couple.bride.name}'s Wedding
          </p>
        </motion.div>

        {/* Countdown Timer Display */}
        {countdown.completed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 rounded-xl border border-[#D4AF37]/40 bg-[#0A192F]/80 backdrop-blur-md px-5 py-10 shadow-2xl"
          >
            <Sparkles
              size={35}
              className="mx-auto mb-4 text-[#D4AF37]"
            />

            <h3 className="font-serif text-3xl text-[#D4AF37]">
              The Celebration Has Begun!
            </h3>

            <p className="mt-3 text-[#F4F1EA]/90 font-light">
              {weddingData.couple.groom.name} & {weddingData.couple.bride.name}'s special day is here. ଶୁଭ ବିବାହ!
            </p>
          </motion.div>
        ) : (
          <div className="mt-12 grid grid-cols-4 gap-2 sm:gap-5">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                className="rounded-lg border border-[#D4AF37]/30 bg-[#0A192F]/60 backdrop-blur-sm px-1 py-5 sm:px-4 sm:py-7 shadow-lg"
              >
                <p className="font-serif text-3xl sm:text-5xl font-medium tabular-nums text-[#D4AF37]">
                  {String(unit.value).padStart(2, "0")}
                </p>

                <p className="mt-2 text-[10px] sm:text-sm uppercase tracking-widest text-[#E6C687]/70 font-light">
                  {unit.label}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Wedding Date Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10"
        >
          <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="font-serif text-xl text-[#F4F1EA]">
            {weddingData.wedding.displayDate}
          </p>

          <p className="mt-2 text-sm text-[#E6C687]/80 font-light tracking-wide">
            {weddingData.wedding.time} IST
          </p>

          <p className="mt-5 text-xl text-[#D4AF37] font-light tracking-widest">
            ଶୁଭ ବିବାହ
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Countdown;