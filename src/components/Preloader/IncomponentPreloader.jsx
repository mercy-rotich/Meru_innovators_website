import { motion, AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";

const Preloader = () => {
  const loading = useSelector((state) => state.preloader.loading);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed  w-[100%] flex items-center justify-center bg-gray-900 z-50 bg-black/70"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin preloader"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
