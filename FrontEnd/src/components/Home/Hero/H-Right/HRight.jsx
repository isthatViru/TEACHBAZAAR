import React from "react";
import Hero from "../../../../assets/Hero.png";

const HRight = () => {
  return (
    <div className="relative flex flex-col gap-10 bg-[#DBEAFE] w-1/2 items-center justify-center h-full">

      {/* Hero Image */}
      <img src={Hero} alt="Hero" className="bg-transparent w-full" />

      {/* Students Enrolled Overlay */}
      <div className="absolute bottom-20 left-10 bg-white shadow-lg rounded-xl px-6 py-3 flex flex-col">
        <span className="text-xl font-bold text-indigo-600">25,000+</span>
        <span className="text-sm text-gray-500">Students Enrolled</span>
      </div>

      {/* Top Instructor Overlay */}
      <div className="absolute top-24 right-10 bg-white shadow-lg rounded-xl px-6 py-3 flex flex-col">
        <span className="text-xl font-bold text-indigo-600">⭐ Top Rated</span>
        <span className="text-sm text-gray-500">Instructor</span>
      </div>

    </div>
  );
};

export default HRight;