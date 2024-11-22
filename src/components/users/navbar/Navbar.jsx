import { useState, useEffect } from "react";
import brand from "../../../assets/brand/logo.svg";

import "./Navbar.css";

import { User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` fixed w-full right-0 left-0 py-[0.4rem] navbar ${
        isScrolled
          ? "bg-white transition duration-300 ease-in-out text-black  shadow-least"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div>
          <a href="#">
            <img src={brand} className="max-w-[55px] max-h-[55px]" alt="" />
          </a>
        </div>
        <div className="hidden custom-mobile-screen:block">
          <ul className="flex gap-10 navbar-ul navigation-menu">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Alumni</a>
            </li>
            <li>
              <a href="">Testmonials</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>

        <div className="flex">
          <button
            className={`text-white h-[40px] w-[40px] rounded-full border-2 border-white flex items-center justify-center ${isScrolled ? "text-black border-black" : "text-white border-white"}`}
          >
            <User size={24} color={isScrolled ? 'black' : 'white'} />
          </button>
          <button className="block custom-mobile-screen:hidden ml-[1rem] text-2xl">
            &#9776;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
