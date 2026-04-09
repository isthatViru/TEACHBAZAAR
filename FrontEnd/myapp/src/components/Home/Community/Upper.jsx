import React from "react";

const Upper = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-6 md:p-10 ">

      {/* Left Section */}
      <div className="flex flex-col max-w-xl">
        <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
          Community
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Live Course <span className=" underline decoration-[#F59E0B] decoration-4 underline-offset-4">
          Discussions
        </span>
        </h1>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Students and teachers talk, solve problems, and grow together —
          directly inside each course.
        </p>
      </div>

      {/* Right Section */}
      <div>
        <a
          href="#"
          className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition duration-200"
        >
          Explore Community
          <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>

    </div>
  );
};

export default Upper;