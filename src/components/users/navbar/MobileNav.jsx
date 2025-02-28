import React from "react";
import { X } from "lucide-react";

const MobileNav = ({ onClose, showMobile }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm  ${
        showMobile ? "visible" : "hidden"
      }`}
    >
      <div className="bg-white h-full w-[300px] max-w-[90%] ml-auto shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} className="text-gray-700" />
        </button>

        {/* Navigation Menu */}
        <nav className="pt-16">
          <ul className="flex flex-col gap-2 px-4">
            {[
              { label: "About", href: "#about" },
              { label: "Community", href: "#community" },
              { label: "Events", href: "#events" },
              { label: "Alumni", href: "#alumni" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Blogs", href: "#blogs" },
              { label: "Support", href: "#support" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
