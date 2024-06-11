import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home'
import Item1 from './component/Item1'
import Page from './component/Page'
import Item2 from './component/Item2'
import Item3 from './component/Item3'


const router = createBrowserRouter([

  {
    path:"/",
    element:<Page/>

  },
  {
    path:"/home",
    element:<Home/>,
    children:[

      {
        path:"/home",
        element:<Item1/>
      },
      {
        path:"/home/item2",
        element:<Item2/>
      },
      {
        path:"/home/item3",
        element:<Item3/>
      }
    ]
  }

])


function App() {
  return (
    <RouterProvider router={router} >

    </RouterProvider>
  )
}

export default App
