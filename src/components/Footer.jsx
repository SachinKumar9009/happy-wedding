// import { motion } from "motion/react";
// import {
//   Heart,
//   ArrowUp,
//   MessageCircle,
//   Flower2,
// } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const Footer = () => {
//   const { groom, bride } = weddingData.couple;
//   const { wedding } = weddingData;
//   const { venue } = weddingData;

//   const shareInvitation = () => {
//     const message = `💍 Wedding Invitation 💍

// ${groom.fullName} ❤️ ${bride.fullName}

// We warmly invite you to celebrate our wedding on ${wedding.displayDate} at ${wedding.time}.

// Venue: ${venue.name}

// Join us and bless the couple! ❤️

// ${window.location.href}`;

//     const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

//     window.open(whatsappUrl, "_blank", "noopener,noreferrer");
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="relative overflow-hidden bg-[#4A0E14] px-5 py-16 text-[#FFFaf0]">

//       {/* Decorative background */}
//       <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full border border-[#C9A227]/20" />
//       <div className="pointer-events-none absolute -right-20 bottom-10 h-48 w-48 rounded-full border border-[#C9A227]/20" />

//       <div className="relative mx-auto max-w-5xl text-center">

//         {/* Decorative ornament */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-6 flex items-center justify-center gap-3 text-[#C9A227]"
//         >
//           <span className="h-px w-12 bg-[#C9A227]/60" />
//           <Flower2 size={25} />
//           <span className="h-px w-12 bg-[#C9A227]/60" />
//         </motion.div>

//         {/* Couple names */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="mb-4 font-serif text-sm uppercase tracking-[0.3em] text-[#C9A227]">
//             Together With Their Families
//           </p>

//           <h2 className="font-serif text-3xl leading-relaxed sm:text-5xl">
//             {groom.name}
//             <span className="mx-3 text-[#C9A227]">&</span>
//             {bride.name}
//           </h2>

//           <p className="mt-4 text-sm tracking-widest text-[#FFFaf0]/80">
//             {wedding.displayDate}
//           </p>
//         </motion.div>

//         {/* Divider */}
//         <div className="mx-auto my-8 h-px max-w-xs bg-gradient-to-r from-transparent via-[#C9A227]/70 to-transparent" />

//         {/* Thank you message */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           className="mx-auto max-w-2xl"
//         >
//           <h3 className="mb-4 font-serif text-2xl text-[#C9A227]">
//             Thank You!
//           </h3>

//           <p className="text-sm leading-7 text-[#FFFaf0]/85 sm:text-base">
//             Your presence and blessings will make our special day even more
//             memorable. We look forward to celebrating this beautiful beginning
//             with you and your family.
//           </p>

//           <p className="mt-6 font-serif text-lg leading-8 text-[#F8E1E7]">
//             ଆପଣଙ୍କ ଉପସ୍ଥିତି ଓ ଆଶୀର୍ବାଦ ଆମ ପାଇଁ ଅମୂଲ୍ୟ।
//             <br />
//             ଆମର ନୂତନ ଜୀବନ ପାଇଁ ଆପଣଙ୍କ ଶୁଭେଚ୍ଛା କାମନା କରୁଛୁ।
//           </p>
//         </motion.div>

//         {/* Action buttons */}
//         <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

//           <button
//             onClick={shareInvitation}
//             className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C9A227] px-7 py-3 text-sm font-semibold text-[#4A0E14] transition hover:bg-[#e0bd4d]"
//           >
//             <MessageCircle size={18} />
//             Share Invitation
//           </button>

//           <button
//             onClick={scrollToTop}
//             className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C9A227]/60 px-7 py-3 text-sm font-medium text-[#FFFaf0] transition hover:bg-[#C9A227]/10"
//           >
//             <ArrowUp size={18} />
//             Back to Top
//           </button>

//         </div>

//         {/* Bottom section */}
//         <div className="mt-14 border-t border-[#FFFaf0]/15 pt-6">

//           <p className="text-xs text-[#FFFaf0]/60">
//             With love and gratitude, we invite you to be part of our
//             celebration.
//           </p>

//           <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[#FFFaf0]/70">
//             Made with
//             <Heart size={13} className="fill-[#C9A227] text-[#C9A227]" />
//             for Happy & Demo
//           </p>

