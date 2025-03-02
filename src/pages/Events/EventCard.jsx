import React from "react";

const EventCard = ({ event, openRsvpModal }) => {
  return (
    <div className="relative w-full h-96 rounded-sm overflow-hidden border border-neutral-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Background Image */}
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
        <h2 className="text-xl font-bold mb-2">{event.title}</h2>
        <p className="text-sm mb-1">
          <span className="font-semibold">Date:</span> {event.date}
        </p>
        <p className="text-sm mb-2">
          <span className="font-semibold">Location:</span> {event.location}
        </p>
        <p className="text-sm mb-4">{event.description}</p>

        {/* Button Container */}
        <div className="flex justify-between gap-2">
          <button className="w-1/2 bg-blue-600 text-white py-2 rounded-sm font-semibold hover:bg-blue-700 transition-colors">
            Learn More
          </button>
          <button
            className="w-1/2 bg-green-600 text-white py-2 rounded-sm font-semibold hover:bg-green-700 transition-colors"
            onClick={openRsvpModal}
          >
            Book RSVP
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
