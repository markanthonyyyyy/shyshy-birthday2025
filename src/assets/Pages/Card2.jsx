import React, { useEffect, useState, useRef } from 'react'

const Card2 = ({ onReturn }) => {
  const messages = [
      "Good day Mahal, I hope you're always motivated :)",
      "Iloveyou forever and always lablab koo <3",
      "Virtual flowers for my special girl :)",
      "MAHAL NA MAHAL PO KITA SOBRA SOBRAAA",
      "May all your dreams come truee lablabb",
      "Happiest Birthday Mahal, enjoy your special day!!",
      "Thank you for loving me every single day, Iloveyouuuu",
      "Just like flowers need sunlight, I need your smile to brighten my day",
      "More Birthdays to comeee Mahaaal <3",
      "Sending lots of love, I hope you're always happy.",
    ];
  
    // Only apply random offsets on >= md screens so mobile stays neat
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
      const mql = window.matchMedia("(min-width: 768px)");
      const update = () => setIsDesktop(mql.matches);
      update();
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    }, []);
  
    const positions = useRef(
      messages.map(() => ({
        marginLeft: Math.random() * 100,
        marginRight: Math.random() * 30,
      }))
    ).current;
  
    const Bubble = ({ children, delay = 0, idx }) => (
      <div
        className={
          "border-2 border-pink-600 rounded-2xl p-3 bg-pink-100 text-xs md:text-sm w-fit animate-fade-in break-words max-w-[80vw] md:max-w-[18rem]"
        }
        style={{
          fontFamily: "Comic Relief, Aloja",
          marginLeft: isDesktop ? `${positions[idx].marginLeft}px` : undefined,
          marginRight: isDesktop ? `${positions[idx].marginRight}px` : undefined,
          animationDelay: `${delay}s`,
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        {children}
      </div>
    );
  
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 md:gap-8 px-4 sm:px-6 py-8">
        {/* Top area: on md+ use a 3-col grid; on mobile center the card */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-2 md:gap-4 relative">
          {/* Left bubbles (shown on md+) */}
          <div className="hidden md:grid grid-cols-1 gap-4 mb-10 justify-self-end">
            {messages.slice(0, 5).map((msg, i) => (
              <Bubble key={i} idx={i} delay={0.3 + i * 0.15}>
                {msg}
              </Bubble>
            ))}
          </div>
  
          {/* Center card */}
          <div
            className="justify-self-center border-4 border-pink-600 rounded-3xl p-6 md:p-8 bg-white animate-fade-in w-full max-w-sm sm:max-w-md md:max-w-none"
            style={{
              animationDelay: "0.2s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <div className="text-center ">
              <img
                src="https://media.tenor.com/hcI3W7YppHEAAAAm/flowers-glitter.webp"
                alt="flower"
                className="h-40 md:h-64 mx-auto w-auto select-none"
                draggable={false}
              />
            </div>
          
          </div>
  
          {/* Right bubbles (shown on md+) */}
          <div className="hidden md:grid grid-cols-1 gap-4 justify-self-start">
            {messages.slice(5).map((msg, i) => (
              <Bubble key={i + 5} idx={i + 5} delay={1.2 + i * 0.15}>
                {msg}
              </Bubble>
            ))}
          </div>
        </div>
  
        {/* On mobile, show all bubbles in a horizontal scroll (cleaner than random margins) */}
        <div className="md:hidden w-full -mt-2">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 pt-1">
            {messages.map((msg, i) => (
              <div key={i} className="snap-start shrink-0">
                <Bubble idx={i} delay={0.3 + i * 0.05}>
                  {msg}
                </Bubble>
              </div>
            ))}
          </div>
        </div>
  
        <div
          className="border-t-2 border-dashed border-pink-600 w-full max-w-4xl animate-fade-in"
          style={{
            animationDelay: "2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        />
  
        <h1
          className="text-3xl md:text-4xl font-bold text-center text-pink-500 animate-fade-in"
          style={{
            fontFamily: "Aloja",
            animationDelay: "2.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Virtual Flowers
        </h1>
  
        <button
          onClick={onReturn}
          className="border-2 font-bold uppercase border-pink-600 text-pink-600 focus:outline-none bg-pink-100 hover:bg-pink-200 rounded-full px-6 md:px-8 py-3 text-sm transition-all hover:scale-105 animate-fade-in"
          style={{
            fontFamily: "Comic Relief, Aloja",
            animationDelay: "2.3s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Return
        </button>
      </div>
    );
}

export default Card2