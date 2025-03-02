import Testmonial from "./Testmonial";

import Subtitle from "../../Subtitle/Subtitle";

const Testmonials = () => {
  return (
    <div className="pt-[7rem] bg-gradient-to-b from-[#fef9c3] to-[#fef9c3] py-12">
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
