import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import NavbarMini from "../Component/NavbarMini";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { useState } from "react";
import httpRequest from "../Axios";
import { ClipLoader } from "react-spinners";
import { notifyError, notifySuccess } from "../Component/Toaster";

const SignupPage = () => {

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [validPass, setValidPass] = useState("");
  const [loader, setLoader] = useState(false);

  const Validation = () => {
    if (Password.length >= 8 && Password === confirmPassword) {
      setValidPass(confirmPassword);
      return true;
    } else {
      notifyError("Confirm password are not same ");
      return false;
    }
  };

  const signInRequest = async (e) => {
    e.preventDefault();
    const result = Validation();

    if (result == true) {
      const data = {
        username: email,
        password: validPass,
        role: "user",
      };
      setLoader(true);
      try {
        const response = await httpRequest.post("auth/register", data);
        if (response.status === 201) {
          notifySuccess("Signup Successfull");
          setLoader(false);
          setEmail("");
          setPassword("");
          setConfirmPassword("");

        }
        console.log(response.data);
      } catch (error) {
        setLoader(false);
        notifyError(error.response.data.message);
        // notifyError(error.response.data.message[1])
        console.log(error);
      } finally {
        setLoader(false);
      }
      return;
    }
  };



  return (
    <>
      {loader && (
        <div className={`fade-loader ${loader ? "show" : ""}`}>
          <ClipLoader color="green" size={80} />
        </div>
      )}
      <div className="  mx-[10%] sm:mx-[43%] my-4 sm:items-center">
        <NavbarMini />
      </div>
      <section className=" w-[100%] dark:bg-gray-900">
        <div className="flex flex-col  items-center   justify-start px-4  mx-auto  md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border sm:mx-w-[40%] md:max-w-[50%] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4  shadow-lg md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <p className="text-gray-600">
                Let's get you started sharing your links!
              </p>

              <form
                className="space-y-4   md:space-y-6 gap-9 "
                onSubmit={signInRequest}
              >
                <div className="mb-6  h-[70px] relative">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border h-12  pl-9 border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-1 focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g. alex@email.com"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-0 mt-5   flex items-center pointer-events-none">
                    <svg
                      className="mt-5 text-gray-500 ml-3 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      fillRule="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="#737373"
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
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className="bg-gray-50 border h-12  pl-8 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />

                  <div className="absolute inset-y-0 left-0 pl-0 mt-5   flex items-center pointer-events-none">
                    <svg
                      className="ml-2 text-gray-600 mt-2 p-0 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fillRule="nonzero"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="#737373"
                        d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mb-6  h-[70px] relative">
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className="bg-gray-50 h-12  pl-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-0 mt-5   flex items-center pointer-events-none">
                    <svg
                      className="ml-2 mt-2 p-0 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="#737373"
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
                  className="w-full text-white bg-blue-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-red-600 text-xs px-8">
                  <i className="fa-solid fa-triangle-exclamation fa-fade" />
                  {error}
                </p>
                <p className="text-sm font-light text-center text-gray-600 dark:text-gray-400">
                  Already have an account?
                  <Link
                    to="/Login"
                    className="font-medium text-indigo-600 m-1 hover:underline dark:text-primary-500"
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
