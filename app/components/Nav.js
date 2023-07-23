'use client';

import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi';

const inter = Poppins({ subsets: ['devanagari'], weight: '700' });

export default function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <header className='container mx-auto my-0 flex justify-between py-7'>
      <Link
        href='/'
        className={`bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text text-2xl text-transparent ${inter.className}`}
      >
        safwahdev.
      </Link>
      <nav className='flex items-center justify-center'>
        <ul className='flex items-center gap-6'>
          <li className='border-b-2 border-b-transparent px-1 py-3 hover:border-orange-500 hover:text-orange-500 hover:transition-all hover:duration-150 hover:ease-in-out dark:text-orange-50 dark:hover:text-orange-500'>
            <Link href='paths'>About</Link>
          </li>
          <li className='border-b-2 border-b-transparent px-1 py-3 hover:border-orange-500 hover:text-orange-500 hover:transition-all hover:duration-150 hover:ease-in-out dark:text-orange-50 dark:hover:text-orange-500'>
            <Link href='paths'>Syllabus</Link>
          </li>
          <li className='border-b-2 border-b-transparent px-1 py-3 hover:border-orange-500 hover:text-orange-500 hover:transition-all hover:duration-150 hover:ease-in-out dark:text-orange-50 dark:hover:text-orange-500'>
            <Link href='bootcamp'>Bootcamps</Link>
          </li>
        </ul>
      </nav>
      <div className='flex items-center gap-2 dark:text-orange-50'>
        <div className='flex items-center justify-center'>
          {currentTheme === 'dark' ? (
            <HiSun onClick={() => setTheme('light')} className=' text-2xl' />
          ) : (
            <HiMoon onClick={() => setTheme('dark')} className=' text-2xl' />
          )}
        </div>
        <Link href='#' className='px-3 py-2'>
          Sign in
        </Link>
        <Link
          href='#'
          className='rounded-lg bg-gradient-to-r from-pink-600 to-yellow-400 px-3 py-3'
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
