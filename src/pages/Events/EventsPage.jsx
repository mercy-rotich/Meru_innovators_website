import React, { useState } from "react";
import MegaDashboard from "../../components/users/navbar/MegaDashboard";
import Footer from "../../components/users/Footer/Footer";
import Subtitle from "../../components/Subtitle/Subtitle";
import SubHero from "../../components/users/Hero/SubHero";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Locate } from "lucide-react";
import { hotEvents } from "./EventsCustom";
import { Play, X } from "lucide-react";
import { motion } from "framer-motion";

// Carousel responsive settings
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const EventsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const events = [
    {
      id: 1,
      title: "Innovation Hackathon 2023",
      date: "October 15, 2023",
      location: "Meru University, Main Hall",
      description:
        "Join us for a 48-hour hackathon to solve real-world problems using technology. Open to all students and innovators.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Startup Pitch Competition",
      date: "November 5, 2023",
      location: "Meru University, Auditorium",
      description:
        "Pitch your startup idea to a panel of judges and win funding to bring your idea to life.",
      image:
        "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Tech Expo 2023",
      date: "December 10, 2023",
      location: "Meru University, Innovation Hub",
      description:
        "Explore the latest innovations in technology and network with industry experts.",
      image:
        "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <MegaDashboard />

      {/* SubHero Section */}
      <SubHero title={"EVENTS"} />

      <div className="mt-[3rem]">
        <Subtitle title={"MAJOR ANOUNCEMENT"} />
        <div className="flex justify-center mt-4">
          <div className="relative w-full max-w-4xl">
            {/* Video Placeholder */}
            <div
              className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src="https://img.youtube.com/vi/FRNmrfhGFFI/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg">
                <motion.div
                  className="relative flex items-center justify-center w-24 h-24 bg-white rounded-full cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="text-gray-900 w-10 h-10" />
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-full h-full bg-blue-500 opacity-30 rounded-full"
                      initial={{ scale: 1, opacity: 0.3 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Video Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                <div className="relative w-full max-w-4xl p-4">
                  <button
                    className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <X size={24} />
                  </button>
                  <iframe
                    className="w-full h-[80vh] rounded-lg"
                    src="https://youtu.be/drkW5To0dN4?si=GR8WkwfK1geOyHhA"
                    title="University Innovation Week"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Events Calendar Section */}
        <div className="mb-12 max-sm mt-[3rem]">
          <Subtitle title={"EVENTS CALENDAR"} centered />
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5s ease"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {hotEvents.map((event) => (
              <div
                key={event.id}
                className="relative h-[400px] rounded-lg overflow-hidden mx-2"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-sm mt-1">
                    <Locate className="inline-block mr-2" size={16} />
                    {event.location}
                  </p>
                  <p className="text-sm mt-1">Interest: {event.interest}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-12">
          <Subtitle title={"UPCOMING EVENTS"} centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
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
                    <span className="font-semibold">Location:</span>{" "}
                    {event.location}
                  </p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
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
                    <span className="font-semibold">Location:</span>{" "}
                    {event.location}
                  </p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage;
