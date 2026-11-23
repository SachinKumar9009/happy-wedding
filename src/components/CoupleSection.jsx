// import { motion } from "motion/react";
// import { Heart, Flower2, UserRound } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const CoupleSection = () => {
//   const { groom, bride } = weddingData.couple;
//   const { groomParents, brideParents, message } = weddingData.family;

//   const profiles = [
//     {
//       role: "The Groom",
//       name: groom.fullName,
//       shortName: groom.name,
//       parents: groomParents,
//       initial: groom.name.charAt(0),
//       photo: weddingData.couple.groom.photo,
//     },
//     {
//       role: "The Bride",
//       name: bride.fullName,
//       shortName: bride.name,
//       parents: brideParents,
//       initial: bride.name.charAt(0),
//       photo: weddingData.couple.bride.photo,
//     },
//   ];

//   return (
//     <section
//       id="couple"
//       className="relative overflow-hidden bg-[#FFFaf0] px-5 py-20 sm:py-24"
//     >
//       {/* Background Decorations */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#F8E1E7]/40 blur-3xl" />
//         <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-5xl">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-14 text-center"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3 text-[#C9A227]">
//             <span className="h-px w-12 bg-[#C9A227]/60" />
//             <Flower2 size={23} />
//             <span className="h-px w-12 bg-[#C9A227]/60" />
//           </div>

//           <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#5C4A3D]">
//             Made for each other
//           </p>

//           <h2 className="font-serif text-3xl sm:text-5xl text-[#6B0F1A]">
//             The Beautiful Couple
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#5C4A3D]">
//             Two hearts, two families, and one beautiful journey
//             that begins with love and togetherness.
//           </p>
//         </motion.div>

//         {/* Couple Profiles */}
//         <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">

//           {profiles.map((person, index) => (
//             <motion.div
//               key={person.role}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="mx-auto w-full max-w-sm text-center"
//             >
//               {/* Profile Image Frame */}
//               <div className="relative mx-auto mb-7 aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-t-full border-[3px] border-[#C9A227]/60 bg-[#FDF6E9] p-2 shadow-xl shadow-[#6B0F1A]/10">

//                 <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-t-full bg-gradient-to-b from-[#F8E1E7] to-[#FDF6E9]">

//                   {person.photo ? (
//                     <img
//                       src={person.photo}
//                       alt={person.name}
//                       className="h-full w-full object-cover"
//                       loading="lazy"
//                     />
//                   ) : (
//                     <div className="flex flex-col items-center gap-4 text-[#6B0F1A]">
//                       <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#C9A227]/50 bg-[#FFFaf0]">
//                         <UserRound
//                           size={52}
//                           strokeWidth={1}
//                           className="text-[#C9A227]"
//                         />
//                       </div>

//                       <span className="font-serif text-5xl">
//                         {person.initial}
//                       </span>

//                       <span className="text-xs uppercase tracking-widest text-[#5C4A3D]">
//                         Photo coming soon
//                       </span>
//                     </div>
//                   )}

//                 </div>

//                 {/* Decorative Corner */}
//                 <div className="absolute bottom-5 right-5 rounded-full bg-[#FFFaf0] p-2 shadow-md">
//                   <Heart
//                     size={19}
//                     className="fill-[#F8E1E7] text-[#6B0F1A]"
//                   />
//                 </div>
//               </div>

//               {/* Profile Details */}
//               <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#C9A227]">
//                 {person.role}
//               </p>

//               <h3 className="font-serif text-3xl sm:text-4xl text-[#6B0F1A]">
//                 {person.name}
//               </h3>

//               <div className="mx-auto my-4 h-px w-16 bg-[#C9A227]/60" />

//               <p className="mb-2 text-xs uppercase tracking-wider text-[#5C4A3D]">
//                 Beloved Parents
//               </p>

//               <p className="mx-auto max-w-xs text-sm leading-relaxed text-[#2C1810]">
//                 {person.parents}
//               </p>
//             </motion.div>
//           ))}

//           {/* Center Heart – Desktop Only */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center justify-center"
//           >
//             <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227]/50 bg-[#FFFaf0] shadow-md">
//               <Heart
//                 size={26}
//                 className="fill-[#F8E1E7] text-[#6B0F1A]"
//               />
//             </div>
//           </motion.div>

//         </div>

//         {/* Family Message */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mx-auto mt-16 max-w-2xl border-y border-[#C9A227]/40 px-5 py-8 text-center"
//         >
//           <Heart
//             size={22}
//             className="mx-auto mb-4 text-[#C9A227]"
//           />

//           <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#6B0F1A]">
//             {message}
//           </p>

//           <p className="mt-5 text-xl text-[#C9A227]">
//             ଶୁଭ ବିବାହ
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default CoupleSection;





