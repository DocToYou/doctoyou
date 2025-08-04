import React from "react";

export const Cato = () => {
  return (
    <div className="relative">
      <div className="bg-[#3232ca]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold lg:text-center pt-10 pb-4 text-white lg:mb-2 lg:pt-7 lg:z-20 pl-5 pt-5">
          How Can We Help You Today?
        </h1>
        <p className="lg:text-center text-white lg:mb-8 lg:pt-4 lg:px-4 pb-8 pl-5 pr-30 text-[15px] text-base sm:text-lg md:text-xl ">
          No need to visit the hospital. Choose your condition and we'll send a
          certified doctor to your home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 pb-10 max-w-7xl mx-auto">
          {/* Card 1 */}
          <Card
            image="/card1.png"
            title="Trained Attendants"
            description="Compassionate care for daily needs—right at your doorstep.
"
          />

          {/* Card 2 */}
          <Card
            image="/card2.png"
            title="Nursing Care"
            description="Professional nursing support at home for all medical needs."
          />

          {/* Card 3 */}
          <Card
            image="/card3.png"
            title="Physiotherapy"
            description="Personalized recovery sessions to restore strength and mobility.
"
          />

          {/* Card 4 */}
          <Card
            image="/card4.png"
            title="Elder Care"
            description="Gentle care for aging loved ones with respect and attention.
"
          />

          {/* Card 5 */}
          <Card
            image="/card5.png"
            title="Doctor Consultation
"
            description="We’ll send a doctor to check and treat at home.
"
          />

          {/* Card 6 */}
          <Card
            image="/card6.png"
            title="Vaccination
"
            description="Get vaccinated safely and conveniently at home.
"
          />

          {/* Card 7 */}
          <Card
            image="/card7.png"
            title="Counselling"
            description="Mental wellness support from certified professionals.
"
          />

          {/* Card 8 */}
          <Card
            image="/card8.png"
            title="Diabetes Care"
            description="Ongoing diabetes monitoring and personalized plans.
"
          />

          {/* Card 9 */}
          <Card
            image="/card9.png"
            title="Not sure what’s
wrong?"
            description="We’ll send a doctor to check and treat at home.
"
          />
        </div>
      </div>
    </div>
  );
};


const Card = ({ image, title, description }) => (
  <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
    <img src={image} alt={title} className="w-full h-full object-cover" />

    <div className="absolute top-4 left-4 text-gray-900 w-[60%] pr-6 flex flex-col lg:h-[140px]">
      <div className="flex-1">
        <h2 className="text-lg sm:text-xl font-bold text-[#1815a1]">{title}</h2>
        <p className="text-sm sm:text-base ">{description}</p>
      </div>

      <div className="flex items-center pt-2 lg:pb-4 mt-aut0">
        <img className="lg:h-4 lg:w-4 h-6 w-6" src="/TimeIcon.svg" alt="time" />
        <p className="lg:text-[13px] font-bold pl-2">Get Care Within 60 Minutes</p>
      </div>
    </div>

    <div className="absolute bottom-4 left-4">
      <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
        Book Home Visit
      </button>
    </div>
  </div>
);
