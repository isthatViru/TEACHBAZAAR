import React from "react";

const Right = () => {
  return (
    <div className="flex flex-wrap gap-4">

      {/* Primary Button */}
      <button className="px-6 py-3  outline-2 outline-black bg-gray-950 text-white rounded-xl font-medium shadow  hover:bg-transparent hover:text-black transition duration-200 flex items-center gap-2">
        Browse Courses
      </button>

      {/* Secondary Button */}
      <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition duration-200 flex items-center gap-2">
        Start Teaching
      </button>

    </div>
  );
};

export default Right;