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
            className="lg:bg-[#14a149] lg:text-white text-[#14a149] font-bold lg:font-normal rounded lg:flex  lg:items-center lg:justify-center   lg:h-10 lg:w-20 text-xs md:text-sm"
          >
            {price}
          </span>
          <a
            href="#"
            className="bg-[#1814a1] text-white rounded flex items-center justify-center h-8 md:h-9 lg:h-10 flex-1 text-xs md:text-sm"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

const handleSingleCheck = (e, groupName) => {
  if (e.target.checked) {
    // Uncheck all other checkboxes in the same group
    document
      .querySelectorAll(`input[name='${groupName}']`)
      .forEach((el) => {
        if (el !== e.target) el.checked = false;
      });
  }
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
      experience: "14 years experience",
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
      price: "₹1400",
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
      <div className=" lg:hidden mt-2 mx-3 h-10 relative">
        <h1 className="text-xl font-bold absolute bottom-0 text-[#1814a1] px-2">
          Choose your Doctor
        </h1>

        <a href="" className="absolute right-0 bottom-0 flex">
          <img src="/Vector.png" class="h-4 mt-1" alt="" />

          <h1 className="font-semibold pl-2 pr-3 text-[17px]">Filter</h1>
        </a>
      </div>

 {/* for response */}

      <div className="grid lg:grid-rows-[680px] lg:grid-cols-[250px_1fr] grid-cols-[1fr] gap-5 px-3 lg:pt-10 lg:pb-10 font-[Poppins]">
        {/* Sidebar */}
        <div className="lg:bg-[#1814a1] lg:border-4 lg:w-70 lg:border-white lg:rounded-2xl lg:p-3 lg:hidden">

          
          
 <form className="grid grid-cols-1 gap-y- px-4 bg-[#1814a1] w-[200px] py-5 rounded-[5px] absolute">
  <div className=" hidden lg:block  mb-5 relative">
    

        <div href="" className="absolute  flex">
          <img src="/Vector.png" class="h-3 mt-1 filter brightness-0 invert" alt="" />


          <h1 className=" pl-2 pr-3 text-[14px] text-white">Filter</h1>
        </div>
      </div>
      {/* Location */}
      <div>
        <span className="text-white text-[16px]">Location</span><br/>
        <div className="ml-2">
          <input
            type="checkbox"
            id="loc1"
            name="location"
            value="Nearby Chennai"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "location")}
          />
          <label htmlFor="loc1" className="text-white text-[14px]">Nearby Chennai</label><br/>

          <input
            type="checkbox"
            id="loc2"
            name="location"
            value="Nearby Chennai"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "location")}
          />
          <label htmlFor="loc2" className="text-white text-[14px]">Nearby Chennai</label><br/>

          <input
            type="checkbox"
            id="loc3"
            name="location"
            value="Nearby Chennai"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "location")}
          />
          <label htmlFor="loc3" className="text-white text-[14px]">Nearby Chennai</label><br/>

           <input
            type="checkbox"
            id="loc3"
            name="location"
            value="Nearby Chennai"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "location")}
          />
          <label htmlFor="loc3" className="text-white text-[14px]">Nearby Chennai</label><br/>

<input
            type="checkbox"
            id="loc3"
            name="location"
            value="Nearby Chennai"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "location")}
          />
          <label htmlFor="loc3" className="text-white text-[14px]">Nearby Chennai</label><br/>

        </div>
      </div>

      {/* Experience */}
      <div>
        <span className="text-white text-[16px]">Experience</span><br/>
        <div className="ml-2">
          <input
            type="checkbox"
            id="exp1"
            name="experience"
            value="0-1 Years"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "experience")}
          />
          <label htmlFor="exp1" className="text-white text-[14px]">0-1 Years</label><br/>

          <input
            type="checkbox"
            id="exp2"
            name="experience"
            value="2-4 Years"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "experience")}
          />
          <label htmlFor="exp2" className="text-white text-[14px]">1-2 Years</label><br/>

          <input
            type="checkbox"
            id="exp3"
            name="experience"
            value="5+ Years"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "experience")}
          />
          <label htmlFor="exp3" className="text-white text-[14px]">2-3 Years</label><br/>


