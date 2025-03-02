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
import EventCard from "./EventCard";

import { events } from "./EventsCustom";

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
              className="mx-[1rem]relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden cursor-pointer"
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
                    className="w-full h-[400px] rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/SKBZMDu41oY"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.3rem]">
            {events.map((event) => (
              <EventCard event={event} key={event.id} />
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
