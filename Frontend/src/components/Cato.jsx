import React from "react";

export const Cato = () => {
  return (
    <div className="relative">
      <div className="bg-[#3232ca] ">
        <h1 className="text-5xl font-bold text-center text-white mb-2 pt-7 z-20">
          How Can We Help You Today?
        </h1>
        <p className="text-center text-white mb-8 pt-6 text-xl">
          No need to visit the hospital. Choose your condition and we'll send a
          certified doctor to your home.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  px-30 pb-5 pt-8 gap-6">
          {/* Card 1 */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
            <img
              src="/fever cold.png"
              alt="Fever/Cold"
              className="w-full h-full object-cover"
            />
            <div className="absolute   top-4 left-4 text-gray-900 w-[60%]">
              <h2 className="text-xl font-bold text-[#1815a1]">Fever / Cold</h2>
              <p className="text-sm pr-10">
                Doctor will treat you for fever, cold and flu symptoms.
              </p>
              <div className="flex pt-10">
                <img
                  className="lg:h-4 lg:w-4 h-5 w-5 pt-1"
                  src="/TimeIcon.svg"
                  alt="time"
                />
                <h1 className="text-[13px] font-bold pl-1">
                  Get Care Within 60 Minutes
                </h1>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                Book Home Visit
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
            <img
              src="/heaadache.png"
              alt="Headache"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-gray-900 w-[60%]">
              <h2 className="text-xl font-bold text-[#1815a1]">Headache</h2>
              <p className="text-sm pr-10">
                Get treatment for mild to severe headaches at home.
              </p>
              <div className="flex pt-10">
                <img
                  className="lg:h-4 lg:w-4 h-5 w-5 pt-1"
                  src="/TimeIcon.svg"
                  alt="time"
                />
                <h1 className="text-[13px] font-bold pl-1">
                  Get Care Within 60 Minutes
                </h1>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                Book Home Visit
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
            <img
              src="/joint pain.png"
              alt="Joint Pain"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-gray-900 w-[60%]">
              <h2 className="text-xl font-bold text-[#1815a1]">Joint Pain</h2>
              <p className="text-sm pr-10">
                Consult a doctor for arthritis and joint pain issues.
              </p>

              <div className="flex pt-10">
                <img
                  className="lg:h-4 lg:w-4 h-5 w-5 pt-1"
                  src="/TimeIcon.svg"
                  alt="time"
                />
                <h1 className="text-[13px] font-bold pl-1">
                  Get Care Within 60 Minutes
                </h1>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                Book Home Visit
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
            <img
              src="/chest pain.png"
              alt="Chest Pain"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-gray-900 w-[60%]">
              <h2 className="text-xl font-bold text-[#1815a1]">Chest Pain</h2>
              <p className="text-sm pr-10">
                Immediate care for tightness or pain in the chest.
              </p>

              <div className="flex pt-10">
                <img
                  className="lg:h-4 lg:w-4 h-5 w-5 pt-1"
                  src="/TimeIcon.svg"
                  alt="time"
                />
                <h1 className="text-[13px] font-bold pl-1">
                  Get Care Within 60 Minutes
                </h1>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                Book Home Visit
              </button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
            <img
              src="/breathing issue.png"
              alt="Breathing Issue"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-gray-900 w-[60%]">
              <h2 className="text-xl font-bold text-[#1815a1]">
                Breathing Issue
              </h2>
              <p className="text-sm pr-10">
                Asthma, wheezing or respiratory help at your door.
              </p>

              <div className="flex pt-10">
                <img
                  className="lg:h-4 lg:w-4 h-5 w-5 pt-1"
                  src="/TimeIcon.svg"
                  alt="time"
                />
                <h1 className="text-[13px] font-bold pl-1">
                  Get Care Within 60 Minutes
                </h1>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                Book Home Visit
              </button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
            <img
              src="/minor injuries.png"
              alt="Minor Injuries"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-gray-900 w-[60%]">
              <h2 className="text-xl font-bold text-[#1815a1]">
                Minor Injuries
              </h2>
              <p className="text-sm pr-10">
                Bandages, wound care or sprains treated at home.
              </p>

              <div className="flex pt-10">
                <img
                  className="lg:h-4 lg:w-4 h-5 w-5 pt-1"
                  src="/TimeIcon.svg"
                  alt="time"
                />
                <h1 className="text-[13px] font-bold pl-1">
                  Get Care Within 60 Minutes
                </h1>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                Book Home Visit
              </button>
            </div>
          </div>
          {/* Card 7 */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
            <img
              src="/sugar check.png"
              alt="Sugar Check"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-gray-900 w-[60%]">
              <h2 className="text-xl font-bold text-[#1815a1]">Sugar Check</h2>
              <p className="text-sm pr-10">
                Monitor blood sugar levels at the comfort of home.
              </p>

              <div className="flex pt-10">
                <img
                  className="lg:h-4 lg:w-4 h-5 w-5 pt-1"
                  src="/TimeIcon.svg"
                  alt="time"
                />
                <h1 className="text-[13px] font-bold pl-1">
                  Get Care Within 60 Minutes
                </h1>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                Book Home Visit
              </button>
            </div>
          </div>
          {/* Card 8 */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
            <img
              src="/women's health.png"
              alt="Women's Health"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-gray-900 w-[60%]">
              <h2 className="text-xl font-bold text-[#1815a1]">
                Women's Health
              </h2>
              <p className="text-sm pr-10">
                Care for periods, pregnancy and general wellness.
              </p>

              <div className="flex pt-10">
                <img
                  className="lg:h-4 lg:w-4 h-5 w-5 pt-1"
                  src="/TimeIcon.svg"
                  alt="time"
                />
                <h1 className="text-[13px] font-bold pl-1">
                  Get Care Within 60 Minutes
                </h1>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                Book Home Visit
              </button>
            </div>
          </div>
          {/* Card 9 */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-md">
            <img
              src="/women's health.png"
              alt="Women's Health 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-gray-900 w-[60%]">
              <h2 className="text-xl font-bold text-[#1815a1]">
                Women's Health
              </h2>
              <p className="text-sm pr-10">
                Expert help for female-specific health concerns.
              </p>

              <div className="flex pt-10">
                <img
                  className="lg:h-4 lg:w-4 h-5 w-5 pt-1"
                  src="/TimeIcon.svg"
                  alt="time"
                />
                <h1 className="text-[13px] font-bold pl-1">
                  Get Care Within 60 Minutes
                </h1>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-[#1815a1] text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                Book Home Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
