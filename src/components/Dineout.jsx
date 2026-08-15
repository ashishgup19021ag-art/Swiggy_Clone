//  this is dineout of homepage
import React from 'react'
import { stackedDetails } from '../data/Restaurant'
import Dineoutgrid from './Dineoutgrid'

const Dineout = () => {
  return (
    <>
    <div>
      <h1 className='text-[#02060CEB] text-[20px] md:text-[24px] font-bold w-full md:w-300 container mx-auto px-4 md:px-0'>Discover best restaurants on Dineout</h1>
    </div>
    <div className='h-auto w-full md:w-300 flex overflow-x-auto no-scrollbar gap-x-5 md:gap-x-10 pt-4 container mx-auto px-4 md:px-0'>
        {
          stackedDetails.map((data)=><Dineoutgrid key={data?.info?.id} data = {data}></Dineoutgrid>)
        }
    </div>
    </>
  )
}

export default Dineout