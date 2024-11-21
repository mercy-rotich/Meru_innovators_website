import brand from "../../../assets/brand/logo.svg";

import "./Navbar.css";

import { User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="text-white fixed w-full right-0 left-0 py-[1rem] navbar">
      <div className="container flex items-center justify-between">
        <div>
          <a href="#">
            <img src={brand} className="max-w-[70px] max-h-[70px]" alt="" />
          </a>
        </div>
        <div>
          <ul className="flex gap-10 navbar-ul">
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

        <div>
          <button className="text-white h-[50px] w-[50px] rounded-full border-2 border-white flex items-center justify-center">
            <User size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
