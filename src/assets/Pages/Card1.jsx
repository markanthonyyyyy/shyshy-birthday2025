import React from 'react'

const Card1 = ({ onReturn }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center  p-4 overflow-hidden">
      <div
        className="md:max-w-4xl w-full animate-fade-in overflow-y-auto overflow-x-hidden max-h-[60vh] no-scrollbar"
        style={{
          animationDelay: "0.2s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        <div className="gap-4 mb-8 flex flex-wrap items-center justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map((i) => (
              <div
                key={i}
                className="border-4 border-pink-600 rounded-2xl p-4 bg-gradient-to-b w-56 h-56 from-pink-200 to-pink-400 max-w-64  transform hover:rotate-2 transition-all animate-fade-in"
                style={{
                  animationDelay: `${0.3 + i * 0.1}s`,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src={`/us/photo${i}.jpeg`}
                  alt={`photo${i}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
        </div>
      </div>
      <div className='w-full animate-fade-in flex flex-col items-center space-y-4 mt-10'>
          <div
            className="border-t-2 border-dashed border-pink-600 w-full max-w-4xl animate-fade-in"
            style={{
              animationDelay: "1s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          />
        <h1
          className="text-3xl md:text-4xl font-bold text-center text-pink-500 animate-fade-in"
          style={{
            fontFamily: "Aloja",
            animationDelay: "1.3s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Captured Memories
        </h1>
         <p
            className="text-xs md:text-sm opacity-80 text-center px-4 animate-fade-in"
            style={{
            fontFamily: "Comic Relief, Aloja",
            animationDelay: "1.3s",
            opacity: 0,
            animationFillMode: "forwards",
            }}
        >
            {`More memories to come <3`}
        </p>
        <button
          onClick={onReturn}
          className="border-2 font-bold text-pink-600 uppercase border-pink-600 bg-pink-100 focus:outline-none hover:bg-pink-200 rounded-full px-8 py-3 text-sm transition-all hover:scale-105 animate-fade-in"
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
    </div>
  );
}

export default Card1