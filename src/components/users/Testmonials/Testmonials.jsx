import Testmonial from "./Testmonial";

const Testmonials = () => {
  return (
    <div className="mt-[7rem]">
      <div className="container">
        <h3 className="subtopic text-topicColor mb-8">Testmonials</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm-screen:grid-cols-3 gap-[1rem]">
          <Testmonial />
          <Testmonial />
          <Testmonial />
          <Testmonial />
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
