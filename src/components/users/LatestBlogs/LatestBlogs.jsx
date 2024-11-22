import React from "react";
import Blog from "../blog/Blog";


const LatestBlogs = () => {
  return (
    <div className="mt-[8rem]">
      <div className="container">
        <h3 className="subtopic text-topicColor">Latest Blogs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         <Blog/>
         <Blog/>
         <Blog/>
    
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
