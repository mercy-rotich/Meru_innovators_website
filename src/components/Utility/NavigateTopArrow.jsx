import { useState, useEffect } from "react";
import { IoMdNavigate } from "react-icons/io";

import { ArrowBigLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";

const NavigateTopArrow = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    !isAtTop && (
      <div className="fixed z-20 bottom-[80px] right-[2rem]">
        <span
          onClick={scrollToTop}
          className="text-5xl sm:text-5xl   text-orange-500 sm:cursor-pointer block"
        >
          <IoMdNavigate />
        </span>

        <button
          className="text-6xl sm:text-5xl   text-orange-500 sm:cursor-pointer block"
          // onClick={navigate(-1)}
        >
          <span>
            <ArrowBigLeft size={50} />
          </span>
        </button>
      </div>
    )
  );
};

export default NavigateTopArrow;
