import React from "react";
import { useParams } from "react-router-dom";
import { doc, femdoc } from "../assets/home";
import { Navbar } from "../components/home/Navbar";
import { RealDoc } from "./RealDoc";

export const Services = () => {
  const params = useParams();
  console.log(params);
  const data = [
    {
      name: "Trained Attendants",
      desc: "Trained attendants are non-medical professionals who provide essential support to patients in the comfort of their homes. They assist with daily care, monitor health conditions, and ensure patient safety and comfort — especially for the elderly, bedridden, or post-surgery individuals.",
      sevices: [
        "Help with bathing, dressing, and grooming",
        "Mobility support (wheelchair, walking assistance)",
        "Feeding and medication reminders",
        "Monitoring vitals like blood pressure & temperature",
        "Maintaining hygiene and cleanliness",
        "Supporting recovery after surgery or hospitalization",
        "Providing companionship and emotional suppor",
      ],
    },
  ];
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
              {data[0].name}
            </h2>
            <p className="pl-5  text-white hidden lg:flex text-[18px]">
              {data[0].desc}
            </p>
            <div className="ml-5 pt-8">
              <h1 className="bg-white text-[#1815a1] inline px-2 py-1 rounded-[5px]">
                Services They Provide:
              </h1>
            </div>

            <ul className="text-white ml-10 pt-5 text-[17px] ">
              {data[0].sevices.map((service, index) => (
                <li key={index}>{`• ${service}`}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/2 hidden lg:flex">
          <img className="w-110 ml-40 pt-30" src={femdoc} alt="docter" />
        </div>
      </div>

      <RealDoc />
    </>
  );
};
