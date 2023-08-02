import React from 'react';

export default function NavSpinner() {
  return (
    <div className=' animate-pulse bg-orange-500/20 px-3 py-7'>
      <div className='mx-auto my-0 flex w-11/12  items-center justify-between sm:max-w-7xl'>
        <div className=' h-9 w-20 rounded-md bg-orange-500/30'></div>
        <div className='hidden md:block'>
          <div className='flex items-center gap-4'>
            <div className=' h-10 w-16 rounded-md bg-orange-500/30'></div>
            <div className=' h-10 w-16 rounded-md bg-orange-500/30'></div>
            <div className=' h-10 w-16 rounded-md bg-orange-500/30'></div>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='flex items-center gap-4'>
            <div className=' h-10 w-16 rounded-md bg-orange-500/30'></div>
            <div className=' h-10 w-16 rounded-md bg-orange-500/30'></div>
            <div className=' h-10 w-16 rounded-md bg-orange-500/30'></div>
          </div>
        </div>
        <div className='block h-10 w-16 rounded-md bg-orange-500/30 md:hidden'></div>
      </div>
    </div>
  );
}
