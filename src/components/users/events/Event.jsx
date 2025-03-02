import React from "react";
import "./Event.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Subtitle from "../../Subtitle/Subtitle";
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};
const Event = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Fullstack Meetup",
      description: "Date: 15th March, 2024 | Time: 10:00 AM | Venue: ECA24",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/10638069/pexels-photo-10638069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Cloud Engineers Kickstart",
      description: "Date: 20th April, 2024 | Time: 2:00 PM | Venue: ECB12",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "IoT Engineering Gossip Night",
      description: "Date: 10th May, 2024 | Time: 6:00 PM | Venue: AC13",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/8851457/pexels-photo-8851457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Surgeons convention",
      description: "Date: 13th Dec, 2024 | Time: 6:00 PM | Venue: TB7",
    },
  ];

  return (
    <div className=" py-[3rem] bg-gradient-to-b from-[#fef9c3] to-[#fef9c3] px-4 events-slide">
      <div className="container mx-auto">
        <Subtitle title={" Event Highlights"} />
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
        >
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="m-[0.3rem] relative h-96">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 w-full text-white p-4 rounded-b-lg overlay">
                  <h2 className="text-lg font-semibold">{slide.caption}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Event;
