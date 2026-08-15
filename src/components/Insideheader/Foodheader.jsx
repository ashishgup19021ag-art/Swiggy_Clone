import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'


export const Foodheader = () => {
const count  = useSelector(state=> state.cartSlice.count)

  return (
    <div className='h-20 bg-orange-600 w-full sticky top-0 z-50 overflow-hidden'>
        <div className=' flex justify-between  max-w-7xl mx-auto py-3  px-8'>
              <img className=' w-40' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />

            <div className='text-[#FFFFFF] text-base font-bold flex gap-10 items-center '>
              <div>
                <Link to="/Checkout">
                  <button className='bg-black border-black rounded-2xl py-3 px-4 cursor-pointer'target='_blank' href="">Cart {`${count }`} </button>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}
