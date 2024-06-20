import { useEffect, useState } from "react"

const useFetch = (url) =>{

    const [data,setData] = useState(null)

    useEffect(()=>{

        fetch(url)
        .then((value)=>value.json())
        .then((value)=>{
            setData(value)
        })

    },[url])

    return [data];
}

export default useFetch;