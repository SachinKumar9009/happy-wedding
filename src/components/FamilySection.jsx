// import { motion } from "motion/react";
// import {
//   Heart,
//   Flower2,
//   Users,
//   Sparkles,
//   Flower,
// } from "lucide-react";

// import { weddingData } from "../config/weddingData";

// const FamilySection = () => {
//   const { groom, bride } = weddingData.couple;

//   const {
//     groomParents,
//     brideParents,
//     message,
//     messageOdia,
//   } = weddingData.family;

//   const families = [
//     {
//       id: "groom-family",
//       title: "Groom's Family",
//       subtitle: "With love and blessings",
//       person: groom.fullName,
//       parents: groomParents,
//       initial: groom.name.charAt(0),
//     },
//     {
//       id: "bride-family",
//       title: "Bride's Family",
//       subtitle: "With love and blessings",
//       person: bride.fullName,
//       parents: brideParents,
//       initial: bride.name.charAt(0),
//     },
//   ];

//   return (
//     <section
//       id="family"
//       className="relative overflow-hidden bg-[#FFFaf0] px-5 py-20 sm:py-24"
//     >
//       {/* Decorative Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#F8E1E7]/40 blur-3xl" />
//         <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />
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
//             Two Families, One Celebration
//           </p>

//           <h2 className="font-serif text-3xl text-[#6B0F1A] sm:text-5xl">
//             Our Loving Families
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#5C4A3D] sm:text-base">
//             With the blessings of our beloved parents and
//             elders, we joyfully invite you to celebrate this
//             beautiful union.
//           </p>

//           <p className="mt-4 text-xl text-[#C9A227]">
//             ଆଶୀର୍ବାଦ ଓ ଶୁଭେଚ୍ଛା
//           </p>
//         </motion.div>

//         {/* Family Cards */}
//         <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

//           {families.map((family, index) => (
//             <motion.div
//               key={family.id}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.15,
//               }}
//               className="relative overflow-hidden rounded-2xl border border-[#C9A227]/40 bg-[#FDF6E9] px-6 py-9 text-center shadow-lg shadow-[#6B0F1A]/5 sm:px-9 sm:py-11"
//             >

//               {/* Decorative Top */}
//               <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

//               <Flower
//                 size={22}
//                 className="absolute left-5 top-5 text-[#C9A227]/40"
//               />

//               <Flower
//                 size={22}
//                 className="absolute right-5 top-5 text-[#C9A227]/40"
//               />

//               {/* Family Icon */}
//               <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A227]/50 bg-[#FFFaf0] shadow-md">
//                 <Users
//                   size={34}
//                   strokeWidth={1.3}
//                   className="text-[#6B0F1A]"
//                 />
//               </div>

//               {/* Family Title */}
//               <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#C9A227]">
//                 {family.subtitle}
//               </p>

//               <h3 className="font-serif text-2xl text-[#6B0F1A] sm:text-3xl">
//                 {family.title}
//               </h3>

//               {/* Decorative Divider */}
//               <div className="my-6 flex items-center justify-center gap-3">
//                 <span className="h-px w-12 bg-[#C9A227]/50" />
//                 <Heart
//                   size={17}
//                   className="fill-[#F8E1E7] text-[#6B0F1A]"
//                 />
//                 <span className="h-px w-12 bg-[#C9A227]/50" />
//               </div>

//               {/* Couple Name */}
//               <p className="mb-3 font-serif text-lg text-[#6B0F1A]">
//                 {family.person}
//               </p>

//               {/* Parents */}
//               <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#5C4A3D]">
//                 Beloved Parents
//               </p>

//               <p className="mx-auto max-w-sm text-sm leading-7 text-[#2C1810] sm:text-base">
//                 {family.parents}
//               </p>

//               {/* Bottom Decoration */}
//               <div className="mt-7 flex items-center justify-center gap-2 text-[#C9A227]">
//                 <Flower2 size={17} />
//                 <span className="text-xs tracking-widest">
//                   WITH BLESSINGS
//                 </span>
//                 <Flower2 size={17} />
//               </div>

