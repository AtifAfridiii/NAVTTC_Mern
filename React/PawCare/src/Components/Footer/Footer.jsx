import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

function FooterComponent() {
  return (
    <section>
        <div className='bg-[#575CEE] flex justify-between gap-10 w-full grid grid-cols-4'>

          <div className='flex  flex-col justify-center pl-10 pt-10'>

            <h1 className="text-white text-2xl font-bold mb-2">Paw Care</h1>
            <p className="text-white mb-4">We will help you to provide you <br />the best care for your pets</p>

            <div className='flex gap-5 mb-10 '>

              <div className='bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all hover:scale-105  transform transition-all'>
                <a href="https://www.instagram.com" target='_blank'><FaInstagram className="text-[#575CEE] text-xl" /></a>
              </div>

              <div className='bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all hover:scale-105  transform transition-all'>
                <a href="https://twitter.com" target='_blank'><FaTwitter className="text-[#575CEE] text-xl" /></a>
              </div>

              <div className='bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all hover:scale-105  transform transition-all'>
               <a href="https://www.facebook.com" target='_blank'> <FaFacebook className="text-[#575CEE] text-xl"  /></a>
              </div>

              <div className='bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all hover:scale-105  transform transition-all'>
               <a href="https://www.linkedin.com" target='_blank'> <FaLinkedin className="text-[#575CEE] text-xl " /></a>
              </div>

            </div>

          <p className='text-white text-sm pb-5'>© 2025 Paw Care. All rights reserved.</p>
          </div>

          <div className='flex  flex-col justify-center pb-10 '>
            <h1 className="text-white text-2xl font-bold mb-2">Information</h1>
            <ul className='flex flex-col gap-2 text-white'>
                <a href="#"><li>about</li></a>
                <a href="#"><li>Product</li></a>
            </ul>
          </div>

          <div className='flex  flex-col justify-center pb-10 '>
            <h1 className="text-white text-2xl font-bold mb-2">Center</h1>
            <ul className='flex flex-col gap-2 text-white'>
                <a href="#"><li>Peshawar</li></a>
                <a href="#"><li>Islamabad</li></a>
            </ul>
          </div>

          <div className='flex  flex-col justify-center pb-10 '>
            <h1 className="text-white text-2xl font-bold mb-2">Contact</h1>
            <ul className='flex flex-col gap-2 text-white'>
                <a href="#"><li>+92 3370399050</li></a>
                <a href="#"><li>atifafridi378@gmail.com</li></a>
            </ul>
          </div>

        </div>

    </section>
  )
}

export default FooterComponent
