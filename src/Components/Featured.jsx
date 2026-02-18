import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react' 

const Featured = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];  

  const handleHover = (index) => {
     cards[index].start({y:"0"}) 
  }

   const handleHoverEnd = (index) => {
     cards[index].start({y:"100%"})  
  }

  return (
    <div className='w-full py-16'> 
      <div className='w-full px-16 border-b border-zinc-700 pb-16'> 
        <h1 className="text-6xl font-['Neue Montreal'] tracking-tight">Featured Projects</h1>
      </div>  
      <div className='cards w-full flex gap-10 mt-10 px-20'>  
        <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className=" cardcontainer relative w-1/2 h-[75vh]">  
          <h1 className='absolute flex text-[#CDEA68] overflow-hidden z-9 text-8xl font-bold uppercase leading-none tracking-tighter left-full -translate-x-1/2 top-1/3 -tanslate-y-1/2'>
            {"SalienceLabs".split('').map((item,index)=> 
              <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}
               className='inline-block'>{item}
              </motion.span>   
            )}   
          </h1>
          <div className='card w-full h-full rounded-xl overflow-hidden'> 
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
          </div>
          <div className='flex gap-3 mt-4'> 
            <h1 className='px-4 py-1 border border-zinc-100 rounded-2xl uppercase text-sm tracking-tighter hover:text-black hover:bg-zinc-100'>Brand identity</h1>
            <h1 className='px-4 py-1 border border-zinc-100 rounded-2xl uppercase text-sm tracking-tighter hover:text-black hover:bg-zinc-100'>Pitch Deck</h1>
          </div>
        </motion.div>  

        <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[75vh]">  
          <h1 className='absolute flex overflow-hidden text-[#CDEA68] z-9 text-8xl font-bold uppercase leading-none tracking-tighter right-full translate-x-1/2 top-1/3 tanslate-y-1/2'>
            {"MedalliaExperience".split('').map((item,index)=>
              <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}
               className='inline-block'>{item}
              </motion.span>  
            )} 
          </h1>
          <div className='card w-full h-full rounded-xl overflow-hidden'> 
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
          </div>  
          <div className='flex gap-3 mt-4'> 
            <p className='px-4 py-1 border border-zinc-100 rounded-2xl uppercase text-sm tracking-tighter hover:text-black hover:bg-zinc-100'>Conference</p>
            <p className='px-4 py-1 border border-zinc-100 rounded-2xl uppercase text-sm tracking-tighter hover:text-black hover:bg-zinc-100'>Executive Keynote</p>
            <p className='px-4 py-1 border border-zinc-100 rounded-2xl uppercase text-sm tracking-tighter hover:text-black hover:bg-zinc-100'>Product Launch</p>
          </div>
        </motion.div> 
      </div> 

      <div className='cards w-full flex gap-10 mt-30 px-20'>  
        <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} className="cardcontainer relative w-1/2 h-[75vh]"> 
          <h1 className='absolute flex overflow-hidden text-[#CDEA68] z-9 text-8xl font-bold uppercase leading-none tracking-tighter left-full -translate-x-1/2 top-1/3 -tanslate-y-1/2'>
            {"AH2&MattHorn".split('').map((item,index)=>
              <motion.span initial={{y:"100%"}} animate={cards[2]} transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}
               className='inline-block'>{item}
              </motion.span> 
            )} 
          </h1>
          <div className='card w-full h-full rounded-xl overflow-hidden'> 
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
          </div>
          <div className='flex gap-3 mt-4'> 
            <h1 className='px-4 py-1 border border-zinc-100 rounded-2xl uppercase text-sm tracking-tighter hover:text-black hover:bg-zinc-100'>Pitch deck</h1>
          </div> 
        </motion.div> 

        <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)} className="cardcontainer relative w-1/2 h-[75vh]"> 
          <h1 className='absolute flex overflow-hidden text-[#CDEA68] z-9 text-8xl font-bold uppercase leading-none tracking-tighter right-full translate-x-1/2 top-1/3 tanslate-y-1/2'>
            {"vise".split('').map((item,index)=>
              <motion.span initial={{y:"100%"}} animate={cards[3]} transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}
               className='inline-block'>{item} 
              </motion.span>  
            )}
          </h1>
          <div className='card w-full h-full rounded-xl overflow-hidden'> 
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="" />
          </div>  
          <div className='flex gap-3 mt-4'> 
            <p className='px-4 py-1 border border-zinc-100 rounded-2xl uppercase text-sm tracking-tighter hover:text-black hover:bg-zinc-100'>Agency</p>
            <p className='px-4 py-1 border border-zinc-100 rounded-2xl uppercase text-sm tracking-tighter hover:text-black hover:bg-zinc-100'>Company Presentation</p>
          </div>
        </motion.div>  
      </div>   
    </div> 
  )
}

export default Featured 
