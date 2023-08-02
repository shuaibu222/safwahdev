'use client';

import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi';
import { IoIosMenu } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';

const inter = Poppins({ subsets: ['devanagari'], weight: '700' });

export default function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <header>
      <div className='container mx-auto my-0 flex w-11/12 items-center justify-between py-7 sm:max-w-7xl'>
        <Link
          href='/'
          className={`bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text text-2xl text-transparent ${inter.className}`}
        >
          safwahdev
        </Link>
        <nav className='hidden md:block'>
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
        <div className='hidden md:block'>
          <div className='flex items-center gap-2 dark:text-orange-50'>
            <div className='flex items-center justify-center'>
              {currentTheme === 'dark' ? (
                <HiSun
                  onClick={() => setTheme('light')}
                  className=' text-2xl'
                />
              ) : (
                <HiMoon
                  onClick={() => setTheme('dark')}
                  className=' text-2xl'
                />
              )}
            </div>
            <Link href='#' className='px-3 py-2'>
              Sign in
            </Link>
            <Link
              href='#'
              className='rounded-lg bg-orange-500 bg-gradient-to-r px-3 py-2 text-white'
            >
              Sign up
            </Link>
          </div>
        </div>
        <div
          className='grid place-content-center text-3xl md:hidden'
          onClick={handleNavOpen}
        >
          {isOpen ? <LiaTimesSolid /> : <IoIosMenu />}
        </div>
      </div>
      <div
        className={
          isOpen
            ? 'mx-auto my-0 w-10/12 rounded-md bg-gradient-to-tr from-pink-600 to-yellow-400 p-5 text-white transition duration-100 md:hidden'
            : 'mx-auto my-0 hidden w-10/12 rounded-md bg-gradient-to-tr from-pink-600 to-yellow-400 p-5 text-white transition duration-100 md:hidden'
        }
      >
        <ul className='flex flex-col gap-2'>
          <li className='border-b-2 border-b-transparent px-1 py-3 text-center hover:rounded hover:bg-black hover:text-white  hover:transition-all hover:duration-150 hover:ease-in-out'>
            <Link href='paths'>About</Link>
          </li>
          <li className='border-b-2 border-b-transparent px-1 py-3 text-center hover:rounded hover:bg-black hover:text-white  hover:transition-all hover:duration-150 hover:ease-in-out'>
            <Link href='paths'>Syllabus</Link>
          </li>
          <li className='border-b-2 border-b-transparent px-1 py-3 text-center hover:rounded hover:bg-black hover:text-white  hover:transition-all hover:duration-150 hover:ease-in-out'>
            <Link href='bootcamp'>Bootcamps</Link>
          </li>
        </ul>
        <div className='mt-6 grid items-center gap-3 dark:text-orange-50'>
          <div className='flex cursor-pointer items-center justify-center'>
            {currentTheme === 'dark' ? (
              <HiSun
                onClick={() => setTheme('light')}
                className=' cursor-pointer text-2xl'
              />
            ) : (
              <HiMoon
                onClick={() => setTheme('dark')}
                className=' cursor-pointer text-2xl'
              />
            )}
          </div>
          <Link
            href='#'
            className='px-3 py-3 text-center hover:rounded hover:bg-orange-500 dark:hover:bg-black'
          >
            Sign in
          </Link>
          <Link
            href='#'
            className='px-3 py-3 text-center text-orange-50 hover:rounded hover:bg-orange-500 dark:hover:bg-black'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
