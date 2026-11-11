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







import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Music } from "lucide-react";
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

  // Detect scroll for background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A192F]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Names */}
          <a
            href="#home"
            className="font-serif text-lg sm:text-xl text-[#D4AF37] tracking-wide hover:opacity-90 transition-opacity"
          >
            {weddingData.couple.groom.name}
            <span className="text-[#E6C687] mx-1.5 font-sans font-light">&</span>
            {weddingData.couple.bride.name}
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#F4F1EA]/80 hover:text-[#D4AF37] transition-colors tracking-wide font-light"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {/* Music button */}
            <button
              onClick={onToggleMusic}
              className={`p-2.5 rounded-full transition-all duration-300 border ${
                isPlaying
                  ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]"
                  : "border-[#D4AF37]/30 text-[#E6C687] hover:bg-[#D4AF37]/10"
              }`}
              aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
              title={isPlaying ? "Pause music" : "Play music"}
            >
              <Music size={18} className={isPlaying ? "animate-spin" : ""} />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/10 border border-[#D4AF37]/30 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D1B2A] border-t border-[#D4AF37]/20 shadow-2xl"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-3 px-4 text-[#F4F1EA]/90 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-md transition-colors text-sm font-light tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;