import React from "react";

export const Cato = () => {
  return (
    <div className="relative">
      <div className="bg-[#3232ca]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-2 pt-7 z-20">
          How Can We Help You Today?
        </h1>
        <p className="text-center text-white mb-8 pt-4 px-4 sm:px-10 text-base sm:text-lg md:text-xl">
          No need to visit the hospital. Choose your condition and we'll send a
          certified doctor to your home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 pb-10 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 text-gray-900 w-[80%] sm:w-[70%] md:w-[60%]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1815a1]">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base pr-4">{card.description}</p>
                <div className="flex items-center pt-6">
                  <img
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    src="/TimeIcon.svg"
                    alt="time"
                  />
                  <p className="text-[13px] font-bold pl-2">
                    Get Care Within 60 Minutes
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                  Book Home Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Card data extracted to array for cleaner component
const cards = [
  {
    image: "/fever cold.png",
    title: "Fever / Cold",
    description: "Doctor will treat you for fever, cold and flu symptoms.",
  },
  {
    image: "/heaadache.png",
    title: "Headache",
    description: "Get treatment for mild to severe headaches at home.",
  },
  {
    image: "/joint pain.png",
    title: "Joint Pain",
    description: "Consult a doctor for arthritis and joint pain issues.",
  },
  {
    image: "/chest pain.png",
    title: "Chest Pain",
    description: "Immediate care for tightness or pain in the chest.",
  },
  {
    image: "/breathing issue.png",
    title: "Breathing Issue",
    description: "Asthma, wheezing or respiratory help at your door.",
  },
  {
    image: "/minor injuries.png",
    title: "Minor Injuries",
    description: "Bandages, wound care or sprains treated at home.",
  },
  {
    image: "/sugar check.png",
    title: "Sugar Check",
    description: "Monitor blood sugar levels at the comfort of home.",
  },
  {
    image: "/women's health.png",
    title: "Women's Health",
    description: "Care for periods, pregnancy and general wellness.",
  },
  {
    image: "/women's health.png",
    title: "Women's Health",
    description: "Expert help for female-specific health concerns.",
  },
];
