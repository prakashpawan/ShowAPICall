import React, { useState,useEffect } from 'react'


const Card = () => {
    let [data,setdata]=useState([])
    let fetching= async()=>{
        let resp=await fetch(`https://api.github.com/users`)
        let values= await resp.json()
        console.log(values)
        setdata(values)
    }

    useEffect(()=>{
        fetching()
    },[])

  return (
    <div> <h1 className='text-center text-2xl font-bold mt-1'>welcome to our Gallery</h1>
    <div className=' flex flex-wrap'>
    
      {
        data.map((val,i)=>{
            return(
               <div key={i} className='m-1'>
                
                <img className='w-64' src={val.avatar_url} alt="" />
                <h1>{val.login}</h1>
               </div>
            )
        })
      }

    </div>
    </div>
  )
}

export default Card
