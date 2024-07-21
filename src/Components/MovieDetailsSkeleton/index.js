import React from 'react';

function MovieDetailsSkeleton() {
  return (
    <div className="flex items-center justify-center h-full font-mono animate-pulse">
      <div className="bg-white rounded-md bg-gray-800 shadow-lg max-w-full mx-4 sm:mx-6 lg:mx-8">
        <div className="md:flex leading-none max-w-4xl mx-auto">
          <div className="flex-none">
            <div className="w-[200px] h-[300px] sm:w-[300px] sm:h-[450px] bg-slate-700 rounded-md shadow-2xl border-4 border-gray-300 shadow-lg mx-auto md:mx-0"></div>
          </div>
          <div className="flex-col text-gray-300 p-4">
            <div className="pt-4 w-[150px] h-[24px] sm:w-[200px] sm:h-[32px] bg-slate-700 rounded mb-4"></div>
            <hr className="hr-text mt-[20px] mb-[20px]" data-content="" />
            <div className="text-md flex justify-center my-2">
              <div className="w-[100px] h-[16px] sm:w-[150px] sm:h-[20px] bg-slate-700 rounded"></div>
            </div>
            <div className="hidden md:block my-4">
              <div className="w-full h-[40px] sm:h-[60px] bg-slate-700 rounded"></div>
            </div>
            <div className="flex text-md my-2">
              <div className="w-[60px] h-[16px] sm:w-[80px] sm:h-[20px] bg-slate-700 rounded"></div>
              <span className="font-bold px-2">|</span>
              <div className="w-[60px] h-[16px] sm:w-[80px] sm:h-[20px] bg-slate-700 rounded"></div>
            </div>
            <div className="flex text-md my-2">
              <div className="w-[100px] h-[16px] sm:w-[120px] sm:h-[20px] bg-slate-700 rounded"></div>
            </div>
            <div className="flex text-md my-2 mb-5">
              <div className="w-[150px] h-[16px] sm:w-[200px] sm:h-[20px] bg-slate-700 rounded"></div>
            </div>
            <div className="flex text-md my-2">
              <div className="w-[100px] h-[16px] sm:w-[150px] sm:h-[20px] bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsSkeleton;
