import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Component/Navbar";
import SignupPage from "./Pages/SignupPage";
import NotFountPage from "./Pages/NotFount";
import LoginPage from "./Pages/LoginPage";
import UserDashBoard from "./Pages/UserDashBoard";
import Preview from "./Pages/Preview";
import UserProfile from "./Pages/UserProfile";
import HomePage from "./Pages/HomePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<UserDashBoard />} />
        <Route path="/Preview" element={<Preview />} />

        <Route path="*" element={<NotFountPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
