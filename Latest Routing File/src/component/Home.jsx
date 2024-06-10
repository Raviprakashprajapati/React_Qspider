import React from 'react'
import Navbar from './Navbar'
import Aside from './Aside'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        
        <Navbar/>

            <div className='flex' >
                
        <Aside/>
        <Outlet/>
            </div>

        <Footer/>


      
    </div>
  )
}

export default Home
