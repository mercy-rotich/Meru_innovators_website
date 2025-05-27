import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brand from "../../../assets/brand/logo.svg";
import "./Navbar.css";
import { User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";

import { Sun, Moon } from "lucide-react";

import { ChevronDown } from "lucide-react";

const DesktopNav = ({ openMobileNav, gallery }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const [isDropdown, setIsDropDown] = useState(false);

  const handleSetIsDropdown = () => {
    setIsDropDown((prev) => !prev);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div
      className={`fixed w-full top-0 left-0 right-0 z-20 navbar desktop-navbar transition-all duration-300 h-[58px] flex  items-center ${
        isScrolled ? "onscroll" : "bg-transparent text-white"
      }`}
      style={
        gallery === "gallery" && isDarkMode
          ? { background: "#333" }
          : { background: "green" }
      }
    >
      <div className="container flex items-center justify-between py-3 ">
        {/* Logo */}
        <Link to="/">
          <img
            src={brand}
            className="max-w-[50px] max-h-[50px]"
            alt="Brand Logo"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-base font-medium items-center">
          {[
            { path: "/", label: "Home" },
            { path: "/communities", label: "Community" },
            { path: "/events", label: "Events" },
            { path: "/alumni", label: "Alumni" },
            { path: "/projects", label: "Projects" },
            { path: "/blogs", label: "Blogs" },

            { path: "/gallery", label: "Gallery" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              style={isScrolled ? { color: "white" } : {}}
              to={path}
              className={`hover:text-orange-500 transition ${
                activeLink === path ? "text-orange-600 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            className="text-white  border-2 border-white px-[3rem] py-[0.5rem] rounded-[30px] hover:scale-105"
            onClick={() => navigate("/account/dashboard")}
          >
            Account
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-[1rem]">
          <div className="flex items-center gap-[1rem]">
            <button
              className="hidden universal-button md:visible hover:scale-105 "
              onClick={() => navigate("/auth/signup")}
            >
              Signup
            </button>
          </div>

          <div className="flex gap-[1rem] items-center ">
            <button
              className="theme-button"
              onClick={toggleTheme}
              style={isScrolled ? { color: "#fff" } : null}
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
            <div className="flex justify-between items-center relative">
              <button
                className="border-2 rounded-full border-white h-[33px] w-[33px] flex justify-center items-center"
                style={isScrolled ? { color: "#fff" } : null}
                onClick={() => navigate("/account/dashboard")}
              >
                <User />
              </button>
              <button className="ml-[1rem]" onClick={handleSetIsDropdown}>
                <ChevronDown />
              </button>

              <AnimatePresence>
                {isDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex absolute drop-down flex-col right-0 top-[130%] p-[0.4rem] z-40 shadow-least bg-white"
                  >
                    <button
                      className="text-white px-[3rem] py-[0.5rem] rounded-sm hover:scale-105 bg-orange-500"
                      onClick={() => navigate("/admin/dashboard")}
                    >
                      Admin
                    </button>
                    <button
                      className="text-white px-[3rem] py-[0.5rem] rounded-sm hover:scale-105 bg-orange-500 mt-[1rem]"
                      onClick={() => navigate("/auth/login")}
                    >
                      Login
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className={`block md:hidden text-3xl ${
                isScrolled ? "text-white" : ""
              }`}
              onClick={openMobileNav}
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
