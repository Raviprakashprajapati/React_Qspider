import React from 'react'

function Map02Child(props) {

  const data = props.props
  console.log(data)


  return (
    <div className='border p-3 border-black rounded-lg  ' >

     <main>
      <img src={data?.avatar_url} className='h-[10rem] m-auto ' alt="" />
      <div  >
        <p className='text-center font-semibold capitalize m-3' >{data?.login}</p>
      </div>
      </main>

      <div className='flex justify-evenly items-center gap-3' >
        <a href={data?.html_url} className='bg-black text-white p-2 rounded hover:bg-slate-900 ' >Github</a>  
        <a href={data?.organizations_url} className='bg-black text-white p-2 rounded hover:bg-slate-900 ' >Organization</a>  
      </div> 
        

      
    </div>
  )
}

export default Map02Child;
