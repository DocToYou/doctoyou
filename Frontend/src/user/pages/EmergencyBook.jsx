import React, { useState } from 'react';
import { Navbar } from "../components/home/Navbar";

const PersonalInfo = () => (
  <div className="lg:px-5 lg:font-normal relative">
    <div className='font-normal lg:hidden'>
    <h1 className='lg:text-5xl text-3xl font-bold text-[#1815a1] lg:pl-10  lg:pt-8 pt-5'>Get Help Instantly.</h1>
    <h1 className='lg:pl-10  mt-1.5 text-[12px] pr-25 lg:mt-3 lg:text-[14px]'>get quick access to doctors, ambulances, or home care.</h1>
    <img src="s1.png" className='w-55 ' alt="" /></div>
   
  
    <h2 className="text-lg font-bold text-black lg:hidden mt-0">Personal Information</h2>
    <div className='space-y-7'>
    <div>
      <label className="block text-black mb-1 font-medium mt-3">Name*</label>
      <div className="grid grid-cols-2 gap-3">
        <input 
          type="text" 
          placeholder="First name"
          className="w-full px-3 py-2 border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          placeholder="Last name"
          className="w-full px-3 py-2 border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <div>
      <label className="block text-black mb-1 font-medium">Age*</label>
      <input 
        type="number" 
        placeholder="Age"
        className="w-full px-3 py-2 border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-black mb-1 font-normal">Gender</label>
      <select className="w-full px-3 py-2 border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Select your gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>
    <div>
      <label className="block text-black mb-1 font-medium">Mobile Number*</label>
      <input 
        type="tel" 
        placeholder="(+91) xxxxxxxxxx"
        className="w-full px-3 py-2 border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div></div>
  </div>
);

const Address = () => (
  <div className="lg:px-5">
      <div className='font-normal lg:hidden'>
    <h1 className='lg:text-5xl text-3xl font-bold text-[#1815a1] lg:pl-10  lg:pt-8 pt-5'>Get Help Instantly.</h1>
    <h1 className='lg:pl-10  mt-1.5 text-[12px] pr-25 lg:mt-3 lg:text-[14px]'>get quick access to doctors, ambulances, or home care.</h1>
    <img src="s2.png" className='w-55' alt="" />
    </div>
   
  
    <h2 className="text-lg font-bold text-black lg:hidden">Address</h2>
    <div className='space-y-7 '>
    <div className="mt-3">
      <label className="block text-black mb-1 font-medium">Location*</label>
      <input 
        type="text" 
        placeholder="Ex - 4/595, 5th cross Street,KK Nagar, Chennai, Tamil Nadu"
        className="w-full px-3 py-2 border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-black mb-1 font-medium">Land Mark*</label>
      <input 
        type="text" 
        placeholder="Ex - Beside MR Veg Shop"
        className="w-full px-3 py-2 border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <h1 className="text-black">GPS Tag *</h1>
      <button className="bg-[#1815a1] text-white text-[13px] py-2 px-3 rounded-[5px] flex mt-1.5">
        <span className="mr-1 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            fill="currentColor"
            className="bi bi-geo-alt-fill mt-1"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
        </span>
        <span>Use my current Location</span>
      </button>
    </div>
    <div className="w-50vh h-40 bg-[#dddddd] rounded-[8px] border text-center">Map</div>
    </div>
  </div>
);

const Symptoms = () => (
  <div className="lg:px-5">
      <div className='font-normal lg:hidden'>
    <h1 className='lg:text-5xl text-3xl font-bold text-[#1815a1] lg:pl-10  lg:pt-8 pt-5'>Get Help Instantly.</h1>
    <h1 className='lg:pl-10  mt-1.5 text-[12px] pr-25 lg:mt-3 lg:text-[14px]'>get quick access to doctors, ambulances, or home care.</h1>
    <img src="s3.png" className='w-55' alt="" /></div>
    
  
    <h2 className="text-lg font-bold text-black lg:hidden">Symptoms</h2>
    <div className="mt-3">
      <label className="block text-black mb-1 font-medium">Describe your Problem*</label>
      <textarea
        placeholder="Type your problem here..."
        className="w-full px-3 py-2 border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-58 resize-none"
      ></textarea>
    </div>
    <button className="bg-[#1815a1] text-white text-[13px] py-2 px-3 h-9 rounded-[5px] flex mt-6">
      <span>Add File</span>
      <span>
        <svg width="15" height="40" viewBox="0 0 24 24" className="ml-1 relative bottom-2.5" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.1525 10.8995L12.1369 19.9151C10.0866 21.9653 6.7625 21.9653 4.71225 19.9151C2.662 17.8648 2.662 14.5407 4.71225 12.4904L13.7279 3.47483C15.0947 2.108 17.3108 2.108 18.6776 3.47483C20.0444 4.84167 20.0444 7.05775 18.6776 8.42458L10.0156 17.0866C9.33213 17.7701 8.22409 17.7701 7.54068 17.0866C6.85726 16.4032 6.85726 15.2952 7.54068 14.6118L15.1421 7.01037"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </button>
    <div className="mt-5">
      <label className="block text-black mb-1 font-medium">Select Service</label>
      <select className="w-full px-3 py-2 border rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Select your Service</option>
        <option>ENT</option>
        <option>Counsling</option>
      </select>
    </div>
  </div>
);

