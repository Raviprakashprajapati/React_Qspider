import React from 'react'
import { Form, useNavigate } from 'react-router-dom'

function Item1() {

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    navigate("/home/item2")
  }

  return (
    <div className='w-[70%] bg-yellow-400' >
      item1
      <form  >
        <input type="text"  className='bg-red' placeholder='ENter here' />
        <button onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  )
}

export default Item1
