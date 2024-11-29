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
import { ToastContainer } from "react-toastify";
import ShareProfile from "./Pages/ShareProfile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-profile-link" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<UserDashBoard />} />
        <Route path="/Preview" element={<Preview />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/share/:username" element={<ShareProfile />} />
        {/* <Route path="/share" element={<ShareProfile />} /> */}
        <Route path="*" element={<NotFountPage />} />
      </Route>
    ),
    {
      future: {
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
        v7_normalizeFormMethod: true,
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_fetcherPersist: true,
      },
    }
  );
  return (
    <>

      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