//           <p className="mt-3 text-[11px] text-[#FFFaf0]/40">
//             © {new Date().getFullYear()} Pradhan's. All rights reserved.
//           </p>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;







// import { motion } from "motion/react";
// import {
//   Heart,
//   ArrowUp,
//   Flower2,
// } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const Footer = () => {
//   const { groom, bride } = weddingData.couple;
//   const { wedding } = weddingData;
//   const { venue } = weddingData;

//   const shareOnWhatsApp = () => {
//     const message = `💍 Wedding Invitation 💍

// ${groom.fullName} ❤️ ${bride.fullName}

// We warmly invite you to celebrate our wedding on ${wedding.displayDate} at ${wedding.time}.

// Venue: ${venue.name}

// Join us and bless the couple! ❤️

// ${window.location.href}`;

//     const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

//     window.open(whatsappUrl, "_blank", "noopener,noreferrer");
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="relative overflow-hidden bg-[#0A192F] px-5 py-16 text-[#F4F1EA] border-t border-[#D4AF37]/30">

//       {/* Decorative ambient background rings */}
//       <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full border border-[#D4AF37]/20" />
//       <div className="pointer-events-none absolute -right-20 bottom-10 h-48 w-48 rounded-full border border-[#D4AF37]/20" />
//       <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[#D4AF37] opacity-5 blur-3xl" />

//       <div className="relative mx-auto max-w-5xl text-center">

//         {/* Decorative ornament */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-6 flex items-center justify-center gap-3 text-[#D4AF37]"
//         >
//           <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
//           <Flower2 size={25} />
//           <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
//         </motion.div>

//         {/* Couple names */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="mb-4 font-serif text-xs uppercase tracking-[0.3em] text-[#E6C687]/80 font-light">
//             Together With Their Families
//           </p>

//           <h2 className="font-serif text-3xl leading-relaxed sm:text-5xl text-[#D4AF37] tracking-wide">
//             {groom.name}
//             <span className="mx-3 text-[#E6C687] font-sans font-light">&</span>
//             {bride.name}
//           </h2>

//           <p className="mt-4 text-xs sm:text-sm tracking-widest uppercase text-[#F4F1EA]/80 font-light">
//             {wedding.displayDate}
//           </p>
//         </motion.div>

//         {/* Divider */}
//         <div className="mx-auto my-8 h-px max-w-xs bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

//         {/* Thank you message */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           className="mx-auto max-w-2xl"
//         >
//           <h3 className="mb-4 font-serif text-2xl text-[#D4AF37] tracking-wide">
//             Thank You!
//           </h3>

//           <p className="text-sm leading-7 text-[#F4F1EA]/85 sm:text-base font-light">
//             Your presence and blessings will make our special day even more
//             memorable. We look forward to celebrating this beautiful beginning
//             with you and your family.
//           </p>

//           <p className="mt-6 font-serif text-lg leading-8 text-[#E6C687] font-light tracking-wide">
//             ଆପଣଙ୍କ ଉପସ୍ଥିତି ଓ ଆଶୀର୍ବାଦ ଆମ ପାଇଁ ଅମୂଲ୍ୟ।
//             <br />
//             ଆମର ନୂତନ ଜୀବନ ପାଇଁ ଆପଣଙ୍କ ଶୁଭେଚ୍ଛା କାମନା କରୁଛୁ।
//           </p>
//         </motion.div>

//         {/* Action buttons */}
//         <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

//           {/* WhatsApp Share Button */}
//           <button
//             onClick={shareOnWhatsApp}
//             className="flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#20ba5a] hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20"
//           >
//             {/* WhatsApp SVG Icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
//             </svg>
//             Share on WhatsApp
//           </button>

//           {/* Back to Top Button */}
//           <button
//             onClick={scrollToTop}
//             className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 px-8 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#E6C687] transition-all duration-300 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] active:scale-95"
//           >
//             <ArrowUp size={18} />
//             Back to Top
//           </button>

//         </div>

//         {/* Bottom section */}
//         <div className="mt-14 border-t border-[#D4AF37]/20 pt-6">

//           <p className="text-xs text-[#F4F1EA]/60 font-light">
//             With love and gratitude, we invite you to be part of our
//             celebration.
//           </p>

