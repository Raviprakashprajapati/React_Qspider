import React, { createContext, useState } from 'react'

export let contextVariable = createContext()

function Context01({children}) {
  
    let a = 10;

    const [count,setCount] = useState(0)
  
    return (
    <contextVariable.Provider value={{a,count,setCount}} >
        {
            children
        }
      
    </contextVariable.Provider>
  )
}

export default Context01
