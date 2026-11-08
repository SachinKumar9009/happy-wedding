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
    <div className="min-h-screen bg-[#FFFaf0]">
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