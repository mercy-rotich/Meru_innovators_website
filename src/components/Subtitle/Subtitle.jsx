import React from "react";
import "./Subtitle.css";

const Subtitle = ({ title, centered }) => {
  return (
    <div className={`flex flex-col items-center ${centered ? "text-center" : "text-start"}`}>
      <h3 className="font-bold text-3xl tracking-wide relative">
        {title}
      </h3>
      <div className="line bg-orange-500 mt-2 w-16 h-1 rounded-full"></div>
    </div>
  );
};

export default Subtitle;
