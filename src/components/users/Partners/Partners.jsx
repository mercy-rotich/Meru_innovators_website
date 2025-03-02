import image from "../../../assets/images/partner.avif";
import image2 from "../../../assets/images/partner2.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Subtitle from "../../Subtitle/Subtitle";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const partners = [
  {
    name: "Harvard University",
    buttonText: "Learn More",
    img: image2,
    description:
      "A world-renowned institution known for excellence in research, innovation, and education.",
  },
  {
    name: "Stanford University",
    buttonText: "Explore",
    img: image2,
    description:
      "A leader in technology and business education, fostering entrepreneurship and innovation.",
  },
  {
    name: "MIT",
    buttonText: "Discover",
    img: image2,
    description:
      "A hub of scientific breakthroughs and engineering excellence shaping the future.",
  },
  {
    name: "University of Oxford",
    buttonText: "Visit",
    img: image2,
    description:
      "One of the oldest universities in the world, committed to academic excellence and research.",
  },
  {
    name: "University of Cambridge",
    buttonText: "Join Us",
    img: image2,
    description:
      "A prestigious university known for its historic contributions to science and humanities.",
  },
  {
    name: "Yale University",
    buttonText: "Get Started",
    img: image2,
    description:
      "A leading institution for law, arts, and social sciences, shaping global leaders.",
  },
  {
    name: "Columbia University",
    buttonText: "Partner With Us",
    img: image2,
    description:
      "Located in New York City, a center for cutting-edge research and diverse education.",
  },
  {
    name: "Princeton University",
    buttonText: "See More",
    img: image2,
    description:
      "A prestigious Ivy League university excelling in teaching and groundbreaking research.",
  },
];

const Partners = () => {
  return (
    <div className="bg-green-200 p-[3rem]">
      <Subtitle title="Our University Partners" />
      <div className="container">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
        >
          {partners.map((partner, index) => (
            <div key={index}>
              <div className="bg-white  rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 mx-3 p-6 flex flex-col items-center text-center border border-neutral-300">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-gray-200">
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2 px-4">
                  {partner.description}
                </p>
                <button className="mt-4 px-5 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-full transition-all duration-200">
                  {partner.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Partners;
