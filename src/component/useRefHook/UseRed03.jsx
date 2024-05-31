import React, { useRef } from 'react'

function UseRed03() {

    const myPink = useRef()
    const myGreen = useRef()
    const myBlue = useRef()
    const myOrange = useRef()
    const myRed = useRef()

    function handleGray(){
        myPink.current.style.background = "pink"
    }

    function handleOrange(){
        myGreen.current.style.background = "green"

    }
    function handleYellow(){
        myBlue.current.style.background = "blue"
    }
    function handleRed(){
        myOrange.current.style.background = "orange"
    }
    function handleGreen(){
        myRed.current.style.background = "red"
    }

  return (
    <div>


        <nav ref={myGreen}  onClick={handleGray} style={{display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"gray",height:"10vh"}} >
            <div>Home</div>
            <div>About</div>
            <div>COntact</div>
        </nav>

        <main style={{display:"flex"}} >
        <div onClick={handleOrange}  style={{backgroundColor:"orange",height:"80vh",width:"33%"}} ref={myRed} ></div>

        <div ref={myPink} onClick={handleYellow}  style={{backgroundColor:"yellow",height:"80vh",width:"33%"}} ></div>

        <div onClick={handleRed}   ref={myBlue} style={{backgroundColor:"red",height:"80vh",width:"33%"}} ></div>

        </main>
        
        {/* footer */}
        <footer ref={myOrange} onClick={handleGreen} style={{height:"10vh",backgroundColor:"green"}} ></footer>
      
    </div>
  )
}

export default UseRed03
