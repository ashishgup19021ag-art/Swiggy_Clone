// this is for wen you click  food diiver in header
import React from 'react'
import { useState,useEffect } from 'react'
import { Foodrestaurants } from '../data/Foodrestaurent'
import Foodrestaurent from './Foodrestaurent'

const Restaurent = () => {
    
  return (
    <div className='h-auto w-auto flex flex-wrap justify-center rounded-2xl  gap-x-10 pt-4 container mx-auto'>
      {
        Foodrestaurants.map((data)=><Foodrestaurent key = {data?.info?.id} data={data}></Foodrestaurent>)
      }
    </div>
  )
}

export default Restaurent