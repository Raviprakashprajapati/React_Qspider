import React, { useReducer } from 'react'

function UseReducer01() {

    // const [state,reducer]= useReducer( ()=>{}, initialValue )
    
    let initialState = {
        count1:0
    }

    function reducerFunc(state, action){
        switch (action.type) {
            case "add":
            return {count1:state.count1+1}
            break;

            case "sub":
            return {count1:state.count1-1}
            break;
        
            default:
                break;
        }
    }
    
    let [state,dispatch] = useReducer( reducerFunc, initialState )
    


  return (
    <div>
        <h1>state: {state.count1}</h1>
        <button className='bg-black p-2'  onClick={()=>{ dispatch({type:"add"}) }} >add</button> <br /><br />
        <button className='bg-black p-2' onClick={()=>{ dispatch({type:"sub"}) }} >sub</button>
    </div>
  )
}

export default UseReducer01;
