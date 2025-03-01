import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ShowMoreButton = ({ onClick, text = "Show More" }) => {
  return (
    <button
      className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium transition hover:bg-blue-700 mx-auto mt-[1rem]"
      onClick={onClick}
    >
      {text}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </button>
  );
};

export default ShowMoreButton;