//             </motion.div>
//           ))}

//         </div>

//         {/* Family Invitation Message */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative mt-14 overflow-hidden rounded-2xl border border-[#C9A227]/40 bg-[#FDF6E9] px-6 py-10 text-center shadow-md sm:px-12 sm:py-14"
//         >

//           <Sparkles
//             size={25}
//             className="mx-auto mb-5 text-[#C9A227]"
//           />

//           <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C9A227]">
//             A heartfelt invitation
//           </p>

//           <h3 className="mb-5 font-serif text-2xl leading-relaxed text-[#6B0F1A] sm:text-3xl">
//             Together With Our Families
//           </h3>

//           <p className="mx-auto max-w-2xl text-sm leading-8 text-[#5C4A3D] sm:text-base">
//             {message}
//           </p>

//           {messageOdia && (
//             <p
//               lang="or"
//               className="mx-auto mt-6 max-w-2xl text-base leading-9 text-[#6B0F1A] sm:text-lg"
//             >
//               {messageOdia}
//             </p>
//           )}

//           <div className="mt-8 flex items-center justify-center gap-3 text-[#C9A227]">
//             <span className="h-px w-10 bg-[#C9A227]/50" />
//             <Heart
//               size={20}
//               className="fill-[#F8E1E7] text-[#6B0F1A]"
//             />
//             <span className="h-px w-10 bg-[#C9A227]/50" />
//           </div>

//           <p className="mt-5 font-serif text-xl text-[#6B0F1A]">
//             ଶୁଭ ବିବାହ
//           </p>

//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default FamilySection;









// import { motion } from "motion/react";
// import {
//   Heart,
//   Flower2,
//   Users,
//   Sparkles,
//   Flower,
//   Smile,
// } from "lucide-react";

// import { weddingData } from "../config/weddingData";

// const FamilySection = () => {
//   const { groom, bride } = weddingData.couple;

//   const {
//     groomParents,
//     brideParents,
//     message,
//     messageOdia,
//     children, // Destructure children from weddingData.family
//   } = weddingData.family;

//   const families = [
//     {
//       id: "groom-family",
//       title: "Groom's Family",
//       subtitle: "With love and blessings",
//       person: groom.fullName,
//       parents: groomParents,
//       initial: groom.name.charAt(0),
//     },
//     {
//       id: "bride-family",
//       title: "Bride's Family",
//       subtitle: "With love and blessings",
//       person: bride.fullName,
//       parents: brideParents,
//       initial: bride.name.charAt(0),
//     },
//   ];

//   return (
//     <section
//       id="family"
//       className="relative overflow-hidden bg-[#0A192F] px-5 py-20 sm:py-24 border-b border-[#D4AF37]/20"
//     >
//       {/* Decorative Ambient Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
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
//             Two Families, One Celebration
//           </p>

//           <h2 className="font-serif text-3xl text-[#D4AF37] sm:text-5xl tracking-wide">
//             Our Loving Families
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#F4F1EA]/80 sm:text-base font-light">
//             With the blessings of our beloved parents and
//             elders, we joyfully invite you to celebrate this
//             beautiful union.
//           </p>

//           <p className="mt-4 text-xl text-[#D4AF37] font-light tracking-widest">
//             ଆଶୀର୍ବାଦ ଓ ଶୁଭେଚ୍ଛା
//           </p>
//         </motion.div>

//         {/* Family Cards */}
//         <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

//           {families.map((family, index) => (
//             <motion.div
//               key={family.id}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.15,
//               }}
//               className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#0D1B2A]/80 backdrop-blur-md px-6 py-9 text-center shadow-2xl shadow-black/40 sm:px-9 sm:py-11"
//             >

//               {/* Decorative Top Accent */}
//               <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

//               <Flower
//                 size={22}
//                 className="absolute left-5 top-5 text-[#D4AF37]/30"
//               />

//               <Flower
//                 size={22}
//                 className="absolute right-5 top-5 text-[#D4AF37]/30"
//               />

