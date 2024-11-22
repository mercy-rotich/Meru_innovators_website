import image from "../../../assets/images/partner.avif";
import image2 from "../../../assets/images/partner2.jpg";

const partners = [
  { name: "Firefox", buttonText: "Explore", img: image },
  { name: "Chrome", buttonText: "Discover", img: image2 },
  { name: "Safari", buttonText: "Visit", img: image },
  { name: "Edge", buttonText: "Learn More", img: image2 },
  { name: "Opera", buttonText: "Browse", img: image },
  { name: "Brave", buttonText: "Get Started", img: image2 },
  { name: "Vivaldi", buttonText: "Try Now", img: image },
  { name: "Internet Explorer", buttonText: "See More", img: image2 },
];

const Partners = () => {
  return (
    <div className="mt-[7rem]">
      <h3 className="subtopic text-topicColor mb-8">Our patners</h3>
      <div className="container">
        <div className="grid grid-cols-1 neon-screen:grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-[1rem] border border-neutral-300 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex justify-between items-center flex-col bg-white"
            >
              <div className="mb-[1rem]">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="w-full h-auto rounded-md object-cover shadow-md"
                />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium nemo ex corporis repellendus quidem deserunt!</p>
              <div className="text-center">
                <h3 className="text-cardtopic text-lg font-semibold border-b border-neutral-300 pb-[1rem] mb-[1rem]">
                  {partner.name}
                </h3>
                <button className="universal-button">
                  {partner.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
