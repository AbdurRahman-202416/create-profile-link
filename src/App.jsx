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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/UserDashBoard" element={<UserDashBoard />} />
        <Route path="/PreviewProfile" element={<Preview />} />

        <Route path="*" element={<NotFountPage />} />
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
