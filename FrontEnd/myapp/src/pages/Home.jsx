import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import Stats from '../components/Home/Stats/Stats'
import Home_Categories from '../components/Home/Categories/Home_Categories'
import Home_Course_Cards from '../components/Home/CourseCards/Home_Course_Cards'
import HomeCommunity from '../components/Home/Community/HomeCommunity'
import Feedback from '../components/Home/Feedback/Feedback'
import Banner from '../components/Home/Banner/Banner'


const Home = () => {
  return (
    <>
  
    
       <Hero/>
       <Stats/>
       <Home_Categories/>
       <Home_Course_Cards/>
       <HomeCommunity/>
       <Feedback/>
       <Banner/>
    </>
 
  )
}

export default Home