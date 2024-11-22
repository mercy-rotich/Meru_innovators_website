import Navbar from "../navbar/Navbar";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero bg-orange-500">
      <Navbar />
      <div className="content text-white w-full z-10">
        <div className="container text-center custom-mobile-screen:text-start px-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-wider hero-header">
            Empowering Meru's <br />
            Brightest Innovators
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join the movement driving creativity, entrepreneurship, and
            cutting-edge solutions in Meru and beyond.
            <br />
            Let's shape the future together!
          </p>
          <div className="flex flex-col space-y-4 custom-mobile-screen:flex-row custom-mobile-screen:space-y-0 custom-mobile-screen:space-x-4 items-center justify-center custom-mobile-screen:justify-start hero-buttons">
            <a
              href="#projects"
              className="px-6 py-3 w-full custom-mobile-screen:w-auto bg-white text-orange-500 font-semibold text-center rounded-md hover:bg-gray-200 transition"
            >
              Explore Our Projects
            </a>
            <a
              href="#join-us"
              className="px-6 py-3 w-full custom-mobile-screen:w-auto border border-white text-white font-semibold text-center rounded-md hover:bg-orange-600 transition"
            >
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
