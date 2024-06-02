import React from 'react'

function Map01() {

    let arr = [10,20,30,40,50,60 ]


  return (
    <div>
    
        {
            arr.length>0 && arr.map((i,index)=>(
                <span key={index} style={{background:"cyan"}} > {i} </span>
            ))
        }


    </div>
  )
}

export default Map01
