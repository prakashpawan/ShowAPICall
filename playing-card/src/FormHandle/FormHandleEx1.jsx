import React, { useState } from 'react'

const FormHandleEx1 = () => {
    let[user,setUser]=useState("");
    let[pass,setPass]=useState("");
    let [users,setUsers]=useState([])

    let handleUser=(e)=> {
    console.log(e.target.value)
    setUser(e.target.value)
}

let handlePass=(e)=> {
    console.log(e.target.value)
    setPass(e.target.value)
}

let handleSubmit=(e)=>{
    e.preventDefault()
    setUsers([...users,{u:user,p:pass}])
}
  return (
    <div className='flex'>
        <div>
      <h1 className=' text-xl font-bold mt-6'>login form</h1>
      <div className='h-1/2'>
      <form action="">
        <label htmlFor="">usename : </label>
        <input className='rounded-lg bg-slate-400 border-x-2' onChange={handleUser} type="text" /> <br /> <br />

        <label htmlFor="">Password: </label>
        <input onChange={handlePass} type="text" /> <br /> <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      </div>

      </div>

      <div>
        {users.length>0 && users.map((val,i)=>{
            return(
                <div key={i}>
                    <h1>username : {val.u}</h1>
                    <h1>Paasword : {val.p}</h1>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default FormHandleEx1
