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





import { motion } from "motion/react";
import { Heart, Flower2, UserRound } from "lucide-react";
import { weddingData } from "../config/weddingData";

const CoupleSection = () => {
  const { groom, bride } = weddingData.couple;
  const { groomParents, brideParents, message } = weddingData.family;

  const profiles = [
    {
      role: "The Groom",
      name: groom.fullName,
      shortName: groom.name,
      parents: groomParents,
      initial: groom.name.charAt(0),
      photo: weddingData.couple.groom.photo,
    },
    {
      role: "The Bride",
      name: bride.fullName,
      shortName: bride.name,
      parents: brideParents,
      initial: bride.name.charAt(0),
      photo: weddingData.couple.bride.photo,
    },
  ];

  return (
    <section
      id="couple"
      className="relative overflow-hidden bg-[#0A192F] px-5 py-20 sm:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl" />
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
          <div className="mb-5 flex items-center justify-center gap-3 text-[#D4AF37]">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <Flower2 size={23} />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#E6C687]/80 font-light">
            Made for each other
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#D4AF37] tracking-wide">
            The Beautiful Couple
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#F4F1EA]/80 font-light">
            Two hearts, two families, and one beautiful journey
            that begins with love and togetherness.
          </p>
        </motion.div>

        {/* Couple Profiles */}
        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">

          {profiles.map((person, index) => (
            <motion.div
              key={person.role}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mx-auto w-full max-w-sm text-center"
            >
              {/* Profile Image Frame */}
              <div className="relative mx-auto mb-7 aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-t-full border-[3px] border-[#D4AF37]/50 bg-[#0D1B2A] p-2 shadow-2xl backdrop-blur-sm">

                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-t-full bg-gradient-to-b from-[#112240] to-[#0D1B2A]">

                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-4 text-[#D4AF37]">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A192F]">
                        <UserRound
                          size={52}
                          strokeWidth={1}
                          className="text-[#D4AF37]"
                        />
                      </div>

                      <span className="font-serif text-5xl text-[#D4AF37]">
                        {person.initial}
                      </span>

                      <span className="text-xs uppercase tracking-widest text-[#E6C687]/80 font-light">
                        Photo coming soon
                      </span>
                    </div>
                  )}

                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-5 right-5 rounded-full bg-[#0D1B2A] border border-[#D4AF37]/40 p-2 shadow-md">
                  <Heart
                    size={19}
                    className="fill-[#D4AF37]/20 text-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Profile Details */}
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#E6C687] font-light">
                {person.role}
              </p>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#D4AF37] tracking-wide">
                {person.name}
              </h3>

              <div className="mx-auto my-4 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

              <p className="mb-2 text-xs uppercase tracking-wider text-[#E6C687]/70 font-light">
                Beloved Parents
              </p>

              <p className="mx-auto max-w-xs text-sm leading-relaxed text-[#F4F1EA]/90 font-light">
                {person.parents}
              </p>
            </motion.div>
          ))}

          {/* Center Heart – Desktop Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center justify-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0D1B2A] shadow-xl">
              <Heart
                size={26}
                className="fill-[#D4AF37]/20 text-[#D4AF37]"
              />
            </div>
          </motion.div>

        </div>

        {/* Family Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-2xl border-y border-[#D4AF37]/30 bg-[#0D1B2A]/40 backdrop-blur-sm px-6 py-10 text-center rounded-lg shadow-xl"
        >
          <Heart
            size={22}
            className="mx-auto mb-4 text-[#D4AF37] fill-[#D4AF37]/20"
          />

          <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#F4F1EA] tracking-wide">
            {message}
          </p>

          <p className="mt-5 text-xl text-[#D4AF37] font-light tracking-widest">
            ଶୁଭ ବିବାହ
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CoupleSection;