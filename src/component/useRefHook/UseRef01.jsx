import React from 'react'
import { useRef } from 'react'

function UseRef01() {

    const myMain = useRef()
    const myInputRef = useRef()
    function handleClick(e){
        // e.target.style.background="yellow"
        myMain.current.style.background = "yellow"
        console.log(myInputRef.current.focus())
    }

  return (
    <div>

        <main ref={myMain}    
        style={{border:"2px solid black",width:"100px",height:"100px"}} >
        </main>


        <input type="text" ref={myInputRef}  />

        <button onClick={handleClick} >Click</button>

    </div>
  )
}

export default UseRef01
