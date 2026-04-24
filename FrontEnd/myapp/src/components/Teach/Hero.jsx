import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0F172A] w-full">

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#EFF6FF] mb-6 max-w-3xl">
        Turn your expertise into <br />
        <span className="text-amber-500">income.</span>
      </h1>

      {/* Description */}
      <p className="text-[#E2E8F0] text-lg max-w-2xl mb-8">
        Create and sell online courses on TeachBazaar. Reach 500,000+ eager learners, build your brand, and earn every time someone enrolls — on your own schedule.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-lg transition">
          Start Teaching — it's free
        </button>

        <button className="border border-gray-500 hover:bg-gray-100 px-6 py-3 rounded-lg text-[#E2E8F0] hover:text-[#475569] font-medium transition">
          Watch how it works
        </button>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-12 border-t border-gray-700 pt-8 w-full max-w-4xl">

        {/* Stat 1 */}
        <div className="px-6 py-4 text-center border-b sm:border-b-0 sm:border-r border-gray-700">
          <h2 className="text-2xl font-bold text-white">₹4.2Cr+</h2>
          <p className="text-gray-400 text-sm mt-1">Paid out to instructors</p>
        </div>

        {/* Stat 2 */}
        <div className="px-6 py-4 text-center border-b sm:border-b-0 sm:border-r border-gray-700">
          <h2 className="text-2xl font-bold text-white">70%</h2>
          <p className="text-gray-400 text-sm mt-1">Revenue share</p>
        </div>

        {/* Stat 3 */}
        <div className="px-6 py-4 text-center">
          <h2 className="text-2xl font-bold text-white">500k+</h2>
          <p className="text-gray-400 text-sm mt-1">Students ready to learn</p>
        </div>

      </div>

    </div>
  );
};

export default Hero;