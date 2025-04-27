import React, { useState } from 'react'

export const Home = () => {

    const [count, setCount] = useState(0);
   console.log(count);

  return (
  <>

<div className='bg-gray-500 p-10 rounded-full text-white font-bold shadow-xl shadow-red-500 hover:shadow-blue-500 hover:shadow-2xl'>
    <h1>Home Counter </h1>
    <h1>{count}</h1>
   <button onClick={() => setCount(count + 1)}>Click</button>
</div>
  </>
  )
}

