import image from "../../../assets/images/partner.avif";



const partners = [
  { name: "Firefox", buttonText: "Explore" },
  { name: "Chrome", buttonText: "Discover" },
  { name: "Safari", buttonText: "Visit" },
  { name: "Edge", buttonText: "Learn More" },
  { name: "Opera", buttonText: "Browse" },
  { name: "Brave", buttonText: "Get Started" },
  { name: "Vivaldi", buttonText: "Try Now" },
  { name: "Internet Explorer", buttonText: "See More" },
];

const Partners = () => {
  return (
    <div className="mt-[7rem]">
      <h3 className="subtopic text-topicColor">Our patners</h3>
      <div className="container">
        <div className="grid grid-cols-1 neon-screen:grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-[1rem] border border-neutral-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex justify-center items-center flex-col bg-white"
            >
              <div className="mb-[1rem]">
                <img
                  src={image}
                  alt={partner.name}
                  className="w-full h-auto rounded-md object-cover shadow-md"
                />
              </div>
              <div className="text-center">
                <h3 className="text-cardtopic text-lg font-semibold border-b border-neutral-300 pb-[1rem] mb-[1rem]">
                  {partner.name}
                </h3>
                <button className="">
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
