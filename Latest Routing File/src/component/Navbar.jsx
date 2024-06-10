import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex bg-slate-800 h-[10vh] justify-evenly items-center' >
      
      <div><Link to="/home" >Item1</Link></div>
      <div><Link to="/home/Item2" >Item2</Link></div>
      <div><Link to="/home/Item3" >Item3</Link></div>


    </div>
  )
}

export default Navbar
