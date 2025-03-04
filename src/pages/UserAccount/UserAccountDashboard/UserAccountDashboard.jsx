import UserAccountLayout from "../UserAccountLayout/UserAccountLayout";
import {
  Edit,
  Settings,
  LogOut,
  Briefcase,
  Lightbulb,
  Users,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
const UserAccountDashboard = () => {
  const navigate = useNavigate();

  return (
    <UserAccountLayout>
      <div className="">
        {/* Welcome Section */}
        <div className="bg-white shadow-least rounded-sm p-6 flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1739992115892-36453a241b5e?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D"
            alt="User"
            className="w-16 h-16 rounded-smll border-2 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-500">Innovator | Software Engineer</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-[0.5rem] flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition">
            <Edit size={18} />
            Edit Profile
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-sm hover:bg-gray-600 transition"
            onClick={() => {
              navigate("/account/user-settings");
            }}
          >
            <Settings size={18} />
            Settings
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-sm hover:bg-red-600 transition"
            onClick={() => navigate("/")}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="mt-[0.5rem] grid grid-cols-1 md:grid-cols-3 gap-[0.5rem]">
          <div className="bg-white p-4 rounded-sm shadow-least flex items-center gap-4">
            <Briefcase size={28} className="text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold">12</h3>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-sm shadow-least flex items-center gap-4">
            <Lightbulb size={28} className="text-yellow-500" />
            <div>
              <h3 className="text-lg font-semibold">5</h3>
              <p className="text-gray-500 text-sm">Innovations</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-sm shadow-least flex items-center gap-4">
            <Users size={28} className="text-green-500" />
            <div>
              <h3 className="text-lg font-semibold">8</h3>
              <p className="text-gray-500 text-sm">Collaborations</p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-[0.5rem] bg-white p-6 rounded-sm shadow-least">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <ul className="space-y-3 text-gray-600">
            <li>🚀 Submitted a new project for review.</li>
            <li>💡 Started a collaboration with Alice on AI research.</li>
            <li>🔧 Updated profile information.</li>
          </ul>
        </div>
      </div>
    </UserAccountLayout>
  );
};

export default UserAccountDashboard;
