import { useState } from "react";

const AddEditBlogModal = ({ blog, closeModal }) => {
  const [title, setTitle] = useState(blog?.title || "");
  const [description, setDescription] = useState(blog?.description || "");

  const handleSubmit = () => {
    console.log("Saving:", { title, description });
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">{blog ? "Edit Blog" : "Add New Blog"}</h2>

        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-2 border rounded mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded mb-3"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="flex justify-end space-x-2">
          <button onClick={closeModal} className="bg-gray-400 text-white px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
            {blog ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditBlogModal;
