import React, { useState } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { User, Sun, Moon, ChevronDown } from "lucide-react";
import brand from "../../../../assets/brand/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isDropdown, setIsDropDown] = useState(false);

  return (
    <nav
      className={`h-[58px] fixed top-0 right-0 left-0 z-50 shadow-md ${
        isDarkMode ? "bg-[#333]" : "bg-green-600"
      }`}
    >
      <div className="flex items-center justify-between ml-2 h-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={brand} alt="Brand Logo" className="w-10 h-10" />
          </Link>
          <span className="ml-2 text-white font-bold text-xl">Admin</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          {/* <Link to="/admin/users" className="text-white hover:text-gray-200">
            Users
          </Link>
          <Link
            to="/admin/communities"
            className="text-white hover:text-gray-200"
          >
            Communities
          </Link>
          <Link to="/admin/settings" className="text-white hover:text-gray-200">
            Settings
          </Link> */}

          {/* Account & Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* <button
              className="text-white px-4 py-2 rounded-lg hover:scale-105 bg-orange-500"
              onClick={() => navigate("/account/dashboard")}
            >
              Account
            </button> */}
            <button
              className="text-white px-4 py-1 rounded-sm hover:scale-105 bg-orange-500"
              onClick={() => navigate("/")}
            >
              Home
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-white hover:text-gray-200"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Profile & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropDown((prev) => !prev)}
                className="flex items-center"
              >
                <User size={20} className="text-white" />
                <ChevronDown className="text-white ml-1" />
              </button>

              <AnimatePresence>
                {isDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-[150px] right-0 top-[140%] p-2 shadow-least bg-white rounded-sm"
                  >
                    <button
                      className="block w-full text-left text-gray-800 px-4 py-2  rounded"
                      onClick={() => navigate("/account/dashboard")}
                    >
                      User Account
                    </button>
                    <button
                      className="block w-full text-left text-gray-800 px-4 py-2 hover:bg-gray-200 rounded"
                      onClick={() => navigate("/auth/login")}
                    >
                      Login
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
