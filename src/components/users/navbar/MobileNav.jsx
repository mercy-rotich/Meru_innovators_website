import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

import "./MobileNav.css";

import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from "react-router-dom";

const MobileNav = ({ onClose, showMobile }) => {

  const navigate = useNavigate()

  return (
    <AnimatePresence>
      {showMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed mobile-nav inset-0 z-50 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white mobile-nav-ul h-full w-[300px] max-w-[90%] ml-auto shadow-lg"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-700" />
            </button>

            {/* Navigation Menu */}
            <nav className="pt-16">
              <ul className="flex flex-col gap-2 px-4 border-b border-neutral-300 ">
                {[
                  { label: "Home", href: "/" },
                  { label: "Community", href: "/communities" },
                  { label: "Events", href: "/events" },
                  { label: "Alumni", href: "/alumni" },
                  { label: "Projects", href: "/projects" },
                  { label: "Blogs", href: "/blogs" },
                  { label: "Gallery", href: "/gallery" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-neutral-300 last:border-none"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#f3f4f6",
                        transition: { duration: 0.2 },
                        borderRadius: "2px",
                      }}
                      className="rounded-lg"
                    >
                      <Link
                        to={item.href}
                        className="block px-4 py-3 rounded-lg text-gray-700 transition-colors"
                        onClick={onClose} // Close menu on click
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
              <button
                className="bg-blue-600 text-white px-5 py-2 rounded-sm text-sm font-medium transition hover:bg-blue-700 ml-4 mt-4 "
                onClick={() => navigate("/account/dashboard")}
              >
                Account
              </button>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