// import { motion } from "motion/react";
// import { Heart, Flower2, UserRound } from "lucide-react";
// import { weddingData } from "../config/weddingData";

// const CoupleSection = () => {
//   const { groom, bride } = weddingData.couple;
//   const { groomParents, brideParents, message } = weddingData.family;

//   const profiles = [
//     {
//       role: "The Groom",
//       name: groom.fullName,
//       shortName: groom.name,
//       parents: groomParents,
//       initial: groom.name.charAt(0),
//       photo: weddingData.couple.groom.photo,
//     },
//     {
//       role: "The Bride",
//       name: bride.fullName,
//       shortName: bride.name,
//       parents: brideParents,
//       initial: bride.name.charAt(0),
//       photo: weddingData.couple.bride.photo,
//     },
//   ];

//   return (
//     <section
//       id="couple"
//       className="relative overflow-hidden bg-[#0A192F] px-5 py-20 sm:py-24"
//     >
//       {/* Background Decorations */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//         <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-5xl">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-14 text-center"
//         >
//           <div className="mb-5 flex items-center justify-center gap-3 text-[#D4AF37]">
//             <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
//             <Flower2 size={23} />
//             <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
//           </div>

//           <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#E6C687]/80 font-light">
//             Made for each other
//           </p>

//           <h2 className="font-serif text-3xl sm:text-5xl text-[#D4AF37] tracking-wide">
//             The Beautiful Couple
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#F4F1EA]/80 font-light">
//             Two hearts, two families, and one beautiful journey
//             that begins with love and togetherness.
//           </p>
//         </motion.div>

//         {/* Couple Profiles */}
//         <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">

//           {profiles.map((person, index) => (
//             <motion.div
//               key={person.role}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="mx-auto w-full max-w-sm text-center"
//             >
//               {/* Profile Image Frame */}
//               <div className="relative mx-auto mb-7 aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-t-full border-[3px] border-[#D4AF37]/50 bg-[#0D1B2A] p-2 shadow-2xl backdrop-blur-sm">

//                 <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-t-full bg-gradient-to-b from-[#112240] to-[#0D1B2A]">

//                   {person.photo ? (
//                     <img
//                       src={person.photo}
//                       alt={person.name}
//                       className="h-full w-full object-cover"
//                       loading="lazy"
//                     />
//                   ) : (
//                     <div className="flex flex-col items-center gap-4 text-[#D4AF37]">
//                       <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A192F]">
//                         <UserRound
//                           size={52}
//                           strokeWidth={1}
//                           className="text-[#D4AF37]"
//                         />
//                       </div>

//                       <span className="font-serif text-5xl text-[#D4AF37]">
//                         {person.initial}
//                       </span>

//                       <span className="text-xs uppercase tracking-widest text-[#E6C687]/80 font-light">
//                         Photo coming soon
//                       </span>
//                     </div>
//                   )}

//                 </div>

//                 {/* Decorative Corner */}
//                 <div className="absolute bottom-5 right-5 rounded-full bg-[#0D1B2A] border border-[#D4AF37]/40 p-2 shadow-md">
//                   <Heart
//                     size={19}
//                     className="fill-[#D4AF37]/20 text-[#D4AF37]"
//                   />
//                 </div>
//               </div>

//               {/* Profile Details */}
//               <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#E6C687] font-light">
//                 {person.role}
//               </p>

//               <h3 className="font-serif text-3xl sm:text-4xl text-[#D4AF37] tracking-wide">
//                 {person.name}
//               </h3>

//               <div className="mx-auto my-4 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

//               <p className="mb-2 text-xs uppercase tracking-wider text-[#E6C687]/70 font-light">
//                 Beloved Parents
//               </p>

//               <p className="mx-auto max-w-xs text-sm leading-relaxed text-[#F4F1EA]/90 font-light">
//                 {person.parents}
//               </p>
//             </motion.div>
//           ))}

//           {/* Center Heart – Desktop Only */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center justify-center"
//           >
//             <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0D1B2A] shadow-xl">
//               <Heart
//                 size={26}
//                 className="fill-[#D4AF37]/20 text-[#D4AF37]"
//               />
//             </div>
//           </motion.div>

//         </div>

//         {/* Family Message */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mx-auto mt-16 max-w-2xl border-y border-[#D4AF37]/30 bg-[#0D1B2A]/40 backdrop-blur-sm px-6 py-10 text-center rounded-lg shadow-xl"
//         >
//           <Heart
//             size={22}
//             className="mx-auto mb-4 text-[#D4AF37] fill-[#D4AF37]/20"
//           />

//           <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#F4F1EA] tracking-wide">
//             {message}
//           </p>

//           <p className="mt-5 text-xl text-[#D4AF37] font-light tracking-widest">
//             ଶୁଭ ବିବାହ
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default CoupleSection;







