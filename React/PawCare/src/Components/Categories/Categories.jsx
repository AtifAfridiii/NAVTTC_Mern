import React from 'react'
import cat from '../../assets/imgs/cat.png'
import dog1 from '../../assets/imgs/dog1.png'
import rabbit from '../../assets/imgs/rabbit.png'
import bird from '../../assets/imgs/bird.png'

function PetCategories() {
  return (
    <section>
         <h2 className='text-center text-3xl font-bold'>Categories</h2>

       <div className='pt-10 pb-10 flex justify-center space-x-10  items-center text-center'>

    <div className='bg-[#575CEE] w-50 h-50 rounded-3xl flex flex-col justify-center items-center text-center hover:scale-105 transition duration-300 transform hover:shadow-md shadow-[#333d29]'>
     <img src={cat} alt="" />
     <h1 className='text-center text-lg font-bold text-white'>
        Cat
      </h1>
    </div>
    <div className='bg-[#575CEE] w-50 h-50 rounded-3xl  flex flex-col justify-center items-center text-center hover:scale-105 transition duration-300 transform hover:shadow-md shadow-[#333d29]'>
     <img src={dog1} alt="" />
     <h1 className='text-center text-lg font-bold text-white'>
      Dog
      </h1>
    </div>

    <div className='bg-[#575CEE] w-50 h-50 rounded-3xl  flex flex-col justify-center items-center text-center hover:scale-105 transition duration-300 transform hover:shadow-md shadow-[#333d29]'>
     <img src={bird} alt="" />
     <h1 className='text-center text-lg font-bold text-white'>
        Bird
      </h1>
    </div>

    <div className='bg-[#575CEE] w-50 h-50 rounded-3xl  flex flex-col justify-center items-center text-center hover:scale-105 transition duration-300 transform hover:shadow-md shadow-[#333d29]'>
     <img src={rabbit} alt="" />
     <h1 className='text-center text-lg font-bold text-white'>
        Rabbit
      </h1>
    </div>
       </div>

    </section>
  )
}

export default PetCategories
