import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./components/Utility/ScrollTop";

import NavigateTopArrow from "./components/Utility/NavigateTopArrow";

import SocialMedia from "./components/Utility/SocialMedia";

import Preloader from "./components/Preloader/Preloader";

import { useTheme } from "./context/ThemeContext";

import { Outlet } from "react-router-dom";



const MainLayout = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
      />
      <Outlet />
      <Preloader />
      <SocialMedia />
      <NavigateTopArrow />
    </>
  );
};

export default MainLayout;
