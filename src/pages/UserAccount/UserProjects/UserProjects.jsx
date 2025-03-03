import React from "react";
import UserAccountLayout from "../UserAccountLayout/UserAccountLayout";
import { FolderOpen, Plus, CheckCircle, Clock, Briefcase } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "AI Chatbot Development",
    status: "Ongoing",
    deadline: "Aug 30, 2024",
    progress: 75,
  },
  {
    id: 2,
    name: "E-commerce Platform",
    status: "Completed",
    deadline: "July 15, 2024",
    progress: 100,
  },
  {
    id: 3,
    name: "Blockchain Research",
    status: "Pending",
    deadline: "Sept 10, 2024",
    progress: 20,
  },
];

const UserProjects = () => {
  return (
    <UserAccountLayout>
      <div className="">
        {/* Page Header */}
        <div className="bg-white shadow-least rounded-sm p-6 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            📂 User Projects
          </h2>
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition">
            <Plus size={18} />
            Add New Project
          </button>
        </div>

        {/* Project Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[0.5rem] mt-[0.5rem]">
          <div className="bg-white p-6 rounded-sm shadow-least flex items-center gap-4">
            <FolderOpen className="text-blue-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Total Projects</h3>
              <p className="text-gray-500 text-sm">3 Projects</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-least flex items-center gap-4">
            <CheckCircle className="text-green-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Completed</h3>
              <p className="text-gray-500 text-sm">1 Project</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-least flex items-center gap-4">
            <Clock className="text-yellow-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Ongoing</h3>
              <p className="text-gray-500 text-sm">2 Projects</p>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="mt-[0.5rem] bg-white p-6 rounded-sm shadow-least">
          <h3 className="text-lg font-semibold text-gray-800">
            🛠️ Project List
          </h3>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 text-left">Project Name</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Deadline</th>
                <th className="p-3 text-left">Progress</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-neutral-300 hover:bg-gray-50 transition"
                >
                  <td className="p-3">{project.name}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-sm ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : project.status === "Ongoing"
                          ? "bg-yellow-100 text-orange-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="p-3">{project.deadline}</td>
                  <td className="p-3">
                    <div className="w-full bg-gray-200 rounded-smll h-2">
                      <div
                        className={`h-2 rounded-smll ${
                          project.progress === 100
                            ? "bg-green-500"
                            : "bg-blue-500"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </UserAccountLayout>
  );
};

export default UserProjects;
