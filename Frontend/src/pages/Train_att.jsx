import React from "react";
import { doc,femdoc, doc2, greenTick } from "../assets/home";
import { Navbar } from "../components/home/Navbar";
 
export const Train_att = () => {
  return (
    <>
    <Navbar />
      <div className="relative flex  mt-5  mx-4 min-h-[500px] rounded-2xl bg-gradient-to-tl from-[#5966a1] to-[#020460] ">
        <div className="lg:w-1/2 p-3 lg:p-7 relative overflow-hidden">
          <img
            src={doc}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none lg:hidden rounded-2xl"
          />
          <div className="ml-8 mt-29">
            <h2 className="text-2xl lg:text-6xl font-bold lg:pl-5 lg:pb-3 pl-2  text-white">
              Trained Attendants
            </h2>
            <p className="pl-5  text-white hidden lg:flex text-[18px]">
              Trained attendants are non-medical professionals who provide
              essential support to patients in the comfort of their homes. They
              assist with daily care, monitor health conditions, and ensure
              patient safety and comfort — especially for the elderly,
              bedridden, or post-surgery individuals.
            </p>
            <div className="ml-5 pt-8">
              <h1 className="bg-white text-[#1815a1] inline px-2 py-1 rounded-[5px]">
                Services They Provide:
              </h1>
            </div>

            <ul className="text-white ml-10 pt-5 text-[17px] ">
              <li>• Help with bathing, dressing, and grooming</li>
              <li>• Mobility support (wheelchair, walking assistance)</li>
              <li>• Feeding and medication reminders</li>
              <li>• Monitoring vitals like blood pressure & temperature</li>
              <li>• Maintaining hygiene and cleanliness</li>
              <li>• Supporting recovery after surgery or hospitalization</li>
              <li>• Providing companionship and emotional suppor</li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 hidden lg:flex">
          <img className="w-110 ml-40 pt-30" src={femdoc} alt="docter" />
        </div>
      </div>
    </>
  );
};
