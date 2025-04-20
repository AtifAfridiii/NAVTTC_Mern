import React from 'react';


export default function CardSkeleton({
    Pic,
    Title,
    Description,

}) {
  return (
    <div className=" w-[200px] space-y-5 p-4 border rounded-lg shadow-md animate-pulse">

      <div className="h-24 bg-gray-200 rounded-lg relative" >
      <img className='absolute top-0 left-0 w-full h-full object-cover' src={Pic} alt="" />
      </div>

      <h1 className='text-xl font-bold'>{Title}</h1>
      <h1 className='text-sm font-normal text-gray-500'>{Description}</h1>

      <div className="space-y-3">
        <div className="h-3 w-3/5 bg-gray-200 rounded-lg" />
        <div className="h-3 w-4/5 bg-gray-200 rounded-lg" />
        <div className="h-3 w-2/5 bg-gray-200 rounded-lg" />
      </div>
    </div>
  );
}
