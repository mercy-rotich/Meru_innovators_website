import React from "react";

const EventCard = ({ event }) => {
  return (
    <div
      key={event.id}
      className="bg-white rounded-sm border border-neutral-300 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex justify-between flex-col"
    >
      <div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {event.title}
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Date:</span> {event.date}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-semibold">Location:</span> {event.location}
          </p>
          <p className="text-gray-700 mb-4">{event.description}</p>
        </div>
      </div>
      <div className="flex justify-between mx-6 gap-[0.5rem] pb-[1rem]">
        <button className="bg-blue-600 text-white py-2 rounded-sm font-semibold hover:bg-blue-700 transition-colors basis-1/2">
          Learn More
        </button>
        <button className="bg-blue-600 text-white py-2 rounded-sm font-semibold hover:bg-blue-700 transition-colors basis-1/2">
          Book RSV
        </button>
      </div>
    </div>
  );
};

export default EventCard;
