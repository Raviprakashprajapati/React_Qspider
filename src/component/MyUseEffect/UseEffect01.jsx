import React, { useEffect, useState } from 'react'

function UseEffect01() {

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)

    useEffect(()=>{

        const timer = setInterval(() => {
            console.log("it will run everytime even to go to another comoenent")
        }, 1000);

        console.log("hello")

        return ()=>{
            clearInterval(timer)
        }

     }, [count,count2])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)} >Add</button>
      
        <h1>{count2}</h1>
        <button onClick={()=>setCount2(count2+1)} >Add</button>

    </div>
  )
}

export default UseEffect01
