import React, { useState } from 'react'

function Todo() {

    let [state,setState] = useState({
        username:"",
        password:"",
        list:[]
    })

    function handleChange(e){

        setState((prev)=>({...prev,[e.target.name]:e.target.value}))
        
    }

    function handleSubmit(e){
        e.preventDefault()
        setState({username:"",password:"",list:[]})
    }


    console.log(state)

  return (
    <div>

        <form >
            <input type="text" value={state.username} className='text-black' onChange={handleChange} name="username"  placeholder='Enter username' /><br /><br />
            <input type="text" value={state.password} className='text-black' onChange={handleChange} name="password" placeholder='Enter password' />
            <button onClick={handleSubmit} >Submit</button>
        </form>

      
    </div>
  )
}

export default Todo
