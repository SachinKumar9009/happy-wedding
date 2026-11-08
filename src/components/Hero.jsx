import { motion } from "motion/react";
import { Heart, Sparkles, CalendarDays, Clock, ChevronDown } from "lucide-react";
import { weddingData } from "../config/weddingData";

const Hero = () => {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90svh] flex items-center justify-center overflow-hidden bg-[#FFFaf0] px-5 py-20"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#F8E1E7]/60 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />

        <div className="absolute inset-5 sm:inset-10 border border-[#C9A227]/20 rounded-sm" />

      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">

        {/* Decorative Top Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-7"
        >
          <div className="flex items-center gap-3 text-[#C9A227]">
            <span className="h-px w-12 bg-[#C9A227]" />
            <Sparkles size={22} />
            <span className="h-px w-12 bg-[#C9A227]" />
          </div>
        </motion.div>

        {/* Wedding Announcement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#5C4A3D] mb-5"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl leading-tight text-[#6B0F1A]"
        >
          {weddingData.couple.groom.name}
        </motion.h1>

        {/* And Symbol */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-3 my-3"
        >
          <span className="h-px w-10 bg-[#C9A227]/70" />
          <Heart
            size={22}
            className="text-[#C9A227] fill-[#C9A227]/20"
          />
          <span className="h-px w-10 bg-[#C9A227]/70" />
        </motion.div>

        {/* Bride Name */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl leading-tight text-[#6B0F1A]"
        >
          {weddingData.couple.bride.name}
        </motion.h2>

        {/* Wedding Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-7 text-sm sm:text-base tracking-wide text-[#5C4A3D]"
        >
          Joyfully invite you to celebrate their wedding
        </motion.p>

        {/* Odia Blessing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-3 text-xl text-[#6B0F1A]"
        >
          ଶୁଭ ବିବାହ
        </motion.p>

        {/* Wedding Date and Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10"
        >
          <div className="flex items-center gap-3 text-[#6B0F1A]">
            <CalendarDays size={21} className="text-[#C9A227]" />
            <div className="text-left">
              <p className="text-xs text-[#5C4A3D]">Wedding Date</p>
              <p className="font-medium">
                {weddingData.wedding.displayDate}
              </p>
            </div>
          </div>

          <div className="hidden sm:block h-10 w-px bg-[#C9A227]/40" />

          <div className="flex items-center gap-3 text-[#6B0F1A]">
            <Clock size={21} className="text-[#C9A227]" />
            <div className="text-left">
              <p className="text-xs text-[#5C4A3D]">Wedding Time</p>
              <p className="font-medium">
                {weddingData.wedding.time}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Explore Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          onClick={scrollToEvents}
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-sm bg-[#6B0F1A] px-8 py-4 text-sm font-medium tracking-widest text-[#FFFaf0] uppercase transition-all duration-300 hover:bg-[#4A0E14] active:scale-95 shadow-lg shadow-[#6B0F1A]/15"
        >
          Explore Invitation
          <ChevronDown size={18} />
        </motion.button>

        {/* Bottom Decoration */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 flex justify-center text-[#C9A227]"
        >
          <Sparkles size={18} />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
