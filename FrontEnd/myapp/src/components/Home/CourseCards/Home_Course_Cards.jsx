
import React from 'react'
import { Course_Cards_Header } from './Course_Cards_Header'
import CourseCard from './CourseCards'

const Home_Course_Cards = () => {
  return (
    <div className='flex flex-col w-full items-center '>

      <Course_Cards_Header/>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>

      {/* Explore Button */}
      <button className='flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-2xl font-medium hover:bg-blue-600 hover:text-white transition'>

        Explore All Courses

        {/* Arrow */}
    <i class="fa-solid fa-arrow-right-long"></i>
      </button>

    </div>
  )
}

export default Home_Course_Cards