<input
            type="checkbox"
            id="exp3"
            name="experience"
            value="5+ Years"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "experience")}
          />
          <label htmlFor="exp3" className="text-white text-[14px]">3-5 Years</label><br/>

          <input
            type="checkbox"
            id="exp3"
            name="experience"
            value="5+ Years"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "experience")}
          />
          <label htmlFor="exp3" className="text-white text-[14px]">5+ Years</label><br/>


        </div>
      </div>

      {/* Pricing */}
      <div>
        <span className="text-white text-[16px]">Pricing</span><br/>
        <div className="ml-2">
          <input
            type="checkbox"
            id="price1"
            name="pricing"
            value="Low"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "pricing")}
          />
          
          <label htmlFor="price1" className="text-white text-[14px]">₹200 - ₹500</label><br/>

          <input
            type="checkbox"
            id="price1"
            name="pricing"
            value="Low"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "pricing")}
          />
          <label htmlFor="price1" className="text-white text-[14px]">₹500 - ₹1000</label><br/>

          <input
            type="checkbox"
            id="price2"
            name="pricing"
            value="Medium"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "pricing")}
          />
          <label htmlFor="price2" className="text-white text-[14px]">₹1000 - ₹2000</label><br/>

          <input
            type="checkbox"
            id="price3"
            name="pricing"
            value="High"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "pricing")}
          />
          <label htmlFor="price3" className="text-white text-[14px]">₹2000+</label><br/>
        </div>
      </div>

      {/* Availability */}
      <div>
        <span className="text-white text-[16px]">Availability</span><br/>
        <div className="ml-2">
          <input
            type="checkbox"
            id="avail1"
            name="availability"
            value="Immediate"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "availability")}
          />
          <label htmlFor="avail1" className="text-white text-[14px]">Today</label><br/>

          <input
            type="checkbox"
            id="avail2"
            name="availability"
            value="Within a week"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "availability")}
          />
          <label htmlFor="avail2" className="text-white text-[14px]">Tomorrow</label><br/>

          <input
            type="checkbox"
            id="avail3"
            name="availability"
            value="Later"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "availability")}
          />
          <label htmlFor="avail3" className="text-white text-[14px]">Day after Tomorrow</label><br/>

          <input
            type="checkbox"
            id="avail3"
            name="availability"
            value="Later"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "availability")}
          />
          <label htmlFor="avail3" className="text-white text-[14px]">This Weekend</label><br/>

          
        </div>
      </div>

      {/* Submit */}
      <input
        type="submit"
        value="Submit"
        className="text-[#1814a1] bg-white px-3 rounded-[5px]"
      />
    </form>


        </div>


       


        <div className="lg:bg-[#1814a1] lg:border-4 lg:w-70 lg:border-white lg:rounded-2xl lg:p-3 hidden lg:block">

          
          
 <form className="grid grid-cols-1 gap-y-3 px-4">
  <div className=" hidden lg:block  mb-5 relative">
    

        <div href="" className="absolute  flex">
          <img src="/Vector.png" class="h-3 mt-1 filter brightness-0 invert" alt="" />


          <h1 className=" pl-2 pr-3 text-[14px] text-white">Filter</h1>
        </div>
      </div>
      {/* Location */}
      <div>
        <span className="text-white text-[16px]">Location</span><br/>
        <div className="ml-2">
          <input
            type="checkbox"
            id="loc1"
            name="location"
            value="Nearby Chennai"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "location")}
          />
          <label htmlFor="loc1" className="text-white text-[14px]">Nearby Chennai</label><br/>

          <input
            type="checkbox"
            id="loc2"
            name="location"
            value="Nearby Chennai"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "location")}
          />
          <label htmlFor="loc2" className="text-white text-[14px]">Nearby Chennai</label><br/>

          <input
            type="checkbox"
            id="loc3"
            name="location"
            value="Nearby Chennai"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "location")}
          />
          <label htmlFor="loc3" className="text-white text-[14px]">Nearby Chennai</label><br/>

           <input
            type="checkbox"
            id="loc3"
            name="location"
            value="Nearby Chennai"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "location")}
          />
          <label htmlFor="loc3" className="text-white text-[14px]">Nearby Chennai</label><br/>

