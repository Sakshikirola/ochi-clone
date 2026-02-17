import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-16'>   
      <div className='cardcontainer h-[64vh] w-1/2'>
       <div className='relative card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute px-5 py-1 border rounded-full left-8 bottom-8 text-sm text-[#CDEA68]'>&copy;2019-2025</button> 
       </div>
      </div>
      <div className='cardcontainer w-1/2 h-[64vh] flex gap-5'>
        <div className='relative card w-1/2 h-full bg-[#192826] rounded-xl flex items-center justify-center'>
         <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
         <button className='absolute px-5 py-1 border rounded-full left-4 bottom-8 uppercase text-sm'>Rating 5.0 on clutch</button>
        </div>
        <div className='relative card w-1/2 h-full bg-[#192826] rounded-xl flex items-center justify-center'>
         <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" /> 
         <button className='absolute px-3 py-1 border rounded-full left-6 right-6 bottom-8 uppercase text-sm'>Business bootcamp alumini</button>
        </div> 
      </div>
    </div>
  )
}

export default Cards
