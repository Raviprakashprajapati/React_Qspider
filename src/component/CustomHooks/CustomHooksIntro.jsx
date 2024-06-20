import { useEffect } from "react"
import useFetch from "./useFetch"
import useCounter from "./useCounter"
import useLoading from "./useLoading";

export default function CustomHooksIntro(){

    // const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
    // console.log(data)
 
    // const {data,increment,decrement,reset} = useCounter(1)


    const { loading, startLoading, stopLoading } = useLoading();

    useEffect(() => {
        const fetchData = async () => {
            startLoading();
            try {
                // Simulate data fetching
                await new Promise((resolve) => setTimeout(resolve, 2000));
                // Handle fetched data here
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                stopLoading();
            }
        };

        fetchData();
    }, []);


    return(

        <div>

            {
                loading? <p>loading....</p>:<p>data</p>
            }
            <button onClick={startLoading} > strat loading</button> <br />
            <button onClick={stopLoading} > stop loading</button>

           

        </div>
    )
}