// import React from 'react'

import './App.css'
import NavBar from './components/NavBar'
import HeroPart from './components/HeroPart'
import AboutDan from './components/AboutDan'
import DanTechnologies from './components/DanTechnologies'
import DanExperince from './components/DanExperince'
import DanProjects from './components/DanProjects'
import DanContact from './components/DanContact'


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className='fixed  top-0 -z-10 h-full w-full '>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      </div>

      
      <div className='container mx-auto px-8'>
      <NavBar />
      <HeroPart />
      <AboutDan />
      <DanTechnologies />
      <DanExperince />
      <DanProjects />
      <DanContact />
      </div>
    
  </div>
  )
}

export default App