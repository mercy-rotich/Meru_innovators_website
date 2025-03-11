import React, { useState } from "react";
import { Pencil, Trash2, PlusCircle } from "lucide-react";
import AdminAccountLayout from "../components/AdminDashboardLayout/AdminAccountLayout";

const initialTestimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    feedback:
      "The Innovators Club helped me connect with like-minded tech enthusiasts!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Designer",
    feedback: "A great place to brainstorm and build new ideas.",
  },
];

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [editTestimonial, setEditTestimonial] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    feedback: "",
  });

  // Handle Edit Click
  const handleEdit = (testimonial) => {
    setEditTestimonial(testimonial);
    setShowModal(true);
  };

  // Handle Delete Testimonial
  const handleDelete = (id) => {
    setTestimonials(
      testimonials.filter((testimonial) => testimonial.id !== id)
    );
  };

  // Handle Save Changes
  const handleSave = () => {
    setTestimonials(
      testimonials.map((t) =>
        t.id === editTestimonial.id ? editTestimonial : t
      )
    );
    setShowModal(false);
  };

  // Handle Add New Testimonial
  const handleAdd = () => {
    if (newTestimonial.name && newTestimonial.role && newTestimonial.feedback) {
      setTestimonials([...testimonials, { id: Date.now(), ...newTestimonial }]);
      setNewTestimonial({ name: "", role: "", feedback: "" });
    }
  };

  return (
    <AdminAccountLayout>
      <div className="p-[0.5rem]">
        <h2 className="text-2xl font-semibold mb-4">Manage Testimonials</h2>

        {/* Add Testimonial Form */}
        <div className="bg-white p-4 rounded-sm shadow-least mb-6">
          <h3 className="text-lg font-semibold mb-3">Add New Testimonial</h3>
          <input
            type="text"
            placeholder="Name"
            value={newTestimonial.name}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, name: e.target.value })
            }
            className="w-full p-2 border rounded mb-3 border-neutral-300"
          />
          <input
            type="text"
            placeholder="Role"
            value={newTestimonial.role}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, role: e.target.value })
            }
            className="w-full p-2 border rounded mb-3 border-neutral-300"
          />
          <textarea
            placeholder="Feedback"
            value={newTestimonial.feedback}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, feedback: e.target.value })
            }
            className="w-full p-2 border rounded mb-3 border-neutral-300"
          />
          <button
            onClick={handleAdd}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
          >
            <PlusCircle size={18} /> Add Testimonial
          </button>
        </div>

        {/* Testimonials Table */}
        <div className="bg-white shadow-least rounded-sm p-4 overflow-x-auto">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Role</th>
                <th className="p-3">Feedback</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((testimonial) => (
                <tr
                  key={testimonial.id}
                  className="border-t hover:bg-green-500 border-neutral-300"
                >
                  <td className="p-3">{testimonial.name}</td>
                  <td className="p-3">{testimonial.role}</td>
                  <td className="p-3">{testimonial.feedback}</td>
                  <td className="p-3 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
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
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Edit Testimonial</h3>
              <input
                type="text"
                value={editTestimonial?.name}
                className="w-full p-2 border rounded mb-3"
                onChange={(e) =>
                  setEditTestimonial({
                    ...editTestimonial,
                    name: e.target.value,
                  })
                }
              />
              <input
                type="text"
                value={editTestimonial?.role}
                className="w-full p-2 border rounded mb-3"
                onChange={(e) =>
                  setEditTestimonial({
                    ...editTestimonial,
                    role: e.target.value,
                  })
                }
              />
              <textarea
                value={editTestimonial?.feedback}
                className="w-full p-2 border rounded mb-3"
                onChange={(e) =>
                  setEditTestimonial({
                    ...editTestimonial,
                    feedback: e.target.value,
                  })
                }
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded"
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

export default AdminTestimonials;
