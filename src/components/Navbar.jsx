// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { Menu, X, Music } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const Navbar = ({ isPlaying, onToggleMusic }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "Couple", href: "#couple" },
//     { name: "Events", href: "#events" },
//     { name: "Venue", href: "#venue" },
//     { name: "Gallery", href: "#gallery" },
//     { name: "Family", href: "#family" },
//   ];

//   // Detect scroll for background effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <motion.header
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         scrolled
//           ? "bg-[#FFFaf0]/95 backdrop-blur-md shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-16">
          
//           {/* Logo / Names */}
//           <a
//             href="#home"
//             className="font-serif text-lg sm:text-xl text-[#6B0F1A] tracking-wide"
//           >
//             {weddingData.couple.groom.name}
//             <span className="text-[#C9A227] mx-1.5">&</span>
//             {weddingData.couple.bride.name}
//           </a>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-sm text-[#5C4A3D] hover:text-[#6B0F1A] transition-colors tracking-wide"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           {/* Right side buttons */}
//           <div className="flex items-center gap-3">
//             {/* Music button (placeholder for now) */}
//             <button
//               onClick={onToggleMusic}
//               className="p-2.5 rounded-full text-[#6B0F1A] hover:bg-[#6B0F1A]/10 transition-colors"
//               aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
//               title={isPlaying ? "Pause music" : "Play music"}
//             >
//               {isPlaying ? <Music size={18} /> : <Music size={18} />}
//             </button>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden p-2.5 rounded-full text-[#6B0F1A] hover:bg-[#6B0F1A]/10 transition-colors"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-[#FFFaf0] border-t border-[#C9A227]/20"
//           >
//             <nav className="flex flex-col px-4 py-4 gap-1">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={handleLinkClick}
//                   className="py-3 px-3 text-[#5C4A3D] hover:text-[#6B0F1A] hover:bg-[#6B0F1A]/5 rounded-md transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };

// export default Navbar;







// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { Menu, X, Music } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const Navbar = ({ isPlaying, onToggleMusic }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "Couple", href: "#couple" },
//     { name: "Events", href: "#events" },
//     { name: "Venue", href: "#venue" },
//     { name: "Gallery", href: "#gallery" },
//     { name: "Family", href: "#family" },
//   ];

//   // Detect scroll for background effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <motion.header
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         scrolled
//           ? "bg-[#0A192F]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg shadow-black/20"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-16">
          
//           {/* Logo / Names */}
//           <a
//             href="#home"
//             className="font-serif text-lg sm:text-xl text-[#D4AF37] tracking-wide hover:opacity-90 transition-opacity"
//           >
//             {weddingData.couple.groom.name}
//             <span className="text-[#E6C687] mx-1.5 font-sans font-light">&</span>
//             {weddingData.couple.bride.name}
//           </a>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-sm text-[#F4F1EA]/80 hover:text-[#D4AF37] transition-colors tracking-wide font-light"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           {/* Right side buttons */}
//           <div className="flex items-center gap-3">
//             {/* Music button */}
//             <button
//               onClick={onToggleMusic}
//               className={`p-2.5 rounded-full transition-all duration-300 border ${
//                 isPlaying
//                   ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]"
//                   : "border-[#D4AF37]/30 text-[#E6C687] hover:bg-[#D4AF37]/10"
//               }`}
//               aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
//               title={isPlaying ? "Pause music" : "Play music"}
//             >
//               <Music size={18} className={isPlaying ? "animate-spin" : ""} />
//             </button>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden p-2.5 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/10 border border-[#D4AF37]/30 transition-colors"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Drawer */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-[#0D1B2A] border-t border-[#D4AF37]/20 shadow-2xl"
//           >
//             <nav className="flex flex-col px-4 py-4 gap-1">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={handleLinkClick}
//                   className="py-3 px-4 text-[#F4F1EA]/90 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-md transition-colors text-sm font-light tracking-wide"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };

// export default Navbar;










import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Music, Pause } from "lucide-react";
import { weddingData } from "../config/weddingData";

