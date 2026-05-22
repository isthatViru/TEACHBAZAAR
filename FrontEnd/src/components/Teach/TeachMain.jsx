import React from 'react'
import Hero from './Hero'
import WhyTeachBazaar from './WhyTeachBazaar'
import HowItWorks from './HowItWorks'
import CTASection from './CTASection'

const TeachMain = () => {
  return (
    <div className='flex flex-col items-center'>
        <Hero/>
        <WhyTeachBazaar/>
        <HowItWorks/>
        <CTASection/>
    </div>
  )
}

export default TeachMain