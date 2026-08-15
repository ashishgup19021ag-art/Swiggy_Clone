// this is page of when you go /restauren then click any resturent
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { Recomended } from './Recomended'
import { RecomendedShimmer } from '../Shimmer/RecomendedShimmer'

export const Restaurentmenu = () => {

  let {id} = useParams()

  const [fetchdata,setfetchdata] = useState(null)
  const [selected,setselected] = useState(null);

  useEffect(()=>{

    async function fetchthedata() {
    const ans = await fetch(`https://backend-restaurent-api-1.onrender.com/menu/${id}`)
    const response = await ans.json();

    const tempdata = response?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const filterdata = tempdata?.filter((items)=> "title" in items?.card?.card)

    setfetchdata(filterdata);
  }

  fetchthedata();
  },[id])


  return (
    <div className='w-full'>
    <div className='sticky h-16 md:h-20 top-0 md:top-20 z-40 bg-white w-full md:w-[80%] px-2 md:px-0 mx-auto'>
  <button
    className={`text-2xl font-black border-gray-400 border-2 m-2 px-8 ${
      selected === "veg" ? "bg-green-500" : "bg-gray-300"
    }`}
    onClick={() => setselected(selected === "veg" ? null : "veg")}
  >
    Veg
  </button>

  <button
    className={`text-2xl font-black border-gray-400 border-2 m-2 px-5 ${
      selected === "non veg" ? "bg-red-500" : "bg-gray-300"
    }`}
    onClick={() => setselected(selected === "non veg" ? null : "non veg")}
  >
    Non Veg
  </button>
</div>
    <div className='w-full md:w-[80%] mx-auto px-3 md:px-0'>

      {
  fetchdata === null ? (
    <>
      <RecomendedShimmer />
      <RecomendedShimmer />
      <RecomendedShimmer />
    </>
  ) : (
    fetchdata.map((recomendeddata) => (
      <Recomended
        key={recomendeddata?.card?.card?.title}
        recomendeddata={recomendeddata?.card?.card}
        Foodselected={selected}
      />
    ))
  )
}
      
    </div>
    <div className='relative'>
    <div className=' h-105 md:h-65 w-full absolute bottom-0 bg-white'></div>
    </div>
    </div>
  )
}
