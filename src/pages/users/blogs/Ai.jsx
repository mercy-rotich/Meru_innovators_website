import { BlogPosts } from "./BlogsData";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { motion } from "framer-motion";
import ShowMoreButton from "../../../components/ShowMore/ShowMore";
const Ai = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 py-12">
      <div className="mt-[3rem]">
        <Subtitle title={"AI"} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[2rem]">
          {BlogPosts.map((post) => (
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
        <div className="mb-[2rem]">
        <ShowMoreButton />
      </div>
      </div>
    </div>
  );
};

export default Ai;
