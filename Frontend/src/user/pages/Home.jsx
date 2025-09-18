import React, { useRef } from "react";
import { Navbar } from "../components/home/Navbar";
import { Cards } from "../components//home/Cards";
import { HowItWorks } from "../components/home/HowItWorks";
import { Footer } from "../components//home/Footer";
import { doc, doc2, } from "../assets/home";
import { Emergency } from "./Emergency";
import { Booking } from "../components/home/Booking";
import { EmergencyBook } from "./EmergencyBook"

export const Home = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="lg:bg-white h-screen font-[Poppins]">
      {/* <div className="h-5"></div>
      <Navbar handleScrollToServices={scrollToServices} />

      
      <div className="lg:hidden mt-10 mx-2 bg-gradient-to-tl from-[#5966a1] to-[#020460] font-[Poppins] rounded-2xl relative overflow-hidden">
        <img
          src="dochome2.png"
          className="absolute h-100 right-0 bottom-0 mt-2 object-contain"
        />

        <div className="w-full p-6 relative z-50">
          <div className="flex gap-1 px-3 py-2 bg-white rounded-[7px] shadow text-black text-xs w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#149b56] size-3"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="font-medium leading-none">
              100% verified and licensed doctors
            </span>
          </div>

          <h2 className="text-2xl lg:text-6xl font-bold text-white mt-5 pr-18">
            Don't wait Days for a Doctor - Get Instant Care Today
          </h2>

          <p className="text-white text-sm mt-3 pr-13">
            From cough to care - Book trusted doctors online and get treatment
            at your doorstep.
          </p>

          <div className=" inline-flex flex-col gap-3 mb-5 mt-10">
            <a
              className="bg-white text-[#020460] rounded-[5px] px-8 py-2 text-sm"
              href=""
            >
              Emergency Service
            </a>
            <a
              className="bg-transparent border border-white text-white rounded-[5px] px-8 py-2 text-sm"
              href=""
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      <div className=" relative lg:flex  hidden  mx-4  min-h-[500px] rounded-2xl bg-gradient-to-tl from-[#5966a1] to-[#020460] font-[Poppins]">
        <div className="lg:w-1/2 p-3 lg:p-7 relative overflow-hidden ">
          <div className="lg:mt-35">
            <div className="ml-5 items-center gap-3 px-3 py-1 bg-white rounded-[7px] shadow-md text-black text-base w-fit hidden lg:flex mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#149b56] size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="font-medium">
                100% verified and licensed doctors
              </span>
            </div>

            <h2 className="lg:text-6xl font-bold lg:pl-5 lg:pb-3 pl-2 text-white sm: z-50 ">
              Don't wait Days for a Doctor - Get Instant Care Today
            </h2>
            <div className="pl-5  text-white hidden lg:flex">
              From cough to care - Book trusted doctors online and get treatment
              at your doorstep.
            </div>

            <div className="pt-5 lg:pt-8 flex justify-center lg:justify-start pl-0 lg:pl-5 gap-1 lg:gap-5 text-[12px] lg:mb-20 mb-60 text-center">
              <a
                className="bg-white text-[#020460] rounded-xl lg:rounded-[5px] px-4 py-3 lg:px-8  lg:py-2  lg:text-base mr-3 lg:mr-5 z-50"
                href=""
              >
                Emergency Service
              </a>
              <a
                className="bg-transparent border border-white text-white rounded-xl lg:rounded-[5px] px-4 py-3 lg:px-8 lg:py-2  lg:text-base ml-3 lg:ml-0"
                href=""
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/2 hidden lg:flex relative">
          <img
            className="h-140 absolute bottom-0  object-cover pt-5"
            src="./dochome.png"
            alt="docter"
          />
        </div>
      </div>

      <Emergency />
      <section ref={servicesRef}>
        <Cards />
      </section>

      <HowItWorks />
      <Footer />
      <Booking/>*/}
      <EmergencyBook/>
    </div>
  );
};
