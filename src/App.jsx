import React from "react";
import Home from "./pages/users/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Community from "./pages/users/community/Community";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/communities" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
