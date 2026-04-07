import React from "react";

const CourseCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer w-[320px]">

      {/* Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
          alt="course"
          className="w-full h-44 object-cover"
        />

        {/* Bestseller Badge */}
        <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">
          Bestseller
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">

        {/* Labels */}
        <div className="flex gap-2">
          <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
            Development
          </span>

          <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
            Python
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-lg">
          Complete Python Developer Bootcamp
        </h3>

        {/* Instructor */}
        <p className="text-sm text-gray-500">
          by John Carter
        </p>

        {/* Rating */}
        <div className="flex items-center text-sm text-gray-500">
          <span className="text-yellow-500 mr-1">⭐</span>
          4.8
          <span className="ml-1">(12,450)</span>
        </div>

        {/* Course info */}
        <div className="text-xs text-gray-400">
          52,340 students • 32 hours
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">

          <span className="text-lg font-bold text-indigo-600">
            $49.99
          </span>

          <span className="text-sm text-gray-400 line-through">
            $99.99
          </span>

          <span className="text-green-600 text-sm">
            50% off
          </span>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;