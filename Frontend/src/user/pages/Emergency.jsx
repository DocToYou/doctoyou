import React from 'react'
import { Link } from 'react-router-dom';
import { EmergencyBook } from "./EmergencyBook"

export const Emergency = () => {
  return (
    <div>
      <div className="bg-white" style={{ fontFamily: '"Poppins", sans-serif' }}>
        <div className="min-h-screen flex items-center justify-center lg:px-4  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-5  lg:px-20 lg:pb-7 w-full">
            <div className="lg:space-y-9   relative ">
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
                <Link to={"/EmergencyBooking"}><button className="bg-red-500 hover:bg-red-600 text-[14px]  px-20 py-4 text-white lg:px-30 lg:py-3 rounded-xl font-semibold ">
                  Book Emergency Help Now
                </button></Link>
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
    </div>
  );
}
