import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>



{/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class=" flex justify-between mx-auto p-4">
    <Link to='/' class="flex items-center">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </Link>
   
    <div class="w-full">
      <ul class="font-medium flex">
        <li>
          <Link to="/" class="" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/cart" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}

<nav className='bg-white fixed w-full z-10'>
  <div className='mx-auto p-5 flex justify-between'>
  <Link to="/" className="text-2xl font-bold">Comfashion</Link>
   <div className='flex'>
    <h1 className='font-normal text-blue-600 pr-5'>
      <Link to='/'>
      Home
      </Link> 
      </h1>
      <h1 className='font-normal'>
      <Link to='/cart'>
      Cart
      </Link> 
      </h1>
   </div>
  </div>
</nav>

    </>
  )
}

export default Nav