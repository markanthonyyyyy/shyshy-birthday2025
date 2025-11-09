import { useEffect, useRef, useState } from "react";
import Card2 from "./assets/Pages/Card2";
import MainPage from "./assets/Pages/MainPage";
import Card1 from "./assets/Pages/Card1";
import Card3 from "./assets/Pages/Card3";
import Card4 from "./assets/Pages/Card4";


function Yes({ onCardClick }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 p-4">
      <div
        className="text-center animate-fade-in"
        style={{
          animationDelay: "0.2s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-2 text-pink-500"
          style={{ fontFamily: "Aloja" }}
        >
          THESE ARE FOR YOU!
        </h1>
        <p
          className="text-sm opacity-80 mt-5"
          style={{ fontFamily: "Comic Relief, Aloja" }}
        >
          {'Choose one Mahal, Iloveyousomuchhh <3'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-md">
        {[
          { key: "card1", img: "https://media.tenor.com/2Tz8F9OSDB4AAAAm/cat-cute.webp", alt: "flower", width: 'w-2/3' },
          { key: "card2", img: "https://media.tenor.com/p96XUHeS4q8AAAAm/peach-and-goma-goma.webp", alt: "bucket", width: 'w-2/3' },
          { key: "card3", img: "https://media.tenor.com/dNLReRVOU4sAAAAm/mochi-mochi-peach-cat-crying.webp", alt: "disk", width: 'w-3/3' },
          { key: "card4", img: "https://media.tenor.com/t3lwK_KZmdcAAAAm/yaseen.webp", alt: "mail", width: 'w-2/3'},
        ].map((item, idx) => (
          <button
            key={item.key}
            onClick={() => onCardClick(item.key)}
            className="border-4 border-pink-600 bg-pink-50 rounded-3xl p-0 flex items-center justify-center hover:bg-pink-100 transition-all aspect-square w-full hover:scale-105 animate-fade-in"
            style={{
              animationDelay: `${0.4 + idx * 0.2}s`,
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img
                src={item.img}
                alt={item.alt}
                className={`${item.width} mx-auto mb-2`}
              />
            
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [currentView, setCurrentView] = useState("awal");
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const startAudioOnInteraction = () => {
      if (audioRef.current && !audioStarted) {
        audioRef.current
          .play()
          .catch((error) => console.log("Audio play error:", error));
        setAudioStarted(true);
        document.removeEventListener("click", startAudioOnInteraction);
      }
    };

    document.addEventListener("click", startAudioOnInteraction);
    return () => document.removeEventListener("click", startAudioOnInteraction);
  }, [audioStarted]);

  const handleViewChange = (view) => {
    setCurrentView(view);
    // Resume audio when leaving video page
    if (view !== "card3" && audioRef.current && audioStarted) {
      audioRef.current.play().catch((e) => console.log("Resume error:", e));
    }
  };

  const renderView = () => {
    switch (currentView) {
      case "awal":
        if (audioRef.current && audioStarted) {
          audioRef.current.pause();
        }
        return (
          <MainPage
            onYes={() => handleViewChange("yes")}
          />
        );
      case "yes":
        return <Yes onCardClick={(card) => handleViewChange(card)} />;
      case "card1":
        return <Card1 onReturn={() => handleViewChange("yes")} />;
      case "card2":
        return <Card2 onReturn={() => handleViewChange("yes")} />;
      case "card3":
        // Turn off background audio when entering video page
        if (audioRef.current && audioStarted) {
          audioRef.current.pause();
        }
        return <Card3 onReturn={() => handleViewChange("yes")} />;
      case "card4":
        return <Card4 onReturn={() => handleViewChange("yes")} />;
      default:
        return (
          <Awal
            onYes={() => handleViewChange("yes")}
            onNo={() => handleViewChange("no")}
          />
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full background-paper">
      {renderView()}
      <audio ref={audioRef} src="/song.mp3" preload="auto" loop />
    </div>
  );
}

export default App;
