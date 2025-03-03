import React from "react";
import UserAccountLayout from "../UserAccountLayout/UserAccountLayout";
import { User, Lock, Bell, Trash2, Mail, KeyRound } from "lucide-react";

const UserSettings = () => {
  return (
    <UserAccountLayout>
      <div className="p-6 max-w-3xl mx-auto">
        {/* Page Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          ⚙️ User Settings
        </h2>

        {/* Profile Settings */}
        <div className="bg-white shadow-least rounded-sm p-6 mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 mb-4">
            <User size={20} className="text-blue-500" />
            Profile Settings
          </h3>

          <div className="flex flex-col gap-4">
            <label className="flex flex-col">
              <span className="text-gray-600">Full Name</span>
              <input
                type="text"
                placeholder="John Doe"
                className="border rounded-sm p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-600">Email</span>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="border rounded-sm p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </label>

            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition">
              Save Changes
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white shadow-least rounded-sm p-6 mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 mb-4">
            <Lock size={20} className="text-red-500" />
            Security Settings
          </h3>

          <div className="flex flex-col gap-4">
            <label className="flex flex-col">
              <span className="text-gray-600 flex items-center gap-2">
                <KeyRound size={16} className="text-gray-500" />
                New Password
              </span>
              <input
                type="password"
                placeholder="********"
                className="border rounded-sm p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-500" />
              <span className="text-gray-600">
                Enable Two-Factor Authentication
              </span>
            </label>

            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-600 transition">
              Update Security
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white shadow-least rounded-sm p-6 mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 mb-4">
            <Bell size={20} className="text-yellow-500" />
            Notification Preferences
          </h3>

          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-500" />
              <span className="text-gray-600 flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                Receive Email Notifications
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-500" />
              <span className="text-gray-600">Receive Push Notifications</span>
            </label>

            <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-sm hover:bg-yellow-600 transition">
              Save Preferences
            </button>
          </div>
        </div>

        {/* Delete Account */}
        <div className="bg-white shadow-least rounded-sm p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 mb-4">
            <Trash2 size={20} className="text-gray-600" />
            Delete Account
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Deleting your account will permanently remove all your data. This
            action cannot be undone.
          </p>

          <button className="text-white px-4 py-2 rounded-sm hover:bg-gray-700 transition bg-red-500 ">
            Delete Account
          </button>
        </div>
      </div>
    </UserAccountLayout>
  );
};

export default UserSettings;
