import React from 'react'
import CatCards from './CatCards'
import CatHeader from './CatHeader'

const Home_Categories = () => {
  return (
    <div className='flex flex-col items-center'>
        <CatHeader/>
        <CatCards/>
    </div>
  )
}

export default Home_Categories