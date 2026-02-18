import React from 'react'
import {motion} from 'framer-motion' 

const Marqueue = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-15 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden   whitespace-nowrap gap-5"> 
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:8}} className='text-[13vw] font-["Founders Grotesk"] leading-none uppercase  mb-6 font-bold tracking-tighter'>We are ochi</motion.h1> 
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:8}} className='text-[13vw] font-["Founders Grotesk"] leading-none uppercase  mb-6 font-bold tracking-tighter'>We are ochi</motion.h1> 
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:8}} className='text-[13vw] font-["Founders Grotesk"] leading-none uppercase  mb-6 font-bold tracking-tighter'>We are ochi</motion.h1> 
      </div> 
    </div> 
  )
}

export default Marqueue
