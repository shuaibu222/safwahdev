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
    <header className={`inset-0 bg-opacity-10 -z-10 backdrop-blur-lg ${
            isOpen ? 'bg-inherit' : 'bg-white'
          } transition duration-300`}>
      <div className='container mx-auto my-0 flex w-11/12 items-center justify-between py-7 sm:max-w-7xl'>
      <Link
          href='/'
          className={`text-xl ${inter.className}`}
        >
          safwahdev
        </Link>
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-3 text-sm md:gap-4'>
            <li className='border-b-2 border-b-transparent px-1 py-5 dark:hover:border-white hover:border-black hover:transition-all hover:duration-150 hover:ease-in-out'>
              
              {/* Video courses mini-bootcamps free/premium */}
              <Link href='bootcamp'>Bootcamps</Link>
            </li>
            <li className='border-b-2 border-b-transparent px-1 py-5 dark:hover:border-white hover:border-black hover:transition-all hover:duration-150 hover:ease-in-out'>
              
              {/* premium projects for frontend and backend to be eligible for certification*/}
              <Link href='bootcamp'>Get certified</Link>
            </li>
            <li className='relative border-b-2 border-b-transparent px-1 py-5 dark:hover:border-white hover:border-black hover:transition-all hover:duration-150 hover:ease-in-out'>
              <span class='absolute right-0 top-1 flex h-3 w-3'>
                <span class='absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75'></span>
                <span class='relative inline-flex h-3 w-3 rounded-full bg-white'></span>
              </span>
              
              {/* All challenges free/premium */}
              <Link href='bootcamp'>Challenges</Link>
            </li>
          </ul>
        </nav>
        <div className='hidden md:block'>
          <div className='flex items-center gap-2'>
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
            <Link href='#' className='px-3 py-2 outline-none border-2 hover:border-black dark:hover:border-white rounded-md border-transparent'>
              Sign in
            </Link>
            <Link
              href='#'
              className='rounded-lg outline-none border-2 dark:hover:border-white dark:hover:text-white dark:hover:bg-midnight hover:transition-all hover:duration-150 via-white hover:ease-in-out dark:bg-white bg-gradient-to-r px-3 py-2 bg-black text-white hover:bg-white hover:border-black hover:text-black dark:text-black'
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
        className={`mx-auto my-0 w-10/12 rounded-md bg-black dark:bg-white text-white p-5 dark:text-black transition duration-150 md:hidden ${
          isOpen
            ? 'block'
            : 'hidden'}`
        }
      >
        <ul className='flex flex-col gap-2'>
          <li className='px-1 py-3 text-center hover:rounded-md dark:text-black dark:hover:bg-black hover:bg-white dark:hover:text-white dark:hover:border-white hover:border-black  hover:transition-all hover:duration-150 hover:ease-in-out hover:text-black'>
            <Link href='paths'>Syllabus</Link>
          </li>
          <li className='px-1 py-3 text-center hover:rounded-md dark:text-black dark:hover:bg-black hover:bg-white dark:hover:text-white dark:hover:border-white hover:border-black  hover:transition-all hover:duration-150 hover:ease-in-out hover:text-black'>
            <Link href='bootcamp'>Bootcamps</Link>
          </li>
          <li className='px-1 py-3 text-center hover:rounded-md dark:text-black dark:hover:bg-black hover:bg-white dark:hover:text-white dark:hover:border-white hover:border-black  hover:transition-all hover:duration-150 hover:ease-in-out hover:text-black'>
            <Link href='bootcamp'>Get certified</Link>
          </li>
        </ul>
        <div className='mt-6 grid items-center gap-3'>
          <div className='flex cursor-pointer items-center justify-center'>
            {currentTheme === 'dark' ? (
              <HiSun onClick={() => setTheme('light')} className='text-2xl' />
            ) : (
              <HiMoon onClick={() => setTheme('dark')} className='text-2xl' />
            )}
          </div>
          <Link
            href='#'
            className='px-3 py-3 text-center hover:rounded hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white'
          >
            Sign in
          </Link>
          <Link
            href='#'
            className='px-3 py-3 text-center  hover:rounded hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
