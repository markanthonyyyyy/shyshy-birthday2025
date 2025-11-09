import React from 'react'
import VideoPlayer from '../Components/VideoPlayer';

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
          HAPPY BIRTHDAY HAHAHAHAHAHAHA
        </p>

        <div
          className="border-4 border-pink-600 rounded-3xl p-4 bg-pink-900 animate-fade-in"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <VideoPlayer/>
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
            className="text-pink-600 font-bold"
            style={{ fontFamily: "Comic Relief" }}
          >
            Wag ka mabilib ako lang to
          </p>
        </div>
      </div>

      <div
        className="border-t-2 border-dashed border-pink-600 w-full max-w-4xl animate-fade-in"
        style={{
          animationDelay: "0.8s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      ></div>

      <h1
        className="text-3xl md:text-4xl font-bold text-center text-pink-500 animate-fade-in"
        style={{
          fontFamily: "Aloja",
          animationDelay: "1s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        Song For You
      </h1>

      <button
        onClick={onReturn}
        className="border-2 font-bold uppercase border-pink-600 text-pink-600 focus:outline-none bg-pink-100 hover:bg-pink-200 rounded-full px-8 py-3 text-sm transition-all hover:scale-105 animate-fade-in"
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