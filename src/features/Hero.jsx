import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero bg-no-repeat bg-cover max-sm:h-52 mt-14 max-sm:mt-8'>
    <div className='hero-opacity h-full text-white text-center'>
        <h1 className='text-8xl font-medium pt-28 max-sm:text-2xl max-sm:pt-12'>ComFashion</h1>
        <h1 className='max-sm:text-sm text-2xl pt-11 max-sm:pt-3'>Pakistani Products</h1>
        <button className='bg-black text-white hero-btn mt-16 max-sm:mt-2'>Shop Now</button>
    </div>
    </div>
  )
}

export default Hero