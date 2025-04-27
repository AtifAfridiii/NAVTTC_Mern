import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <nav className='h-16 fixed top-0 left-0 right-0 w-full bg-red-500 flex items-center px-6 z-10'>
        <ul className='flex w-full gap-5 text-xl justify-center'>
          <li className='text-white hover:text-green-500'><Link to="/">Home</Link></li>
          <li className='text-white hover:text-green-500'><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className='h-16'></div>
    </>
  )
}
