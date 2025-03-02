import React from "react";
import { motion } from "framer-motion";
import "./Subhero.css";

const SubHero = ({ title, subtitle }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-r text-white py-24 rounded-b-lg shadow-xl sub-hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Main Title */}
        <motion.h1
          className="text-5xl font-extrabold tracking-wide mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {/* Subtitle (optional) */}
        {subtitle && (
          <motion.p
            className="text-lg font-medium opacity-90 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Description */}
        <motion.p
          className="text-lg opacity-85 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Unlock the full potential of your projects with our cutting-edge
          platform. Join a thriving community of professionals, enhance your
          workflow, and take your career to the next level.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Community
          </motion.button>

          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SubHero;
