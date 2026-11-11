
// // src/components/MusicPlayer.jsx

// import { useRef, useState, useEffect } from "react";
// import { motion } from "motion/react";
// import {
//   Music2,
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
// } from "lucide-react";

// import { weddingData } from "../config/weddingData";

// const MusicPlayer = ({ isPlaying, setIsPlaying }) => {
//   const audioRef = useRef(null);

//   // const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [hasError, setHasError] = useState(false);

//   const music = weddingData.music;

//   // Keep audio volume synchronized with mute state
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.muted = isMuted;
//     }
//   }, [isMuted]);

//   // Stop audio if the component is removed
//   useEffect(() => {
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const audio = audioRef.current;

//     if (!audio) return;

//     if (isPlaying) {
//       audio.play().catch((error) => {
//         console.error("Unable to play wedding music:", error);
//         setIsPlaying(false);
//       });
//     } else {
//       audio.pause();
//     }
//   }, [isPlaying, setIsPlaying]);

//   const togglePlay = async () => {
//     const audio = audioRef.current;

//     if (!audio || hasError || !music?.enabled) return;

//     if (isPlaying) {
//       audio.pause();
//       setIsPlaying(false);
//       return;
//     }

//     try {
//       await audio.play();
//       setIsPlaying(true);
//     } catch (error) {
//       console.error("Unable to play wedding music:", error);
//       setIsPlaying(false);
//     }
//   };

//   const toggleMute = () => {
//     setIsMuted((previous) => !previous);
//   };

//   const handleAudioError = () => {
//     setHasError(true);
//     setIsPlaying(false);
//     console.error("Wedding music could not be loaded.");
//   };

//   if (!music?.enabled) return null;

//   return (
//     <>
//       {/* Background Audio */}
//       <audio
//         ref={audioRef}
//         src={music.src}
//         loop
//         preload="none"
//         onError={handleAudioError}
//         onPause={() => setIsPlaying(false)}
//         onPlay={() => setIsPlaying(true)}
//       />

//       {/* Floating Music Player */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.7, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="fixed bottom-5 right-4 z-[80] flex items-center gap-2 rounded-full border border-[#C9A227]/50 bg-[#FFFaf0]/95 p-2 shadow-xl shadow-[#6B0F1A]/15 backdrop-blur-md sm:bottom-7 sm:right-7"
//       >
//         {/* Rotating Music Disc */}
//         <motion.div
//           animate={{ rotate: isPlaying ? 360 : 0 }}
//           transition={{
//             duration: 8,
//             repeat: isPlaying ? Infinity : 0,
//             ease: "linear",
//           }}
//           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/60 bg-[#6B0F1A] text-[#C9A227]"
//         >
//           <Music2 size={19} />
//         </motion.div>

//         {/* Play / Pause */}
//         <button
//           onClick={() => setIsPlaying((prev) => !prev)}
//           aria-label={isPlaying ? "Pause music" : "Play music"}
//           className="p-2.5 rounded-full text-[#6B0F1A] hover:bg-[#6B0F1A]/10 transition-colors"
//         >
//           {isPlaying ? <Pause size={19} /> : <Play size={19} />}
//         </button>

//         {/* Mute / Unmute */}
//         <button
//           type="button"
//           onClick={toggleMute}
//           disabled={hasError}
//           aria-label={isMuted ? "Unmute music" : "Mute music"}
//           className="flex h-10 w-10 items-center justify-center rounded-full text-[#6B0F1A] transition hover:bg-[#6B0F1A]/10 disabled:opacity-40"
//         >
//           {isMuted ? <VolumeX size={19} /> : <Volume2 size={19} />}
//         </button>

//       </motion.div>

//       {/* Music Error Message */}
//       {hasError && (
//         <div className="fixed bottom-20 right-4 z-[80] max-w-[230px] rounded-lg border border-red-200 bg-white px-3 py-2 text-xs text-red-700 shadow-lg sm:right-7">
//           Music could not be loaded. Please check your MP3 file.
//         </div>
//       )}
//     </>
//   );
// };

// export default MusicPlayer;







// // src/components/MusicPlayer.jsx

// import { useRef, useState, useEffect } from "react";
// import { motion } from "motion/react";
// import {
//   Music2,
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
// } from "lucide-react";

// import { weddingData } from "../config/weddingData";

// const MusicPlayer = ({ isPlaying, setIsPlaying }) => {
//   const audioRef = useRef(null);

//   const [isMuted, setIsMuted] = useState(false);
//   const [hasError, setHasError] = useState(false);

//   const music = weddingData.music;

//   // Keep audio volume synchronized with mute state
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.muted = isMuted;
//     }
//   }, [isMuted]);

//   // Stop audio if the component is removed
//   useEffect(() => {
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const audio = audioRef.current;

//     if (!audio) return;

//     if (isPlaying) {
//       audio.play().catch((error) => {
//         console.error("Unable to play wedding music:", error);
//         setIsPlaying(false);
//       });
//     } else {
//       audio.pause();
//     }
//   }, [isPlaying, setIsPlaying]);

//   const toggleMute = () => {
//     setIsMuted((previous) => !previous);
//   };

//   const handleAudioError = () => {
//     setHasError(true);
//     setIsPlaying(false);
//     console.error("Wedding music could not be loaded.");
//   };

//   if (!music?.enabled) return null;