import { motion } from "motion/react";
import {
  Heart,
  Flower2,
  UserRound,
  Crown,
  Sparkles,
} from "lucide-react";
import { weddingData } from "../config/weddingData";

// Champagne-gold & floral divider
const GoldDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E9D7A5] to-[#D5B66F]" />
    <span className="w-2 h-2 rounded-full border border-[#D5B66F] bg-[#E8B8D0]/80" />
    <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#E9D7A5] to-[#D5B66F]" />
  </div>
);

// Subtle corner watercolor floral decoration
const CornerFloralSprigs = () => (
  <>
    <svg
      viewBox="0 0 170 170"
      className="pointer-events-none absolute -top-2 -left-2 w-28 h-28 sm:w-36 sm:h-36 opacity-85"
      aria-hidden="true"
    >
      <circle cx="34" cy="34" r="38" fill="#E8B8D0" fillOpacity="0.22" />
      <circle cx="58" cy="28" r="26" fill="#C5B2DA" fillOpacity="0.22" />
      <path
        d="M16 16 C46 30 72 52 94 84"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="40" cy="40" r="9.5" fill="#E8B8D0" fillOpacity="0.8" />
      <circle cx="50" cy="34" r="6.8" fill="#C5B2DA" fillOpacity="0.78" />
      <circle cx="34" cy="50" r="6.8" fill="#DCAAC3" fillOpacity="0.75" />
      <circle cx="40" cy="40" r="2.2" fill="#D5B66F" />
    </svg>

    <svg
      viewBox="0 0 170 170"
      className="pointer-events-none absolute -bottom-2 -right-2 w-28 h-28 sm:w-36 sm:h-36 opacity-85 -scale-x-100 -scale-y-100"
      aria-hidden="true"
    >
      <circle cx="34" cy="34" r="38" fill="#C5B2DA" fillOpacity="0.22" />
      <circle cx="58" cy="28" r="26" fill="#E8B8D0" fillOpacity="0.22" />
      <path
        d="M16 16 C46 30 72 52 94 84"
        fill="none"
        stroke="#A58AC5"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="40" cy="40" r="9.5" fill="#C5B2DA" fillOpacity="0.8" />
      <circle cx="50" cy="34" r="6.8" fill="#E8B8D0" fillOpacity="0.78" />
      <circle cx="34" cy="50" r="6.8" fill="#DCAAC3" fillOpacity="0.75" />
      <circle cx="40" cy="40" r="2.2" fill="#D5B66F" />
    </svg>
  </>
);

