import Navbar from "../navbar/Navbar";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero bg-orange-500">
      <Navbar />

      <div className="content text-white w-full">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Meru's <br />
            Brightest Innovators
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join the movement driving creativity, entrepreneurship, and
            cutting-edge solutions in Meru and beyond.
            <br />
            Let's shape the future together!
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-md hover:bg-gray-200 transition"
            >
              Explore Our Projects
            </a>
            <a
              href="#join-us"
              className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-orange-600 transition"
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
