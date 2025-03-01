import React, { useState } from "react";
import { Mail, Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router-dom"; // For navigation
import { MdOutlineEmail } from "react-icons/md"; // Email icon
import { RiLockPasswordFill } from "react-icons/ri"; // Password icon
import { BiShow, BiHide } from "react-icons/bi"; // Show/Hide icons

import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleShowPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle login logic here
      console.log("Login successful!");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Login Form Section */}
      <form
        className="bg-white p-8 rounded-lg border border-neutral-200 w-full lg:w-1/2 max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center border-b uppercase text-orange-400 border-orange-100">
          LOGIN
        </h2>

        {/* Email Input */}
        <p className="text-neutral-500 mt-6">Email</p>
        <div className="mt-1 flex justify-between border py-2 h-[40px] items-center border-neutral-300 rounded-md">
          <span className="icon left-icon px-4 text-gray-600">
            <MdOutlineEmail />
          </span>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full outline-none pr-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}

        {/* Password Input */}
        <p className="mt-4 text-neutral-500">Password</p>
        <div className="mt-1 mb-2 flex items-center justify-between border py-2 h-[40px] border-neutral-300 rounded-md">
          <span className="icon left-icon px-4 text-gray-600">
            <RiLockPasswordFill />
          </span>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none"
          />
          <span
            className="icon right-icon px-4 text-gray-600 cursor-pointer"
            onClick={handleShowPassword}
          >
            {passwordVisible ? <BiHide /> : <BiShow />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            LOGIN
          </button>
        </div>

        {/* Forgot Password Link */}
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/auth/forget-password"
            className="text-sm text-indigo-600 hover:text-indigo-700"
          >
            Forgotten password?
          </Link>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col space-y-4 mb-6">
          <button
            type="button"
            className="w-full py-2 flex items-center justify-center border border-gray-300 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Login with Facebook
          </button>
          <button
            type="button"
            className="w-full py-2 flex items-center justify-center border border-gray-300 rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Login with Google
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-neutral-500 text-center">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="font-medium text-indigo-600 hover:text-indigo-700"
          >
            Sign Up
          </Link>
        </p>
      </form>

      {/* Welcome Page Section */}
      <div className="welcome-page hidden h-[100%] lg:block lg:w-1/2 lg:pl-12">
        <div className="bg-gradient-to-r  p-8 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et
            labore tempore! Doloremque omnis aliquid illo?
          </p>
          <button
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => {
              navigate("/auth/signup");
            }}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
