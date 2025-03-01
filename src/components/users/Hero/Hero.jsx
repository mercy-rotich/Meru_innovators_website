import "./Hero.css";
import MegaDashboard from "../navbar/MegaDashboard";
import { motion } from "framer-motion";

const Hero = () => {
  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="hero">
      <MegaDashboard />

      <motion.div
        className="content text-white w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container text-center custom-mobile-screen:text-start px-4">
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-wider hero-header"
            variants={itemVariants}
          >
            Empowering Meru's <br />
            Brightest Innovators
          </motion.h1>

          {/* Description */}
          <motion.p className="text-lg md:text-xl mb-8" variants={itemVariants}>
            Join the movement driving creativity, entrepreneurship, and
            cutting-edge solutions in Meru and beyond.
            <br />
            Let's shape the future together!
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col space-y-4 custom-mobile-screen:flex-row custom-mobile-screen:space-y-0 custom-mobile-screen:space-x-4 items-center justify-center custom-mobile-screen:justify-start hero-buttons"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 w-full custom-mobile-screen:w-auto bg-white text-orange-500 font-semibold text-center rounded-md hover:bg-gray-200 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Projects
            </motion.a>
            <motion.a
              href="#join-us"
              className="px-6 py-3 w-full custom-mobile-screen:w-auto border border-white text-white font-semibold text-center rounded-md hover:bg-orange-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Community
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
