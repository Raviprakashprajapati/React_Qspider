import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

function ReactReduxIntro() {

    let dispatch = useDispatch()
    let data = useSelector((reducer) => reducer.counterReducer.count)
    console.log(data)
  return (
    <div>
        redux

        <h1>count : {data}</h1>
        <button onClick={()=>dispatch(increment())} >Add</button>
        <button onClick={()=>dispatch(decrement())} >Minus</button>
        <button onClick={()=>dispatch(reset())} >Reset</button>
      
    </div>
  )
}

export default ReactReduxIntro
