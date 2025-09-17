import React from "react";
import { useParams } from "react-router-dom";
import { doc, femdoc } from "../assets/home";
import { trained, nursing, physiotherapy, eldercare, doctconsult, vaccine, counselling, diabetescare } from "../assets/services";
import { Navbar } from "../components/home/Navbar";
import { RealDoc } from "./RealDoc";

export const Services = () => {
  const params = useParams();
  console.log(params);
  let service = [];
  const data = [
    {
      id: "trained",
      image: trained,
      name: "Trained Attendants",
      desc: "Trained attendants are non-medical professionals who provide essential support to patients in the comfort of their homes. They assist with daily care, monitor health conditions, and ensure patient safety and comfort — especially for the elderly, bedridden, or post-surgery individuals.",
      services: [
        "Help with bathing, dressing, and grooming",
        "Mobility support (wheelchair, walking assistance)",
        "Feeding and medication reminders",
        "Monitoring vitals like blood pressure & temperature",
        "Maintaining hygiene and cleanliness",
        "Supporting recovery after surgery or hospitalization",
        "Providing companionship and emotional support",
      ],
    },
    {
      id: "nursing",
      image: nursing,
      name: "Nursing Care",
      desc: "Our skilled nurses provide professional medical support at home, ensuring comfort, safety, and faster recovery.",
      services: [
        "Giving medicines and injections",
        "Wound care and dressing after surgery",
        "IV drips and catheter care",
        "Checking vitals like BP, sugar & temperature",
        "Managing long-term conditions (diabetes, BP, etc.)",
        "Pain and palliative care",
        "Assisting doctors during visits",
        "Guiding families on patient care",
        "Offering emotional and compassionate support",
      ],
    },
    {
      id: "physiotherapy",
      image: physiotherapy,
      name: "Physiotherapy",
      desc: "Our expert physiotherapists help patients regain strength, mobility, and independence at home. They provide personalized exercises and treatments to speed up recovery, relieve pain, and improve overall physical health.",
      services: [
        "Post-surgery and post-injury rehabilitation",
        "Pain relief for back, neck, and joint problems",
        "Stroke and neurological rehabilitation",
        "Exercises for mobility, balance, and flexibility",
        "Sports injury recovery",
        "Arthritis and chronic pain management",
        "Strengthening and conditioning programs",
        "Educating patients on safe movements and posture",
      ],
    },
    {
      id: "eldercare",
      image: eldercare,
      name: "Elder Care",
      desc: "Our elder care services are designed to support seniors in living safely, comfortably, and independently at home. We provide personalized care to maintain their health, dignity, and quality of life.",
      services: [
        "Assistance with daily activities (bathing, dressing, meals)",
        "Medication reminders and health monitoring",
        "Mobility support and fall prevention",
        "Companionship and emotional support",
        "Specialized care for dementia and Alzheimer's patients",
        "Post-hospitalization recovery support",
        "Regular health check-ups and coordination with doctors",
        "Maintaining hygiene and a safe home environment",
      ],
    },
    {
      id: "doctconsult",
      image: doctconsult,
      name: "Doctor Consultation",
      desc: "Get access to qualified doctors from the comfort of your home. Our doctors provide timely medical advice, diagnosis, and treatment plans to ensure better health and peace of mind.",
      services: [
        "General health check-ups and consultations",
        "Diagnosis and treatment of common illnesses",
        "Specialist consultations (as per need)",
        "Follow-up care after hospitalization or surgery",
        "Prescription and medication guidance",
        "Preventive health advice and lifestyle recommendations",
        "Coordination with nurses and physiotherapists for ongoing care",
      ],
    },
    {
      id: "vaccine",
      image: vaccine,
      name: "Vaccination",
      desc: "Stay protected with safe and reliable vaccination services at home. Our trained professionals ensure proper administration and care for all age groups.",
      services: [
        "Child and adult immunizations",
        "Routine and seasonal vaccines (flu, typhoid, etc.)",
        "Travel-related vaccinations",
        "Post-vaccination monitoring and care",
        "Guidance on vaccine schedules and reminders",
      ],
    },
    {
      id: "counselling",
      image: counselling,
      name: "Counselling",
      desc: "Our counselling services provide emotional support and guidance to help individuals cope with stress, anxiety, and life challenges. Experienced counsellors offer a safe and caring space to talk and heal.",
      services: [
        "Stress, anxiety, and depression management",
        "Relationship and family counselling",
        "Career and academic guidance",
        "Grief and trauma support",
        "Lifestyle and wellness counselling",
        "Building confidence and emotional resilience",
      ],
    },
    {
      id: "diabetescare",
      image: diabetescare,
      name: "Diabetes Care",
      desc: "Our diabetes care services help patients manage their condition effectively at home. With regular monitoring and personalized care, we ensure better health and improved quality of life.",
      services: [
        "Blood sugar monitoring and tracking",
        "Insulin administration and guidance",
        "Diet and lifestyle management plans",
        "Medication reminders and support",
        "Foot care and wound management",
        "Education on self-care and precautions",
        "Regular follow-ups with doctors and specialists",
      ],
    },
  ];

  const handleService = () => {
    service = data.filter((serv) => serv.id === params.name);
  };

  handleService();

  console.log(service[0]);

  return (
    <div className="font-[poppins]">
      <div className="h-5 lg:h-0"></div>
      <Navbar />
      <div className="relative flex  mt-4  lg:mx-4 mx-2   rounded-2xl bg-gradient-to-tl from-[#5966a1] to-[#020460] ">
        <div className="lg:w-1/2 p-3 lg:p-7 relative overflow-hidden z-20">
          <div className="lg:ml-8 lg:mt-29">
            <h2 className="text-3xl lg:text-6xl font-bold lg:pl-5 lg:pb-3 pl-2  text-white lg:pr-0 pr-25 mt-3 lg:mt-0">
              {service[0].name}
            </h2>
            <p className="pl-5  text-white hidden lg:flex text-[17px]">
              {service[0].desc}
            </p>
            <div className="lg:ml-5 lg:pt-8">
              <h1 className=" text-[#ffffff] font-bold inline px-2 py-1 rounded-[5px] lg:text-[17px] text-[10px]">
                Services They Provide:
              </h1>
            </div>

            <ul className="text-white lg:ml-10 ml-4 lg:text-[17px] text-[10px] mb-3 lg:mb-0 ">
              {service[0].services.map((service, index) => (
                <li key={index}>{`• ${service}`}</li>
              ))}
            </ul>
          </div>
        </div>
        <img
          className="w-55 absolute bottom-0 right-0 lg:hidden z-10"
          src={service[0].image}
          alt="doctor"
        />
        <div className="w-1/2 hidden lg:block relative">
          <img
            className="w-125 absolute bottom-0 left-1/2 -translate-x-1/2"
            src={service[0].image}
            alt="doctor"
          />
        </div>
      </div>

      <RealDoc />
    </div>
  );
};
