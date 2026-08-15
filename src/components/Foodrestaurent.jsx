// this is for wen you click  food diiver in header

import React from 'react'
import { Link } from 'react-router'

const Foodrestaurent = ({data}) => {
  return (
    <>
    <Link to={"/city/delhi/"+data?.info?.id}>
    <div className='h-80 w-90 py-5 transform transition duration-200 hover:scale-95'>
            <div className=' relative '>
                <img className='h-50  shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)] rounded-2xl w-92.5 object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.info?.cloudinaryImageId}`}alt="" />
                <div className="absolute bottom-0 rounded-2xl left-0 w-90 h-20 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className=' absolute bottom-3 flex items-center justify-between contaitner mx-4'>
                    <h1 className='w-50.5  h-6 text-[#FFFFFF] text-6 font-serif font-extrabold'>{data?.info?.aggregatedDiscountInfoV3?.header +"   "+ data?.info?.aggregatedDiscountInfoV3?.subHeader }</h1>
                </div>
                
            </div>
            <div className=' pl-5' >
                <div className='flex justify-between w-auto h-4 '>
                    <div className='flex justify-left gap-2 w-auto h-4  text-[20px] py-1 font-bold'>
                        <h1 className='w-auto text-[#02060CEB]  h-4'>{data?.info?.name}</h1>
                    </div>
                </div>

                <div className='flex items-center w-auto h-4 pt-7 pb-4'>
                    {/*  svg for rating */}
                    <div className='h-4 w-auto flex'>
                    <div className=' pt-1 '>
                        <svg  className=' ' width="15" height="20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="green"/>
                    <polygon points="100,30 118,78 170,78 128,108 144,158 100,128 56,158 72,108 30,78 82,78"  fill="white"/></svg>

                    </div>
                    
                    
                    <div className='h-5.3 w-auto pl-2 text-[#000000] text-base font-bold'>
                        <h1>{data?.info?.avgRatingString + `• ${data?.info?.sla?.slaString}`}</h1>
                    </div>

                    </div>
                    
                </div>

                <div>
                    <div className='flex justify-left gap-1  w-auto h-4 text-xs text-[#02060C99] font-semibold'>
                        <h1 className='w-auto flex  gap-1 text-base text-[#02060C99]  h-4'>{data?.info?.cuisines?.slice(0, 3).join(", ")}
                            {data?.info?.cuisines?.length > 3 && ", ..."}
                        </h1>
                    </div>
                </div>

                <div>
                    <h1 className='text-base py-1 text-[#02060C99] font-semibold'>{data?.info?.areaName}</h1>
                </div>

               
            </div>
        </div>
        </Link>
    </>
    
  )
}

export default Foodrestaurent