import React from "react";
import { Home, Folder, Users, MessageSquare } from "lucide-react";
import AdminAccountLayout from "../components/AdminDashboardLayout/AdminAccountLayout";

const AdminDashboard = () => {
  return (
    <AdminAccountLayout>
      <div className="mx-auto p-6 bg-gray-50 min-h-screen">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>
          <div className="flex items-center gap-3 bg-white p-2 rounded-lg shadow">
            <Home size={24} className="text-green-600" />
            <span className="text-gray-700 font-medium">
              Dashboard Overview
            </span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Users"
            value="1,245"
            icon={<Users size={32} />}
          />
          <StatCard
            title="Total Projects"
            value="312"
            icon={<Folder size={32} />}
          />
          <StatCard
            title="Messages"
            value="87"
            icon={<MessageSquare size={32} />}
          />
        </div>
      </div>
    </AdminAccountLayout>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-xl flex items-center gap-5 border-l-4 border-green-500">
      <div className="bg-green-100 p-3 rounded-full text-green-600">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
