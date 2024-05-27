import React from 'react'

function Event01() {

    const handleClick = (e)=>{
        console.log(e.target.style)
        
        e.target.style.background="red"
        e.target.style.color= "yellow"
        e.target.style.width= "200px"
    }

    const handleInput=(e)=>{
        console.log(e.target.style)
        e.target.style.width = "300px"
        e.target.style.background = "red"
        
    }

  return (
    <div>
      
      <button onClick={handleClick} >CLick On Me</button>
      <input type="text" onMouseOver={handleInput}  />

    </div>
  )
}

export default Event01
