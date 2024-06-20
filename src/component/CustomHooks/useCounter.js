import { useState } from "react"

const useCounter = (value=0) => {

    const [data,setData] = useState(value);

    function increment(){
         setData((prev)=>prev+1)
         
    }
    function decrement(){
        setData((prev)=>prev-1)
    }
    function reset(){
        setData(0)
    }

    return {data,increment,decrement,reset}
}

export default useCounter;