"use client";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavbarMini from "../Component/NavbarMini";
import bgImage from "../assets/images/bg.png";
import { notify } from "../Component/Toaster";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    notify("Hello, Welcome to Devlinks");
  }, []);

  return (
    <div className="w-full  ">
      <nav className="m-1 mb-4 h-[60px] bg-indigo-500 rounded-sm shadow-md">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
          <div className="flex justify-between items-center">
            <div className="text-2xl bg-white rounded-md px-4 shadow-4xl shadow-indigo-900 font-bold text-gray-800 md:text-3xl">
              <NavbarMini />
            </div>
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    className={`${isMenuOpen ? "hidden" : ""}`}
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                  <path
                    className={`${isMenuOpen ? "" : "hidden"}`}
                    d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex flex-col text-2xl my-0 sm:my-0 font-bold  px-20 sm:px-0 mx-[50%] text-[]  sm:text-white md:flex-row sm:mx-2`}
          >
            <Link
              to="/login"
              className=" rounded hover:bg-[#ffff] hover:text-gray-900 hover:font-medium py-2 px-2 md:mx-2"
            >
              Login
            </Link>
            <br className="sm:block" />
            <Link
              to="/signup"
              className=" rounded hover:bg-[#fff] hover:text-gray-900 hover:font-medium py-0 sm:py-2 px-0 sm:px-2 md:mx-2"
            >
              Singup
            </Link>
          </div>
        </div>
      </nav>
      {/* bg-gradient-to-r from-pink-500 to-blue-500  */}
      <div
        className={`${
          isMenuOpen ? "my-16 " : "my-0"
        } flex  bg-[#10375C]   mx-1 rounded-sm flex-wrap `}
      >
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-1xl bg-clip-text text-transparent text-white text-justify leading-5 tracking-[0.3px] sm:tracking-[0.1px] sm:text-lg lg:text-5xl font-bold">
                  Centralize your digital
                  <span className="text-green-300"> Identity.</span> Manage and
                  share your links with a single profile.
                </h1>
                <div className="w-[60%] h-1 bg-green-300 my-4"></div>

                <marquee>
                  <p className="text-sm sm:text-2xl text-justify tracking-tighter font-semibold text-white leading-5  my-4  mb-10">
                    Simplify your online footprint. Create a profile to organize
                    your social media and other links.
                  </p>
                </marquee>
                <Link to="/Login">
                  <button className="bg-[#633CFF] transition-all duration-300 active:scale-110 hover:rotate-4  text-white text-sm sm:text-lg   font-medium px-4 py-2 rounded shadow">
                    Get Started
                  </button>
                </Link>
              </div>
            </header>
          </div>
        </div>
        <img
          src={bgImage}
          alt="Preview"
          className="w-full hover:scale-110  rounded-md my-2  transition-all duration-300  hover:rotate-4 h-48 object-cover sm:h-screen sm:w-4/12"
          
        />
      </div>
    </div>
  );
};

export default HomePage;
