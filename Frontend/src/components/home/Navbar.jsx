import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ handleScrollToServices }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navColour, setNavColour] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <nav
      className={`fixed lg:absolute w-full mx-auto max-width lg:justify-self-center left-0 lg:rounded-2xl top-0 z-50 transition-all duration-300 ${
        navColour ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <section>
        <div className="px-4 w-full lg:mx-auto lg:px-10 lg:absolute pt-5">
          <div className="flex p-4 px-6 py-3  bg-white  rounded-[10px] ">
            {/* Hamburger menu */}
            <div className="flex pr-[12px]">
              <button
                className="lg:hidden bottom-3.5"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  // Cross Icon
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
                  // Hamburger Icon
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7.5C1.55228 7.5 2 7.05228 2 6.5C2 5.94772 1.55228 5.5 1 5.5C0.447715 5.5 0 5.94772 0 6.5C0 7.05228 0.447715 7.5 1 7.5Z"
                      fill="black"
                    />
                    <path
                      d="M17.06 5.5H4.94C4.42085 5.5 4 5.92085 4 6.44V6.56C4 7.07915 4.42085 7.5 4.94 7.5H17.06C17.5791 7.5 18 7.07915 18 6.56V6.44C18 5.92085 17.5791 5.5 17.06 5.5Z"
                      fill="black"
                    />
                    <path
                      d="M17.06 10.5H0.94C0.420852 10.5 0 10.9209 0 11.44V11.56C0 12.0791 0.420852 12.5 0.94 12.5H17.06C17.5791 12.5 18 12.0791 18 11.56V11.44C18 10.9209 17.5791 10.5 17.06 10.5Z"
                      fill="black"
                    />
                    <path
                      d="M17.06 0.5H0.94C0.420852 0.5 0 0.920852 0 1.44V1.56C0 2.07915 0.420852 2.5 0.94 2.5H17.06C17.5791 2.5 18 2.07915 18 1.56V1.44C18 0.920852 17.5791 0.5 17.06 0.5Z"
                      fill="black"
                    />
                  </svg>
                )}
              </button>
            </div>

            <Link to={"/"} className="text-2xl font-bold text-[#1815a1] pr-5 ">
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
              to={"/auth/login"}
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
          {/* end of mobile view */}
        </div>
      </section>
    </nav>
  );
};
