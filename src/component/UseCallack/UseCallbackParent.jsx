import React, { useCallback, useState } from 'react'
import UseCallbackChild from './UseCallbackChild'

function UseCallbackParent() {

    const [state,setState] = useState(0)
    const [count,setCount] = useState(0)

    let func = useCallback(()=>{
        console.log("func excecuute with callback" )
    },[state])

    // let func = function(){
    //     console.log("func exceucte without callback")
    // }

  return (
    <div>
            <button onClick={()=>setCount(count+1)} >Count: {count}</button><br /><br />
            <button onClick={()=>setState(state+1)} >State:  {state}</button>

            <UseCallbackChild func={func} />
    </div>
  )
}

export default UseCallbackParent
