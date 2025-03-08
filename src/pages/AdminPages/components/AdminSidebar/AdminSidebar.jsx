import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  Calendar,
  Folder,
  Settings,
  LogOut,
  User,
  Book,
  MessageSquare,
  Image,
  Star,
  Users as CommunitiesIcon,
} from "lucide-react";

import "../../../UserAccount/UserAccountLayout/UserAccountLayout.css"

const AdminAccountSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-green-600 user-account-sidebar text-white flex flex-col p-4 shadow-lg">
     
      <nav className="flex flex-col gap-4 flex-1">
      
        <SidebarLink to="/admin/dashboard" icon={<Home size={20} />} text="Dashboard" />

      
        <SidebarLink to="/admin/users" icon={<Users size={20} />} text="Users" />
        <SidebarLink to="/admin/communities" icon={<CommunitiesIcon size={20} />} text="Communities" />

     
        <SidebarLink to="/admin/projects" icon={<Folder size={20} />} text="Projects" />

        <SidebarLink to="/admin/blogs" icon={<Book size={20} />} text="Blogs" />

        <SidebarLink to="/admin/testimonials" icon={<Star size={20} />} text="Testimonials" />

        <SidebarLink to="/admin/gallery" icon={<Image size={20} />} text="Gallery" />

    
        <SidebarLink to="/admin/events" icon={<Calendar size={20} />} text="Events" />
        <SidebarLink to="/admin/messages" icon={<MessageSquare size={20} />} text="Messages" />

    
        <SidebarLink to="/admin/profile" icon={<User size={20} />} text="Profile" />
        
        <SidebarLink to="/admin/user-settings" icon={<Settings size={20} />} text="Settings" />
      </nav>

   
      <button
        className="mt-4 mb-[1rem] flex items-center gap-3 bg-red-500 hover:text-red-400 transition-all logout relative h-[40px]"
        onClick={() => navigate("/")}
      >
        <LogOut size={20} />
        <span className="sidebar-subtitle">Logout</span>
      </button>
    </div>
  );
};


const SidebarLink = ({ to, icon, text }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center justify-center gap-3 p-3 relative rounded-sm transition-all duration-300 
        ${
          isActive
            ? "bg-green-800 text-white scale-105"
            : "text-gray-300 hover:text-white hover:bg-green-700 hover:rounded-sm hover:scale-105"
        }`}
    >
      {icon}
      <span className="sidebar-subtitle">{text}</span>
    </Link>
  );
};

export default AdminAccountSidebar;
