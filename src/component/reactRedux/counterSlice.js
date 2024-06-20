import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name:"counter",
    initialState:{
        count: 0
    },
    reducers:{

        increment: (state,action) =>{
            state.count = state.count+1;
        },

        decrement: (state,action) =>{
            state.count = state.count-1;
        },

        reset: (state,action) =>{
            state.count = 0;
        }
    }
})


export let {increment,decrement,reset} = counterSlice.actions

export default counterSlice