//               {/* Family Icon */}
//               <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A192F] shadow-lg">
//                 <Users
//                   size={34}
//                   strokeWidth={1.3}
//                   className="text-[#D4AF37]"
//                 />
//               </div>

//               {/* Family Title */}
//               <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#E6C687]/80 font-light">
//                 {family.subtitle}
//               </p>

//               <h3 className="font-serif text-2xl text-[#D4AF37] sm:text-3xl tracking-wide">
//                 {family.title}
//               </h3>

//               {/* Decorative Divider */}
//               <div className="my-6 flex items-center justify-center gap-3">
//                 <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
//                 <Heart
//                   size={17}
//                   className="fill-[#D4AF37]/20 text-[#D4AF37]"
//                 />
//                 <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
//               </div>

//               {/* Couple Name */}
//               <p className="mb-3 font-serif text-lg text-[#F4F1EA]">
//                 {family.person}
//               </p>

//               {/* Parents */}
//               <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#E6C687]/70 font-light">
//                 Beloved Parents
//               </p>

//               <p className="mx-auto max-w-sm text-sm leading-7 text-[#F4F1EA]/80 sm:text-base font-light">
//                 {family.parents}
//               </p>

//               {/* Bottom Decoration */}
//               <div className="mt-7 flex items-center justify-center gap-2 text-[#D4AF37]">
//                 <Flower2 size={17} />
//                 <span className="text-xs tracking-widest font-light text-[#E6C687]">
//                   WITH BLESSINGS
//                 </span>
//                 <Flower2 size={17} />
//               </div>

//             </motion.div>
//           ))}

//         </div>

//         {/* Eagerly Waiting Children / Young Family Members Card */}
//         {children && (
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative mt-8 overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#0D1B2A]/80 backdrop-blur-md px-6 py-8 text-center shadow-2xl sm:px-10"
//           >
//             <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A192F] text-[#D4AF37]">
//               <Smile size={26} strokeWidth={1.5} />
//             </div>

//             <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#E6C687]/80 font-light">
//               Eagerly Waiting
//             </p>

//             <h4 className="font-serif text-xl text-[#D4AF37] mb-3 tracking-wide">
//               Waiting with Excitement
//             </h4>

//             <p className="mx-auto max-w-lg text-sm sm:text-base text-[#F4F1EA]/90 font-light leading-relaxed">
//               {children}
//             </p>
//           </motion.div>
//         )}

//         {/* Family Invitation Message Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative mt-8 overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#0D1B2A]/80 backdrop-blur-md px-6 py-10 text-center shadow-2xl sm:px-12 sm:py-14"
//         >

//           <Sparkles
//             size={25}
//             className="mx-auto mb-5 text-[#D4AF37]"
//           />

//           <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#E6C687]/80 font-light">
//             A heartfelt invitation
//           </p>

//           <h3 className="mb-5 font-serif text-2xl leading-relaxed text-[#D4AF37] sm:text-3xl tracking-wide">
//             Together With Our Families
//           </h3>

//           <p className="mx-auto max-w-2xl text-sm leading-8 text-[#F4F1EA]/90 sm:text-base font-light">
//             {message}
//           </p>

//           {messageOdia && (
//             <p
//               lang="or"
//               className="mx-auto mt-6 max-w-2xl text-base leading-9 text-[#E6C687] sm:text-lg font-light tracking-wide"
//             >
//               {messageOdia}
//             </p>
//           )}

//           <div className="mt-8 flex items-center justify-center gap-3 text-[#D4AF37]">
//             <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />
//             <Heart
//               size={20}
//               className="fill-[#D4AF37]/20 text-[#D4AF37]"
//             />
//             <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />
//           </div>

//           <p className="mt-5 font-serif text-xl text-[#D4AF37] font-light tracking-widest">
//             ଶୁଭ ବିବାହ
//           </p>

//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default FamilySection;









