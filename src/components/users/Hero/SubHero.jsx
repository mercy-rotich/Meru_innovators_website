import React from "react";

const SubHero = ({ title, subtitle }) => {
  return (
    <div className="relative bg-gradient-to-r from-orange-700 to-orange-500 text-white py-24 rounded-b-lg shadow-xl">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Main Title */}
        <h1 className="text-5xl font-extrabold tracking-wide mb-4">{title}</h1>

        {/* Subtitle (optional) */}
        {subtitle && (
          <p className="text-lg font-medium opacity-90 mb-6">{subtitle}</p>
        )}

        {/* Description */}
        <p className="text-lg opacity-85 leading-relaxed mb-8">
          Unlock the full potential of your projects with our cutting-edge
          platform. Join a thriving community of professionals, enhance your
          workflow, and take your career to the next level.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all duration-300">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:bg-white hover:text-orange-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
