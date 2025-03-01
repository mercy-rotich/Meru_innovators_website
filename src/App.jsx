import React from "react";
import Home from "./pages/users/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Community from "./pages/users/community/Community";

import Login from "./pages/authentication/login/Login";

import Signup from "./pages/authentication/signup/Signup";

import EventsPage from "./pages/Events/EventsPage";

import SocialMedia from "./components/Utility/SocialMedia";

import NavigateTopArrow from "./components/Utility/NavigateTopArrow";

import Blogs from "./pages/users/blogs/Blogs";

import ScrollNumber from "antd/es/badge/ScrollNumber";
import ScrollToTop from "./components/Utility/ScrollTop";

const App = () => {
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
      </Routes>
      <SocialMedia />
      <NavigateTopArrow />
    </BrowserRouter>
  );
};

export default App;
