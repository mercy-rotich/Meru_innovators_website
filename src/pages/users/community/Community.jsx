import React, { useState } from "react";
import MegaDashboard from "../../../components/users/navbar/MegaDashboard";
import Footer from "../../../components/users/Footer/Footer";
import { Search, Filter, User, Github, TwitterIcon } from "lucide-react";

import { users } from "../../../components/data/users";

import { Locate } from "lucide-react";

import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import { Mail } from "lucide-react";

import { FaSquareXTwitter } from "react-icons/fa6";
import UserModal from "./UserModel";
import Subtitle from "../../../components/Subtitle/Subtitle";

const Community = () => {
  const [user, setUser] = useState(null);

  const openUser = (data) => {
    setUser(data);
  };

  const closeUser = () => {
    setUser(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div>
        <MegaDashboard />
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-400 text-white py-20 rounded-b-lg shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">COMMUNITIES</h1>
          <p className="text-lg mb-6">
            Connect with talented developers, designers, and tech enthusiasts
            from around the world
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-lg shadow-sm w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search users"
              className="px-4 py-2 rounded-l-lg focus:outline-none w-full"
            />
            <button className="p-3 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
              <Filter size={20} />
              <span>Filters</span>
            </button>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <User size={20} />
              <span>{users.length} users</span>
            </div>
          </div>
        </div>

        <Subtitle title={"COMMUNITY LEADS"} centered />

        {/* User Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[3rem]">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-least overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={() => {
                openUser({ name: "Dennis Peter" });
              }}
            >
              {/* User Avatar and Info */}
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-sm text-gray-600">{user.role}</p>
                  </div>
                </div>

                {/* Location and Company */}
                <div className="mt-4 text-sm text-gray-600">
                  <p>{user.location}</p>
                  <p>{user.company}</p>
                </div>

                {/* Bio */}
                <p className="mt-4 text-gray-700">{user.bio}</p>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                  <p>{user.stats.projects} Projects</p>
                  <p>{user.stats.contributions} Contributions</p>
                  <p>{user.stats.followers}k Followers</p>
                </div>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {user.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>

      <UserModal user={user} closeUser={closeUser} />
    </div>
  );
};

export default Community;
