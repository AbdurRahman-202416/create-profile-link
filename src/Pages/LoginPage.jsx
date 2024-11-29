import React from "react";
import NavbarMini from "../Component/NavbarMini";
import { Link, useNavigate } from "react-router-dom";
import httpRequest from "../Axios";
import { useState } from "react";
import { notifyError, notifySuccess } from "../Component/Toaster";
import { ClipLoader } from "react-spinners";

const LoginPage = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const LoginRequest = async (e) => {
    e.preventDefault();
    const data = {
      username: email,
      password: Password,
    };
    try {
      setLoading(true);
      const response = await httpRequest.post("auth/login", data);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.access_token);
        notifySuccess("Login Success");
        Navigate("/dashboard");
      }
      console.log(response.data);
      
    } catch (error) {
      notifyError(
        "Login failed. Please check your Username and Password, Try again"
      );
      
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className={`fade-loader ${loading ? "show" : ""}`}>
          <ClipLoader color="green" size={80} />
        </div>
      )}
      <div className="mx-[6%] mt-6  sm:mx-[45%]  ">
        <NavbarMini />
      </div>

      <div className="mx-auto w-full flex flex-col items-center justify-start my-6 min-h-screen  h-full">
        <div className="flex shadow-lg min-h-full rounded-md sm:w-[80%] lg:w-[50%] md:w-[40%] bg-white flex-col justify-center px-6 py-4 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-left text-2xl font-bold tracking-wide text-gray-900">
              Login
            </h2>
            <p className=" text-gray-400 mt-4 ">
              Add your details below to get back into the app
            </p>
          </div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={LoginRequest} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-500"
                >
                  Email address
                </label>
                <div className="mt-2 relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    placeholder="e.g. alex@email.com"
                    className="block w-full h-12  active:bg-gray-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-100 sm:text-sm/6 pl-10"
                  />
                  <div className="absolute inset-y-0 left-0 pl-0 mt-5   flex items-center pointer-events-none">
                    <svg
                      className="absolute  mb-4  ml-2  text-gray-500 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={13}
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
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-600"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  ring-gray-300 placeholder:text-gray-400 focus:ring-1 h-12  focus:ring-gray-100 sm:text-sm/6 pl-10"
                  />
                  <svg
                    className="absolute inset-y-0  mt-4 ml-3 text-gray-500"
                    width={22}
                    height={25}
                    fillRule="inherit"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="#737373"
                      d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full active:border-gray-300 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
                {error && <p>{error}</p>}
              </div>
              <div className="flex items-center flex-col">
                <p className=" text-center text-sm/8 text-gray-500">
                  Don't have an account?
                </p>

                <p className="text-center  text-gray-500">
                  <Link
                    to="/Signup"
                    className=" text-sm/tight text-indigo-500 hover:text-indigo-700"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
