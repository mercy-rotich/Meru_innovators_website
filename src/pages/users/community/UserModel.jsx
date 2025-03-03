import React from "react";
import { Mail, Github, Twitter, MapPin, X } from "lucide-react"; // Added X icon

import "./userModal.css";

const UserModal = ({ user, closeUser }) => {
  // Added onClose prop for closing the modal
  return (
    <div
      className={`fixed inset-0 bg-black/80 flex justify-center items-center p-4 z-50 ${
        user ? "visible" : "hidden"
      }`}
    >
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-xl max-w-[900px] w-[90%] overflow-y-scroll inner-modal">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            {/* Profile Image */}
            <img
              src="https://images.pexels.com/photos/14723868/pexels-photo-14723868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile-image"
              className="w-20 h-20 rounded-full object-cover"
            />

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-700" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Name and Location */}
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-gray-600" />
              <p className="text-gray-600">London, UK</p>
            </div>
            <h2 className="text-2xl font-bold mt-2">Marcus Thompson</h2>
          </div>
        </div>

        {/* Bio Section */}
        <div className="p-6 border-b border-gray-200">
          <p className="text-gray-700">
            Researching large language models and their applications. PhD in
            Machine Learning from UCL.
          </p>
        </div>

        {/* GitHub Statistics Section */}
        <div className="p-6 border-b border-gray-200">
          <h4 className="text-xl font-semibold mb-4">GitHub Statistics</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-gray-600">Repositories</p>
              <p className="text-2xl font-bold">28</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Contributions</p>
              <p className="text-2xl font-bold">623</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Followers</p>
              <p className="text-2xl font-bold">1.8k</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Stars</p>
              <p className="text-2xl font-bold">456</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="p-6 border-b border-gray-200">
          <h4 className="text-xl font-semibold mb-4">Skills & Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {["Python", "PyTorch", "NLP", "Deep Learning", "MLOps"].map(
              (skill, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </button>
              )
            )}
          </div>
        </div>

        {/* Badges Section */}
        <div className="p-6">
          <h4 className="text-xl font-semibold mb-4">Badges & Achievements</h4>
          <div className="flex flex-wrap gap-2">
            {["Research Fellow", "Paper Author", "Tech Speaker"].map(
              (badge, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
          onClick={closeUser}
        >
          <X size={30} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default UserModal;
