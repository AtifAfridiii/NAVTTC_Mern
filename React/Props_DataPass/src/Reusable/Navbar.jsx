import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-800 w-full pb-4 pt-4  left-0 fixed  top-0  ">
      <div className=" mx-auto flex justify-center items-center">
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="text-white hover:text-gray-300">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Getdata" className="text-white hover:text-gray-300">
              Student Data
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
