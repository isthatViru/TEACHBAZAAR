import React from 'react'

const Stats = () => {
  return (
<div className="bg-indigo-50 ">
  <div className="max-w-full mx-auto  grid grid-cols-2 md:grid-cols-4 text-center">

    <div className="p-6 border-r-2 border-gray-300 bg-indigo-600">
      <div className="text-3xl font-medium text-white ">500k+</div>
      <div className="text-white mt-2">Active Learners</div>
    </div>

    <div className="p-6 border-r-2 border-gray-300 bg-indigo-600 ">
      <div className="text-3xl font-medium text-white">10,000+</div>
      <div className="text-white mt-2">Online Courses</div>
    </div>

    <div className="p-6 border-r-2 border-gray-300 bg-indigo-600">
      <div className="text-3xl font-medium text-white">8,500+</div>
      <div className="text-white mt-2">Expert Instructors</div>
    </div>

    <div className="p-6 border-r-2 border-gray-300 bg-indigo-600">
      <div className="text-3xl font-medium text-white">4.8 / 5</div>
      <div className="text-white mt-2">Avg. Rating</div>
    </div>

  </div>
</div>
  )
}

export default Stats