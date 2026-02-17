import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/LandingPage'
import Marqueue from './Components/Marqueue'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'> 
      <Navbar/> 
      <Landing/> 
      <Marqueue/>
      <About/>
      <Eyes/> 
      <Featured/> 
    </div>
  )
}

export default App 
