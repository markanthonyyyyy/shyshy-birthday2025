import React from 'react'

const Card4 = ({ onReturn }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 p-4">
      <div
        className="max-w-3xl w-full border-4 border-blue-900 rounded-3xl p-8 bg-pink-50 animate-fade-in"
        style={{
          animationDelay: "0.2s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-6 text-blue-900"
          style={{ fontFamily: "Aloja" }}
        >
          HAPPIEST BIRTHDAY, MY LOVE!
        </h2>

        <div
          className="space-y-4 text-sm leading-relaxed"
          style={{ fontFamily: "Comic Relief, Aloja" }}
        >
          <p>
            Happy Birthday, cewe cantik. Maafin aku ya banyak salah i thought
            your birthday is at 10th november bukan sekarang im really shock and
            ketampar semoga price kecil ini bermanfaat buat kamu hehe :3. Di
            hari yang spesial ini, aku cuma mau bilang betapa bersyukurnya aku
            punya kamu dalam hidupku. Kamu bukan cuma pacar terbaik, tapi juga
            sahabat terbaik, partner in crime, dan cahaya yang menerangi
            hari-hariku.
          </p>

          <p>
            Intinya kita harus selalu bersama yaa, tetap setia tetap kudus
            didalam Tuhan Seperti ayat alkitab kita di 1 Korintus 13:7 "Love
            always protects, always trusts, always hopes, always perseveres."
            Aku janji akan selalu ada buat kamu, mendukung kamu terus hihihi.
            Semoga ulang tahunmu dipenuhi dengan cinta, tawa, dan semua hal
            indah yang pantas kamu dapatkan. I love you sweet heart.
          </p>

          <p className="text-right italic mt-6">
            Sincerely yours,
            <br />
            Bang Peter (◡‿◡✿)
          </p>
        </div>
      </div>

      <div
        className="border-t-2 border-dashed border-blue-900 w-full max-w-4xl animate-fade-in"
        style={{
          animationDelay: "0.4s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      ></div>

      <h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-900 animate-fade-in"
        style={{
          fontFamily: "Aloja",
          animationDelay: "0.6s",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        Message for my love
      </h1>

      <button
        onClick={onReturn}
        className="border-2 font-bold uppercase border-blue-900 bg-pink-100 hover:bg-pink-200 rounded-full px-8 py-3 text-sm transition-all hover:scale-105 animate-fade-in"
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