import React from "react";

import { useState } from "react";
import { X } from "lucide-react";

const BookRsvp = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("RSVP Details:", formData);
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="inner-wrapper relative p-[2rem]">
        <div className="">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
          >
            <X size={24} />
          </button>
          <h2 className="text-xl font-bold mb-4 text-center">Book Your RSVP</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-neutral-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-neutral-300 rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-neutral-300 rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Additional Message (Optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-neutral-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookRsvp;
