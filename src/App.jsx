// import { useState } from "react";
// import InvitationIntro from "./components/InvitationIntro";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Countdown from "./components/Countdown";
// import CoupleSection from "./components/CoupleSection";
// import EventsSection from "./components/EventsSection";
// import VenueSection from "./components/VenueSection";
// import Gallery from "./components/Gallery";
// import FamilySection from "./components/FamilySection";
// import MusicPlayer from "./components/MusicPlayer";
// import Footer from "./components/Footer";

// function App() {
//   const [invitationOpened, setInvitationOpened] = useState(false);

//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);

//   const handleToggleMusic = () => {
//     setIsMusicPlaying((prev) => !prev);
//   };

//   return (
//     <div className="min-h-screen bg-[#FFFaf0]">
//       {/* Opening Invitation */}
//       {!invitationOpened && (
//         <InvitationIntro onOpen={() => setInvitationOpened(true)} />
//       )}

//       {/* Main Website (appears after opening) */}
//       {invitationOpened && (
//         <>
//           <Navbar
//             isPlaying={isMusicPlaying}
//             onToggleMusic={handleToggleMusic}
//           />

//           <main className="pt-20">
//             <Hero />

//             <Countdown />

//             <CoupleSection />

//             <EventsSection />

//             <VenueSection />

//             <Gallery />

//             <FamilySection />

//             <Footer />
//           </main>

//           <MusicPlayer
//             isPlaying={isMusicPlaying}
//             setIsPlaying={setIsMusicPlaying}
//           />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;







// // src/App.jsx
// import { useState } from "react";
// import InvitationIntro from "./components/InvitationIntro";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Countdown from "./components/Countdown";
// import CoupleSection from "./components/CoupleSection";
// import EventsSection from "./components/EventsSection";
// import VenueSection from "./components/VenueSection";
// import Gallery from "./components/Gallery";
// import FamilySection from "./components/FamilySection";
// import MusicPlayer from "./components/MusicPlayer";
// import Footer from "./components/Footer";

// function App() {
//   const [invitationOpened, setInvitationOpened] = useState(false);
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);

//   const handleToggleMusic = () => {
//     setIsMusicPlaying((prev) => !prev);
//   };

//   return (
//     <div className="min-h-screen bg-[#0A192F] text-[#F4F1EA] selection:bg-[#D4AF37] selection:text-[#0A192F]">
//       {/* Opening Invitation */}
//       {!invitationOpened && (
//         <InvitationIntro onOpen={() => setInvitationOpened(true)} />
//       )}

//       {/* Main Website (appears after opening) */}
//       {invitationOpened && (
//         <>
//           <Navbar
//             isPlaying={isMusicPlaying}
//             onToggleMusic={handleToggleMusic}
//           />

//           <main className="pt-20">
//             <Hero />
//             <Countdown />
//             <CoupleSection />
//             <EventsSection />
//             <VenueSection />
//             <Gallery />
//             <FamilySection />
//             <Footer />
//           </main>

//           <MusicPlayer
//             isPlaying={isMusicPlaying}
//             setIsPlaying={setIsMusicPlaying}
//           />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;








import { useState } from "react";
import { MotionConfig } from "motion/react";

import InvitationIntro from "./components/InvitationIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import CoupleSection from "./components/CoupleSection";
import EventsSection from "./components/EventsSection";
import VenueSection from "./components/VenueSection";
import Gallery from "./components/Gallery";
import FamilySection from "./components/FamilySection";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Shared music control for Navbar and MusicPlayer
  const handleToggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#FFFCFA] font-sans text-[#51465B] antialiased selection:bg-[#EDE5F3] selection:text-[#70558F]">
        {/* Soft Watercolor Ambient Wash Layer */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-[#E8B8D0]/20 blur-3xl" />
          <div className="absolute top-24 -right-28 h-96 w-96 rounded-full bg-[#A58AC5]/18 blur-3xl" />
          <div className="absolute bottom-16 left-1/4 h-80 w-80 rounded-full bg-[#EDE5F3]/55 blur-3xl" />
        </div>

        {/* Wedding Invitation Intro */}
        {!invitationOpened && (
          <InvitationIntro onOpen={() => setInvitationOpened(true)} />
        )}

        {/* Main Wedding Website */}
        {invitationOpened && (
          <>
            {/* Navigation */}
            <Navbar
              isPlaying={isMusicPlaying}
              onToggleMusic={handleToggleMusic}
            />

            {/* Main Sections */}
            <main className="relative pt-20 sm:pt-24">
              <Hero />

              <Countdown />

              <CoupleSection />

              <EventsSection />

              <VenueSection />

              <Gallery />

              <FamilySection />

              <Footer />
            </main>

            {/* Single Shared Music Player */}
            <MusicPlayer
              isPlaying={isMusicPlaying}
              setIsPlaying={setIsMusicPlaying}
            />
          </>
        )}
      </div>
    </MotionConfig>
  );
}

export default App;