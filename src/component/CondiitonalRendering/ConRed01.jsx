import React, { useState } from 'react'

function ConRed01() {

    const [login,setLogin] = useState(false)

  return (
    <div>
       
       <ul style={{listStyle:"none",display:"flex",justifyContent:"space-around"}} >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li onClick={()=>setLogin(!login)}  >{login?"LOGOUT":"LOGIN"}</li>
       </ul>


       <center>{login?"HOME":""}</center>

    </div>
  )
}

export default ConRed01
