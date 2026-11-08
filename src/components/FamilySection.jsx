
// src/components/FamilySection.jsx

import { motion } from "motion/react";
import {
  Heart,
  Flower2,
  Users,
  Sparkles,
  Flower,
} from "lucide-react";

import { weddingData } from "../config/weddingData";

const FamilySection = () => {
  const { groom, bride } = weddingData.couple;

  const {
    groomParents,
    brideParents,
    message,
    messageOdia,
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
      className="relative overflow-hidden bg-[#FFFaf0] px-5 py-20 sm:py-24"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#F8E1E7]/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />
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
          <div className="mb-5 flex items-center justify-center gap-3 text-[#C9A227]">
            <span className="h-px w-12 bg-[#C9A227]/60" />
            <Flower2 size={23} />
            <span className="h-px w-12 bg-[#C9A227]/60" />
          </div>

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#5C4A3D]">
            Two Families, One Celebration
          </p>

          <h2 className="font-serif text-3xl text-[#6B0F1A] sm:text-5xl">
            Our Loving Families
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#5C4A3D] sm:text-base">
            With the blessings of our beloved parents and
            elders, we joyfully invite you to celebrate this
            beautiful union.
          </p>

          <p className="mt-4 text-xl text-[#C9A227]">
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
              className="relative overflow-hidden rounded-2xl border border-[#C9A227]/40 bg-[#FDF6E9] px-6 py-9 text-center shadow-lg shadow-[#6B0F1A]/5 sm:px-9 sm:py-11"
            >

              {/* Decorative Top */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

              <Flower
                size={22}
                className="absolute left-5 top-5 text-[#C9A227]/40"
              />

              <Flower
                size={22}
                className="absolute right-5 top-5 text-[#C9A227]/40"
              />

              {/* Family Icon */}
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A227]/50 bg-[#FFFaf0] shadow-md">
                <Users
                  size={34}
                  strokeWidth={1.3}
                  className="text-[#6B0F1A]"
                />
              </div>

              {/* Family Title */}
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#C9A227]">
                {family.subtitle}
              </p>

              <h3 className="font-serif text-2xl text-[#6B0F1A] sm:text-3xl">
                {family.title}
              </h3>

              {/* Decorative Divider */}
              <div className="my-6 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-[#C9A227]/50" />
                <Heart
                  size={17}
                  className="fill-[#F8E1E7] text-[#6B0F1A]"
                />
                <span className="h-px w-12 bg-[#C9A227]/50" />
              </div>

              {/* Couple Name */}
              <p className="mb-3 font-serif text-lg text-[#6B0F1A]">
                {family.person}
              </p>

              {/* Parents */}
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#5C4A3D]">
                Beloved Parents
              </p>

              <p className="mx-auto max-w-sm text-sm leading-7 text-[#2C1810] sm:text-base">
                {family.parents}
              </p>

              {/* Bottom Decoration */}
              <div className="mt-7 flex items-center justify-center gap-2 text-[#C9A227]">
                <Flower2 size={17} />
                <span className="text-xs tracking-widest">
                  WITH BLESSINGS
                </span>
                <Flower2 size={17} />
              </div>

            </motion.div>
          ))}

        </div>

        {/* Family Invitation Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-[#C9A227]/40 bg-[#FDF6E9] px-6 py-10 text-center shadow-md sm:px-12 sm:py-14"
        >

          <Sparkles
            size={25}
            className="mx-auto mb-5 text-[#C9A227]"
          />

          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C9A227]">
            A heartfelt invitation
          </p>

          <h3 className="mb-5 font-serif text-2xl leading-relaxed text-[#6B0F1A] sm:text-3xl">
            Together With Our Families
          </h3>

          <p className="mx-auto max-w-2xl text-sm leading-8 text-[#5C4A3D] sm:text-base">
            {message}
          </p>

          {messageOdia && (
            <p
              lang="or"
              className="mx-auto mt-6 max-w-2xl text-base leading-9 text-[#6B0F1A] sm:text-lg"
            >
              {messageOdia}
            </p>
          )}

          <div className="mt-8 flex items-center justify-center gap-3 text-[#C9A227]">
            <span className="h-px w-10 bg-[#C9A227]/50" />
            <Heart
              size={20}
              className="fill-[#F8E1E7] text-[#6B0F1A]"
            />
            <span className="h-px w-10 bg-[#C9A227]/50" />
          </div>

          <p className="mt-5 font-serif text-xl text-[#6B0F1A]">
            ଶୁଭ ବିବାହ
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default FamilySection;
