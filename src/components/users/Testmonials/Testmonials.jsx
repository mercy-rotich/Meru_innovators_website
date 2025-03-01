import Testmonial from "./Testmonial";

import Subtitle from "../../Subtitle/Subtitle";

const Testmonials = () => {
  return (
    <div className="mt-[7rem]">
      <div className="container">
        <Subtitle title={"Testimonials"} />
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
