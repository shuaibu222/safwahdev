import { Poppins } from 'next/font/google';
import Nav from './components/Nav';
import Link from 'next/link';
import { LiaArrowDownSolid } from 'react-icons/lia';

const inter = Poppins({ subsets: ['devanagari'], weight: '600' });

export default function Home() {
  return (
    <main className='mx-auto my-0 min-h-screen w-11/12 sm:max-w-7xl'>
      <Nav />
      <section className='mt-28 flex h-full flex-col'>
        <h1 className='sm:text-xlg flex flex-col gap-1 text-center text-lg dark:text-white md:text-2xl'>
          Become a
          <br />
          <span
            className={`bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text py-5 text-5xl text-transparent sm:text-6xl md:text-8xl ${inter.className}`}
          >
            Frontend Engineer
          </span>
        </h1>
        <p
          className='mx-auto my-0 w-4/5 text-center dark:text-orange-50 sm:w-2/3 sm:text-sm md:w-1/2 md:text-lg'
          style={{ letterSpacing: '0.5px' }}
        >
          An intensive Frontend Engineer Roadmap designed with resources to
          guide you succeed in the web development industry
          <br /> from zero to pro!
        </p>
        <Link
          href='signup'
          className='hover:delay-50 mt-7 self-center rounded-md border-2 border-black px-5 py-3 text-sm  hover:bg-orange-50 hover:transition dark:border-orange-100 dark:hover:bg-orange-100 dark:hover:text-black sm:text-lg'
        >
          Sign up it's free!
        </Link>
        <Link
          href='/'
          className='mt-24 animate-bounce cursor-pointer self-center justify-self-end rounded-3xl border-2 border-orange-500 p-3 text-2xl'
        >
          <LiaArrowDownSolid />
        </Link>
      </section>
    </main>
  );
}
