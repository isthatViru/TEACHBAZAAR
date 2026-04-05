import React from 'react'
import HLeft from './H-Left/HLeft'
import HRight from './H-Right/HRight'

const Hero = () => {
  return (
    <div className='h-screen flex w-full mt-15 '>
      <HLeft/>
      <HRight/>
    </div>
  )
}

export default Hero