const Navbar = ({ isPlaying, onToggleMusic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Couple", href: "#couple" },
    { name: "Events", href: "#events" },
    { name: "Venue", href: "#venue" },
    { name: "Gallery", href: "#gallery" },
    { name: "Family", href: "#family" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a navigation link is selected
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D1B16]/95 backdrop-blur-xl shadow-[0_5px_25px_rgba(0,0,0,0.3)] border-b border-[#C6A04A]/40"
          : "bg-gradient-to-b from-[#0D1B16]/80 to-transparent"
      }`}
    >
      {/* Top decorative gold line */}
      <div
        className={`h-[1px] bg-gradient-to-r from-transparent via-[#C6A04A]/80 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-60"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px] sm:h-[76px]">

          {/* Couple Names / Royal Logo */}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="group flex flex-col items-start shrink-0"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-lg sm:text-xl lg:text-2xl text-[#E8CA82] tracking-wide transition-colors group-hover:text-[#F3DEA5]">
                {weddingData.couple.groom.name}
              </span>

              <span className="font-serif italic text-[#C6A04A] text-xl sm:text-2xl">
                &
              </span>

              <span className="font-serif text-lg sm:text-xl lg:text-2xl text-[#E8CA82] tracking-wide transition-colors group-hover:text-[#F3DEA5]">
                {weddingData.couple.bride.name}
              </span>
            </div>

            {/* Small ornamental divider */}
            <div className="flex items-center gap-2 w-full mt-1">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C6A04A]" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C6A04A]" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C6A04A]" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="group relative py-2 text-[13px] xl:text-sm text-[#F3E8CF]/85 hover:text-[#E8CA82] tracking-wider transition-colors duration-300"
              >
                {link.name}

                {/* Gold underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C6A04A] transition-all duration-300 group-hover:w-full" />

                {/* Small gold dot */}
                <span className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C6A04A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-3">

            {/* Music button - connected to existing player */}
            <motion.button
              type="button"
              onClick={onToggleMusic}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label={
                isPlaying ? "Pause wedding music" : "Play wedding music"
              }
              title={isPlaying ? "Pause music" : "Play music"}
              className={`relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border transition-all duration-300 ${
                isPlaying
                  ? "border-[#E8CA82] bg-[#C6A04A]/20 text-[#E8CA82] shadow-[0_0_15px_rgba(198,160,74,0.2)]"
                  : "border-[#C6A04A]/50 text-[#E8CA82] hover:bg-[#C6A04A]/15 hover:border-[#E8CA82]"
              }`}
            >
              {isPlaying && (
                <span className="absolute inset-0 rounded-full border border-[#C6A04A]/50 animate-ping opacity-30" />
              )}

              {isPlaying ? (
                <Pause size={17} fill="currentColor" />
              ) : (
                <Music size={18} />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#C6A04A]/50 text-[#E8CA82] hover:bg-[#C6A04A]/15 transition-all duration-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Royal mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[68px] bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Dropdown panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 lg:hidden overflow-hidden bg-[#102319] border-t border-[#C6A04A]/40 shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
            >
              {/* Decorative border */}
              <div className="mx-5 mt-3 h-px bg-gradient-to-r from-transparent via-[#C6A04A]/60 to-transparent" />

              <nav className="flex flex-col px-5 py-3">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex items-center justify-between py-3.5 px-3 border-b border-[#C6A04A]/10 text-[#F3E8CF]/90 hover:text-[#E8CA82] hover:bg-[#C6A04A]/[0.06] transition-all duration-300"
                  >
                    <span className="font-serif text-base tracking-wider">
                      {link.name}
                    </span>

                    <span className="text-[#C6A04A] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      ✦
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Bottom decoration */}
              <div className="flex items-center justify-center gap-3 pb-5 pt-2">
                <div className="w-10 h-px bg-[#C6A04A]/50" />
                <span className="text-[#E8CA82] text-xs">✦</span>
                <div className="w-10 h-px bg-[#C6A04A]/50" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;