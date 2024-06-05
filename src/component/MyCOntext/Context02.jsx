import React, { createContext, useEffect, useState } from 'react'

export let apiContext = createContext()

const imageArray = ["https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?w=740&t=st=1717468231~exp=1717468831~hmac=5563192e27c38e94ea977f0a241038a7801725260384896320dae502a50cb160","https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=740&t=st=1717468255~exp=1717468855~hmac=464b12dd04f3e5447b3a6ea3d998d7d280a71cdab6c529304e0f15ed193972de","https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-morning-autumn-seasons-fuji-mountain-yamanachi-japan_335224-102.jpg?w=826&t=st=1717468267~exp=1717468867~hmac=eb67119be1c1d49fe4a9637d2b615bccf7c251ef52a5eb445e0acad03d9c1267"]

function Context02({children}) {

    const [data,setData] =useState()

    async function fetchGithub(){
        try {
            let response = await fetch("https://api.github.com/users/Raviprakashprajapati")
            response = await response.json()
            setData(response)
        } catch (error) {
            console.log(error.message)
            
        }
    }

    useEffect(()=>{
        fetchGithub()
    },[])

  return (
    <apiContext.Provider value={{data,setData,imageArray}} >
        {children}
    </apiContext.Provider>
    
  )
}

export default Context02
