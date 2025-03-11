import React, { useState } from "react";
import { Users, Shield, UserCheck, UserPlus, Book } from "lucide-react";
import AdminAccountLayout from "../components/AdminDashboardLayout/AdminAccountLayout";

import { usersData } from "./data";

const AdminUsers = () => {
  const [users, setUsers] = useState(usersData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExecutive, setSelectedExecutive] = useState(null);
  const [newRole, setNewRole] = useState("");

  // Open the modal to change role for an executive
  const openModal = (user) => {
    setSelectedExecutive(user);
    setNewRole(user.role);
    setIsModalOpen(true);
  };

  // Save the updated role for the selected executive
  const handleSaveRoleChange = () => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.email === selectedExecutive.email ? { ...u, role: newRole } : u
      )
    );
    setIsModalOpen(false);
    setSelectedExecutive(null);
  };

  return (
    <AdminAccountLayout>
      <div className="mx-auto p-[0.5rem] bg-gray-50 min-h-screen">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Manage Users</h2>
          <div className="flex items-center gap-3 bg-white p-2 rounded-sm shadow-least">
            <Users size={24} className="text-green-600" />
            <span className="text-gray-700 font-medium">User Management</span>
          </div>
        </div>

        {/* User Categories Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <UserCard
            title="Students"
            count={users.filter((u) => u.role === "Student").length}
            icon={<UserPlus size={32} />}
          />
          <UserCard
            title="Community Leads"
            count={users.filter((u) => u.role === "Community Lead").length}
            icon={<UserCheck size={32} />}
          />
          <UserCard
            title="Lecturers"
            count={users.filter((u) => u.role === "Lecturer").length}
            icon={<Shield size={32} />}
          />
          <UserCard
            title="Executives"
            count={users.filter((u) => u.role === "Executive").length}
            icon={<Users size={32} />}
          />
        </div>

        {/* Executives Table */}
        <div className="mt-10 bg-white shadow-least rounded-sm p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Executives
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-3 text-left">Image</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Bio</th>
                  <th className="p-3 text-left">Position</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Community</th>
                  <th className="p-3 text-left">Course</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((u) => u.role === "Executive")
                  .map((user, index) => (
                    <tr
                      key={index}
                      className="border-b border-neutral-300 hover:bg-green-500 transition"
                    >
                      <td className="p-3">
                        <img
                          src="https://images.pexels.com/photos/7009583/pexels-photo-7009583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="profile-icon"
                          className="w-[50px]"
                        />
                      </td>
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">Null</td>
                      <td className="p-3">Lead Web</td>
                      <td className="p-3">{user.role}</td>
                      <td className="p-3">{user.community}</td>
                      <td className="p-3 flex items-center gap-2">
                        <Book size={18} className="text-green-600" />
                        {user.course}
                      </td>
                      <td className="p-3">
                        <button
                          className="text-blue-600 hover:underline"
                          onClick={() => openModal(user)}
                        >
                          Change Role
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* All Users Table */}
        <div className="mt-10 bg-white shadow-least rounded-sm p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            User List
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Community</th>
                  <th className="p-3 text-left">Course</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-300 hover:bg-green-500 transition"
                  >
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3">{user.community}</td>
                    <td className="p-3 flex items-center gap-2">
                      <Book size={18} className="text-green-600" />
                      {user.course}
                    </td>
                    <td className="p-3">
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline ml-4">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for Changing Role */}
        {isModalOpen && selectedExecutive && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-sm shadow-lg max-w-[500px] w-[97%]">
              <h3 className="text-lg font-semibold mb-4">
                Change Role for {selectedExecutive.name}
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select New Role
                </label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full p-2 border rounded"
                  sm
                >
                  <option value="Executive">Executive</option>
                  <option value="Community Lead">Community Lead</option>
                  <option value="Student">Student</option>
                  <option value="Lecturer">Lecturer</option>
                </select>
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                  sm
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  sm
                  onClick={handleSaveRoleChange}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminAccountLayout>
  );
};

// User Category Card Component
const UserCard = ({ title, count, icon }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-sm flex items-center gap-5 border-l-4 border-green-500">
      <div className="bg-green-100 p-3 rounded-smll text-green-600">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
        <p className="text-2xl font-bold text-gray-900">{count}</p>
      </div>
    </div>
  );
};

// Sample User Data with Communities & Courses

export default AdminUsers;
