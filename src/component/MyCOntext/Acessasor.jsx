import React, { useContext } from 'react'
import { contextVariable } from './Context01'

function Acessasor() {

    const data = useContext(contextVariable)
    console.log(data)
  return (
    <div>
        <h2>
        {
           data.count
        }</h2>

        <button onClick={()=>data.setCount(data.count+1)} >add</button>
        <button onClick={()=>data.setCount(data.count-1)} >Sub</button>
      
    </div>
  )
}

export default Acessasor
