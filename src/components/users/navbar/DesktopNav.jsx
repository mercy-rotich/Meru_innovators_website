import { useState, useEffect } from "react";
import brand from "../../../assets/brand/logo.svg";
import "./Navbar.css";
import { User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DesktopNav = ({ openMobileNav }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route location
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(location.pathname); // Set initial active link based on the current route

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  // Update the active link when the route changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div
      className={`fixed w-full right-0 left-0 top-0 navbar ${
        isScrolled
          ? "bg-white transition duration-300 ease-in-out text-black shadow-least"
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
              <Link to="/" className={activeLink === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/communities"
                className={activeLink === "/communities" ? "active" : ""}
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className={activeLink === "/events" ? "active" : ""}
              >
                Events
              </Link>
            </li>
            <li>
              <Link to="#" className={activeLink === "/alumni" ? "active" : ""}>
                Alumni
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={activeLink === "/testimonials" ? "active" : ""}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className={activeLink === "/blogs" ? "active" : ""}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={activeLink === "/support" ? "active" : ""}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div>
            <button
              className="bg-steelBlue px-[2rem] py-[0.4rem] rounded-md text-sm"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              LOGIN
            </button>
          </div>
          <button
            className="block custom-mobile-screen:hidden ml-[1rem] text-2xl"
            onClick={openMobileNav}
          >
            &#9776;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
