import React, { useState, useEffect } from "react";
import MegaDashboard from "../../components/users/navbar/MegaDashboard";
import Footer from "../../components/users/Footer/Footer";
import Subtitle from "../../components/Subtitle/Subtitle";
import SubHero from "../../components/users/Hero/SubHero";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Locate, Play, X } from "lucide-react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import { hotEvents } from "./EventsCustom";
import BookRsvp from "../../components/modals/BookRsvp/BookRsvp";
import FeaturedEventsRSVP from "./FeaturedEventsRSVP";
import api from "../../configuration/Configuration";

// Carousel responsive settings
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 2 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const EventsPage = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRsvpModal, setRsvpModal] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("events/");
        setEvents(response.data.data.results || []);
        setError(null);
      } catch (error) {
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="bg-green-200">
      <MegaDashboard />
      <SubHero title={"EVENTS"} />

      {/* Major Announcement Section */}
      <div className="mt-[3rem] mb-[3rem]">
        <Subtitle title={"MAJOR ANNOUNCEMENT"} />
        <div className="flex justify-center mt-8 px-4">
          <div className="relative w-full max-w-3xl">
            <div
              className="relative w-full h-[400px] rounded-lg shadow-xl overflow-hidden bg-black bg-opacity-70 flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              <motion.div
                className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg cursor-pointer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play className="text-gray-900 w-10 h-10" />
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-[100px] h-[100px] bg-blue-500 opacity-30 rounded-full"
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
              src="https://www.youtube.com/embed/D56K_RDVPhA"
              title="University Innovation Week"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* NEW RSVP SECTION - Added here */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Subtitle title={"RESERVE YOUR SPOT"} centered />
        <FeaturedEventsRSVP events={events} />
      </div>

      {/* Events Calendar Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Subtitle title={"EVENTS CALENDAR"} centered />
        <Carousel
          swipeable
          draggable
          showDots={false}
          responsive={responsive}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
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
              className="relative h-[400px] rounded-sm overflow-hidden mx-2"
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
      <div className="mb-12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Subtitle title={"UPCOMING EVENTS"} centered />
        {loading ? (
          <p className="text-center text-gray-700">Loading events...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                openRsvpModal={() => setRsvpModal(true)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700">No events available.</p>
        )}
      </div>

      <Footer />
      <BookRsvp isOpen={isRsvpModal} onClose={() => setRsvpModal(false)} />
    </div>
  );
};

export default EventsPage;