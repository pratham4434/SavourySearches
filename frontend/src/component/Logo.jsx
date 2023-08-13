import React from 'react'
import {useNavigate} from "react-router-dom"
const Logo = () => {
    const navigate=useNavigate();
  return (
    <div className='mx-10 my-4 text-lime-500 font-bold text-3xl'>
        <h1 onClick={()=>navigate('/')} className='cursor-pointer'>SavorySearches</h1>
    </div>
  )
}

export default Logo