import React from 'react'
import Header from './Header'
import Para from './Para'
import SearchCourses from './SearchCourses'

const HLeft = () => {
  return (
    <div className='flex flex-col  gap-10 bg-[#EFF6FF] w-1/2 items-center justify-center h-full'>
      <Header/>
      <Para/>
      <SearchCourses/>
    </div>
  )
}

export default HLeft