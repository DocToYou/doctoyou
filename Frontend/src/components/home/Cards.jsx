import React from "react";
import { Link } from "react-router-dom";

export const Cards = () => {
  // Card data (images + navigation)
  const cardData = [
    { image: "/card1.png", navigate: "services/trained" },
    { image: "/card2.png", navigate: "/nursing" },
    { image: "/card3.png", navigate: "/service3" },
    { image: "/card4.png", navigate: "/service4" },
    { image: "/card5.png", navigate: "/service5" },
    { image: "/card6.png", navigate: "/service6" },
    { image: "/card7.png", navigate: "/service7" },
    { image: "/card8.png", navigate: "/service8" },
    { image: "/card9.png", navigate: "/service9" },
  ];

  return (
    <div className="relative bg-[#3232ca] overflow-hidden">
      {/* ===== Background images for desktop ===== */}

      <div className="lg:hidden relative">
        <div className="z-50 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="size-12 absolute right-0 top-45 z-50"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="size-12 absolute animate-ping right-0 z-50 top-45"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      <div className="block lg:hidden">
        <img
          src="/Drug.png"
          alt="Decoration"
          className="absolute top-290 right-85 w-24 opacity-100 z-0 pointer-events-none"
        />
        <img
          src="/Healthcare.png"
          alt="Decoration"
          className="absolute top-500 right-90 w-24 opacity-100 z-0 pointer-events-none"
        />
        <img
          src="/Healthcare.png"
          alt="Decoration"
          className="absolute top-100 right-90 w-24 opacity-100 z-0 pointer-events-none"
        />
        <img
          src="/scop.png"
          alt="Decoration"
          className="absolute top-600 right-90 w-24 opacity-100 z-0 pointer-events-none"
        />
        <img
          src="/Drug.png"
          alt="Decoration"
          className="absolute top-600 right-0 w-24 opacity-100 z-0 pointer-events-none"
        />
        <img
          src="/Drug.png"
          alt="Decoration"
          className="absolute top-200 left-95 w-24 opacity-100 z-0 pointer-events-none"
        />
        <img
          src="/scop.png"
          alt="Decoration"
          className="absolute top-400 left-95 w-24 opacity-100 z-0 pointer-events-none"
        />
        <img
          src="/scop.png"
          alt="Decoration"
          className="absolute top-0 right-4 w-28 opacity-100 z-0 pointer-events-none"
        />
      </div>

      <div className="hidden lg:flex">
        <img
          src="/Drug.png"
          alt="Decoration"
          className="absolute bottom-10 left-10 w-40 opacity-100 z-0 pointer-events-none"
        />
        <img
          src="/Healthcare.png"
          alt="Decoration"
          className="absolute top-10 left-10 w-40 opacity-100 z-0 pointer-events-none"
        />
        <img
          src="/scop.png"
          alt="Decoration"
          className="absolute top-0 right-0 w-80 opacity-100 z-0 pointer-events-none"
        />
        <img
          src="/Healthcare.png"
          alt="Decoration"
          className="absolute bottom-10 right-10 w-40 opacity-100 z-0 pointer-events-none"
        />
      </div>

      {/* ===== Title & Text ===== */}
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-left lg:text-center pt-10 pb-4 pl-5 lg:pl-0">
          How Can We Help You Today?
        </h1>
        <p className="text-white text-left lg:text-center text-base sm:text-lg md:text-xl pl-5 pr-5 lg:px-4">
          No need to visit the hospital.
        </p>
        <p className="text-white text-left lg:text-center text-base sm:text-lg md:text-xl pb-8 pl-5 pr-5 lg:px-4">
          Choose your condition and we'll send a certified doctor to your home.
        </p>

        {/* ===== Mobile Scrollable Cards ===== */}
        <div className="lg:hidden">
          <div className="h-[490px] w-[400px] grid grid-rows-2 grid-flow-col auto-cols-[415px] overflow-x-auto snap-x snap-mandatory mb-10">
            {cardData.map((card, index) => (
              <Card key={index} image={card.image} navigate={card.navigate} />
            ))}
          </div>
        </div>

        {/* ===== Desktop Grid Cards ===== */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 pb-10 max-w-7xl mx-auto">
            {cardData.map((card, index) => (
              <Card key={index} image={card.image} navigate={card.navigate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== Reusable Card Component =====
const Card = ({ image, navigate }) => (
  <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md bg-white snap-start ml-3">
    <img
      src={image}
      alt="service"
      className="w-full h-full object-cover select-none pointer-events-none"
      onContextMenu={(e) => e.preventDefault()}
      draggable="false"
    />
    <div className="absolute bottom-4 left-4">
      <Link to={navigate}>
        <div className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition cursor-pointer">
          Book Home Visit
        </div>
      </Link>
    </div>
  </div>
);
