import Event from "../../../components/users/events/Event";
import Hero from "../../../components/users/Hero/Hero";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <Event />
      </div>
    </div>
  );
};

export default Home;
