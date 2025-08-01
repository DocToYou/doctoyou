import React from 'react'
import { Navbar } from '../components/Navbar'

export const Home = () => {
    return (
        <div className='bg-[#e4ebf2] h-screen'>
            <div className='h-5'></div>
            <Navbar />
            <div className="relative flex mt-5 mx-10 min-h-[500px] rounded-3xl bg-gradient-to-tl from-[#5966a1] to-[#020460]">
                <div className="lg:w-1/2 p-3 lg:p-7 relative overflow-hidden">
                    <img
                        src="home/doc.png"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20  pointer-events-none lg:hidden"
                    />
                    <div className="ml-5 items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md text-gray-800 text-base w-fit hidden lg:flex">
                        <img src="home/vector.svg" alt="" className=''/>
                        <span className="font-medium">100% verified and licensed doctors</span>
                    </div>
                    <div className="flex pt-3 pl-2 pb-2">
                        <div className="flex  gap-1 px-2 py-1 bg-white rounded-full shadow text-gray-800 text-xs w-fit  lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-3 h-3 text-[#020460]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 
         3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593
         a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12
         c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 
         3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593
         a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
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
                        From cough to care - Book trusted doctors online and get treatment at
                        your doorstep.
                    </div>
                    <div className="px-2 text-white pt-1 text-[10px] lg:hidden">
                        From cough to care - Book trusted doctors online and get treatment at
                        your doorstep.
                    </div>
                    <div className="pl-5 pt-8 hidden lg:flex">
                        <a
                            className="bg-white text-[#020460] rounded-3xl p-2 lg:px-3 lg:py-2 mr-5"
                            href=""
                        >
                            Emergency Service
                        </a>
                        <a
                            className="bg-transparent rounded-3xl px-3 py-2 border border-white text-white"
                            href=""
                        >
                            Book Appointment
                        </a>
                    </div>
                    <div className="pt-5 lg:hidden flex justify-center gap-1">
                        <a
                            className="bg-white text-[#020460] rounded-xl px-4 py-[5px] text-[12px] mr-2"
                            href=""
                        >
                            Emergency Service
                        </a>
                        <a
                            className="bg-transparent border border-white text-white rounded-xl px-4 py-[5px] text-[12px] ml-2 "
                            href=""
                        >
                            Book Appointment
                        </a>
                    </div>
                </div>
                <div className="w-1/2 hidden lg:flex">
                    <img src="home/doc2.png" alt="docter" />
                </div>
                <div className="absolute bottom-[15px] lg:bottom-[23px] left-1/2 transform -translate-x-1/2 w-11/12 lg:w-[60%] bg-white shadow-lg rounded-2xl p-4 flex flex-col lg:flex-row justify-between items-center gap-1 z-10 text-[#1815a1]">
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
                            <span>Location</span>
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
                            <option>Location</option>
                            <option>Chennai</option>
                            <option>Coimbatore</option>
                            <option>Madurai</option>
                        </select>
                    </div>
                    <div className="relative w-full lg:w-auto">
                        <div className="flex items-center px-2 py-2 border border-black rounded-lg text-sm text-[#1815a1] bg-white pointer-events-none">
                            <svg
                                className="size-5 mr-2"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.8205 10.6474L10.779 10.0366C11.7459 9.73507 12.6181 9.19455 13.3167 8.46841M17.5878 3.26996L15.931 5.29866M19.4429 5.53993C19.4429 5.53993 18.9848 6.27233 16.4997 10C14.4997 13 10.9997 14 10.9997 14M10.1677 1V4.39663C10.1677 4.40123 10.164 4.40496 10.1594 4.40496C8.45644 4.40496 7.07596 5.78545 7.07596 7.48836V7.80993L7.08443 8.13703M13.0213 1V3.52781C13.0213 3.57725 13.0568 3.61911 13.1057 3.62601C13.6751 3.7063 15.1463 3.89587 15.7328 4.97246L15.931 5.29866M17.4997 8.50001C18.5042 9.06339 19.306 10.0987 18.9182 13.3526C18.6169 15.8808 17.8122 18.585 16.691 20.4852M9.99973 16.9454C10.4971 17.6102 11.1608 17.9622 11.8933 18.2095M10.6192 19.8851C11.4429 19.5231 11.755 18.8058 11.8539 18.5007C11.8843 18.4068 11.8933 18.3083 11.8933 18.2095V18.2095M7.44949 13.5179C7.16361 14.5848 6.06693 15.218 5 14.9321L4.46812 14.7828M13.3167 8.46841C13.429 8.35167 13.5368 8.23013 13.6398 8.10402L15.931 5.29866M13.3167 8.46841L13.0531 8.25607C12.6119 7.90314 12.0347 7.67313 12.0013 7.65994L11.9981 7.65878C10.6866 7.2008 8.70864 7.17335 7.08443 8.13703M7.08443 8.13703C6.69826 8.36616 6.33209 8.6513 5.99962 9.00001C4.32309 10.7585 4.04396 12.793 4.46812 14.7828M4.46812 14.7828C4.5915 15.3616 4.77439 15.9367 4.9997 16.5C6.49666 20.2429 10.8024 23 13.5077 23C14.7064 23 15.7989 21.9971 16.691 20.4852M11.8933 18.2095C13.3396 18.6979 15.0542 18.7786 16.288 20.0546L16.691 20.4852"
                                    stroke="#1815a1"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span>Specialization</span>
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
                            <span>Price Range</span>
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
                            <label className="text-[#1815a1] lg:mr-7" htmlFor='dateTime'>Date & Time</label>
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
                                type="datetime-local" id='dateTime' name='dateTime'
                                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>
                    <button className="w-full lg:w-auto bg-[#1815a1] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center">
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
        </div>
    )
}
