import React from "react";
import { Train_att } from "../../pages/Train_att"
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <div className="relative bg-[#3232ca] overflow-hidden">
      {/* Background images BEHIND the card section */}
      <div className="hidden lg:flex">
        <img
          src="/Drug.png"
          alt="Decoration"
          className="absolute bottom-10 left-10   w-40 opacity-100 z-0 pointer-events-none"
        />

        <img
          src="/Healthcare.png"
          alt="Decoration"
          className="absolute top-10 left-10   w-40 opacity-100 z-0 pointer-events-none"
        />

        <img
          src="/scop.png"
          alt="Decoration"
          className="absolute top-0 right-0  w-80 opacity-100 z-0 pointer-events-none"
        />

        <img
          src="/Healthcare.png"
          alt="Decoration"
          className="absolute bottom-10 right-10   w-40 opacity-100 z-0 pointer-events-none "
        />
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

      {/* Text and card section ABOVE the decorations */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 pb-10 max-w-7xl mx-auto">
          {/* Cards go here */}
          <Card image="/card1.png" navigate='/trained'/>
          <Card image="/card2.png" navigate='nursing'/>
          <Card image="/card3.png" />
          <Card image="/card4.png" />
          <Card image="/card5.png" />
          <Card image="/card6.png" />
          <Card image="/card7.png" />
          <Card image="/card8.png" />
          <Card image="/card9.png" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, title, description, navigate }) => (
  <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md bg-white">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover select-none pointer-events-none "
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
