import React from 'react'

const Card3 = ({ onReturn }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 p-4">
      <div className="max-w-2xl w-full">
        <p
          className="text-center mb-4 animate-fade-in"
          style={{
            fontFamily: "Comic Relief, Aloja",
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          this song reminds me of you (◡‿◡✿)
        </p>

        <div
          className="border-4 border-blue-900 rounded-3xl p-4 bg-gray-900 animate-fade-in"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/kQDw88hEr2c?si=-bCibe7XpKxE6qWC&enablejsapi=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={(e) => {
              // Detect when video plays
              e.target.contentWindow.postMessage('{"event":"listening"}', "*");
            }}
          ></iframe>
        </div>

        <div
          className="text-center mt-4 animate-fade-in"
          style={{
            animationDelay: "0.6s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <p
            className="text-blue-900 font-bold"
            style={{ fontFamily: "Comic Relief" }}
          >
            Love is an open door - Frozen
          </p>
        </div>
      </div>

      <div
        className="border-t-2 border-dashed border-blue-900 w-full max-w-4xl animate-fade-in"
        style={{
          animationDelay: "0.8s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      ></div>

      <h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-900 animate-fade-in"
        style={{
          fontFamily: "Aloja",
          animationDelay: "1s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        Song about you
      </h1>

      <button
        onClick={onReturn}
        className="border-2 font-bold uppercase border-blue-900 bg-pink-100 hover:bg-pink-200 rounded-full px-8 py-3 text-sm transition-all hover:scale-105 animate-fade-in"
        style={{
          fontFamily: "Comic Relief, Aloja",
          animationDelay: "1.2s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        Return
      </button>
    </div>
  );
}

export default Card3