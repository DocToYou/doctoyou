import React from 'react'
import { Navbar } from "../components/home/Navbar";
import { Cards } from "../components//home/Cards";
import { Hiw } from "../components/Hiw";
import { Footer } from "../components/Footer";
import {Train_att} from "./Train_att";
import { doc, doc2, greenTick } from "../assets/home";


export const Home = () => {
    return (
      <div className="lg:bg-white h-screen">
        <div className="h-5"></div>
        <Navbar />
        <div className="relative flex   mx-4 min-h-[500px] rounded-2xl bg-gradient-to-tl from-[#5966a1] to-[#020460] ">
          <div className="lg:w-1/2 p-3 lg:p-7 relative overflow-hidden">
            <div className="lg:mt-25">
              <img
                src={doc}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none lg:hidden rounded-2xl"
              />
              <div className="ml-5 items-center gap-3 px-3 py-2 bg-white rounded-[10px] shadow-md text-black text-base w-fit hidden lg:flex">
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

              <div className="flex pt-3 pl-2 pb-2">
                <div className="flex  gap-1 px-3 py-2 bg-white rounded-[10px] shadow text-black text-xs w-fit  lg:hidden">
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
              </div>
              <h2 className="text-2xl lg:text-6xl font-bold lg:pl-5 lg:pb-3 pl-2 text-white">
                Don't wait Days for a Doctor - Get Instant Care Today
              </h2>
              <div className="pl-5  text-white hidden lg:flex">
                From cough to care - Book trusted doctors online and get
                treatment at your doorstep.
              </div>
              <div className="px-2 text-white pt-1 text-[13px] lg:hidden">
                From cough to care - Book trusted doctors online and get
                treatment at your doorstep.
              </div>

              <div className="pt-5 lg:pt-8 flex justify-center lg:justify-start pl-0 lg:pl-5 gap-2 lg:gap-5">
                <a
                  className="bg-white text-[#020460] rounded-xl lg:rounded-2xl px-4 py-3 lg:px-8  lg:py-2 text-sm lg:text-base mr-3 lg:mr-5"
                  href=""
                >
                  Emergency Service
                </a>
                <a
                  className="bg-transparent border border-white text-white rounded-xl lg:rounded-2xl px-4 py-3 lg:px-8 lg:py-2 text-sm lg:text-base ml-3 lg:ml-0"
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

          <div className="absolute bottom-[15px] lg:bottom-[23px] left-1/2 transform -translate-x-1/2 w-11/12 lg:w-[75%] bg-white shadow-lg rounded-2xl lg:py-5 lg:pr-5 lg:pl-5 px-2 py-2 flex flex-col lg:flex-row justify-between items-center gap-1 z-10 text-[#1815a1]  lg:flex">
            <div className="relative w-full lg:w-auto">
              <div className="flex items-center px-2 py-2 border border-black rounded-lg text-sm text-[#1815a1] bg-white pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span className="lg:pr-15">Location</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <select className="absolute inset-0 opacity-0 cursor-pointer">
                <option>Chennai</option>
                <option>Coimbatore</option>
                <option>Madurai</option>
              </select>
            </div>
            <div className="relative w-full lg:w-auto">
              <div className="flex items-center px-2 py-2 border border-black rounded-lg text-sm text-[#1815a1] bg-white pointer-events-none">
                <img className="h-5 w-5 mr-1" src="/tab.svg" alt="tab" />
                <span className="lg:pr-15">Specialization</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#1815a1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <select className="absolute inset-0 opacity-0 cursor-pointer">
                <option>Specialization</option>
                <option>Cardiologist</option>
                <option>Dermatologist</option>
                <option>Neurologist</option>
              </select>
            </div>
            <div className="relative w-full lg:w-auto ">
              <div className="flex items-center px-2 py-2 border border-black rounded-lg text-sm text-[#1815a1] bg-white pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="lg:pr-15">Price Range</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <select className="absolute inset-0 opacity-0 cursor-pointer">
                <option>Price Range</option>
                <option>Below ₹500</option>
                <option>₹500 - ₹1000</option>
                <option>Above ₹1000</option>
              </select>
            </div>
            <div className="relative w-full lg:w-auto">
              <div className="flex items-center py-2 border border-black rounded-lg text-sm text-[#1815a1] cursor-pointer relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 mr-2 text-[#1815a1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <label className="text-[#1815a1] lg:pr-20" htmlFor="dateTime">
                  Date & Time
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-2 w-4 h-4  text-[#1815a1] pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <input
                  type="datetime-local"
                  id="dateTime"
                  name="dateTime"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
            <button className="w-full lg:w-auto bg-[#1815a1] text-white px-13  py-2 rounded-lg text-sm font-semibold flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              Search Doctor
            </button>
          </div>
        </div>
        <div
          className="bg-white"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
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
        <Cards/>
        <Hiw/>
        <Footer/>
      </div> );
}