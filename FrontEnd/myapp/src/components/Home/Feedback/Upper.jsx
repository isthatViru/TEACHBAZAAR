import React from "react";

const Upper = () => {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto py-10 px-6">

      {/* Section Tag */}
      <span className="text-lg font-semibold tracking-wide uppercase text-yellow-500">
        Success Stories
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        What our learners{" "}
        <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">
          say
        </span>
      </h2>

      {/* Subtitle */}
      <p className="text-white text-lg md:text-xl max-w-xl">
        Real outcomes from real students who transformed their careers through learning.
      </p>

    </div>
  );
};

export default Upper;