import { Poppins } from 'next/font/google';
import Link from 'next/link';

const inter = Poppins({ subsets: ['devanagari'], weight: '700' });

export default function Nav() {
  return (
    <header className='container mx-auto my-0 flex justify-between py-7'>
      <div
        className={`bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-2xl text-transparent ${inter.className}`}
      >
        safwahdev.
      </div>
      <nav className='flex items-center justify-center'>
        <ul className='flex items-center gap-6'>
          <li className='border-b-2 border-b-transparent px-1 py-3 text-orange-50 hover:border-orange-500 hover:text-orange-500 hover:transition-all hover:duration-150 hover:ease-in-out'>
            <Link href='paths'>Paths</Link>
          </li>
          <li className='border-b-2 border-b-transparent px-1 py-3 text-orange-50 hover:border-orange-500 hover:text-orange-500 hover:transition-all hover:duration-150 hover:ease-in-out'>
            <Link href='bootcamp'>Bootcamps</Link>
          </li>
        </ul>
      </nav>
      <div className='flex items-center gap-2 text-orange-50'>
        <Link href='#' className='px-3 py-2'>
          Sign in
        </Link>
        <Link
          href='#'
          className='rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 px-3 py-2'
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
