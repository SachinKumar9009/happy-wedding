import { motion } from "motion/react";
import {
  Heart,
  ArrowUp,
  MessageCircle,
  Flower2,
} from "lucide-react";
import { weddingData } from "../config/weddingData";

const Footer = () => {
  const { groom, bride } = weddingData.couple;
  const { wedding } = weddingData;
  const { venue } = weddingData;

  const shareInvitation = () => {
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
    <footer className="relative overflow-hidden bg-[#4A0E14] px-5 py-16 text-[#FFFaf0]">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full border border-[#C9A227]/20" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-48 w-48 rounded-full border border-[#C9A227]/20" />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Decorative ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center justify-center gap-3 text-[#C9A227]"
        >
          <span className="h-px w-12 bg-[#C9A227]/60" />
          <Flower2 size={25} />
          <span className="h-px w-12 bg-[#C9A227]/60" />
        </motion.div>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-serif text-sm uppercase tracking-[0.3em] text-[#C9A227]">
            Together With Their Families
          </p>

          <h2 className="font-serif text-3xl leading-relaxed sm:text-5xl">
            {groom.name}
            <span className="mx-3 text-[#C9A227]">&</span>
            {bride.name}
          </h2>

          <p className="mt-4 text-sm tracking-widest text-[#FFFaf0]/80">
            {wedding.displayDate}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mx-auto my-8 h-px max-w-xs bg-gradient-to-r from-transparent via-[#C9A227]/70 to-transparent" />

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-2xl"
        >
          <h3 className="mb-4 font-serif text-2xl text-[#C9A227]">
            Thank You!
          </h3>

          <p className="text-sm leading-7 text-[#FFFaf0]/85 sm:text-base">
            Your presence and blessings will make our special day even more
            memorable. We look forward to celebrating this beautiful beginning
            with you and your family.
          </p>

          <p className="mt-6 font-serif text-lg leading-8 text-[#F8E1E7]">
            ଆପଣଙ୍କ ଉପସ୍ଥିତି ଓ ଆଶୀର୍ବାଦ ଆମ ପାଇଁ ଅମୂଲ୍ୟ।
            <br />
            ଆମର ନୂତନ ଜୀବନ ପାଇଁ ଆପଣଙ୍କ ଶୁଭେଚ୍ଛା କାମନା କରୁଛୁ।
          </p>
        </motion.div>

        {/* Action buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <button
            onClick={shareInvitation}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C9A227] px-7 py-3 text-sm font-semibold text-[#4A0E14] transition hover:bg-[#e0bd4d]"
          >
            <MessageCircle size={18} />
            Share Invitation
          </button>

          <button
            onClick={scrollToTop}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C9A227]/60 px-7 py-3 text-sm font-medium text-[#FFFaf0] transition hover:bg-[#C9A227]/10"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>

        </div>

        {/* Bottom section */}
        <div className="mt-14 border-t border-[#FFFaf0]/15 pt-6">

          <p className="text-xs text-[#FFFaf0]/60">
            With love and gratitude, we invite you to be part of our
            celebration.
          </p>

          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[#FFFaf0]/70">
            Made with
            <Heart size={13} className="fill-[#C9A227] text-[#C9A227]" />
            for Happy & Demo
          </p>

          <p className="mt-3 text-[11px] text-[#FFFaf0]/40">
            © {new Date().getFullYear()} Pradhan's. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
