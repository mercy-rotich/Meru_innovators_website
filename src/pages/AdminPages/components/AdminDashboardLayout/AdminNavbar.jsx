import React from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { User, Sun, Moon } from "lucide-react";
import brand from "../../../../assets/brand/logo.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const AdminNavbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`h-[58px] fixed top-0 right-0 left-0 z-50 shadow-md ${
        isDarkMode ? "bg-[#333]" : "bg-green-600"
      }`}
    >
      <div className="flex items-center justify-between mx-[0.5rem]  h-full">
        <div className="flex items-center ">
          <Link to="/">
            <img
              src={brand}
              alt="Brand Logo"
              className="w-10 h-10 object-contain"
            />
          </Link>
          <span className="ml-2 text-white font-bold text-xl">
            Admin Dashboard
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/admin/users"
            className="text-white hover:text-gray-200 transition"
          >
            Users
          </Link>
          <Link
            to="/admin/communities"
            className="text-white hover:text-gray-200 transition"
          >
            Communities
          </Link>
          <Link
            to="/admin/settings"
            className="text-white hover:text-gray-200 transition"
          >
            Settings
          </Link>

          <div className="flex justify-between items-center">
            <button
              className="ml-[1.5rem] text-white   px-[3rem] py-[0.5rem] rounded-[30px] hover:scale-105 bg-orange-500"
              onClick={() => navigate("/account/dashboard")}
            >
              Account
            </button>
            <button
              className="ml-[1.5rem] text-white   px-[3rem] py-[0.5rem] rounded-[30px] hover:scale-105 bg-orange-500"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
            <button
              onClick={toggleTheme}
              className="text-white hover:text-gray-200 focus:outline-none transition ml-[1.5rem]"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/account/profile"
              className="flex items-center ml-[1.3rem]"
            >
              <User size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
