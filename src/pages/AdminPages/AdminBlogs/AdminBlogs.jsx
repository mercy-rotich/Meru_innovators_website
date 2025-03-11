import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import AdminAccountLayout from "../components/AdminDashboardLayout/AdminAccountLayout";
import { blogPosts as initialBlogPosts } from "../../users/blogs/Blogs";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState(initialBlogPosts);
  const [editBlog, setEditBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleSave = () => {
    setBlogs(blogs.map((blog) => (blog.id === editBlog.id ? editBlog : blog)));
    setShowModal(false);
  };

  return (
    <AdminAccountLayout>
      <div className="p-[0.3rem]">
        <h2 className="text-2xl font-semibold mb-4">Manage Blogs</h2>

        <div className="bg-white shadow-least rounded-sm p-4 overflow-x-auto">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Excerpt</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-t border-neutral-300 hover:bg-green-500"
                >
                  <td className="p-3 flex items-center gap-2">
                    {blog.icon}
                    {blog.title}
                  </td>
                  <td className="p-3">{blog.category}</td>
                  <td className="p-3">{blog.excerpt}</td>
                  <td className="p-3 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-[96%]">
            <div className="bg-white p-6 rounded-least shadow-sm max-w-[800px]">
              <h3 className="text-xl font-semibold mb-4">Edit Blog</h3>
              <input
                type="text"
                value={editBlog?.title}
                className="w-full p-2 border border-neutral-300 rounded mb-3"
                onChange={(e) =>
                  setEditBlog({ ...editBlog, title: e.target.value })
                }
              />
              <textarea
                value={editBlog?.excerpt}
                className="w-full p-2 border border-neutral-300 rounded mb-3"
                onChange={(e) =>
                  setEditBlog({ ...editBlog, excerpt: e.target.value })
                }
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded border-neutral-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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

export default AdminBlogs;
