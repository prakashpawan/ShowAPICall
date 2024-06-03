import React, { useState } from 'react'

const Dummy = () => {
    let [state,setState]=useState(0)
    let handleclick=()=>{
        setState(state+1)
    }
  return (
    <div>
      <h1 onClick={handleclick}>check : {state}</h1>
    </div>
  )
}

export default Dummy
