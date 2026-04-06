import React from "react";

const CatHeader = () => {
  return (
    <div className="flex flex-col gap-4 mb-2 mt-15">

      {/* Tag */}
      <div className="w-fit text-sm font-semibold bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full">
        What do you want to learn?
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
        Explore Our Top{" "}
        <span className="text-indigo-600 underline decoration-[#F59E0B] decoration-4 underline-offset-4">
          Categories
        </span>
      </h2>

    </div>
  );
};

export default CatHeader;