//           <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[#E6C687]/80 font-light">
//             Made with
//             <Heart size={13} className="fill-[#D4AF37] text-[#D4AF37]" />
//             for {groom.name} & {bride.name}
//           </p>

//           <p className="mt-3 text-[11px] text-[#F4F1EA]/40 font-light">
//             © {new Date().getFullYear()} Pradhan's. All rights reserved.
//           </p>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import { motion } from "motion/react";
import {
  Heart,
  ArrowUp,
  Flower2,
  Crown,
  Sparkles,
} from "lucide-react";

import { weddingData } from "../config/weddingData";

const FooterDivider = () => (
  <div className="flex items-center justify-center gap-3 text-[#B69A54]">
    <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#E9D7A5] to-[#D5B66F]" />
    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D5B66F]/70 bg-[#FFFFFF] text-[#70558F] shadow-2xs">
      <Flower2 size={16} strokeWidth={1.45} />
    </span>
    <span className="h-px w-12 bg-gradient-to-l from-transparent via-[#E9D7A5] to-[#D5B66F]" />
  </div>
);

const CornerFloralSprigs = () => (
  <>
    <svg
      viewBox="0 0 175 175"
      className="pointer-events-none absolute -top-2 -left-2 h-28 w-28 opacity-85 sm:h-36 sm:w-36"
      aria-hidden="true"
    >
      <circle cx="34" cy="34" r="38" fill="#E8B8D0" fillOpacity="0.22" />
      <circle cx="62" cy="28" r="26" fill="#C5B2DA" fillOpacity="0.22" />
      <path
        d="M16 16 C46 30 72 52 94 84"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="40" cy="40" r="9.5" fill="#E8B8D0" fillOpacity="0.82" />
      <circle cx="50" cy="34" r="6.8" fill="#C5B2DA" fillOpacity="0.78" />
      <circle cx="34" cy="50" r="6.8" fill="#DCAAC3" fillOpacity="0.75" />
      <circle cx="40" cy="40" r="2.2" fill="#D5B66F" />
    </svg>

    <svg
      viewBox="0 0 175 175"
      className="pointer-events-none absolute -bottom-2 -right-2 h-28 w-28 -scale-x-100 -scale-y-100 opacity-85 sm:h-36 sm:w-36"
      aria-hidden="true"
    >
      <circle cx="34" cy="34" r="38" fill="#C5B2DA" fillOpacity="0.22" />
      <circle cx="62" cy="28" r="26" fill="#E8B8D0" fillOpacity="0.22" />
      <path
        d="M16 16 C46 30 72 52 94 84"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="40" cy="40" r="9.5" fill="#C5B2DA" fillOpacity="0.82" />
      <circle cx="50" cy="34" r="6.8" fill="#E8B8D0" fillOpacity="0.78" />
      <circle cx="34" cy="50" r="6.8" fill="#DCAAC3" fillOpacity="0.75" />
      <circle cx="40" cy="40" r="2.2" fill="#D5B66F" />
    </svg>
  </>
);

