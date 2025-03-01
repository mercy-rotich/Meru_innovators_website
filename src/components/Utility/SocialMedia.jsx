import { useEffect, useState } from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const SocialMedia = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    window.open(
      "https://whatsapp.com/channel/0029VaaR2wR90x2sgpTjrv27",
      "_blank"
    );
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/your-facebook-page", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/your-twitter-handle", "_blank");
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
    };

    const toggleInterval = setInterval(toggleVisibility, 5000);

    return () => clearInterval(toggleInterval);
  }, []);

  return (
    <div
      className={`fixed left-4 bottom-[40%] z-30 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
      >
        <ul className="flex flex-col space-y-2 p-2">
          <li>
            <button
              className="flex items-center justify-center w-12 h-12 bg-[#128C7E] hover:bg-green-700 rounded-lg border-2 border-white transition-all duration-300 transform hover:scale-110"
              onClick={handleWhatsAppClick}
              aria-label="Subscribe on WhatsApp"
            >
              <FaWhatsappSquare className="text-white text-3xl" />
            </button>
          </li>
          <li>
            <button
              className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-110"
              onClick={handleFacebookClick}
              aria-label="Subscribe on Facebook"
            >
              <FaFacebookSquare className="text-white text-3xl" />
            </button>
          </li>
          <li>
            <button
              className="flex items-center justify-center w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-lg transition-all duration-300 transform hover:scale-110"
              onClick={handleTwitterClick}
              aria-label="Follow on Twitter"
            >
              <FaTwitterSquare className="text-white text-3xl" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
