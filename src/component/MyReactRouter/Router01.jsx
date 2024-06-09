import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home001 from "./Home001";
import Contact002 from "./Contact002";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home001/>,
    },
    {
        path:"/contact",
        element:<Contact002/>,
    }
])


const Roouter01 = () =>{
    return(
        <RouterProvider router={router}>
            
        </RouterProvider>
    )
}