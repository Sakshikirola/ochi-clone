import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-40 px-16">
        {["We Create", "Eye-Opening", "Presentations"].map((item,index)=>{
          return <div className="masker">
            <div className='w-fit flex items-end overflow-hidden'>
             {index === 1 && (<div className='mr-[1vw] w-[7vw] rounded-md h-[5vw] bg-green-400 relative'></div>)} 
             <h1 className='uppercase text-[6.5vw] leading-[6vw] tracking-tighter font-bold font-["Founders Grotesk"]'>
              {item}  
             </h1>  
            </div> 
         </div> 
        })} 
         
      </div>
      <div className='border-t border-zinc-800 mt-24 flex justify-between items-center px-16 py-3'>
       {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>
        <p className='text-md font-light tracking-tight leading-none'>{item}</p> 
       )} 
       <div className='start flex gap-2'>
        <div className='px-5 py-1 border border-zinc-500 rounded-full font-light text-sm uppercase'>Start the project</div>
        <div className='w-7 h-7 flex items-center justify-center rounded-full border border-zinc-500'>
          <MdArrowOutward/>  
        </div> 
       </div> 
      </div> 
    </div>
  ) 
}

export default Landing
