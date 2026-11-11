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

// Royal decorative divider
const GoldDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C6A04A]" />
    <span className="w-2 h-2 rotate-45 border border-[#E8CA82]" />
    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C6A04A]" />
  </div>
);

// Royal portrait frame
const PortraitFrame = ({ person }) => (
  <div className="relative mx-auto mb-8 w-full max-w-[300px]">

    {/* Outer glow */}
    <div className="absolute inset-0 rounded-t-[160px] bg-[#C6A04A]/10 blur-2xl" />

    {/* Outer gold frame */}
    <div className="relative p-[3px] rounded-t-[160px] bg-gradient-to-b from-[#E8CA82] via-[#9A702D] to-[#C6A04A] shadow-[0_15px_45px_rgba(0,0,0,0.4)]">

      {/* Inner border */}
      <div className="rounded-t-[157px] border border-[#E8CA82]/60 p-2">

        {/* Portrait */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[150px] bg-[#14251C]">

          {person.photo ? (
            <img
              src={person.photo}
              alt={person.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#203D29] to-[#0D1B16]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#C6A04A]/50 bg-[#0D1B16]">
                <UserRound
                  size={48}
                  strokeWidth={1}
                  className="text-[#E8CA82]"
                />
              </div>

              <span className="font-serif text-5xl text-[#E8CA82]">
                {person.initial}
              </span>

              <span className="text-xs uppercase tracking-widest text-[#E8CA82]/70">
                Photo coming soon
              </span>
            </div>
          )}

          {/* Image bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0D1B16]/60 to-transparent pointer-events-none" />

        </div>
      </div>
    </div>

    {/* Top ornamental crown */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-[#E8CA82] bg-[#14251C] shadow-lg">
      <Crown size={21} className="text-[#E8CA82]" />
    </div>

    {/* Bottom heart ornament */}
    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A04A]/70 bg-[#102319] shadow-lg">
      <Heart
        size={19}
        className="text-[#E8CA82] fill-[#C6A04A]/20"
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
      className="relative overflow-hidden bg-[#0D1B16] px-4 sm:px-6 py-24 sm:py-28"
    >

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1C3525_0%,#102319_55%,#08130E_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, transparent 0 15px, #C6A04A 16px, transparent 17px)",
            backgroundSize: "65px 65px",
          }}
        />

        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#C6A04A]/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C6A04A]/10 blur-[120px]" />

        <div className="absolute inset-3 sm:inset-7 border border-[#C6A04A]/15" />
        <div className="absolute inset-5 sm:inset-10 border border-[#C6A04A]/10" />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A04A]/50 bg-[#C6A04A]/10">
            <Flower2 size={26} className="text-[#E8CA82]" />
          </div>

          <GoldDivider className="mx-auto mb-6 max-w-[180px]" />

          <p className="mb-4 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#C6A04A] font-light">
            Made for each other
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#E8CA82] tracking-wide">
            The Beautiful Couple
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-[#F3E8CF]/75 font-light">
            Two hearts, two families, and one beautiful journey
            that begins with love and togetherness.
          </p>
        </motion.div>

        {/* Couple Profiles */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-16 md:gap-16 lg:gap-24">

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
              className="mx-auto w-full max-w-sm text-center"
            >

              {/* Portrait */}
              <PortraitFrame person={person} />

              {/* Role */}
              <p className="mb-3 mt-10 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C6A04A] font-light">
                {person.role}
              </p>

              {/* Name */}
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#E8CA82] tracking-wide leading-relaxed">
                {person.name}
              </h3>

              <GoldDivider className="mx-auto my-5 max-w-[130px]" />

              {/* Parents */}
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#C6A04A]/80">
                Beloved Parents
              </p>

              <p className="mx-auto max-w-xs text-sm leading-relaxed text-[#F3E8CF]/85 font-light">
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
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#E8CA82]/70 bg-[#102319] shadow-[0_0_30px_rgba(198,160,74,0.2)]">
              <Heart
                size={28}
                className="text-[#E8CA82] fill-[#C6A04A]/20"
              />
            </div>
          </motion.div>

        </div>

        {/* Family Blessing Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-24 max-w-3xl p-[1px] bg-gradient-to-r from-transparent via-[#C6A04A]/70 to-transparent"
        >
          <div className="relative border-y border-[#C6A04A]/25 bg-[#102319]/80 backdrop-blur-md px-6 py-12 sm:px-12 sm:py-14 text-center">

            {/* Decorative crown */}
            <Crown
              size={27}
              strokeWidth={1.2}
              className="mx-auto mb-6 text-[#E8CA82]"
            />

            <GoldDivider className="mx-auto mb-7 max-w-[160px]" />

            <p className="font-serif text-lg sm:text-2xl leading-relaxed text-[#F3E8CF] tracking-wide">
              {message}
            </p>

            <p className="mt-7 text-xl sm:text-2xl text-[#E8CA82] font-serif tracking-[0.2em]">
              ଶୁଭ ବିବାହ
            </p>

            <div className="mt-6 flex justify-center text-[#C6A04A]">
              <Sparkles size={18} />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CoupleSection;