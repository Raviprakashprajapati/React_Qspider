import React, { useState } from "react";
import Home from "./Home";

function ConRed02() {

    const [nav,setNav] = useState()

    switch (nav) {
        case "Home": return <Home/>; break;
        case "About": return <Home/>; break;
        default: "NuLL"
            break;
    }

  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        
        <li onClick={()=>(setNav("Home"))} >Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default ConRed02;
