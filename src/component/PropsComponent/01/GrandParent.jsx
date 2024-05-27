import React from 'react'
import Parent from './Parent'

function GrandParent(props) {
    // console.log(props)
    return (
    <div>
        <Parent props={props} />
      
    </div>
  )
}

export default GrandParent
