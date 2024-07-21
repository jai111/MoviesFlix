
import React from 'react';

function NoData({message}) {
  return (
    <div className="mt-4 flex flex-col justify-center items-center h-[50%]">
      <h2 className='text-3xl'>No Data Available</h2>
      <p>{message}</p>
    </div>
  );
}

export default NoData;
