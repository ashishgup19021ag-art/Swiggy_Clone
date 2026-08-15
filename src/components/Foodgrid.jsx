//  this is for foo on home page
import React from 'react'

const Foodgrid = ({newdata}) => {
  return (
    <>
    <a href={newdata.action.link}>
    <div className='flex-col items-center min-w-30 shrink-0'>
        <img className='w-60 h-40 object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${newdata.imageId}`} alt="" />
    </div>
    </a>
    </>
  )
}

export default Foodgrid