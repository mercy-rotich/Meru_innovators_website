import { useState, useEffect } from "react";
import { IoMdNavigate } from "react-icons/io";

const NavigateTopArrow = () => {
  const [isAtTop, setIsAtTop] = useState(true);

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
      <div>
        <span
          onClick={scrollToTop}
          className="text-5xl sm:text-5xl fixed z-20 bottom-[80px] right-[2rem] text-orange-500 sm:cursor-pointer"
        >
          <IoMdNavigate />
        </span>
        {/* <span
          onClick={scrollToTop}
          className="text-5xl sm:text-5xl fixed z-20 bottom-[3rem] right-[2rem] text-orange-500 sm:cursor-pointer"
        >
          <IoMdNavigate />
        </span> */}
      </div>
    )
  );
};

export default NavigateTopArrow;
