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







// src/App.jsx
import { useState } from "react";
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

  const handleToggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#F4F1EA] selection:bg-[#D4AF37] selection:text-[#0A192F]">
      {/* Opening Invitation */}
      {!invitationOpened && (
        <InvitationIntro onOpen={() => setInvitationOpened(true)} />
      )}

      {/* Main Website (appears after opening) */}
      {invitationOpened && (
        <>
          <Navbar
            isPlaying={isMusicPlaying}
            onToggleMusic={handleToggleMusic}
          />

          <main className="pt-20">
            <Hero />
            <Countdown />
            <CoupleSection />
            <EventsSection />
            <VenueSection />
            <Gallery />
            <FamilySection />
            <Footer />
          </main>

          <MusicPlayer
            isPlaying={isMusicPlaying}
            setIsPlaying={setIsMusicPlaying}
          />
        </>
      )}
    </div>
  );
}

export default App;