import React, { useState } from 'react'

function Usestate02() {

    const [toggle,setToggle] = useState(false)


    const handleToggle = () => {
        
        setToggle(!toggle)
    }

  return (
    <div>

        <button onClick={handleToggle} >{toggle?"OFF":"ON"} </button>
      
    </div>
  )
}

export default Usestate02
