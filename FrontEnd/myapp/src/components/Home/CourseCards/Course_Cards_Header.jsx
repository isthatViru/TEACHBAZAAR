import React from "react";
export const Course_Cards_Header = () => {
  return (
    <div className="flex mt-16 items-center gap-80">
      {" "}
      <div className="flex flex-col gap-4">
        {" "}
        {/* Tag */}{" "}
        <div className="w-fit text-sm font-semibold bg-indigo-100 text-indigo-600 px-4  rounded-full">
          {" "}
          What do you want to learn?{" "}
        </div>{" "}
        {/* Heading */}{" "}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
          {" "}
          Explore Our Top{" "}
          <span className="text-indigo-600 underline decoration-[#F59E0B] decoration-4 underline-offset-4">
            {" "}
            Categories{" "}
          </span>{" "}
        </h2>{" "}
      </div>{" "}
      {/* Filter Buttons */}{" "}
      <div className="flex flex-wrap gap-3">
        {" "}
        <button className="px-5 py-2 rounded-full bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
          {" "}
          Development{" "}
        </button>{" "}
        <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">
          {" "}
          Business{" "}
        </button>{" "}
        <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">
          {" "}
          Data Science{" "}
        </button>{" "}
        <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">
          {" "}
          Marketing{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
