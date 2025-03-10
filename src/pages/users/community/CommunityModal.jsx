import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";
import { MdDescription, MdGroup } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { BiCodeAlt } from "react-icons/bi";

import Subtitle from "../../../components/Subtitle/Subtitle";

import Badge from "./Badge";

// Badge Component

const CommunityModal = ({ onClose }) => {
  const community = {
    name: "Community Name",
    community_lead: "John Doe",
    co_lead: "Jane Smith",
    secretary: "Alex Johnson",
    email: "community@example.com",
    phone_number: "1234567890",
    description: "This is a sample community",
    founding_date: "2023-01-01",
    is_recruiting: true,
    social_media: [
      { id: 1, platform: "Twitter", url: "https://twitter.com/community" },
    ],
    tech_stack: ["Kotlin", "Flutter", "Git", "Firebase", "Room"],
    members: [
      {
        id: 1,
        name: "Kevin Ochieng",
        email: "kizahkevinianh001@gmail.com",
        joined_at: "2025-03-06T14:49:43.220567Z",
      },
    ],
    total_members: 1,
    sessions: [
      {
        day: "FRIDAY",
        start_time: "09:00",
        end_time: "11:00",
        meeting_type: "VIRTUAL",
        location: "Zoom",
      },
    ],
  };

  return (
    <div className="inset-0 z-30 fixed bg-black/70 flex items-center justify-center">
      <div className="max-w-[900px] w-[90%] bg-white rounded-lg shadow-lg p-6 relative h-[90%] max-h-[90%]  overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-2xl"
        >
          &times;
        </button>

        {/* Title */}
        <div className="text-center mb-5">
          <Subtitle title={community.name} />
          <p className="text-gray-500 border-b border-neutral-300 pb-[0.3rem]">
            A Tech Community
          </p>
        </div>

        {/* Community Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <FaUser className="text-blue-500" />
            <span>
              <strong>Lead:</strong> {community.community_lead}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <MdGroup className="text-green-500" />
            <span>
              <strong>Co-Lead:</strong> {community.co_lead}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <FaUsers className="text-orange-500" />
            <span>
              <strong>Secretary:</strong> {community.secretary}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-red-500" />
            <span>
              <strong>Email:</strong> {community.email}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <FaPhone className="text-blue-400" />
            <span>
              <strong>Phone:</strong> {community.phone_number}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-purple-500" />
            <span>
              <strong>Founded:</strong> {community.founding_date}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <MdDescription className="text-gray-700" />
            <span>
              <strong>Description:</strong> {community.description}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <FaGlobe className="text-green-500" />
            <span className="flex items-center space-x-2">
              <strong>Recruiting:</strong>
              <Badge
                text={community.is_recruiting ? "Yes" : "No"}
                color={community.is_recruiting ? "bg-green-200" : "bg-red-200"}
                textColor={
                  community.is_recruiting ? "text-green-700" : "text-red-700"
                }
              />
            </span>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-5">
          <h3 className="font-semibold text-lg">Social Media</h3>
          <div className="flex items-center space-x-4 mt-2">
            {community.social_media.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:underline"
              >
                <IoLogoTwitter className="text-xl" />
                <span>{social.platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-5">
          <h3 className="font-semibold text-lg">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {community.tech_stack.map((tech, index) => (
              <Badge
                key={index}
                text={tech}
                color="bg-blue-100"
                textColor="text-blue-700"
              />
            ))}
          </div>
        </div>

        {/* Members */}
        <div className="mt-5">
          <h3 className="font-semibold text-lg">
            Members{" "}
            <Badge
              text={community.total_members}
              color="bg-gray-300"
              textColor="text-gray-800"
            />
          </h3>
          {community.members.map((member) => (
            <div key={member.id} className="mt-2 flex items-center space-x-2">
              <FaUser className="text-green-500" />
              <span>
                {member.name} -{" "}
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {member.email}
                </a>
              </span>
            </div>
          ))}
        </div>

        {/* Sessions */}
        <div className="mt-5">
          <h3 className="font-semibold text-lg">Sessions</h3>
          {community.sessions.map((session, index) => (
            <div key={index} className="mt-2 flex items-center space-x-2">
              <FaCalendarAlt className="text-purple-500" />
              <span>
                <strong>{session.day}</strong>: {session.start_time} -{" "}
                {session.end_time} ({session.meeting_type}, {session.location})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityModal;
