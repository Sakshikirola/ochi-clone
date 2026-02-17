import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/LandingPage'
import Marqueue from './Components/Marqueue'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'> 
      <Navbar/> 
      <Landing/> 
      <Marqueue/>
      <About/>
      <Eyes/> 
      <Featured/> 
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App 
