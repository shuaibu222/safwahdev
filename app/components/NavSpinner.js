import React from 'react';

export default function NavSpinner() {
  return (
    <div className=' animate-pulse dark:bg-white/10 bg-[rgba(101,110,119,0.2)] px-3 py-6 md:py-10'>
      <div className='mx-auto my-0 flex w-11/12  items-center justify-between sm:max-w-7xl'>
        <div className=' h-9 w-20 rounded-md dark:bg-white/25 bg-[rgba(149,157,165,0.2)]'></div>
        <div className='hidden md:block'>
          <div className='flex items-center gap-4'>
            <div className=' h-10 w-16 rounded-md dark:bg-white/25 bg-[rgba(149,157,165,0.2)]'></div>
            <div className=' h-10 w-16 rounded-md dark:bg-white/25 bg-[rgba(149,157,165,0.2)]'></div>
            <div className=' h-10 w-16 rounded-md dark:bg-white/25 bg-[rgba(149,157,165,0.2)]'></div>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='flex items-center gap-4'>
            <div className=' h-10 w-16 rounded-md dark:bg-white/25 bg-[rgba(149,157,165,0.2)]'></div>
            <div className=' h-10 w-16 rounded-md dark:bg-white/25 bg-[rgba(149,157,165,0.2)]'></div>
            <div className=' h-10 w-16 rounded-md dark:bg-white/25 bg-[rgba(149,157,165,0.2)]'></div>
          </div>
        </div>
        <div className='block h-10 w-16 rounded-md dark:bg-white/25 bg-[rgba(149,157,165,0.2)] md:hidden'></div>
      </div>
    </div>
  );
}
