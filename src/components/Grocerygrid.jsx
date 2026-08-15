import React from 'react'
import {imageGridCards} from "../data/Grocery"
import Grocerybuy from './Grocerybuy'

const Grocerygrid = () => {
  return (
    <>
    <div className='pt-25'>
    <div className='text-[#02060CEB] text-[20px] md:text-[24px] font-bold w-full md:w-300 container mx-auto px-4 md:px-0'>
        <h1>Shop groceries on Instamart</h1>
    </div>
    <div className='h-auto w-full md:w-300 flex overflow-x-auto no-scrollbar gap-x-5 md:gap-x-10 pt-4 container mx-auto px-4 md:px-0'>
        {
            imageGridCards.map((data)=><Grocerybuy key={data.id} data = {data}></Grocerybuy>)
        }
    </div>
    </div>
    </>
  )
}

export default Grocerygrid