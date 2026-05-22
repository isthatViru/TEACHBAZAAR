import React from 'react'
import Left from './Left'
import Right from './Right'

const Banner = () => {
  return (
    <div className='flex justify-evenly h-80  items-center bg-[#F59E0B] '>
        <Left/>
        <Right/>
    </div>
  )
}

export default Banner