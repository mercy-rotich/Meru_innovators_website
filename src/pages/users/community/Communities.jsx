import React from "react";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { CommunitiesData } from "./CommunitiesData";

const Communities = () => {
  return (
    <div
      className="mt-20 py-12 bg-fixed communities-bg"
      // style={{
      //   background: "linear-gradient(to bottom, #fef9c3, #fef9c3)",
      //   backgroundAttachment: "fixed",
      // }}
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <Subtitle title={"COMMUNITIES"} centered />
      </div>

      {/* Communities Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CommunitiesData.map((community) => (
            <div
              key={community.id}
              className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Community Image */}
              <img
                src={community.img}
                alt={community.club}
                className="w-full h-48 object-cover"
              />

              {/* Community Details */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {community.club}
                </h2>
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-500">
                    {community.members} members
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {community.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communities;
