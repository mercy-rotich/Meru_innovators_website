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

import SubHero from "../../../components/users/Hero/SubHero";

import "./Community.css";

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
      <SubHero title={"COMMUNITY"} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center bg-white rounded-sm border border-neutral-300 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search users"
              className="px-4 py-2 rounded-smlg focus:outline-none w-full"
            />
            <button className="p-3 bg-orange-500 text-white rounded-smlg hover:bg-orange-600 transition">
              <Search size={20} />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-sm border border-neutral-300 hover:bg-gray-100 transition">
              <Filter size={20} />
              <span>Filters</span>
            </button>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-sm border border-neutral-300">
              <User size={20} />
              <span>{users.length} Users</span>
            </div>
          </div>
        </div>
      </div>
      <Communities />
      <div className="bg-green-200 pb-[4rem]">
        <div
          className="container py-[3rem]"
          style={{
            paddingTop: "3rem",
          }}
        >
          <Subtitle title="COMMUNITY LEADS" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-sm shadow-least hover:shadow-xl transition duration-300 cursor-pointer p-6"
                onClick={() => handleUserSelect(user)}
              >
                <div className="flex justify-center">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-20 h-20 rounded-smll object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-sm text-gray-600">{user.role}</p>
                </div>
                <div className="mt-4 text-sm text-gray-600 text-center">
                  <p>{user.location}</p>
                  <p>{user.company}</p>
                </div>
                <p className="mt-4 text-gray-700 text-center">{user.bio}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-smll text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-center gap-4 text-sm text-gray-600">
                  <p>{user.stats.projects} Projects</p>
                  <p>{user.stats.contributions} Contributions</p>
                  <p>{user.stats.followers}k Followers</p>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {user.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-smll text-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <UserModal user={selectedUser} closeUser={handleUserClose} />
    </div>
  );
};

export default Community;
