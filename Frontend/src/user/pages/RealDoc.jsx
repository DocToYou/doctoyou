import React from "react";
import { Footer } from "../components//home/Footer";
const DoctorCard = ({
  image,
  name,
  specialization,
  location,
  experience,
  availability,
  price,
}) => {
  return (
    <div className="bg-white lg:w-[306px] lg:h-[428px] rounded-lg mx-auto shadow-md">
      {/* Doctor Image */}
      <img
        className="w-11/12 flex lg:pt-3 pt-2 items-center justify-center mx-auto object-contain"
        src={image}
        alt={name}
      />

      <div className="px-2">
        {/* Doctor Details */}
        <h1 className="text-base md:text-lg font-bold text-left lg:mt-2 mt-1">
          {name}
        </h1>
        <h1 className="text-[10px] md:text-base text-left">
          {specialization}
        </h1>

        <hr className="lg:my-3"/>

        <h1 className="text-[12px] md:text-base text-left mt-1">{location}</h1>
        <h1 className="text-[12px] md:text-base text-left mt-1">
          {experience}
        </h1>
        <h1 className=" text-[12px] md:text-base text-left mt-1">
          {availability}
        </h1>

        {/* ✅ Buttons fixed for mobile */}
        <div className="lg:flex justify-between lg:mt-4 lg:gap-2 lg:mb-0 mb-2">
          <span
            href="#"
            className="lg:bg-[#15a159] lg:text-white text-[#15a159] font-bold lg:font-normal rounded lg:flex  lg:items-center lg:justify-center   lg:h-10 lg:w-20 text-xs md:text-sm"
          >
            {price}
          </span>
          <a
            href="#"
            className="bg-[#1815a1] text-white rounded flex items-center justify-center h-8 md:h-9 lg:h-10 flex-1 text-xs md:text-sm"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export const RealDoc = () => {
  const doctors = [
    {
      image: "/docs1.png",
      name: "Dr. Raman",
      specialization: "General Physician, Pediatrician",
      location: "Adyar, Chennai",
      experience: "10+ years experience",
      availability: "Available Today",
      price: "₹500",
    },

    {
      image: "/docs1.png",
      name: "Dr. Kumar",
      specialization: "Orthopedic Surgeon",
      location: "Tambaram, Chennai",
      experience: "12 years experience",
      availability: "Available Today",
      price: "₹1000",
    },
    {
      image: "/docs1.png",
      name: "Dr. Meena",
      specialization: "Dermatologist",
      location: "Anna Nagar, Chennai",
      experience: "8 years experience",
      availability: "Available Tomorrow",
      price: "₹700",
    },
    {
      image: "/docs1.png",
      name: "Dr. Priya",
      specialization: "Cardiologist",
      location: "Velachery, Chennai",
      experience: "15 years experience",
      availability: "Available Today",
      price: "₹1200",
    },
    {
      image: "/docs1.png",
      name: "Dr. Aravind",
      specialization: "Neurologist",
      location: "T. Nagar, Chennai",
      experience: "11 years experience",
      availability: "Available Tomorrow",
      price: "₹1500",
    },
    {
      image: "/docs1.png",
      name: "Dr. Sneha",
      specialization: "Gynecologist",
      location: "Chromepet, Chennai",
      experience: "9 years experience",
      availability: "Available Today",
      price: "₹900",
    },
    {
      image: "/docs1.png",
      name: "Dr. Sneha",
      specialization: "Gynecologist",
      location: "Chromepet, Chennai",
      experience: "9 years experience",
      availability: "Available Today",
      price: "₹900",
    },
    {
      image: "/docs1.png",
      name: "Dr. Sneha",
      specialization: "Gynecologist",
      location: "Chromepet, Chennai",
      experience: "9 years experience",
      availability: "Available Today",
      price: "₹900",
    },
    {
      image: "/docs1.png",
      name: "Dr. Sneha",
      specialization: "Gynecologist",
      location: "Chromepet, Chennai",
      experience: "9 years experience",
      availability: "Available Today",
      price: "₹900",
    },
    {
      image: "/docs1.png",
      name: "Dr. Sneha",
      specialization: "Gynecologist",
      location: "Chromepet, Chennai",
      experience: "9 years experience",
      availability: "Available Today",
      price: "₹900",
    },
  ];

  return (
    <>

    {/* filter icon */}
      <div className=" lg:hidden mt-5 mx-3 h-10 relative">
        <h1 className="text-xl font-bold absolute bottom-0 text-[#1815a1] px-2">
          Choose your Doctor
        </h1>

        <a href="" className="absolute right-0 bottom-0 flex">
          <img src="/Vector.png" class="h-4 mt-1" alt="" />

          <h1 className="font-semibold pl-2 pr-3 text-[17px]">Filter</h1>
        </a>
      </div>


      <div className="grid lg:grid-rows-[680px] lg:grid-cols-[250px_1fr] grid-cols-[1fr] gap-5 px-3 lg:pt-10 lg:pb-10 font-[Poppins]">
        {/* Sidebar */}
        <div className="lg:bg-[#1815a1] lg:border-4 lg:w-70 lg:border-white lg:rounded-2xl lg:p-3"></div>

        {/* Content Area */}
        <div className="bg-[#f6f8fc] rounded-2xl lg:ml-5">
          <div className="w-full lg:h-full h-115 overflow-y-scroll scrollbar-none p-1">
            {/* ✅ Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3  lg:gap-5 gap-2">
              {doctors.map((doc, index) => (
                <DoctorCard key={index} {...doc} />
              ))}
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
};
