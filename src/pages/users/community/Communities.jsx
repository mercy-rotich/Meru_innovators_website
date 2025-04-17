import React, { useState } from "react";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { CommunitiesData } from "./CommunitiesData";

const Communities = ({ handleShowCommunity }) => {
  // State to track joined communities
  const [joinedCommunities, setJoinedCommunities] = useState([]);
  // State for notification message
  const [notification, setNotification] = useState(null);

  // Function to handle joining a community
  const handleJoinCommunity = (id, e) => {
    e.stopPropagation(); // Prevent triggering the card's onClick
    
    if (joinedCommunities.includes(id)) {
      // Leave the community if already joined
      setJoinedCommunities(joinedCommunities.filter(communityId => communityId !== id));
    } else {
      // Check if user has already joined 2 communities
      if (joinedCommunities.length >= 2) {
        setNotification("You can only join up to 2 communities.");
        // Clear notification after 3 seconds
        setTimeout(() => setNotification(null), 3000);
        return;
      }
      // Join the community
      setJoinedCommunities([...joinedCommunities, id]);
    }
  };

  return (
    <div id="communities-section" className="mt-0 py-12 bg-fixed communities-bg relative">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out">
          {notification}
        </div>
      )}
      
      {/* Title Section */}
      <div className="text-center mb-5">
        <Subtitle title={"COMMUNITIES"} centered />
        <p className="text-gray-600 mt-0">
          You can join up to 2 communities. 
          Currently joined: {joinedCommunities.length}/2
        </p>
      </div>

      {/* Communities Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CommunitiesData.map((community) => (
            <div
              key={community.id}
              className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={() => {
                handleShowCommunity();
              }}
            >
              {/* Community Image */}
              <img
                src={community.img}
                alt={community.club}
                className="w-full h-48 object-cover"
              />

              {/* Community Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-800">
                    {community.club}
                  </h2>
                  <button
                    onClick={(e) => handleJoinCommunity(community.id, e)}
                    className={`px-4 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                      joinedCommunities.includes(community.id)
                        ? "bg-gray-200 text-gray-700"
                        : joinedCommunities.length >= 2
                        ? "bg-red-500 text-white cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                    disabled={!joinedCommunities.includes(community.id) && joinedCommunities.length >= 2}
                  >
                    {joinedCommunities.includes(community.id) ? "Leave" : "Join"}
                  </button>
                </div>
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