import About from "../../../components/users/about/About";
import Event from "../../../components/users/events/Event";
import Footer from "../../../components/users/Footer/Footer";
import Hero from "../../../components/users/Hero/Hero";
import LatestBlogs from "../../../components/users/LatestBlogs/LatestBlogs";
import Partners from "../../../components/users/Partners/Partners";
import Testmonials from "../../../components/users/Testmonials/Testmonials";
import HomeNavbar from "./HomeNavbar";
import { useState, useEffect } from "react";
const Home = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Hero />
      <div
        className={`transition-all duration-300  z-10  ${
          isSticky ? "fixed top-[55px]  w-full right-0 left-0   " : ""
        }`}
      >
        <HomeNavbar onNavigate={handleNavigate} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="events-highlights">
        <Event />
      </div>
      <div id="latest-blogs">
        <LatestBlogs />
      </div>
      <div id="testimonials">
        <Testmonials />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
