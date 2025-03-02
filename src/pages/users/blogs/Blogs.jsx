import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Newspaper,
  Lightbulb,
  Code,
  Users,
  Rocket,
} from "lucide-react";
import MegaDashboard from "../../../components/users/navbar/MegaDashboard";
import SubHero from "../../../components/users/Hero/SubHero";
import BlogsNavbar from "./BlogsNavbar";

import Footer from "../../../components/users/Footer/Footer";

import Subtitle from "../../../components/Subtitle/Subtitle";

import "./Blogs.css";

import { useNavigate } from "react-router-dom";
import ShowMoreButton from "../../../components/ShowMore/ShowMore";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Innovation",
    category: "AI",
    icon: <Lightbulb className="text-yellow-500" size={24} />,
    excerpt:
      "Exploring how artificial intelligence is shaping the future of innovation and technology.",
  },
  {
    id: 2,
    title: "Web Development Trends in 2025",
    category: "Development",
    icon: <Code className="text-blue-500" size={24} />,
    excerpt:
      "A deep dive into the cutting-edge web development trends that will dominate 2025.",
  },
  {
    id: 3,
    title: "The Rise of Blockchain Technology",
    category: "Block Chain",
    icon: <LayoutGrid className="text-green-500" size={24} />,
    excerpt:
      "An overview of how blockchain is revolutionizing different industries worldwide.",
  },
  {
    id: 4,
    title: "The Role of Design in Tech Startups",
    category: "Design",
    icon: <Newspaper className="text-red-500" size={24} />,
    excerpt:
      "How great design contributes to the success of technology-driven startups.",
  },
  {
    id: 5,
    title: "The Power of Networking in Innovation",
    category: "Networking",
    icon: <Users className="text-purple-500" size={24} />,
    excerpt:
      "Building strong connections to foster innovation and collaboration.",
  },
  {
    id: 6,
    title: "Space Tech and Future Innovations",
    category: "Space Tech",
    icon: <Rocket className="text-gray-500" size={24} />,
    excerpt:
      "Exploring the latest advancements in space technology and its impact on future innovations.",
  },
];

const Blogs = () => {
  const navigate = useNavigate();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
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
          isSticky ? "fixed top-[55px] w-full right-0 left-0   z-50 " : ""
        }`}
      >
        <BlogsNavbar />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mt-[3rem]">
          <Subtitle title={"Latest Articles"} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[2rem]">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white shadow-least rounded-sm p-6 flex flex-col gap-4  transition-shadow cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                navigate(
                  "/blogs/dywehwedjwndjnwejdnwejndwejdnjwendweddqwdqwdwqd"
                );
              }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[2rem]">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white shadow-least rounded-sm p-6 flex flex-col gap-4  transition-shadow cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                navigate(
                  "/blogs/dywehwedjwndjnwejdnwejndwejdnjwendweddqwdqwdwqd"
                );
              }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[2rem]">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white shadow-least rounded-sm p-6 flex flex-col gap-4  transition-shadow cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                navigate(
                  "/blogs/dywehwedjwndjnwejdnwejndwejdnjwendweddqwdqwdwqd"
                );
              }}
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

      <div className="mb-[2rem]">
        <ShowMoreButton />
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
