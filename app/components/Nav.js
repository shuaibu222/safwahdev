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
          className={`bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-xl text-transparent ${inter.className}`}
        >
          safwahdev
        </Link>
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-3 text-sm md:gap-4'>
            <li className='border-b-2 border-b-transparent px-1 py-5 hover:border-white hover:transition-all hover:duration-150 hover:ease-in-out'>
              <Link href='bootcamp'>Bootcamps</Link>
            </li>
            <li className='border-b-2 border-b-transparent px-1 py-5 hover:border-white hover:transition-all hover:duration-150 hover:ease-in-out'>
              <Link href='bootcamp'>Get certified</Link>
            </li>
            <li className='relative border-b-2 border-b-transparent px-1 py-5 hover:border-white hover:transition-all hover:duration-150 hover:ease-in-out'>
              <span class='absolute right-0 top-1 flex h-3 w-3'>
                <span class='absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300 opacity-75'></span>
                <span class='relative inline-flex h-3 w-3 rounded-full bg-blue-400'></span>
              </span>
              <Link href='bootcamp'>Templates</Link>
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
            <Link href='#' className='px-3 py-2'>
              Sign in
            </Link>
            <Link
              href='#'
              className='rounded-lg bg-white bg-gradient-to-r px-3 py-2 text-black'
            >
              Get started
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
            ? 'mx-auto my-0 w-10/12 rounded-md bg-white p-5 text-black transition duration-100 md:hidden'
            : 'mx-auto my-0 hidden w-10/12 rounded-md bg-white p-5 text-black transition duration-100 md:hidden'
        }
      >
        <ul className='flex flex-col gap-2'>
          <li className='border-b-2 border-b-transparent px-1 py-3 text-center hover:rounded hover:bg-black hover:text-white  hover:transition-all hover:duration-150 hover:ease-in-out'>
            <Link href='paths'>Syllabus</Link>
          </li>
          <li className='border-b-2 border-b-transparent px-1 py-3 text-center hover:rounded hover:bg-black hover:text-white  hover:transition-all hover:duration-150 hover:ease-in-out'>
            <Link href='bootcamp'>Bootcamps</Link>
          </li>
          <li className='border-b-2 border-b-transparent px-1 py-3 text-center hover:rounded hover:bg-black hover:text-white  hover:transition-all hover:duration-150 hover:ease-in-out'>
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
            className='px-3 py-3 text-center hover:rounded hover:bg-black dark:hover:bg-black dark:hover:text-white'
          >
            Sign in
          </Link>
          <Link
            href='#'
            className='px-3 py-3 text-center  hover:rounded hover:bg-black dark:hover:bg-black dark:hover:text-white'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
