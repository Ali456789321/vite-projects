import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserdata,addItem } from './showData';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import './home.css'
import Form from './Form';



function Home() {
  
  const {cart, loading, Addnotification} = useSelector((state) => state.counter);
  const dispatch = useDispatch(); 

   useEffect(() => {
    dispatch(getUserdata())
   },[])

   const [note, setNote] = useState(false)



  if(loading) {
    return <h1>loading</h1>
  }else {
      return (
        <>
            
        {
            note ?
            <div className='note-animate fixed z-10 w-full text-center text-white bg-green-600'>   
            <h1>{Addnotification}</h1>
            <div className='w-1/4 flex justify-between mx-auto'>
            <button className='bg-red-600 pt-1 ps-2 pb-1 pe-2 rounded-lg' onClick={() => setNote(false)}>Close</button>
                <Link className='' to='/cart'>
                   <button className='bg-black pt-1 ps-2 pb-1 pe-1 rounded-lg' onClick={() => setNote(false)}>View Cart</button>
                </Link>
            </div>
            </div> : null
        }
       <div className='container mx-auto p-16 max-sm:p-6 bg-gray-100'>
        
        <Hero/>

        <div className='text-center  bg-gray-100 pb-20'>
            <div className='w-5/12 max-sm:w-full mx-auto'>
            <h1 className='pt-20 text-3xl'>Our Collection</h1>
            <h1 className='pt-8'>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </h1>
            </div>
        </div>

       <div className='grid grid-cols-3 max-sm:grid-cols-1 text-center gap-5 bg-white pt-20'> 
        {
            cart.map((item) => (
              <>
                <div className='w-full grid-item'>
                <img src={item.image} alt="" className='w-52 h-52 mx-auto'/>
               
                <h1 className='text-base pt-2'>{item.title}</h1>
                <h1 className='text-base pt-2'>{item.price}</h1>
                <div className='flex flex-col' onClick={() => setNote(true)}>
                    <button className='grid-btn pt-1 pb-1 mt-2 rounded-lg' onClick={() => dispatch(addItem(item))}>add</button>
                </div>   
                </div>
             </>
            ))
          }
        </div>
        <Form/>
       </div>
    
        </>
      )
  }
}

export default Home