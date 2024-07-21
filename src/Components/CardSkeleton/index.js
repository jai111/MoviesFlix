import React from 'react';

function CardSkeleton() {
  return (
    <div className="rounded-md shadow-lg border m-2 w-full text-[12px] cursor-pointer animate-pulse">
      <div className='w-full h-[250px] bg-slate-500 rounded-md object-cover max-h-[250px]'></div>
      <div className="mt-4 p-1 flex flex-col justify-center items-center">
        <div className="w-[100px] h-[20px] bg-slate-500 rounded mt-2"></div>
        <div className="w-[50px] h-[20px] bg-slate-500 rounded mt-2"></div>
        <div className='flex mt-3 mb-3'>
          <div className="ml-4 w-[120px] h-[32px] bg-slate-500 rounded-md"></div>

        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
