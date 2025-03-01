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
      className={`fixed left-[1rem] bottom-[40%] z-20 text-white rounded-sm ${
        isVisible ? "visible" : "hidden"
      } `}
      style={{
        background: "rgba(0,0,140,0.65)",
      }}
    >
      <ul className="flex flex-col">
        <li className="hover:bg-orange-500 p-[0.8rem] transition-colors duration-300">
          <button
            className="text-4xl"
            onClick={handleWhatsAppClick}
            aria-label="Subscribe on WhatsApp"
          >
            <FaWhatsappSquare />
          </button>
        </li>
        <li className="bg-green-500 hover:bg-orange-500 p-[0.8rem] transition-colors duration-300">
          <button
            className="text-4xl"
            onClick={handleFacebookClick}
            aria-label="Subscribe on Facebook"
          >
            <FaFacebookSquare />
          </button>
        </li>
        <li className="hover:bg-orange-500 p-[0.8rem] transition-colors duration-300">
          <button
            className="text-4xl"
            onClick={handleTwitterClick}
            aria-label="Follow on Twitter"
          >
            <FaTwitterSquare />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
