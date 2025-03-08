import { useState } from "react";
import UserAccountLayout from "../UserAccountLayout/UserAccountLayout";

import AddEditBlogModal from "./AddEditBlogModal";

// Sample blog data

import { initialBlogs } from "./data";

// Helper function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const UserBlogs = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const openModal = (blog = null) => {
    setSelectedBlog(blog);
    setTitle(blog?.title || "");
    setDescription(blog?.description || "");
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
      alert("Blog deleted successfully!");
    }
  };

  const handleSubmit = () => {
    if (!title || !description)
      return alert("Title and description are required!");

    if (selectedBlog) {
      // Edit existing blog
      setBlogs(
        blogs.map((blog) =>
          blog.id === selectedBlog.id ? { ...blog, title, description } : blog
        )
      );
    } else {
      // Add new blog
      setBlogs([
        ...blogs,
        {
          id: Date.now(),
          title,
          description,
          date: new Date().toISOString().split("T")[0],
        },
      ]);
    }

    setModalOpen(false);
  };

  return (
    <UserAccountLayout>
      <div className="mx-auto p-4">
        <div className="flex justify-between items-center bg-white p-[1rem]">
          <h2 className="text-2xl font-semibold">My Blogs</h2>
          <button
            onClick={() => openModal()}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Add Blog
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-least rounded-sm ">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="p-3 text-start">Title</th>
                <th className="p-3 text-start">Description</th>
                <th className="p-3 text-start">Published</th>
                <th className="p-3 text-start">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="">
                  <td className="p-3 ">{blog.title}</td>
                  <td className="p-3 ">{truncateText(blog.description, 20)}</td>
                  <td className="p-3 ">{blog.date}</td>
                  <td className="p-3  text-center flex">
                    <button
                      onClick={() => openModal(blog)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-md ">
              <h3 className="text-lg font-semibold mb-4">
                {selectedBlog ? "Edit Blog" : "Add New Blog"}
              </h3>
              <input
                type="text"
                placeholder="Blog Title"
                className="w-full p-2 border rounded mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 border rounded mb-2"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  {selectedBlog ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </UserAccountLayout>
  );
};

export default UserBlogs;
