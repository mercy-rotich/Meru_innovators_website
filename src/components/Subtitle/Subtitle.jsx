import React from "react";

import "./Subtitle.css"

const Subtitle = ({ title, centered }) => {
  return (
    <div className="relative flex flex-col justify-between items-center">
      <h3
        className={`font-semibold text-3xl tracking-wider relative subtitle ${
          centered ? "text-center" : "text-start "
        }`}
      >
        {title}
      </h3>
      <div className="line"></div>
    </div>
  );
};

export default Subtitle;
