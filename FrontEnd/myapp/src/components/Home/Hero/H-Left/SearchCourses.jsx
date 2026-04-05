import React from 'react'

const SearchCourses = () => {
  return (
   <>
     {/* Search Bar */}
    <div className="flex items-center bg-white rounded-2xl shadow-lg overflow-hidden max-w-full ">

      <input
        type="text"
        placeholder="What do you want to learn today?"
        className="flex-1 px-6 py-4 outline-none text-gray-700 w-[20rem]"
      />

      <button className="bg-indigo-600 text-white px-6 py-4 hover:bg-indigo-700 transition-all duration-300">
        Search Courses
      </button>

    </div>

    {/* Popular Tags */}
    <div className="flex flex-wrap items-center gap-3 mb-8">

      <span className="text-gray-500 font-medium">Popular:</span>

      <span className="px-4 py-1 bg-gray-100 rounded-full  text-[#2563EB] text-sm hover:bg-indigo-100 cursor-pointer transition">
        Web Development
      </span>

      <span className="px-4 py-1 bg-gray-100 rounded-full  text-[#2563EB] text-sm hover:bg-indigo-100 cursor-pointer transition">
        UI/UX Design
      </span>

      <span className="px-4 py-1 bg-gray-100 rounded-full  text-[#2563EB] text-sm hover:bg-indigo-100 cursor-pointer transition">
        Data Science
      </span>

      <span className="px-4 py-1 bg-gray-100 rounded-full  text-[#2563EB] text-sm hover:bg-indigo-100 cursor-pointer transition">
        Python
      </span>

    </div>

   </>
  )
}

export default SearchCourses