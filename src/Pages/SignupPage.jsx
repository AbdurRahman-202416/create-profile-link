import React from "react";
import NavbarMini from "../Component/NavbarMini";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <section className=" w-full dark:bg-gray-900">
        <div className="flex flex-col  max-w-full items-center  justify-start px-6 py-8 mx-auto  md:h-screen lg:py-0">
          <NavbarMini />
          <div className="w-full mt-20 bg-white rounded-lg dark:border  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <p className="text-gray-600">
                Let’s get you started sharing your links!
              </p>

              <form className="space-y-4  md:space-y-6 gap-9 " action="#">
                <div className="mb-6  h-[70px] relative">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border pl-7 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g. alex@email.com"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-0 mt-5   flex items-center pointer-events-none">
                    <svg
                      className="mt-2 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#737373"
                        d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3Zm-.5 9h-11V4.637l5.162 4.732a.5.5 0 0 0 .676 0L13.5 4.637V12Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mb-6  h-[70px] relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="At least 8 characters"
                    className="bg-gray-50 border pl-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />

                  <div className="absolute inset-y-0 left-0 pl-0 mt-5   flex items-center pointer-events-none">
                    <svg
                      className="ml-2 mt-2 p-0 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#737373"
                        d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mb-6  h-[70px] relative">
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="At least 8 characters"
                    className="bg-gray-50 pl-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-0 mt-5   flex items-center pointer-events-none">
                    <svg
                      className="ml-2 mt-2 p-0 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#737373"
                        d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 m-0 p-0 text-xs">
                  Password must contain at least 8 characters
                </p>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-center text-gray-600 dark:text-gray-400">
                  Already have an account?
                  <Link
                    to="/Login"
                    className="font-medium text-indigo-600  hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
