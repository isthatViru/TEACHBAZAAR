import React from 'react'

const Header = () => {
  return (
    
    <div className='flex flex-col w-auto gap-4'>
        {/* Tag */}
    <div className=" text-sm font-semibold bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full ">
      ✦ Discover your journey
    </div>

    {/* Heading */}
    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
      Discover 4500+ <br />
      <span className="text-indigo-600 underline  decoration-[#F59E0B]">Courses</span> from Top <br />
      Instructors
    </h1>
    </div>

  )
}

export default Header