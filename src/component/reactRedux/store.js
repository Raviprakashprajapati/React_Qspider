import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

let store = configureStore({
    reducer:{
        counterReducer : counterSlice.reducer
    }
})

export default store;



{/* <Provider store={store} >
<App />
</Provider> */}


