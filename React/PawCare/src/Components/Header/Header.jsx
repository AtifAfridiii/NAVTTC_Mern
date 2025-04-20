import React from 'react'
// import Logo from '../../assets/Icons/Logo.png'
import { FaPaw } from "react-icons/fa";
import { BookingModal } from '../../Components/BookingModal/BookingModal';

function HeaderNav() {
  return (
    <section className='flex justify-between w-full h-10 items-center text-center text-white mr-5 ml-5'>
        <div >
        <FaPaw className='text-3xl text-white' />
        </div>

     <div className='ml-3'>
        <ul className='flex justify-between gap-5 '>
            <li><a href="#" className="nav-link text-white">Home</a></li>
            <li><a href="#" className="nav-link text-white">Shop</a></li>
            <li><a href="#" className="nav-link text-white">Vet-Clinics</a></li>
            <li><a href="#" className="nav-link text-white">Shelters</a></li>
            <li><a href="#" className="nav-link text-white">Contact</a></li>
        </ul>
     </div>

     <div className='flex gap-5'>

<BookingModal />
      
     </div>
    </section>
  )
}

export default HeaderNav
