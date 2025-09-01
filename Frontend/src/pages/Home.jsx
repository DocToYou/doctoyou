import React, { useRef } from "react";
import { Navbar } from "../components/home/Navbar";
import { Cards } from "../components//home/Cards";
import { HowItWorks } from "../components/home/HowItWorks";
import { Footer } from "../components//home/Footer";
import { doc, doc2 } from "../assets/home";

export const Home = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="lg:bg-white h-screen font-[Poppins]">
      <div className="h-5"></div>
      <Navbar handleScrollToServices={scrollToServices} />

      {/* for response */}
      <div className="lg:hidden  h-100  mt-10 ml-3 mr-3 bg-gradient-to-tl from-[#5966a1] to-[#020460] font-[Poppins] rounded-2xl relative overflow-hidden">
        <img
          src="dochome2.png"
          className="absolute   h-100 left-16 object-contain"
        />
        <div className="pt-10 ml-6 ">
          <div className="flex  gap-1 px-3 py-2 bg-white rounded-[7px] shadow text-black text-xs w-fit relative lg:hidden z-50">
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

            <span className="font-medium leading-none ">
              100% verified and licensed doctors
            </span>
          </div>
        </div>
        <h2 className="text-2xl lg:text-6xl font-bold lg:pl-5 lg:pb-3  text-white sm: z-50 pl-6 pr-12 mt-5 relative">
          Don't wait Days for a Doctor - Get Instant Care Today
        </h2>
        <div className="px-2 text-white  text-[13px] lg:hidden z-50 pl-6 pr-13 pt-5 pb-5 relative">
          From cough to care - Book trusted doctors online and get treatment at
          your doorstep.
        </div>

        <div className="pl-6 inline-flex flex-col ">
          <a
            className="bg-white text-[#020460] rounded-[5px]  px-8 py-2  z-50 text-[12px] "
            href=""
          >
            Emergency Service
          </a>

          <br />

          <a
            className="bg-transparent border border-white text-white rounded-[5px] z-50  px-8 py-2 text-[12px] "
            href=""
          >
            Book Appointment
          </a>
        </div>
      </div>

      <div className=" relative lg:flex  hidden  mx-4  min-h-[500px] rounded-2xl bg-gradient-to-tl from-[#5966a1] to-[#020460] font-[Poppins]">
        <div className="lg:w-1/2 p-3 lg:p-7 relative overflow-hidden ">
          <div className="lg:mt-25">
            <div className="ml-5 items-center gap-3 px-3 py-2 bg-white rounded-[7px] shadow-md text-black text-base w-fit hidden lg:flex">
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
                className="bg-white text-[#020460] rounded-xl lg:rounded-2xl px-4 py-3 lg:px-8  lg:py-2  lg:text-base mr-3 lg:mr-5 z-50"
                href=""
              >
                Emergency Service
              </a>
              <a
                className="bg-transparent border border-white text-white rounded-xl lg:rounded-2xl px-4 py-3 lg:px-8 lg:py-2  lg:text-base ml-3 lg:ml-0"
                href=""
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/2 hidden lg:flex">
          <img className="mt-15" src={doc2} alt="docter" />
        </div>
      </div>

      <div className="bg-white" style={{ fontFamily: '"Poppins", sans-serif' }}>
        <div className="min-h-screen flex items-center justify-center lg:px-4  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4  lg:px-20 lg:pb-7 w-full">
            <div className="lg:space-y-9 lg:pt-2 pt-12 relative ">
              <h1 className="text-3xl lg:text-6xl font-bold text-[#1815a1]  absolute">
                Emergency? Get Help Instantly.
              </h1>
              <div className="text-gray-700 lg:text-xl text-[15px] pt-20 lg:pt-40">
                Your safety is our priority — get quick access to doctors,
                ambulances, or home care.
              </div>
              <img
                src="/Emergencybutton.png"
                alt="Emergency Visual"
                className="lg:hidden"
              />
              <div className=" text-[13px] lg:text-[15px] lg:space-y-0.5 px-2">
                <div className="text-black px-2 py-2 rounded-md flex items-center gap-2 w-fit ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#149b56] size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Emergency doctors available 24/7{" "}
                  <img
                    className="lg:h-6 lg:w-6 h-5 w-5"
                    src="/DoctorIcon.svg"
                    alt="doctor"
                  />
                </div>
                <div className="text-black px-2 py-2 rounded-md flex items-center gap-2 w-fit ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#149b56] size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Avg response time: under 5 minutes
                  <img
                    className="lg:h-5 lg:w-5 h-4 w-4"
                    src="/SecurityIcon.svg"
                    alt="security"
                  />
                </div>
                <div className="text-black px-2 py-2 rounded-md flex items-center gap-2 w-fit ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#149b56] size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Quick response, trusted care, zero hassle.
                  <img
                    className="lg:h-6 lg:w-6 h-5 w-5"
                    src="/TimeIcon.svg"
                    alt="time"
                  />
                </div>
              </div>

              <div className="flex justify-center py-3 lg:pt-5 lg:justify-start">
                <button className="bg-red-500 hover:bg-red-600 text-[14px]  px-21 py-4 text-white lg:px-30 lg:py-3 rounded-xl font-semibold ">
                  Book Emergency Help Now
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/Emergencybutton.png"
                alt="Emergency Visual"
                className="hidden lg:flex lg:w-full lg:h-full lg:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <section ref={servicesRef}>
        <Cards />
      </section>

      <HowItWorks />
      <Footer />
    </div>
  );
};
