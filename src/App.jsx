import React, { useEffect } from "react";

import Home from "./pages/users/Home/Home";

import { useTheme } from "./context/ThemeContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Community from "./pages/users/community/Community";

import Login from "./pages/authentication/login/Login";

import Signup from "./pages/authentication/signup/Signup";

import EventsPage from "./pages/Events/EventsPage";

import SocialMedia from "./components/Utility/SocialMedia";

import NavigateTopArrow from "./components/Utility/NavigateTopArrow";

import Blogs from "./pages/users/blogs/Blogs";

import ScrollToTop from "./components/Utility/ScrollTop";

import SingleBlog from "./pages/users/blogs/SingleBlog";

import AlumniPage from "./pages/users/Alumni/AlumniPage";

import Gallery from "./components/users/Gallery/Gallery";

import Profile from "./pages/UserAccount/Profile/Profile";

import UserAccountDashboard from "./pages/UserAccount/UserAccountDashboard/UserAccountDashboard";

import UserCommunity from "./pages/UserAccount/Community/UserCommunity";

const App = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("bg-primary-one");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/communities" element={<Community />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* User Account */}

        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/dashboard" element={<UserAccountDashboard/>} />
        <Route path="/account/community" element={<UserCommunity/>} />
      </Routes>
      <SocialMedia />
      <NavigateTopArrow />
    </BrowserRouter>
  );
};

export default App;
