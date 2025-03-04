import React from "react";

import { X } from "lucide-react";

const AddProjectModal = ({ newProject, addProject, handleChange,setShowModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 bg-black/50">
      <div className="bg-white p-6 rounded-sm max-w-[500px] w-[97%]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add New Project</h3>
          <X className="cursor-pointer" onClick={() => setShowModal(false)} />
        </div>

        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={newProject.name}
          onChange={handleChange}
          className="border p-2 border-neutral-300 w-full mb-2 rounded-sm"
        />

        <input
          type="text"
          name="liveLink"
          placeholder="Project Link (Optional)"
          value={newProject.liveLink}
          onChange={handleChange}
          className="border p-2 border-neutral-300 w-full mb-2 rounded-sm"
        />

        <select
          name="status"
          value={newProject.status}
          onChange={handleChange}
          className="border p-2 border-neutral-300 w-full mb-2 rounded-sm bg-transparent"
        >
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={newProject.description}
          onChange={handleChange}
          className="border border-neutral-300 p-2 w-full mb-2 rounded-sm"
        ></textarea>

        <button
          onClick={addProject}
          className="bg-blue-500 text-white px-4 py-2 rounded-sm w-full"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddProjectModal;
