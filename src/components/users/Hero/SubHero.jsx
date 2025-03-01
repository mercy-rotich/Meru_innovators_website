import React from "react";

const SubHero = ({title}) => {
  return (
    <div className="relative bg-gradient-to-r from-orange-600 to-orange-400 text-white py-20 rounded-b-lg shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus repellat omnis nobis explicabo provident deleniti doloremque. Possimus iusto exercitationem enim dignissimos, ipsa ut molestias officiis voluptas atque deserunt assumenda culpa.
        </p>
        <button className="bg-white text-orange-600 px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SubHero;
