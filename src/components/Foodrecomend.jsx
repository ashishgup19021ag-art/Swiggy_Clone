// this is for food in homepage
import React from 'react'
import { Food } from '../data/Foodrecomend'
import Foodgrid from './Foodgrid'

const Foodrecomend = () => {
  return (
    <div className='pt-20'>
    <h1 className='text-[#02060CEB] text-[20px] md:text-[24px] font-bold w-full md:w-300 container mx-auto px-4 md:px-0'>Order our best food options</h1>
    <div className='h-auto w-full md:w-300 flex overflow-x-auto no-scrollbar gap-x-5 md:gap-x-10 pt-4 container mx-auto px-4 md:px-0'>
        
        {
        Food.map((newdata)=><Foodgrid key={newdata.id} newdata = {newdata} ></Foodgrid>)
        }
    </div>
    </div>
  )
}

export default Foodrecomend