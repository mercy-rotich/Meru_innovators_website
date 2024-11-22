import About from "../../../components/users/about/About";
import Event from "../../../components/users/events/Event";
import Hero from "../../../components/users/Hero/Hero";
import LatestBlogs from "../../../components/users/LatestBlogs/LatestBlogs";
import Partners from "../../../components/users/Partners/Partners";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <About />
        <Event />
        <LatestBlogs/>
        <Partners/>
      </div>
    </div>
  );
};

export default Home;
