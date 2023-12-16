import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, increaseQuantity, decreaseQuantity, buyNow } from './showData'
import Form from './Form'
import './home.css'


const Cart = () => {

    const [note, setNote] = useState(false)
    const [buy, setBuy] = useState(false)


    const { cartItems, total, Remnotification,ThankYou } = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    return (

        <>
        <div className='fixed z-10 w-full'>
        {
            buy ? 
            <div className='note-animate w-full text-center text-white bg-green-600'>
            <h1>{ThankYou}</h1>
            <button className='bg-blue-500 mt-1 pt-1 ps-2 pb-1 pe-2 rounded-lg' onClick={() => setBuy(false)}>close</button>
        </div> : null
           }

            {
                note ? <div className='note-animate w-full text-center text-white bg-red-600'>
                    <h1>{Remnotification}</h1>
                    <button className='bg-blue-500 mt-1 pt-1 ps-2 pb-1 pe-2 rounded-lg' onClick={() => setNote(false)}>close</button>
                </div> : null
            }
         </div>
          
            <div className='bg-gray-100'>
                <div className='container mx-auto p-52 max-sm:p-4 bg-white'>
                    <div className='grid grid-cols-1'>
                        {
                            cartItems.map((item) => (
                                <div className='border flex justify-between max-sm:justify-center max-sm:flex-col mt-10 pe-10 py-5'>
                                    <div className='w-2/4 max-sm:mx-auto'>
                                        <img className='w-52 h-52 mx-auto' src={item.image} alt="" />
                                        <h1 className='text-center mt-4'>{item.title}</h1>
                                    </div>
                                    <div>
                                        <div className='flex justify-center mt-20 max-sm:mt-10'>
                                            <button className='bg-gray-100 me-2 ps-3 pe-3 text-lg rounded-lg' onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                                            <h1 className='text-lg'>{item.value}</h1>
                                            <button className='bg-gray-100 ms-2 ps-3 pe-3 text-lg rounded-lg' onClick={() => dispatch(increaseQuantity(item))}>+</button>
                                        </div>
                                        <div className='text-center' onClick={() => setNote(true)}>
                                            <button className='ps-3 pe-3 bg-red-600 text-white rounded-lg mt-3' onClick={() => dispatch(removeItem(item))}>remove</button>
                                        </div>
                                    </div>
                                    <h1 className='mt-24 max-sm:mt-10 text-lg max-sm:text-center'>Price: {item.price * item.value}</h1>
                                </div>
                            ))
                        }
                        <h1 className='text-center text-2xl mt-10 font-medium'>Total Amount: Rs{total} </h1>
                        <div onClick={() => setBuy(true)} className='text-center'>
                        <button onClick={() => dispatch(buyNow())} className='bg-blue-600 rounded-lg ps-2 pe-2 pt-1 pb-1 text-white'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <Form/>
            </div>

        </>
    )
}

export default Cart