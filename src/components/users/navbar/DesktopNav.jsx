import { useState, useEffect } from "react";
import brand from "../../../assets/brand/logo.svg";
import "./Navbar.css";
import { User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";

import { Sun, Moon } from "lucide-react";

const DesktopNav = ({ openMobileNav, gallery }) => {
  const { isDarkMode, toggleTheme } = useTheme();

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
      className={`fixed w-full top-0 left-0 right-0 z-20 navbar desktop-navbar transition-all duration-300 py-[0.5rem] ${
        isScrolled ? "onscroll" : "bg-transparent text-white"
      }`}
      style={
        gallery === "gallery" && isDarkMode
          ? { background: "#333" }
          : { background: "green" }
      }
    >
      <div className="container flex items-center justify-between py-3 px-6">
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
          <button className="btn-primary">Dashboard</button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-[2rem]">
          <div className="flex items-center gap-[1rem]">
            <button
              className="universal-button"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </button>

            <button
              className="universal-button"
              onClick={() => navigate("/auth/signup")}
            >
              Signup
            </button>
          </div>

          <div className="flex gap-[1rem]">
            <button className="theme-button" onClick={toggleTheme}>
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
            <button className="border-2 rounded-full border-white p-[0.5rem]">
              <User />
            </button>
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
