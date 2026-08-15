import React from 'react'

const Grocerybuy = ({data}) => {
  return (
    <>
    <a href={data?.action?.link}>
    <div className='flex-col p-5 items-center min-w-25 shrink-0'>
        <img className='w-40 h-50 object-contain' src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`} alt="" />
        <h1 className='text-[#02060CBF] font-serif text-[24px] h-auto w-28 text-justify '>{data?.action?.text}</h1>
    </div>
    </a>
    </>
  )
}

export default Grocerybuy