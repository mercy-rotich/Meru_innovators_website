import React, { useState } from "react";
import MegaDashboard from "../../../components/users/navbar/MegaDashboard";
import Footer from "../../../components/users/Footer/Footer";
import { Search, Filter, User } from "lucide-react";
import { users } from "../../../components/data/users";
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import UserModal from "./UserModel";
import Subtitle from "../../../components/Subtitle/Subtitle";
import Communities from "./Communities";

const Community = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (userData) => {
    setSelectedUser(userData);
  };

  const handleUserClose = () => {
    setSelectedUser(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <MegaDashboard />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-400 text-white py-20 rounded-b-lg shadow-lg text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">COMMUNITIES</h1>
          <p className="text-lg mb-6">
            Connect with talented developers, designers, and tech enthusiasts
            worldwide.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center bg-white rounded-lg shadow-sm w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search users"
              className="px-4 py-2 rounded-l-lg focus:outline-none w-full"
            />
            <button className="p-3 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition">
              <Search size={20} />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
              <Filter size={20} />
              <span>Filters</span>
            </button>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <User size={20} />
              <span>{users.length} Users</span>
            </div>
          </div>
        </div>
      </div>

      <Communities />
      <Subtitle title="COMMUNITY LEADS" centered />

      {/* User Cards */}
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-md shadow-least hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => handleUserSelect(user)}
            >
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
                <div className="mt-4 text-sm text-gray-600">
                  <p>{user.location}</p>
                  <p>{user.company}</p>
                </div>
                <p className="mt-4 text-gray-700">{user.bio}</p>
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
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                  <p>{user.stats.projects} Projects</p>
                  <p>{user.stats.contributions} Contributions</p>
                  <p>{user.stats.followers}k Followers</p>
                </div>
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

      <UserModal user={selectedUser} closeUser={handleUserClose} />
    </div>
  );
};

export default Community;