export const EmergencyBook = () => {
  const [step, setStep] = useState(1);
  const nextStep = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  return (
    <div>
      <div className="h-5 lg:hidden"></div>
      <Navbar />

      {/* Top Banner */}
      <div className='bg-gradient-to-tl from-[#5966a1] to-[#020460] font-[Poppins] mt-5 lg:mx-5 mx-2 w-50vh lg:h-110 h-50 rounded-2xl overflow-hidden'>
        <div className='flex lg:pt-30 pt-5 relative'>
          <div className='lg:w-1/2 h-50'>
            <div className='absolute z-20'>
              <h className='text-white lg:text-[13px] text-[8px] lg:ml-20 ml-5'>Your safety is our priority </h>
              <h1 className="lg:text-[50px] font-semibold text-[#ffffff] pl-15 ml-5 pr-200 hidden lg:block leading-tight">
                Emergency? Get Help Instantly.🚑💨
              </h1>
              <h1 className="lg:hidden text-[22px] font-semibold text-[#ffffff] ml-5 pr-45 leading-tight">
                Emergency? Get Help Instantly.
              </h1>
              {/* Emergency Info Boxes */}
              <div className='lg:ml-20 lg:mt-5 ml-2.5'>
                <div className="lg:text-[15px] text-[9px] lg:space-y-0.5 space-y-1 lg:px-2 mt-2">
                  <div className="text-white px-2 lg:py-2 rounded-md flex items-center lg:gap-2 gap-1 w-fit ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#149b56] lg:size-4.5 size-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Emergency doctors available 24/7{" "}
                  <img
                    className="h-3 lg:h-4.5 invert brightness-0"
                    src="/DoctorIcon.svg"
                    alt="doctor"
                  />
                </div>
                <div className="text-white px-2 lg:py-2 rounded-md flex items-center lg:gap-2 gap-1 w-fit ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#149b56] lg:size-4.5 size-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Avg response time: under 5 minutes
                  <img
                    className="h-2.5 lg:h-4 invert brightness-0"
                    src="/SecurityIcon.svg"
                    alt="security"
                  />
                </div>
                <div className="text-white px-2 lg:py-2 rounded-md flex items-center lg:gap-2 gap-1 w-fit ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#149b56] lg:size-4.5 size-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Quick response, trusted care, zero hassle.
                  <img
                    className="lg:h-4 h-2.5 invert brightness-0"
                    src="/TimeIcon.svg"
                    alt="time"
                  />
                  </div>
                </div>
              </div>
            </div>
            <img src="Emergencybutton.png"  className='absolute z-10 w-55 right-[-20px] bottom-3 lg:hidden' alt="" />
          </div>
          <div className='lg:w-1/2 lg:flex hidden'>
            <img src="Emergencybutton.png" className='w-140 mx-auto relative lg:bottom-12' alt="" />
          </div>
        </div>
      </div>

      {/* Form */}
      <form>
        {/* Desktop Grid */}
        <div className='bg-[#f6f8fc] mx-5 rounded-2xl mt-5 lg:block hidden pb-10 mb-5'>
        <h1 className='lg:text-5xl text-3xl font-bold text-[#1815a1] lg:pl-15 pl-5 lg:pt-8 pt-5'>Get Help Instantly.</h1>
        <h1 className='lg:pl-15 pl-5 mt-1.5 text-[12px] pr-17 lg:mt-3 lg:text-[15px]'>get quick access to doctors, ambulances, or home care.</h1>
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-5 lg:px-10 mt-7">
          
          <PersonalInfo />
          <Address />
          <Symptoms />
          
          </div>
          <div className='bg-[#1815a1] flex items-center justify-center lg:mx-10 mx-5 rounded-[8px]  mt-10  '>
          <button type="submit" className='text-white py-3'>Get help Now</button>
        </div>
        </div>

        {/* Mobile Stepper */}
        
        <div className="lg:hidden  px-5">
          {step === 1 && (
            <>
            
              <PersonalInfo />
              <div className="bg-[#1815a1]  text-white px-4 py-2  mt-5 mb-5 flex items-center justify-center  rounded-[8px]">
              <button onClick={nextStep}>Continue Filling</button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <Address />
              <div className="bg-[#1815a1]  text-white px-4 py-2  mt-5 mb-5 flex items-center justify-center  rounded-[8px]">
              <button onClick={nextStep}>Continue Filling</button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <Symptoms />
              <div className='bg-[#1815a1] flex items-center justify-center  rounded-[8px]  mt-10 mb-5 '>
          <button type="submit" className='text-white py-3'>Get help Now</button>
        </div>
            </>
          )}
          
        </div>


        
        
        
      </form>
    </div>
  );
};
