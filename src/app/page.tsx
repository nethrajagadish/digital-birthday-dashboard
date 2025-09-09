"use client";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
   const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { text: "🎂 Happy Birthday!", color: "text-pink-600" },
    { text: "🎉 Wishing you joy & laughter 🎉", color: "text-purple-600" },
    { text: "✨ May your dreams shine bright ✨", color: "text-yellow-600" },
  ];
  return (
    <main className="h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-purple-200 p-2 sm:p-4">
      <div className="grid grid-cols-3 grid-rows-3 gap-3 sm:gap-4 h-full">

{/* 🎉 Carousel (Top-left spanning two columns) */}
<div className="col-span-2 bg-white rounded-2xl shadow-lg relative overflow-hidden flex flex-col py-15">
      {/* Carousel */}
      <div className="flex-1">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false} // hide default dots
          selectedItem={activeIndex}
          onChange={(index) => setActiveIndex(index)} // track active
          className="w-full h-full"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                title={label}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md z-10 text-sm sm:text-lg"
              >
                ‹
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                title={label}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md z-10 text-sm sm:text-lg"
              >
                ›
              </button>
            )
          }
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="h-full flex items-center justify-center px-4"
            >
              <h2
                className={`font-bold ${slide.color} text-center 
                text-[clamp(1rem,4vw,2.5rem)] leading-snug`}
              >
                {slide.text}
              </h2>
            </div>
          ))}
        </Carousel>
      </div>

      {/* 🎯 Custom Interactive Indicators */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === activeIndex ? "bg-pink-500 scale-110" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>





        {/* 🎁 Gift Block (Top-right) */}
        <div className="bg-pink-500 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center font-bold">
          <span className="text-[clamp(1.5rem,4vw,2.5rem)]">🎁</span>
          <span className="mt-2 text-[clamp(0.75rem,2vw,1rem)]">Special Surprise</span>
        </div>

        {/* 🎊 Party Invite (Row 2, Col 1) */}
        <div className="bg-red-400 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-2 sm:p-4">
          <h2 className="font-bold text-[clamp(1rem,3vw,1.5rem)]">Party Time 🎊</h2>
          <p className="mt-1 text-[clamp(0.6rem,2vw,0.9rem)]">9th September • 7:00 PM</p>
          <p className="mt-1 text-[clamp(0.6rem,1.5vw,0.8rem)]">Don’t miss the fun!</p>
        </div>

        {/* 🎂 Cake Logo (Row 2, Col 2) */}
        <div className="bg-white text-purple-600 rounded-2xl shadow-lg flex items-center justify-center font-bold">
          <span className="text-[clamp(1rem,3vw,2rem)]">🎂 It’s Your Day ✨</span>
        </div>

        {/* 🎥 Birthday Video (Row 2–3, Col 3 spanning 2 rows) */}
        <div className="row-span-2 bg-black rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
          <video
            controls
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-xl"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 💬 Birthday Wishes (Row 3, Col 1) */}
        <div className="bg-green-400 text-white rounded-2xl shadow-lg flex flex-col justify-center items-start p-2 sm:p-4 space-y-2">
          <div className="bg-green-700 px-2 py-1 rounded-lg text-[clamp(0.7rem,2vw,1rem)]">
            “Happy Birthday 🎉”
          </div>
          <div className="bg-green-200 text-black px-2 py-1 rounded-lg text-[clamp(0.7rem,2vw,1rem)]">
            “Wish you all the best 🎂”
          </div>
        </div>

        {/* 🧑‍🤝‍🧑 Friends Avatars (Row 3, Col 2) */}
        <div className="bg-yellow-300 text-black rounded-2xl shadow-lg flex flex-col items-center justify-center space-y-2 sm:space-y-4 p-2 sm:p-4">
          <div className="bg-black text-white px-2 py-1 rounded-md text-[clamp(0.7rem,2vw,1rem)]">
            We’ll be there 🎊
          </div>
          <div className="flex space-x-2 sm:space-x-4 text-[clamp(1rem,3vw,1.5rem)]">
            <span>👩‍🦰🎉</span>
            <span>🧑‍🦱🥳</span>
            <span>👩‍🦳🎂</span>
          </div>
        </div>
      </div>
    </main>
  );
}
