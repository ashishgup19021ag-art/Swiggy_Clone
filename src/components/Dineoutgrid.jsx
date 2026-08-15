//  this is dineout of homepage

import React from 'react'

function Dineoutgrid({data}) {
  return (
    <>
    <div className='h-95 w-248 '>
        <div>
            <a href={data?.cta?.link}>
            <div className=' relative '>
                <img className='h-50 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)] rounded-t-2xl w-92.5 object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.info?.mediaFiles?.[0]?.url}`} alt="" />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className=' absolute bottom-3 flex items-center justify-between contaitner mx-4'>
                    <h1 className='w-50.5  h-6 text-[#FFFFFF] text-6 font-serif font-extrabold'>{data?.info?.name}</h1>
                    {/*  svg for rating */}
                    <div className='pl-5'>
                        <svg  className=' ' width="15" height="15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="green"/>
                    <polygon points="100,30 118,78 170,78 128,108 144,158 100,128 56,158 72,108 30,78 82,78"  fill="white"/></svg>

                    </div>
                    
                    <div className='h-5.3 w-5.5 pl-2 text-[#FFFFFF] text-base font-bold'>
                        <h1>{data?.info?.rating?.value}</h1>
                    </div>
                </div>
                
            </div>
            <div className='border-gray-500 px-5  border-2 rounded-b-2xl'>
                <div className='flex justify-between w-74 h-4 '>
                    <div className='flex justify-left gap-2 mt-2 w-54 h-4 text-xs text-[#02060C99] font-bold'>
                        <h1 className='w-auto h-4'>{data?.info?.cuisines[0]}</h1>
                        <h1 className='w-auto h-4'> {data?.info?.cuisines?.[1] && `• ${data.info.cuisines[1]}`}</h1>
                    </div>
                    <div className='w-20 mt-2 h-4'>
                        <h1 className='text-xs w-54 h-4 text-[#02060C99] font-bold'>{data?.info?.costForTwo}</h1>
                    </div>
                </div>

                <div className='flex justify-between mt-4 w-74 h-4 '>
                    <div className='flex justify-left gap-2 w-54 h-4 text-xs text-[#02060C99] font-bold'>
                        <h1 className='w-auto h-4'>{data?.info?.locationInfo?.formattedAddress}</h1>
                    </div>
                    <div className='w-20 h-4'>
                        <h1 className='text-xs w-54 h-4 text-[#02060C99] font-bold'>{data?.info?.locationInfo?.distanceString}</h1>
                    </div>
                </div>

                <div className='h-9 w-75 flex items-center mt-3 text-[#FFFFFF] font-bold text-base bg-[#1BA672] rounded-2xl'>
                    <img className='w-6.5 h-5 pl-2 ' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" alt="" />
                    <div className='h-5 w-53 pl-2 text-[14px] '>
                        <h1>{data?.info?.offerInfoV3?.vendorOffer?.title + " " + data?.info?.offerInfoV3?.vendorOffer?.subtitle}</h1>
                    </div>
                    <div className='h-5 pb-6 w-20'>
                        <h1>{data?.info?.offerInfoV3?.vendorOffer?.subtext}</h1>
                    </div>
                </div>

                <div className='h-9 w-75 mt-3 flex text-left  mb-3 bg-[#C8F9E5] rounded-2xl'>
                    <h1 className='text-[#1BA672] font-serif text-base ml-5 flex items-center'>Up to 10% off with bank offers</h1>
                </div>
            </div>
            </a>
        </div>
    </div>
    </>
  )
}

export default Dineoutgrid