// Editorial portrait frame with champagne-gold & floral accents
const PortraitFrame = ({ person }) => (
  <div className="relative mx-auto mb-8 w-full max-w-[300px]">
    {/* Soft lavender & blush watercolor aura */}
    <div className="absolute inset-2 rounded-t-[160px] rounded-b-3xl bg-gradient-to-b from-[#C5B2DA]/35 via-[#E8B8D0]/20 to-[#EDE5F3]/40 blur-xl" />

    {/* Champagne-gold & soft border frame */}
    <div className="relative p-[2.5px] rounded-t-[160px] rounded-b-3xl bg-gradient-to-b from-[#E9D7A5] via-[#D5B66F] to-[#E6D9EA] shadow-[0_18px_40px_-16px_rgba(112,85,143,0.24)]">
      {/* Inner ivory mat */}
      <div className="rounded-t-[157px] rounded-b-[22px] bg-[#FFFCFA] border border-[#E6D9EA] p-2">
        {/* Portrait container */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[149px] rounded-b-[16px] bg-[#F4EFF8]">
          {person.photo ? (
            <img
              src={person.photo}
              alt={person.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#EDE5F3] via-[#F4EFF8] to-[#FFFCFA]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D5B66F] bg-[#FFFFFF] shadow-sm">
                <UserRound
                  size={46}
                  strokeWidth={1.15}
                  className="text-[#70558F]"
                />
              </div>

              <span className="font-serif text-5xl text-[#70558F]">
                {person.initial}
              </span>

              <span className="text-xs uppercase tracking-widest text-[#82758A]">
                Photo coming soon
              </span>
            </div>
          )}

          {/* Soft ivory-lavender bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FFFCFA]/65 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>

    {/* Top emblem badge */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-[#D5B66F] bg-[#FFFFFF] shadow-[0_8px_20px_-6px_rgba(112,85,143,0.22)]">
      <Crown size={20} className="text-[#70558F]" />
    </div>

    {/* Bottom floral heart ornament */}
    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-[#D5B66F] bg-[#F4EFF8] shadow-[0_8px_20px_-6px_rgba(112,85,143,0.2)]">
      <Heart
        size={18}
        className="text-[#70558F] fill-[#E8B8D0]/70"
      />
    </div>
  </div>
);

const CoupleSection = () => {
  const { groom, bride } = weddingData.couple;
  const { groomParents, brideParents, message } = weddingData.family;

  const profiles = [
    {
      role: "The Groom",
      name: groom.fullName,
      initial: groom.name.charAt(0),
      parents: groomParents,
      photo: groom.photo,
    },
    {
      role: "The Bride",
      name: bride.fullName,
      initial: bride.name.charAt(0),
      parents: brideParents,
      photo: bride.photo,
    },
  ];

  return (
    <section
      id="couple"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFCFA] via-[#FFFFFF] to-[#F4EFF8] px-4 sm:px-6 py-14 sm:py-20"
    >
      {/* Watercolor Lavender, Lilac & Blush Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#EDE5F3_0%,#FFFCFA_60%,#FFFFFF_100%)] opacity-80" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, transparent 0 15px, #C5B2DA 16px, transparent 17px)",
            backgroundSize: "65px 65px",
          }}
        />

        <div className="absolute -top-28 -left-28 w-96 h-96 rounded-full bg-[#E8B8D0]/22 blur-[120px]" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 rounded-full bg-[#C5B2DA]/25 blur-[120px]" />

        {/* Delicate outer borders */}
        <div className="absolute inset-3 sm:inset-7 rounded-3xl border border-[#E6D9EA]" />
        <div className="absolute inset-5 sm:inset-10 rounded-2xl border border-[#D5B66F]/30" />

        <CornerFloralSprigs />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#D5B66F] bg-[#FFFFFF] shadow-[0_10px_24px_-8px_rgba(112,85,143,0.2),inset_0_0_0_3px_#F4EFF8]">
            <Flower2 size={24} className="text-[#70558F]" />
          </div>

          <GoldDivider className="mx-auto mb-6 max-w-[180px]" />

          <p className="mb-4 text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em] text-[#B69A54]">
            Made for each other
          </p>

          <h2 className="font-serif font-medium text-3xl sm:text-5xl md:text-6xl text-[#70558F] tracking-wide">
            The Beautiful Couple
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-[#51465B] font-normal">
            Two hearts, two families, and one beautiful journey
            that begins with love and togetherness.
          </p>
        </motion.div>

        {/* Couple Profiles */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-16 lg:gap-24">
          {profiles.map((person, index) => (
            <motion.div
              key={person.role}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="mx-auto w-full max-w-sm rounded-2xl border border-[#E6D9EA] bg-gradient-to-b from-[#FFFFFF]/95 via-[#FFFCFA]/95 to-[#F4EFF8]/80 px-5 pt-8 pb-9 text-center shadow-[0_16px_38px_-18px_rgba(112,85,143,0.18)]"
            >
              {/* Portrait */}
              <PortraitFrame person={person} />

              {/* Role */}
              <p className="mb-2.5 mt-9 text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-[#B69A54]">
                {person.role}
              </p>

              {/* Name */}
              <h3 className="font-serif font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#70558F] tracking-wide leading-relaxed">
                {person.name}
              </h3>

              <GoldDivider className="mx-auto my-5 max-w-[130px]" />

              {/* Parents */}
              <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#82758A]">
                Beloved Parents
              </p>

              <p className="mx-auto max-w-xs text-sm leading-relaxed text-[#51465B] font-normal">
                {person.parents}
              </p>
            </motion.div>
          ))}

          {/* Center Heart - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-[35%] z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D5B66F] bg-[#FFFFFF] shadow-[0_12px_28px_-8px_rgba(112,85,143,0.25),inset_0_0_0_4px_#F4EFF8]">
              <Heart
                size={26}
                className="text-[#70558F] fill-[#E8B8D0]/70"
              />
            </div>
          </motion.div>
        </div>

        {/* Family Blessing Panel */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-24 max-w-3xl p-[1.5px] rounded-3xl bg-gradient-to-r from-transparent via-[#D5B66F] to-transparent shadow-[0_18px_40px_-18px_rgba(112,85,143,0.2)]"
        >
          <div className="relative rounded-3xl border border-[#E6D9EA] bg-gradient-to-b from-[#FFFFFF]/95 via-[#FFFCFA]/95 to-[#F4EFF8]/90 backdrop-blur-md px-6 py-12 sm:px-12 sm:py-14 text-center">
            <Crown
              size={26}
              strokeWidth={1.3}
              className="mx-auto mb-6 text-[#70558F]"
            />

            <GoldDivider className="mx-auto mb-7 max-w-[160px]" />

            <p className="font-serif text-lg sm:text-2xl leading-relaxed text-[#51465B] tracking-wide">
              {message}
            </p>

            <p className="mt-7 text-xl sm:text-2xl text-[#B69A54] font-serif tracking-[0.2em]">
              ଶୁଭ ବିବାହ
            </p>

            <div className="mt-6 flex justify-center text-[#A58AC5]">
              <Sparkles size={18} />
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CoupleSection;