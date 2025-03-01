import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleShowPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex bg-white rounded-md shadow-lg w-full max-w-4xl overflow-hidden">
        <div className="hidden lg:flex flex-col items-center justify-center bg-green text-white w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg mb-6 text-center">
            Meru University of Science and Technology (MUST) is a leading
            institution in Kenya, dedicated to excellence in education,
            research, and innovation. Join us and be part of a vibrant academic
            community.
          </p>
          <button
            className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            onClick={() => navigate("/auth/signup")}
          >
            SIGN UP
          </button>
        </div>

        <form className="w-full lg:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-center text-green border-b border-indigo-100 pb-2 mb-6 uppercase">
            LOGIN
          </h2>
          <div className="mb-4">
            <label className="text-gray-600">Email</label>
            <div className="flex items-center border py-2 px-3 border-neutral-300 rounded-md mt-1">
              <MdOutlineEmail className="text-gray-500" />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full ml-2 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-gray-600">Password</label>
            <div className="flex items-center border border-neutral-300 py-2 px-3 rounded-md mt-1">
              <RiLockPasswordFill className="text-gray-500" />
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full ml-2 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="cursor-pointer text-gray-500"
                onClick={handleShowPassword}
              >
                {passwordVisible ? <BiHide /> : <BiShow />}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none"
          >
            LOGIN
          </button>

          <div className="text-center mt-4">
            <Link
              to="/auth/forget-password"
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              Forgotten password?
            </Link>
          </div>

          <p className="text-gray-600 text-center mt-6">
            Don't have an account?{" "}
            <Link to="/auth/signup" className="text-indigo-600 font-semibold">
              Sign Up
            </Link>
          </p>

          <div className="flex flex-col items-center mt-6">
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 mb-2 border border-neutral-300 rounded-lg hover:bg-gray-100"
            >
              Sign in with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 border border-neutral-300 rounded-lg hover:bg-gray-100"
            >
              Sign in with GitHub
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
