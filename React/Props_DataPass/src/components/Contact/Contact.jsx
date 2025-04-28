import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation();

const data = location.state?.data ? location.state.data : "No data passed" ;
const image = location.state?.PropData

  return (
    <div className='pt-20'>
     <h1> This contact page</h1>
     <h2>{data}</h2>
     <img className='w-50 h-50 rounded-full' src={image} alt="No image passed" />
    </div>
  )
}

export default Contact
