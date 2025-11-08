import React from 'react'

const Card1 = ({ onReturn }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 p-4">
      <div
        className="max-w-4xl w-full animate-fade-in"
        style={{
          animationDelay: "0.2s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="border-4 border-blue-900 rounded-2xl p-4 bg-gradient-to-b from-sky-200 to-green-200 aspect-square transform hover:rotate-2 transition-all animate-fade-in"
              style={{
                animationDelay: `${0.3 + i * 0.1}s`,
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <img
                src={`/us/photo${i}.jpg`}
                alt={`photo${i}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="border-t-2 border-dashed border-blue-900 w-full max-w-4xl animate-fade-in"
        style={{
          animationDelay: "1s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      ></div>

      <p
        className="text-sm text-center animate-fade-in"
        style={{
          fontFamily: "Comic Relief, Aloja",
          animationDelay: "1.2s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        your terlucu when we take pictures together :3
      </p>
      <h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-900 animate-fade-in"
        style={{
          fontFamily: "Aloja",
          animationDelay: "1.3s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        Captured Memories
      </h1>

      <button
        onClick={onReturn}
        className="border-2 font-bold uppercase border-blue-900 bg-pink-100 hover:bg-pink-200 rounded-full px-8 py-3 text-sm transition-all hover:scale-105 animate-fade-in"
        style={{
          fontFamily: "Comic Relief, Aloja",
          animationDelay: "1.4s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        Return
      </button>
    </div>
  );
}

export default Card1