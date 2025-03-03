import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Calendar,
  MessageSquare,
  Folder,
  Settings,
  LogOut,
  User,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import "./UserAccountLayout.css";

const UserAccountSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-green-600  user-account-sidebar text-white flex flex-col p-4 shadow-lg">
      {/* Logo / Brand */}

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 flex-1">
        <SidebarLink
          to="/account/dashboard"
          icon={<Home size={20} />}
          text="Dashboard"
        />
        <SidebarLink
          to="/account/community"
          icon={<Users size={20} />}
          text="Community"
        />
        <SidebarLink to="/events" icon={<Calendar size={20} />} text="Events" />
        <SidebarLink
          to="/account/projects"
          icon={<Folder size={20} />}
          text="Projects"
        />
        {/* <SidebarLink
          to="/messages"
          icon={<MessageSquare size={20} />}
          text="Messages"
        /> */}
        <SidebarLink
          to="/account/profile"
          icon={<User size={20} />}
          text="Profile"
        />
        <SidebarLink
          to="/settings"
          icon={<Settings size={20} />}
          text="Settings"
        />
      </nav>

      {/* Logout Button */}
      <button
        className="mt-6 flex items-center gap-3 text-red-500 hover:text-red-400 transition-all logout relative"
        onClick={() => navigate("/")}
      >
        <LogOut size={20} />
        <span className="sidebar-subtitle">Logout</span>
      </button>
    </div>
  );
};

// Sidebar Link Component with Active State & Hover Effects
const SidebarLink = ({ to, icon, text }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 p-3  relative rounded-lg transition-all duration-300 
        ${
          isActive
            ? "bg-green-800 text-white scale-105"
            : "text-gray-300 hover:text-white hover:bg-green-700 hover:scale-105"
        }`}
    >
      {icon}
      <span className="sidebar-subtitle">{text}</span>
    </Link>
  );
};

export default UserAccountSidebar;
