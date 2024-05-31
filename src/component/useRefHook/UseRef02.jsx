import React, { useRef } from 'react'

function UseRef02() {

    const myNavRef = useRef()

    function handleClick(){
        myNavRef.current.style.color="red"
    }

  return (
    <div>
        
        <nav ref={myNavRef}  style={{height:"30px",backgroundColor:"yellow",display:"flex",justifyContent:"space-around",alignItems:"center"}} 
        onClick={handleClick}
        >
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </nav>
      
    </div>
  )
}

export default UseRef02
