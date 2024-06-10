import React from 'react'
import { Link } from 'react-router-dom'

function Aside() {
  return (
    <div className='bg-orange-400 h-[80vh] w-[30%] p-3' >
      
    <nav className='flex h-[100%] flex-col  justify-evenly items-center' >
    <div><Link to="/home" >Item1</Link></div>
      <div><Link to="/home/Item2" >Item2</Link></div>
      <div><Link to="/home/Item3" >Item3</Link></div>

    </nav>

    </div>
  )
}

export default Aside
