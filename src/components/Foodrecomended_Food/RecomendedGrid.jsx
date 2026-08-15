import React, { useState } from 'react'
import { useSearchParams } from 'react-router'
import  { addItems,IncrementItems,DecrementItems} from "../../Store/Cartslice"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const RecomendedGrid = ({data}) => {

  const dispatch = useDispatch()

  const items = useSelector(state=>state.cartSlice.items);

  const element = items.find(item=>item.id === data.id);
  const count = element? element.quantity:0;


  function handleAddItems(){
    dispatch(addItems(data));
  }

  
  function handleIncrementItems(){
    dispatch(IncrementItems(data));
  }

  
  function handleDecrementItems(){
    dispatch(DecrementItems(data));
  }

  return (
    <>
    <div className='flex  w-full justify-center'>
    <div className='flex  my-3 w-full md:w-[70%] justify-between items-center px-2 md:px-0'>

    <div className='w-[60%] md:w-[70%] min-w-0'>
        <p className='text-[#02060CBF]   text-base md:text-5 my-1 font-bold'>{data?.name}</p>
       <p className='text-sm md:text-base'>{"₹"+((data?.defaultPrice ?? data?.price ?? 0) / 100)}</p>
        <div className='flex flex-wrap items-center'>
            <div className=' pt-1  mx-1 shrink-0'>
                        <svg  className=' ' width="15" height="20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="green"/>
                    <polygon points="100,30 118,78 170,78 128,108 144,158 100,128 56,158 72,108 30,78 82,78"  fill="white"/></svg>

                    </div>
                    {
                      data?.ratings?.aggregatedRating?.rating ? (
                        <>
                          <span className='mr-2 text-sm'>{data.ratings.aggregatedRating.rating}</span>
                          <span className='text-sm'>{"("+data.ratings.aggregatedRating.ratingCountV2+")"}</span>
                        </>
                      ) : (
                        <>
                        <span className='mr-2 text-sm'>3.4</span>
                        <span className='text-sm'>(24)</span>
                        </>
                      )
                    }
        </div>
        <p className='text-[#02060C99] mt-2 text-sm md:text-base line-clamp-3'>
            {
                data?.description
            }

        </p>
    </div>
    <div className='w-[35%] md:w-[20%] shrink-0 relative'>
        
        <img className='w-full h-24 md:w-50 md:h-30 object-cover rounded-2xl'
    src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`}
    alt=""/>
  {
    (count===0)?(
      <div className='absolute left-1/2 -translate-x-1/2  -bottom-4 h-9 md:h-10 w-24 md:w-30 border-2 text-center rounded-2xl border-gray-400 bg-white'>
        <button className='text-green-400 pt-1 cursor-pointer text-sm md:text-base' onClick={handleAddItems}>
          Add
        </button>
      </div>
    ):(
      <div className='absolute flex text-base md:text-[20px] text-center items-center justify-around left-1/2 -translate-x-1/2 -bottom-4 h-9 md:h-10 w-24 md:w-30 border-2 pb-1 rounded-2xl border-gray-400 bg-white'>
        <button className='text-green-400 pt-1 cursor-pointer' onClick={handleDecrementItems}>-</button>
        <span className='text-green-400 pt-1 cursor-pointer'>{count}</span>
        <button className='text-green-400 pt-1 cursor-pointer' onClick={handleIncrementItems}>+</button>
      </div>
    )
  }

  
         </div>

    </div>
    </div>
    <div className='flex  w-full justify-center'>
    <hr className='mb-6  w-full md:w-[70%]  text-[#d3d3d3] mt-2' />

    </div>
     </>
  )
}