import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue Montreal"] text-[4vw] leading-[4vw] tracking-tight'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
      <div className='w-full flex gap-5 border-t pt-10 border-[#a1b562] mt-20'>
        <div className='w-1/2'>
         <h1 className='text-5xl'>How we can help:</h1>
         <button className='flex gap-10 items-center px-10 mt-8 py-4 bg-zinc-900 rounded-full text-white uppercase'>Read More <div className='w-3 h-3 bg-zinc-100 rounded-full'></div></button> 
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[#a1b562]'></div> 
      </div> 
    </div> 
  )
}

export default About