<input
            type="checkbox"
            id="loc3"
            name="location"
            value="Nearby Chennai"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "location")}
          />
          <label htmlFor="loc3" className="text-white text-[14px]">Nearby Chennai</label><br/>

        </div>
      </div>

      {/* Experience */}
      <div>
        <span className="text-white text-[16px]">Experience</span><br/>
        <div className="ml-2">
          <input
            type="checkbox"
            id="exp1"
            name="experience"
            value="0-1 Years"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "experience")}
          />
          <label htmlFor="exp1" className="text-white text-[14px]">0-1 Years</label><br/>

          <input
            type="checkbox"
            id="exp2"
            name="experience"
            value="2-4 Years"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "experience")}
          />
          <label htmlFor="exp2" className="text-white text-[14px]">1-2 Years</label><br/>

          <input
            type="checkbox"
            id="exp3"
            name="experience"
            value="5+ Years"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "experience")}
          />
          <label htmlFor="exp3" className="text-white text-[14px]">2-3 Years</label><br/>


<input
            type="checkbox"
            id="exp3"
            name="experience"
            value="5+ Years"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "experience")}
          />
          <label htmlFor="exp3" className="text-white text-[14px]">3-5 Years</label><br/>

          <input
            type="checkbox"
            id="exp3"
            name="experience"
            value="5+ Years"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "experience")}
          />
          <label htmlFor="exp3" className="text-white text-[14px]">5+ Years</label><br/>


        </div>
      </div>

      {/* Pricing */}
      <div>
        <span className="text-white text-[16px]">Pricing</span><br/>
        <div className="ml-2">
          <input
            type="checkbox"
            id="price1"
            name="pricing"
            value="Low"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "pricing")}
          />
          
          <label htmlFor="price1" className="text-white text-[14px]">₹200 - ₹500</label><br/>

          <input
            type="checkbox"
            id="price1"
            name="pricing"
            value="Low"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "pricing")}
          />
          <label htmlFor="price1" className="text-white text-[14px]">₹500 - ₹1000</label><br/>

          <input
            type="checkbox"
            id="price2"
            name="pricing"
            value="Medium"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "pricing")}
          />
          <label htmlFor="price2" className="text-white text-[14px]">₹1000 - ₹2000</label><br/>

          <input
            type="checkbox"
            id="price3"
            name="pricing"
            value="High"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "pricing")}
          />
          <label htmlFor="price3" className="text-white text-[14px]">₹2000+</label><br/>
        </div>
      </div>

      {/* Availability */}
      <div>
        <span className="text-white text-[16px]">Availability</span><br/>
        <div className="ml-2">
          <input
            type="checkbox"
            id="avail1"
            name="availability"
            value="Immediate"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "availability")}
          />
          <label htmlFor="avail1" className="text-white text-[14px]">Today</label><br/>

          <input
            type="checkbox"
            id="avail2"
            name="availability"
            value="Within a week"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "availability")}
          />
          <label htmlFor="avail2" className="text-white text-[14px]">Tomorrow</label><br/>

          <input
            type="checkbox"
            id="avail3"
            name="availability"
            value="Later"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "availability")}
          />
          <label htmlFor="avail3" className="text-white text-[14px]">Day after Tomorrow</label><br/>

          <input
            type="checkbox"
            id="avail3"
            name="availability"
            value="Later"
            className="size-3 mr-2"
            onChange={(e) => handleSingleCheck(e, "availability")}
          />
          <label htmlFor="avail3" className="text-white text-[14px]">This Weekend</label><br/>

          
        </div>
      </div>

      {/* Submit */}
      <input
        type="submit"
        value="Submit"
        className="text-[#1814a1] bg-white px-3 rounded-[5px]"
      />
    </form>


        </div>

        {/* Content Area */}
        <div className="bg-[#f6f8fc] rounded-2xl lg:ml-5">
          <div className="w-full lg:h-full h-114 overflow-y-scroll scrollbar-none p-1">
            {/* ✅ Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3  lg:gap-5 gap-2">
              {doctors.map((doc, index) => (
                <DoctorCard key={index} {...doc} />
              ))}
            </div>
          </div>
        </div>
      </div>
     <Footer/>?
    </>
  );
};
