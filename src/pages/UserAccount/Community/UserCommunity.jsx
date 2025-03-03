import React from "react";
import UserAccountLayout from "../UserAccountLayout/UserAccountLayout";
import { Search, Users, MessageCircle, Flame } from "lucide-react";

const UserCommunity = () => {
  return (
    <UserAccountLayout>
      <div className="">
        {/* UserCommunity Header */}
        <div className="bg-white shadow-least rounded-sm p-6 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            👥 UserCommunity
          </h2>
          <div className="relative mt-4 md:mt-0">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search community..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Active Members */}
        <div className="mt-[0.5rem] bg-white p-6 rounded-sm shadow-least">
          <h3 className="text-sm font-semibold text-gray-800">
            🔥 Active Members
          </h3>
          <div className="flex gap-4 mt-4">
            {[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/45.jpg",
              "https://randomuser.me/api/portraits/men/76.jpg",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-blue-500"
              />
            ))}
          </div>
        </div>

        {/* UserCommunity Discussions */}
        <div className="mt-[0.5rem] bg-white p-6 rounded-sm shadow-least">
          <h3 className="text-sm font-semibold text-gray-800">
            💬 Recent Discussions
          </h3>
          <ul className="space-y-4 mt-4">
            <li className="p-4 bg-gray-50 rounded-md flex justify-between items-center">
              <div>
                <h4 className="text-md font-medium">
                  How to start an AI project?
                </h4>
                <p className="text-sm text-gray-500">
                  Posted by <span className="text-blue-500">Alice</span> · 2h
                  ago
                </p>
              </div>
              <MessageCircle size={20} className="text-blue-500" />
            </li>
            <li className="p-4 bg-gray-50 rounded-md flex justify-between items-center">
              <div>
                <h4 className="text-md font-medium">
                  Best coding resources in 2024
                </h4>
                <p className="text-sm text-gray-500">
                  Posted by <span className="text-blue-500">John</span> · 5h ago
                </p>
              </div>
              <MessageCircle size={20} className="text-blue-500" />
            </li>
          </ul>
        </div>

        {/* Trending Topics */}
        <div className="mt-[0.5rem] bg-white p-6 rounded-sm shadow-least">
          <h3 className="text-sm font-semibold text-gray-800">
            🔥 Trending Topics
          </h3>
          <ul className="space-y-2 mt-4">
            <li className="flex items-center gap-2 text-gray-700">
              <Flame size={18} className="text-red-500" /> Web3 & Blockchain
              Development
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Flame size={18} className="text-red-500" /> AI & Machine Learning
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Flame size={18} className="text-red-500" /> Startups &
              Innovations
            </li>
          </ul>
        </div>
      </div>
    </UserAccountLayout>
  );
};

export default UserCommunity;
