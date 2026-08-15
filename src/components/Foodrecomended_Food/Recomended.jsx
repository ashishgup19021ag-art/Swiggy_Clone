import React, { useState } from 'react'
import { RecomendedGrid } from './RecomendedGrid'

export const Recomended = ({recomendeddata , Foodselected}) => {

  const [isOpen,setisOpen] = useState(true);

  if ("categories" in recomendeddata) {
    return(
      <>
    {
      recomendeddata?.categories?.map((items)=> <Recomended key={items?.title} recomendeddata={items} Foodselected={Foodselected}></Recomended>)
    }
    </>
  )
    
  }

  if(!isOpen){
    return(
      <div className='w-full m-4'>
        <div className='flex  w-full justify-center  '>
          <p className='w-[60%]  text-left text-2xl font-bold'>{recomendeddata.title}</p>
          <button className='h-5 w-5 text-2xl font-bold text-black' onClick={()=>setisOpen(!isOpen)}>{isOpen?"⌃":"⌄"}</button>
        </div>
        <div className='h-2 w-full rounded-2xl bg-gray-300 my-3'></div>

      </div>
    )

  }

  if (Foodselected==="veg") {
    return(
      <div className='w-full border border-gray-300 rounded-2xl m-4'>
      
        <div className='flex  w-full justify-center  '>
          <p className= 'w-[60%]  text-left text-2xl font-bold'>{recomendeddata.title}</p>
          <button className='h-5 w-5 text-2xl font-bold text-black' onClick={()=>setisOpen(!isOpen)}>{isOpen?"⌃":"⌄"}</button>
        </div>


      <div>
        {
          recomendeddata?.itemCards?.filter((vegfood)=> "isVeg" in vegfood?.card?.info)?.map((data)=> <RecomendedGrid key={data?.card?.info?.id} data = {data?.card?.info}></RecomendedGrid>)
        }

      </div>
    </div>
    )
  }
  
  if(Foodselected==="non veg"){
    return(
      <div>
      <div className='w-full border border-gray-300 rounded-2xl m-4'>
      
        <div className='flex  w-full justify-center  '>
          <p className= 'w-[60%]  text-left text-2xl font-bold'>{recomendeddata.title}</p>
          <button className='h-5 w-5 text-2xl font-bold text-black' onClick={()=>setisOpen(!isOpen)}>{isOpen?"⌃":"⌄"}</button>
        </div>

      <div>
        {
          recomendeddata?.itemCards?.filter((vegfood)=> !("isVeg" in vegfood?.card?.info))?.map((data)=> <RecomendedGrid key={data?.card?.info?.id} data = {data?.card?.info}></RecomendedGrid>)
        }

      </div>

    </div>
    </div>
    )
  }

  return (
    <>
    <div className='w-full border border-gray-300 rounded-2xl md:m-4 mr-6 md:my-4 my-4  '>
      
        <div className='flex  w-full justify-center  '>
          <p className= 'w-[60%]  text-left text-2xl font-bold'>{recomendeddata.title}</p>
          <button className='h-5 w-5 text-2xl font-bold text-black' onClick={()=>setisOpen(!isOpen)}>{isOpen?"⌃":"⌄"}</button>
        </div>

      <div>
        {
          recomendeddata?.itemCards?.map((data)=> <RecomendedGrid key={data?.card?.info?.id} data = {data?.card?.info}></RecomendedGrid>)
        }

      </div>
    </div>
    </>
    
  )
}
