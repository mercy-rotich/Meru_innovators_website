import React, { useState, useEffect } from "react";
import { Pencil, Trash2, PlusCircle } from "lucide-react";
import AdminAccountLayout from "../components/AdminDashboardLayout/AdminAccountLayout";
import { events as initialEvents } from "../../Events/EventsCustom";

const AdminEvents = () => {
  const [eventss, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setEvents([...initialEvents]);
  }, []);

  const handleEdit = (event) => {
    setEditEvent(event);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setEvents(eventss.filter((event) => event.id !== id));
  };

  const handleSave = () => {
    setEvents(eventss.map((ev) => (ev.id === editEvent.id ? editEvent : ev)));
    setShowModal(false);
  };

  const handleAddEvent = () => {
    setEditEvent({
      id: Date.now(),
      title: "",
      venue: "",
      date: "",
      location: "",
    });
    setShowModal(true);
  };

  return (
    <AdminAccountLayout>
      <div className="p-[0.5rem]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Manage Events</h2>
          <button
            onClick={handleAddEvent}
            className="bg-blue-600 text-white px-4 py-2 flex items-center gap-2 rounded hover:bg-blue-700"
          >
            <PlusCircle size={18} />
            Add Event
          </button>
        </div>

        <div className="bg-white shadow-least rounded-lg p-4 overflow-x-auto">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Event</th>
                <th className="p-3">Venue</th>
                <th className="p-3">Time</th>
                <th className="p-3">Location</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {eventss.map((event) => (
                <tr
                  key={event.id}
                  className="border-t border-neutral-300 hover:bg-green-500"
                >
                  <td className="p-3">{event.title}</td>
                  <td className="p-3">{event.venue}</td>
                  <td className="p-3">{event.date}</td>
                  <td className="p-3">{event.location}</td>
                  <td className="p-3 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(event)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
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

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-[700px] w-[95%]">
              <h3 className="text-xl font-semibold mb-4">
                {editEvent?.id ? "Edit Event" : "Add Event"}
              </h3>
              <input
                type="text"
                value={editEvent?.title || ""}
                className="w-full p-2 border border-neutral-300 rounded mb-3"
                placeholder="Event Title"
                onChange={(e) =>
                  setEditEvent({ ...editEvent, title: e.target.value })
                }
              />
              <input
                type="text"
                value={editEvent?.venue || ""}
                className="w-full p-2 border border-neutral-300 rounded mb-3"
                placeholder="Venue"
                onChange={(e) =>
                  setEditEvent({ ...editEvent, venue: e.target.value })
                }
              />
              <input
                type="text"
                value={editEvent?.date || ""}
                className="w-full p-2 border border-neutral-300 rounded mb-3"
                placeholder="Date & Time"
                onChange={(e) =>
                  setEditEvent({ ...editEvent, date: e.target.value })
                }
              />
              <input
                type="text"
                value={editEvent?.location || ""}
                className="w-full p-2 border border-neutral-300 rounded mb-3"
                placeholder="Location"
                onChange={(e) =>
                  setEditEvent({ ...editEvent, location: e.target.value })
                }
              />

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-neutral-300  rounded"
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

export default AdminEvents;