//   return (
//     <>
//       {/* Background Audio */}
//       <audio
//         ref={audioRef}
//         src={music.src}
//         loop
//         preload="none"
//         onError={handleAudioError}
//         onPause={() => setIsPlaying(false)}
//         onPlay={() => setIsPlaying(true)}
//       />

//       {/* Floating Music Player */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.7, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="fixed bottom-5 right-4 z-[80] flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#0D1B2A]/90 p-2 shadow-2xl shadow-black/50 backdrop-blur-md sm:bottom-7 sm:right-7"
//       >
//         {/* Rotating Music Disc */}
//         <motion.div
//           animate={{ rotate: isPlaying ? 360 : 0 }}
//           transition={{
//             duration: 8,
//             repeat: isPlaying ? Infinity : 0,
//             ease: "linear",
//           }}
//           className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#0A192F] text-[#D4AF37] shadow-md"
//         >
//           <Music2 size={19} />
//         </motion.div>

//         {/* Play / Pause */}
//         <button
//           onClick={() => setIsPlaying((prev) => !prev)}
//           aria-label={isPlaying ? "Pause music" : "Play music"}
//           className="p-2.5 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
//         >
//           {isPlaying ? <Pause size={19} /> : <Play size={19} />}
//         </button>

//         {/* Mute / Unmute */}
//         <button
//           type="button"
//           onClick={toggleMute}
//           disabled={hasError}
//           aria-label={isMuted ? "Unmute music" : "Mute music"}
//           className="flex h-10 w-10 items-center justify-center rounded-full text-[#D4AF37] transition hover:bg-[#D4AF37]/10 disabled:opacity-40"
//         >
//           {isMuted ? <VolumeX size={19} /> : <Volume2 size={19} />}
//         </button>

//       </motion.div>

//       {/* Music Error Message */}
//       {hasError && (
//         <div className="fixed bottom-20 right-4 z-[80] max-w-[230px] rounded-lg border border-red-500/30 bg-[#0D1B2A] px-3 py-2 text-xs text-red-400 shadow-xl sm:right-7 backdrop-blur-md">
//           Music could not be loaded. Please check your MP3 file.
//         </div>
//       )}
//     </>
//   );
// };

// export default MusicPlayer;








import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Music2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Crown,
} from "lucide-react";

import { weddingData } from "../config/weddingData";

const MusicPlayer = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const music = weddingData.music;

  // Synchronize mute state with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Handle shared play/pause state
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying && !hasError) {
      audio.play().catch((error) => {
        console.error("Unable to play wedding music:", error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, setIsPlaying, hasError]);

  // Stop audio when component is removed
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMute = () => {
    setIsMuted((previous) => !previous);
  };

  const handleAudioError = () => {
    setHasError(true);
    setIsPlaying(false);
    console.error("Wedding music could not be loaded.");
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  if (!music?.enabled) return null;

  return (
    <>
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src={music.src}
        loop
        preload="none"
        onError={handleAudioError}
        onPause={handlePause}
        onPlay={handlePlay}
      />

      {/* Floating Royal Music Player */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-5 right-4 z-[80] flex items-center gap-1.5 rounded-full border border-[#C6A04A]/50 bg-[#102319]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl sm:bottom-7 sm:right-7"
      >
        {/* Inner Royal Border */}
        <div className="pointer-events-none absolute inset-[3px] rounded-full border border-[#C6A04A]/15" />

        {/* Rotating Music Disc */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{
            duration: 8,
            repeat: isPlaying ? Infinity : 0,
            ease: "linear",
          }}
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C6A04A]/60 bg-[#0D1B16] text-[#E8CA82] shadow-md sm:h-11 sm:w-11"
        >
          <div className="absolute inset-1 rounded-full border border-[#C6A04A]/20" />

          <Music2 size={19} strokeWidth={1.5} />

          {/* Playing Indicator */}
          {isPlaying && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border border-[#102319] bg-[#E8CA82]"
            />
          )}
        </motion.div>

        {/* Play / Pause */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.85 }}
          onClick={() => setIsPlaying((previous) => !previous)}
          disabled={hasError}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          title={isPlaying ? "Pause music" : "Play music"}
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#E8CA82] transition-colors hover:bg-[#C6A04A]/15 disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
        >
          {isPlaying ? (
            <Pause size={19} strokeWidth={2} />
          ) : (
            <Play size={19} strokeWidth={2} className="ml-0.5" />
          )}
        </motion.button>

        {/* Mute / Unmute */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.85 }}
          onClick={toggleMute}
          disabled={hasError}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
          title={isMuted ? "Unmute music" : "Mute music"}
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#C6A04A] transition-colors hover:bg-[#C6A04A]/15 disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
        >
          {isMuted ? (
            <VolumeX size={19} strokeWidth={1.7} />
          ) : (
            <Volume2 size={19} strokeWidth={1.7} />
          )}
        </motion.button>
      </motion.div>

      {/* Music Error Message */}
      {hasError && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-4 z-[80] max-w-[240px] rounded-xl border border-red-400/30 bg-[#102319]/95 px-4 py-3 text-xs text-red-300 shadow-xl backdrop-blur-xl sm:right-7"
        >
          Music could not be loaded. Please check your MP3 file.
        </motion.div>
      )}
    </>
  );
};

export default MusicPlayer;