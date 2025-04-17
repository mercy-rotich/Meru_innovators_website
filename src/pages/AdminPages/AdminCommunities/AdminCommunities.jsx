import React, { useState } from "react";
import AdminAccountLayout from "../components/AdminDashboardLayout/AdminAccountLayout";

const initialCommunities = [
  {
    id: 1,
    name: "Android Enthusiasts",
    description: "A community for Android app developers and enthusiasts.",
  },
  {
    id: 2,
    name: "Web Developers",
    description: "Community for web development and design professionals.",
  },
  {
    id: 3,
    name: "Graphic Designers",
    description: "A hub for creative graphic design experts.",
  },
  {
    id: 4,
    name: "Blockchain",
    description: "A hub for creative graphic design experts.",
  },
  {
    id: 5,
    name: "Cloud computing",
    description: "A hub for creative graphic design experts.",
  },
  {
    id: 6,
    name: "Dev Ops",
    description: "A hub for creative graphic design experts.",
  },
  {
    id: 7,
    name: "Robotics",
    description: "A hub for creative graphic design experts.",
  },
  {
    id: 7,
    name: "Machine Learning",
    description: "A hub for creative graphic design experts.",
  },
  {
    id: 8,
    name: "Cybersecurity",
    description: "A hub for creative graphic design experts.",
  },
  {
    id: 9,
    name: "Physics",
    description: "A hub for creative graphic design experts.",
  },
];

const AdminCommunities = () => {
  const [communities, setCommunities] = useState(initialCommunities);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCommunityName, setNewCommunityName] = useState("");
  const [newCommunityDescription, setNewCommunityDescription] = useState("");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this community?")) {
      setCommunities(communities.filter((comm) => comm.id !== id));
    }
  };

  const handleAddCommunity = () => {
    if (newCommunityName.trim() === "") {
      alert("Community name is required.");
      return;
    }
    const newCommunity = {
      id: Date.now(),
      name: newCommunityName,
      description: newCommunityDescription,
    };
    setCommunities([...communities, newCommunity]);
    setIsAddModalOpen(false);
    setNewCommunityName("");
    setNewCommunityDescription("");
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setNewCommunityName("");
    setNewCommunityDescription("");
  };

  return (
    <AdminAccountLayout>
      <div className="mx-auto p-[0.5rem] bg-gray-50 min-h-screen">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-4 bg-white p-[0.5rem]">
          <h2 className="text-3xl font-bold text-gray-800 ">
            Manage Communities
          </h2>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Community
          </button>
        </div>

        {/* Communities Table */}
        <div className="bg-white shadow-least rounded-sm overflow-x-auto p-6">
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {communities.map((community) => (
                <tr
                  key={community.id}
                  className="border-b border-neutral-300 hover:bg-green-500 transition"
                >
                  <td className="p-3">{community.name}</td>
                  <td className="p-3">{community.description}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(community.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Community Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-[500px] w-[97%] relative">
              {/* Close (X) Button */}
              <button 
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h3 className="text-xl font-semibold mb-4">Add New Community</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Community Name
                </label>
                <input
                  type="text"
                  value={newCommunityName}
                  onChange={(e) => setNewCommunityName(e.target.value)}
                  placeholder="Enter community name"
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={newCommunityDescription}
                  onChange={(e) => setNewCommunityDescription(e.target.value)}
                  placeholder="Enter description"
                  rows="3"
                  className="w-full p-2 border rounded mt-1"
                ></textarea>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCommunity}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Add Community
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminAccountLayout>
  );
};

export default AdminCommunities;