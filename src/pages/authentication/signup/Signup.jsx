import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiShow, BiHide } from "react-icons/bi";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
    course: "",
    year: "",
    id: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.dob.trim()) {
      errors.dob = "Date of Birth is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!formData.course.trim()) {
      errors.course = "Course is required";
    }
    if (!formData.year.trim()) {
      errors.year = "Year is required";
    }
    if (!formData.id.trim()) {
      errors.id = "ID is required";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone Number must be 10 digits";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle signup logic here
      console.log("Signup successful!", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Signup Form */}
      <form
        className="bg-white p-8 rounded-sm border border-neutral-200 w-full max-w-[1000px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Sign Up
        </h2>

        {/* First Name */}

        <div className="flex justify-between gap-[1rem]">
          <div className="mb-4 basis-1/2">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="mb-4 basis-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}

        <div className="flex justify-between gap-[1rem]">
          <div className="mb-4 basis-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
              <MdOutlineEmail className="absolute right-3 top-3 text-gray-400" />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4 basis-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && (
              <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
            )}
          </div>
        </div>

        {/* Password */}

        <div className="flex justify-between gap-[1rem]">
          <div className="mb-4 basis-1/2 ">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400"
                onClick={handleShowPassword}
              >
                {showPassword ? <BiHide /> : <BiShow />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-4 basis-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400"
                onClick={handleShowConfirmPassword}
              >
                {showConfirmPassword ? <BiHide /> : <BiShow />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-between gap-[1rem]">
          <div className="mb-4 basis-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Course
            </label>
            <input
              type="text"
              name="course"
              placeholder="Enter your course"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.course}
              onChange={handleChange}
            />
            {errors.course && (
              <p className="text-red-500 text-sm mt-1">{errors.course}</p>
            )}
          </div>

          {/* Year */}
          <div className="mb-4 basis-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              type="text"
              name="year"
              placeholder="Enter your year"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.year}
              onChange={handleChange}
            />
            {errors.year && (
              <p className="text-red-500 text-sm mt-1">{errors.year}</p>
            )}
          </div>
        </div>

        {/* ID */}

        <div className="flex justify-between gap-[1rem]">
          <div className="mb-4 basis-1/2">
            <label className="block text-sm font-medium text-gray-700">
              ID
            </label>
            <input
              type="text"
              name="id"
              placeholder="Enter your ID"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.id}
              onChange={handleChange}
            />
            {errors.id && (
              <p className="text-red-500 text-sm mt-1">{errors.id}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-6 basis-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-600 hover:text-blue-700">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