const Footer = () => {
  const { groom, bride } = weddingData.couple;
  const { wedding, venue } = weddingData;

  const shareOnWhatsApp = () => {
    const message = `💍 Wedding Invitation 💍

${groom.fullName} ❤️ ${bride.fullName}

We warmly invite you to celebrate our wedding on ${wedding.displayDate} at ${wedding.time}.

Venue: ${venue.name}

Join us and bless the couple! ❤️

${window.location.href}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-[#E6D9EA] bg-gradient-to-b from-[#F4EFF8] via-[#FFFCFA] to-[#EDE5F3] px-4 py-12 text-[#51465B] sm:px-6 sm:py-18">
      {/* Top Champagne-Gold Hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D5B66F] to-transparent" />

      {/* Watercolor Floral & Champagne-Gold Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full border border-[#D5B66F]/30 bg-[#E8B8D0]/15" />
        <div className="absolute -left-16 top-20 h-48 w-48 rounded-full border border-[#C5B2DA]/40" />

        <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full border border-[#D5B66F]/30 bg-[#C5B2DA]/18" />
        <div className="absolute -right-16 bottom-20 h-48 w-48 rounded-full border border-[#E8B8D0]/45" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8B8D0]/20 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(#C5B2DA 0.9px, transparent 0.9px)",
            backgroundSize: "25px 25px",
          }}
        />

        <CornerFloralSprigs />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Top Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-7"
        >
          <FooterDivider />
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center justify-center gap-2 text-[#B69A54]">
            <Crown size={18} strokeWidth={1.4} className="text-[#70558F]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#82758A] sm:text-xs">
              Together With Their Families
            </p>
            <Crown size={18} strokeWidth={1.4} className="text-[#70558F]" />
          </div>

          <h2 className="font-serif text-3xl font-medium leading-relaxed tracking-wide text-[#70558F] sm:text-5xl md:text-6xl">
            {groom.name}
            <span className="mx-3 font-sans font-light text-[#B69A54]">
              &amp;
            </span>
            {bride.name}
          </h2>

          <div className="my-6">
            <FooterDivider />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#70558F] sm:text-sm">
            {wedding.displayDate}
          </p>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <div className="mb-5 flex items-center justify-center gap-2 text-[#B69A54]">
            <Sparkles size={17} className="text-[#A58AC5]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#82758A]">
              With Love and Gratitude
            </span>
            <Sparkles size={17} className="text-[#A58AC5]" />
          </div>

          <h3 className="mb-5 font-serif text-3xl font-semibold tracking-wide text-[#70558F]">
            Thank You!
          </h3>

          <p className="text-sm font-normal leading-8 text-[#51465B] sm:text-base">
            Your presence and blessings will make our special day even more
            memorable. We look forward to celebrating this beautiful beginning
            with you and your family.
          </p>

          <p
            lang="or"
            className="mt-7 font-serif text-base font-normal leading-9 tracking-wide text-[#70558F] sm:text-lg"
          >
            ଆପଣଙ୍କ ଉପସ୍ଥିତି ଓ ଆଶୀର୍ବାଦ ଆମ ପାଇଁ ଅମୂଲ୍ୟ।
            <br />
            ଆମର ନୂତନ ଜୀବନ ପାଇଁ ଆପଣଙ୍କ ଶୁଭେଚ୍ଛା କାମନା କରୁଛୁ।
          </p>
        </motion.div>

        {/* Venue Details Card */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 max-w-md rounded-2xl border border-[#E6D9EA] bg-gradient-to-b from-[#FFFFFF] via-[#FFFCFA] to-[#F4EFF8] px-6 py-5 shadow-[0_14px_30px_-14px_rgba(112,85,143,0.18)]"
        >
          <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#B69A54]">
            Celebrating At
          </p>

          <p className="font-serif text-lg font-semibold text-[#70558F]">
            {venue.name}
          </p>
        </motion.div> */}

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* WhatsApp Share */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.96 }}
            onClick={shareOnWhatsApp}
            className="flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow-[0_10px_24px_-8px_rgba(37,211,102,0.45)] transition-colors hover:bg-[#20ba5a] sm:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>

            Share on WhatsApp
          </motion.button>

          {/* Back to Top */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToTop}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D5B66F] bg-gradient-to-b from-[#FFFFFF] via-[#F4EFF8] to-[#EDE5F3] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#70558F] shadow-[0_8px_20px_-8px_rgba(112,85,143,0.18),inset_0_0_0_1px_rgba(233,215,165,0.75)] transition-all duration-300 hover:border-[#B69A54] sm:text-sm"
          >
            <ArrowUp size={18} className="text-[#B69A54]" />
            Back to Top
          </motion.button>
        </div>

        {/* Bottom Closing Section */}
        <div className="mt-10 border-t border-[#E6D9EA] pt-8">
          <FooterDivider />

          <p className="mx-auto mt-6 max-w-xl text-xs font-normal leading-6 text-[#82758A] sm:text-sm">
            With love and gratitude, we invite you to be part of our
            celebration and bless our beautiful beginning.
          </p>

          <p className="mt-6 flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-[#70558F]">
            Made with
            <Heart
              size={14}
              className="fill-[#E8B8D0] text-[#70558F]"
            />
            for {groom.name} &amp; {bride.name}
          </p>

          <p className="mt-4 text-[11px] font-normal text-[#82758A]">
            © {new Date().getFullYear()} Pradhan&apos;s. All rights reserved.
          </p>

          <p
            lang="or"
            className="mt-3 font-serif text-sm tracking-widest text-[#B69A54]"
          >
            ଶୁଭ ବିବାହ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;