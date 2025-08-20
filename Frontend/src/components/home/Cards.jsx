import React from "react";
import { Train_att } from "../../pages/Train_att";
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
          <Card
            image="/card1.png"
            title="Trained Attendants"
            description="Compassionate care for daily needs—right at your doorstep."
          />
          <Card
            image="/card2.png"
            title="Nursing Care"
            description="Professional nursing support at home for all medical needs."
          />
          <Card
            image="/card3.png"
            title="Physiotherapy"
            description="Personalized recovery sessions to restore strength and mobility."
          />
          <Card
            image="/card4.png"
            title="Elder Care"
            description="Gentle care for aging loved ones with respect and attention."
          />
          <Card
            image="/card5.png"
            title="Doctor Consultation"
            description="We’ll send a doctor to check and treat at home."
          />
          <Card
            image="/card6.png"
            title="Vaccination"
            description="Get vaccinated safely and conveniently at home."
          />
          <Card
            image="/card7.png"
            title="Counselling"
            description="Mental wellness support from certified professionals."
          />
          <Card
            image="/card8.jpg"
            title="Diabetes Care"
            description="Ongoing diabetes monitoring and personalized plans."
          />
          <Card
            image="/card9.png"
            title="Not sure what’s wrong?"
            description="We’ll send a doctor to check and treat at home."
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, title, description }) => (
  <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md bg-white">
    <img src={image} alt={title} className="w-full h-full object-cover" />

    <div className="absolute top-4 left-4 text-gray-900 w-[70%] pr-6 flex flex-col h-[120px]">
      <div className="flex-1">
        <h2 className="text-lg sm:text-xl font-bold text-[#1815a1]">{title}</h2>
        <p className="text-sm sm:text-base">{description}</p>
      </div>

      <div className="flex items-center pt-4 lg:pb-4 mt-auto">
        <img className="lg:h-4 lg:w-4 h-6 w-6" src="/TimeIcon.svg" alt="time" />
        <p className="lg:text-[13px] text-[15px] font-bold pl-2">
          Get Care Within 60 Minutes
        </p>
      </div>
    </div>

    <div className="absolute bottom-4 left-4">
      <Link to={"/trained"}>
        <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition cursor-pointer">
          Book Home Visit
        </button>
      </Link>
    </div>
  </div>
);
