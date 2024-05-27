import React from 'react'
import Child from './Child'

function Parent(props) {
    // console.log(props)
  return (
    <div>
      <Child props={props} />
    </div>
  )
}

export default Parent
