import React from "react";

import MegaDashboard from "../../../components/users/navbar/MegaDashboard";


import { Footer } from "antd/es/layout/layout";
import SubHero from "../../../components/users/Hero/SubHero";
import BlogsNavbar from "./BlogsNavbar";

const Blogs = () => {
  return (
    <div>
      <MegaDashboard />
      <SubHero title={"BLOGS"}/>
      <BlogsNavbar/>
      <Footer />
    </div>
  );
};

export default Blogs;
