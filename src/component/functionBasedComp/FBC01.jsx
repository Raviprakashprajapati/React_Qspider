import React, { useState } from 'react'

function FBC01() {

    const [count,setCount] = useState(0)
    const [subCount,setSubCount] = useState(0)
    const [reset,setReset] = useState(0)

    function handleAdd(){
        setCount((count)=>count+1)  
        setCount((count)=>count+1)  
    }

    function handleSub(){
        setSubCount(subCount-1)
    }

    function handleReset(){
      setCount(0)
      setSubCount(0)
    }

  

  return (
    <div>/
        <h4>COUNT: {count}</h4>
        <button onClick={handleAdd} >Add</button>
      
      <div>
        <h4>COUNT: {subCount}</h4>
        <button onClick={handleSub} >Sub</button>
      </div>

      <div>
        <button onClick={handleReset} >RESEt</button>
      </div>

        
      

    </div>
  )
}

export default FBC01
