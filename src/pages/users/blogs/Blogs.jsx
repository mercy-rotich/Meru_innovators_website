import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import MegaDashboard from "../../../components/users/navbar/MegaDashboard";
import SubHero from "../../../components/users/Hero/SubHero";
import BlogsNavbar from "./BlogsNavbar";
import Footer from "../../../components/users/Footer/Footer";
import Subtitle from "../../../components/Subtitle/Subtitle";
import ShowMoreButton from "../../../components/ShowMore/ShowMore";
import { BlogPosts } from "./BlogsData";
import Design from "./Design";
import Development from "./Development";
import Technology from "./Technology";

import Ai from "./Ai";

import Graphics from "./Graphics";

import Blochain from "./Blockchain";

const flipVariants = {
  initial: {
    rotateY: 90,
    opacity: 0,
  },
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    rotateY: -90,
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Blogs = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState("latest");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-green-200">
      <MegaDashboard />
      <SubHero title="BLOGS" />
      <div
        className={`transition-all duration-300 ${
          isSticky ? "fixed top-[55px] w-full right-0 left-0 z-50" : ""
        }`}
      >
        <BlogsNavbar
          onNavigate={setActiveCategory}
          activeKey={activeCategory}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          {activeCategory === "latest" && (
            <motion.div
              key="latest"
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="mt-[3rem]">
                <Subtitle title="Latest Articles" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[2rem]">
                {BlogPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    className="bg-white shadow-least rounded-sm p-6 flex flex-col gap-4 transition-shadow cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate("/blogs/example-post")}
                  >
                    <div className="flex items-center gap-3">
                      {post.icon}
                      <h3 className="text-xl font-semibold text-gray-700">
                        {post.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <span className="text-sm text-blue-500 font-medium">
                      Read More →
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeCategory === "technology" && (
            <motion.div
              key="technology"
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Technology />
            </motion.div>
          )}
          {activeCategory === "design" && (
            <motion.div
              key="design"
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Design />
            </motion.div>
          )}
          {activeCategory === "development" && (
            <motion.div
              key="development"
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Development />
            </motion.div>
          )}
          {activeCategory === "blockchain" && (
            <motion.div
              key="blockchain"
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Blochain />
            </motion.div>
          )}
          {activeCategory === "ai" && (
            <motion.div
              key="ai"
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Ai />
            </motion.div>
          )}
          {activeCategory === "graphic" && (
            <motion.div
              key="graphic"
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Graphics />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="mb-[2rem]">
        <ShowMoreButton />
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