import { motion } from "motion/react";
import {
  Heart,
  Flower2,
  Users,
  Sparkles,
  Flower,
  Smile,
  Crown,
} from "lucide-react";

import { weddingData } from "../config/weddingData";

const GoldDivider = ({ icon: Icon = Flower2 }) => (
  <div className="flex items-center justify-center gap-3 text-[#C6A04A]">
    <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6A04A]/70" />
    <Icon size={18} strokeWidth={1.4} />
    <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6A04A]/70" />
  </div>
);

const FamilySection = () => {
  const { groom, bride } = weddingData.couple;

  const {
    groomParents,
    brideParents,
    message,
    messageOdia,
    children,
  } = weddingData.family;

  const families = [
    {
      id: "groom-family",
      title: "Groom's Family",
      subtitle: "With love and blessings",
      person: groom.fullName,
      parents: groomParents,
      initial: groom.name.charAt(0),
    },
    {
      id: "bride-family",
      title: "Bride's Family",
      subtitle: "With love and blessings",
      person: bride.fullName,
      parents: brideParents,
      initial: bride.name.charAt(0),
    },
  ];

  return (
    <section
      id="family"
      className="relative isolate overflow-hidden border-b border-[#C6A04A]/20 bg-[#0D1B16] px-5 py-20 sm:py-24"
    >
      {/* Royal Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#C6A04A]/10 blur-[110px]" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#C6A04A]/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#E8CA82 0.8px, transparent 0.8px)",
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3 text-[#C6A04A]">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6A04A]" />
            <Flower2 size={23} strokeWidth={1.3} />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6A04A]" />
          </div>

          <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-[#E8CA82]/80">
            Two Families, One Celebration
          </p>

          <h2 className="font-serif text-3xl tracking-wide text-[#E8CA82] sm:text-5xl">
            Our Loving Families
          </h2>

          <div className="my-6">
            <GoldDivider />
          </div>

          <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-[#F3E8CF]/80 sm:text-base">
            With the blessings of our beloved parents and
            elders, we joyfully invite you to celebrate this
            beautiful union.
          </p>

          <p
            lang="or"
            className="mt-5 text-xl font-light tracking-widest text-[#E8CA82]"
          >
            ଆଶୀର୍ବାଦ ଓ ଶୁଭେଚ୍ଛା
          </p>
        </motion.div>

        {/* Family Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {families.map((family, index) => (
            <motion.div
              key={family.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group relative overflow-hidden rounded-2xl border border-[#C6A04A]/30 bg-[#14251C]/90 px-6 py-10 text-center shadow-2xl shadow-black/30 backdrop-blur-md sm:px-9 sm:py-12"
            >
              {/* Double Border */}
              <div className="pointer-events-none absolute inset-2 rounded-xl border border-[#C6A04A]/15" />

              {/* Top Gold Accent */}
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#E8CA82] to-transparent" />

              {/* Corner Decorations */}
              <Flower
                size={22}
                className="absolute left-5 top-5 text-[#C6A04A]/35"
              />
              <Flower
                size={22}
                className="absolute right-5 top-5 text-[#C6A04A]/35"
              />
              <Flower
                size={22}
                className="absolute bottom-5 left-5 rotate-180 text-[#C6A04A]/25"
              />
              <Flower
                size={22}
                className="absolute bottom-5 right-5 rotate-180 text-[#C6A04A]/25"
              />

              {/* Family Icon */}
              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#C6A04A]/50 bg-[#0D1B16] shadow-lg shadow-black/30 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-1 rounded-full border border-[#C6A04A]/20" />
                <Users
                  size={33}
                  strokeWidth={1.3}
                  className="text-[#E8CA82]"
                />
              </div>

              {/* Family Information */}
              <p className="mb-2 text-xs font-light uppercase tracking-[0.25em] text-[#E8CA82]/75">
                {family.subtitle}
              </p>

              <h3 className="font-serif text-2xl tracking-wide text-[#E8CA82] sm:text-3xl">
                {family.title}
              </h3>

              <div className="my-6">
                <GoldDivider icon={Heart} />
              </div>

              <p className="mb-4 font-serif text-lg text-[#F3E8CF] sm:text-xl">
                {family.person}
              </p>

              {/* Parents */}
              <p className="mb-3 text-[11px] font-light uppercase tracking-[0.25em] text-[#C6A04A]/80">
                Beloved Parents
              </p>

              <p className="mx-auto max-w-sm text-sm font-light leading-7 text-[#F3E8CF]/80 sm:text-base">
                {family.parents}
              </p>

              {/* Blessings */}
              <div className="mt-8 flex items-center justify-center gap-2 text-[#C6A04A]">
                <Flower2 size={17} />
                <span className="text-[10px] font-light tracking-[0.25em] text-[#E8CA82]">
                  WITH BLESSINGS
                </span>
                <Flower2 size={17} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Children / Young Family Members */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 overflow-hidden rounded-2xl border border-[#C6A04A]/30 bg-[#14251C]/90 px-6 py-9 text-center shadow-xl shadow-black/20 backdrop-blur-md sm:px-10"
          >
            <div className="pointer-events-none absolute inset-2 rounded-xl border border-[#C6A04A]/15" />

            <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A04A]/40 bg-[#0D1B16] text-[#E8CA82]">
              <Smile size={28} strokeWidth={1.4} />
            </div>

            <p className="mb-2 text-xs font-light uppercase tracking-[0.25em] text-[#E8CA82]/75">
              Eagerly Waiting
            </p>

            <h4 className="mb-4 font-serif text-2xl tracking-wide text-[#E8CA82]">
              Waiting with Excitement
            </h4>

            <div className="mb-5">
              <GoldDivider icon={Flower} />
            </div>

            <p className="mx-auto max-w-lg text-sm font-light leading-relaxed text-[#F3E8CF]/90 sm:text-base">
              {children}
            </p>
          </motion.div>
        )}

        {/* Family Invitation Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-8 overflow-hidden rounded-2xl border border-[#C6A04A]/35 bg-gradient-to-br from-[#1C3525] via-[#14251C] to-[#102319] px-6 py-12 text-center shadow-2xl shadow-black/30 sm:px-12 sm:py-16"
        >
          {/* Inner Border */}
          <div className="pointer-events-none absolute inset-2 rounded-xl border border-[#C6A04A]/20" />

          {/* Ambient Decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C6A04A]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#C6A04A]/10 blur-3xl" />

          <div className="relative z-10">
            <Crown
              size={30}
              strokeWidth={1.3}
              className="mx-auto mb-5 text-[#E8CA82]"
            />

            <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-[#E8CA82]/80">
              A Heartfelt Invitation
            </p>

            <h3 className="mb-6 font-serif text-2xl tracking-wide text-[#E8CA82] sm:text-3xl">
              Together With Our Families
            </h3>

            <div className="mb-7">
              <GoldDivider icon={Sparkles} />
            </div>

            <p className="mx-auto max-w-2xl text-sm font-light leading-8 text-[#F3E8CF]/90 sm:text-base">
              {message}
            </p>

            {messageOdia && (
              <p
                lang="or"
                className="mx-auto mt-7 max-w-2xl text-base font-light leading-9 tracking-wide text-[#E8CA82] sm:text-lg"
              >
                {messageOdia}
              </p>
            )}

            <div className="mt-9">
              <GoldDivider icon={Heart} />
            </div>

            <p
              lang="or"
              className="mt-6 font-serif text-xl font-light tracking-widest text-[#E8CA82]"
            >
              ଶୁଭ ବିବାହ
            </p>
          </div>
        </motion.div>

        {/* Bottom Ornament */}
        <div className="mt-12 flex items-center justify-center gap-3 text-[#C6A04A]/70">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C6A04A]/60" />
          <Flower2 size={18} />
          <Heart size={14} className="fill-[#C6A04A]/20" />
          <Flower2 size={18} />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C6A04A]/60" />
        </div>
      </div>
    </section>
  );
};

export default FamilySection;