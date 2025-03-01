import React from "react";
import Blog from "../blog/Blog";
import Subtitle from "../../Subtitle/Subtitle";

const LatestBlogs = () => {
  return (
    <div className="mt-[8rem]">
      <div className="container">
        <Subtitle title={"Our Latest Blogs"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Blog />
          <Blog />
          <Blog />
        </div>
        <button className="universal-button mx-auto block mt-[2rem]">
          More blogs
        </button>
      </div>
    </div>
  );
};

export default LatestBlogs;
