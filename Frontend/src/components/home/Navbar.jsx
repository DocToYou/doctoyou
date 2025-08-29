import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ handleScrollToServices }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // initially in collapsed state
  const setNavColour = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <>
      <div className="font-[Poppins]">
        <section className="lg:bg-white lg:hidden ">
          <div className="w-full mx-auto lg:px-3 mb-5">
            <div className="flex px-4">
              <div className="flex items-start justify-between w-1/8 lg:w-auto">
                {/* Mobile hamburger */}
                <button
                  className="lg:hidden pt-2 bottom-3.5"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} //adds functionality
                >
                  {isMobileMenuOpen ? (
                    // Cross Icon created by Dheena Krishna
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    // hamburger icon created by gowtham
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-8 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {/* Mobile screem nav logo and icons */}
              <Link
                to={"/"}
                className="text-2xl font-bold text-[#1815a1] pr-5 pt-2 "
              >
                Doc2you
              </Link>
              <Link
                to={"/location"}
                className=" flex text-medium justify-center bg-[#1815a1] text-white font-bold pl-3 pr-3 py-2 rounded ml-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill mt-1"
                  viewBox="0 0 16 16"
                  // className="mt-1"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </Link>
              <Link
                to={"/auth"}
                className="flex items-center text-medium bg-[#1815a1] text-white px-3 py-2 font-bold rounded ml-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </Link>
            </div>
            {/* Mobile menu - expansion of hamburger menu */}
            <div>
              {isMobileMenuOpen && (
                <ul className="lg:hidden font-bold px-5">
                  <li className="mt-1">
                    <Link
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-2 block"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mt-1">
                    <button
                      className="hover:underline hover:decoration-[#1815a1] cursor-pointer"
                      onClick={handleScrollToServices}
                    >
                      Services
                    </button>
                  </li>
                  <li className="pb-5">
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-2 block"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* System or large screen contents */}
        <section className=" hidden lg:bg-white lg:block md:hidden">
          <div className=" w-full mx-auto lg:px-10 absolute z-10 pt-5">
            <div className="flex px-6 py-3  bg-white  rounded-[10px] ">
              <Link
                to={"/"}
                className="text-2xl font-bold text-[#1815a1] pr-5 "
              >
                Doc2you
              </Link>
              <div className="my-auto ">
                <ul className=" hidden lg:flex font-bold px-5">
                  <li className="pr-5">
                    <Link
                      to={"/"}
                      className="px-5 hover:underline hover:decoration-[#1815a1]"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="pr-5">
                    <button
                      className="px-5 hover:underline hover:decoration-[#1815a1] cursor-pointer"
                      onClick={handleScrollToServices}
                    >
                      Services
                    </button>
                  </li>
                  <li className="pr-5">
                    <Link
                      to={"/contact"}
                      className="px-5 hover:underline hover:decoration-[#1815a1]"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to={"/location"}
                className=" flex text-medium justify-center bg-[#1815a1] text-white font-bold pl-3 pr-3 py-2 rounded ml-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill mt-1"
                  viewBox="0 0 16 16"
                  // className="mt-1"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>

                <span className="hidden lg:block lg:px-3">location</span>
              </Link>
              <Link
                to={"/auth"}
                className="flex items-center text-medium bg-[#1815a1] text-white px-3 py-2 font-bold rounded ml-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span className="hidden lg:block lg:px-3 ">login/signup</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
