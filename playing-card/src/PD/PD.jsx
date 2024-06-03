import React from 'react'
import { useState } from 'react';
import Card from '../Component/Card';

const PD = () => {
    const [hide, sethide] = useState(false);

    let handlehide = () => {
      sethide(!hide);
    };
  
  return (
    <div>
      <div className=' flex flex-row-reverse'>
         <button className='rounded-lg bg-blue-600 m-4 p-4' onClick={handlehide}>{hide ? 'Hide' : 'Show'}
      </button>
      </div>
      

      {hide && <Card/>}
      
    </div>
  )
}

export default PD
