import React from 'react'

const Card4 = ({ onReturn }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 p-4">
      <div
        className="max-w-3xl w-full border-4 border-pink-600 rounded-3xl p-8 bg-pink-50 animate-fade-in"
        style={{
          animationDelay: "0.2s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-6 text-pink-500"
          style={{ fontFamily: "Aloja" }}
        >
          HAPPIEST BIRTHDAY, MAHAL!
        </h2>

        <div
          className="space-y-4 text-sm leading-relaxed"
          style={{ fontFamily: "Comic Relief, Aloja" }}
        >
          <p>
            Happy Birthday Mahal♡, On this day, gusto kong ipaalala kung gaano ka kahalaga sa akin. 
            Ikaw ang pinakamagandang biyayang dumating sa buhay ko — hindi lang dahil minahal mo ako, 
            kundi dahil pinasaya mo rin ako araw-araw.
            Sana sa bawat taon na dadaan, mas lalo mong maramdaman kung gaano kita kamahal :).
          </p>

          <p>
            Sana today, ikaw ang pinakamasayang tao sa mundo.
            Wish ko lang na mas maging happy ang life and future moo (WITH ME SYEMPRE).
            More good opportunities to come sa atin. And sana di ka po magsawa na mahalin at piliin ako
            kahit na may mga problema tayong nadadaanan sa araw araw. Mahal na mahal po kita lablab,
            Napakaswerte ko kasi nagexist yung isang katulad mo (since 2000 HAHAHAHA) kung di ka nagexist 
            paano nako diba :(( HAHAHAHA
          </p>


          <p>
            Thank you for coming to my life and existed. I'll always love you po and mas mamahalin kita hangang
            sa huling birthday mo♡. MAHAL NA MAHAL NA MAHAL PO KITAAA SOBRA SOBRAA
          </p>

          <p>
            Enjoy your day, Mahal ko — you deserve all the love and happiness in the world. More Birthdays to celebrate with me
          </p>

          <p className="text-right italic mt-6">
            Nagmamahal sayo palagi♡,
            <br />
            MNTY (Your Lablab♡)
          </p>
        </div>
      </div>

      <div
        className="border-t-2 border-dashed border-pink-600 w-full max-w-4xl animate-fade-in"
        style={{
          animationDelay: "0.4s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      ></div>

      <h1
        className="text-3xl md:text-4xl font-bold text-center text-pink-500 animate-fade-in"
        style={{
          fontFamily: "Aloja",
          animationDelay: "0.6s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        Message for Mahal♡
      </h1>

      <button
        onClick={onReturn}
        className="border-2 font-bold uppercase border-pink-600 text-pink-500 focus:outline-none bg-pink-100 hover:bg-pink-200 rounded-full px-8 py-3 text-sm transition-all hover:scale-105 animate-fade-in"
        style={{
          fontFamily: "Comic Relief, Aloja",
          animationDelay: "0.8s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        Return
      </button>
    </div>
  );
}

export default Card4