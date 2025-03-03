import React from "react";
import UserAccountLayout from "../UserAccountLayout/UserAccountLayout";
import { Edit, Mail, Phone, Calendar } from "lucide-react";

const Profile = () => {
  return (
    <UserAccountLayout>
      <div className="i mx-auto">
        {/* Profile Card */}
        <div className="bg-white shadow-least rounded-sm p-6 flex flex-col items-center text-center">
          <img
            src="/profile-placeholder.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-steelBlue shadow-least"
          />
          <h2 className="text-2xl font-semibold mt-4">John Doe</h2>
          <p className="text-gray-600">Software Engineer | Innovator</p>
          <p className="text-gray-500 text-sm">Joined: Jan 10, 2023</p>

          <button className="mt-4 flex items-center gap-2 bg-steelBlue text-white px-4 py-2 rounded-sm hover:bg-blue-400 transition-all">
            <Edit size={16} />
            Edit Profile
          </button>
        </div>

        {/* User Details Section */}
        <div className="mt-[0.5rem] bg-white shadow-least rounded-sm p-6">
          <h3 className="text-xl font-semibold mb-4 text-steelBlue">
            User Information
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-green-600" />
              <span className="text-gray-700">johndoe@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-green-600" />
              <span className="text-gray-700">+123 456 7890</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-green-600" />
              <span className="text-gray-700">Member Since: January 2023</span>
            </div>
          </div>
        </div>
      </div>
    </UserAccountLayout>
  );
};

export default Profile;
