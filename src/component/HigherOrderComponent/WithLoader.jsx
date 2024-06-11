import React, { useState } from 'react'

function WithLoader(WrapComp) {

    let [flag,setFlag] = useState(true)

  return () => {

    setTimeout(() => {
        setFlag(false)
    },2000);


  return (
    <div>
        {
        flag? <h1>Loading....</h1>
        :
        <WrapComp/>

        }
    </div>
  )
}
}

export default WithLoader
