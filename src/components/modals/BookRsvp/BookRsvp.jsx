import React, { useState } from "react";
import { X } from "lucide-react";
import Preloader from "../../Preloader/Preloader";

const BookRsvp = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show Preloader
    setIsLoading(true);

    setTimeout(() => {
      console.log("RSVP Details:", formData);

      // Hide Preloader
      setIsLoading(false);

      // Close Modal
      onClose();

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 2000); // Hide Preloader after 2 seconds
  };

  if (!isOpen) return null;

  return (
    <div className="modal z-40">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="inner-wrapper bg-white relative p-[2rem] m-[1rem]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-red-500"
          >
            <X size={30} />
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
      )}
    </div>
  );
};

export default BookRsvp;
