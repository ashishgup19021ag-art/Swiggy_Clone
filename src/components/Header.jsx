import React from 'react'
import {Link} from 'react-router'

export const Header = () => {
  return (
    <header className='bg-[#FF5200] font-serif'>
        <div className=' flex justify-between container mx-auto px-4 py-4 md:py-8 md:px-32'>
              <img className='w-28 md:w-40' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />

            <div className='text-[#FFFFFF] text-base font-bold md:flex gap-15 items-center '>
              <a target='_blank' md:block hidden href="https://www.swiggy.com/corporate/">Swiggy Corrporate</a>
              <a target='_blank' md:block hidden href="https://partner.swiggy.com/food/login">Partner with Us</a>
              <a className='border rounded-2xl py-3 px-4 mx-4' target='_blank' href="">Get the App</a>
              <a className='bg-black border-black rounded-2xl py-3 px-4'target='_blank' href="">Sigh In</a>
            </div>
        </div>

        <div className='pt-8 pb-8 md:pt-16 md:pb-8 relative '>
          <img className='h-112.5 w-62.5 md:block hidden absolute left-0 top-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
          <img className='h-112.5 w-62.5 md:block hidden absolute right-0 top-0' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
          <div className='w-full md:w-182.25 h-auto container mx-auto text-center px-4 md:px-0'>
            <h1 className='text-[28px] leading-9 md:text-[48px] md:leading-normal text-white'>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
          </div>
          <div className='max-w-[50%] md:block hidden container mx-auto  mt-15 relative px-0 '>
            {/* svg1 */}
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="absolute left-[3%] top-[50%] -translate-y-1/2 w-5 h-5 text-orange-500"
      >
        <path d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
      {/* svg2 */}
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className='absolute left-[37%] top-[50%] -translate-y-1/2 w-5 h-5 text-[#02060C73]'
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
            <input className='bg-white mx-3 w-80 py-3 px-13 rounded-2xl placeholder-[#02060C73] mb-0' type='text' placeholder='Enter your delivery location'></input>
            <input className='bg-white w-80 py-3 px-5 rounded-2xl placeholder-[#02060C73]' type='text' placeholder='Search for restaurant, item or more' ></input>
          </div>
        </div>


        <div className='flex justify-center gap-2 px-2 overflow-hidden'>
          <Link to="/restaurent">
          <img className='w-27.5 h-auto md:h-80.5 md:w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
          </Link>
          <Link to="/restaurent">
          <img className='w-27.5 h-auto md:h-80.5 md:w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
          </Link>
          <Link to="/restaurent">
          <img className='w-27.5 h-auto md:h-80.5 md:w-auto' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
          </Link>
          
        </div>

    </header>
  )
}


