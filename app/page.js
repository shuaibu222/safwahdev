import { Rubik } from 'next/font/google';
import Link from 'next/link';
import { CgScreen } from "react-icons/cg";
import {AiFillDatabase} from 'react-icons/ai';
import { MdOutlineComputer } from "react-icons/md";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import dynamic from 'next/dynamic';
import NavSpinner from './components/NavSpinner';

const tech = Rubik({ subsets: ['latin'], weight: '700' });

const Nav = dynamic(() => import('./components/Nav'), {
  ssr: false,
  loading: () => <NavSpinner />,
});

const technologies = [
  {
    name: 'Fundamentals',
    icon: <PiProjectorScreenChartFill/>,
  },
  {
    name: 'Frontend',
    icon: <CgScreen />,
  },
  {
    name: 'Backend',
    icon: <AiFillDatabase />,
  },
];

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Nav />
      <article className='mx-auto flex gap-8 md:gap-0 flex-col w-11/12 pb-16 pt-28 sm:max-w-7xl md:flex-row'>
        <div className='flex flex-col'>
          <h1 className='sm:text-xlg flex flex-col gap-1 text-lg dark:text-white md:text-2xl'>
            Become a
            <br />
            <span
              className={`py-5 text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] ${tech.className}`}
            >
              Software Engineer
            </span>
          </h1>
          <p className='md:text-lg text-base dark:text-orange-50 sm:w-2/3 md:w-[58%]'>
            with this intensive Frontend Engineer Roadmap designed with resources to
            guide you succeed in the web development industry from zero to pro!
          </p>
          <div className='mt-5 flex flex-col md:flex-row gap-3'>
            <input name='email' type='email' className='p-3 rounded-md outline-none border-black dark:border-white border-2' placeholder='Signup for Free!' />
            <button className='rounded-md self-start outline-none hover:transition-all hover:ease-in-out hover:duration-150 border-2 dark:border-orange-500 dark:bg-orange-500 bg-orange-500 px-4 py-3 text-base hover:bg-white dark:hover:border-orange-500 dark:hover:bg-midnight dark:hover:text-white hover:border-orange-500 border-orange-500 hover:text-black text-white dark:text-white'>
              Download
            </button>
          </div>
        
        </div>
        <div className='self-center md:self-end md:relative md:bottom-12 md:right-12 text-highfont lg:text-highestfont '>
          <MdOutlineComputer />
        </div>
      </article>
      <article className='mx-auto shadow-[0_30px_80px_30px_rgba(17,12,46,0.15)] flex w-11/12 flex-col gap-8 py-16 px-10 rounded-2xl sm:max-w-7xl my-20 inset-0 bg-opacity-10 -z-10 backdrop-blur-lg bg-white'>
        <div className='flex flex-col gap-5 self-center mb-8'>
          <h1 className='text-3xl font-bold md:text-4xl'>
            Explore roadmap
          </h1>
          <div className='h-1 w-24 dark:bg-white self-center bg-black'></div>
        </div>
        <section className='grid grid-cols-autoFit gap-7'>
          {technologies.map((technology, i) => {
            const { name, icon } = technology;
            return (
              <div
                key={i}
                className={`grid place-content-center gap-3 px-10 py-8 hover:transition-all hover:duration-150 hover:ease-in-out`}
              >
                <div
                  className={`grid place-content-center hover:delay-50 text-[12rem] hover:transition`}
                >
                  {icon}
                </div>
                <Link href="bootcamp" className='text-center text-lg mt-3'>{name} &nbsp;&#8594;</Link>
              </div>
            );
          })}
        </section>
        <button className='rounded-md place-self-center outline-none hover:transition-all hover:ease-in-out hover:duration-150 border-2 dark:bg-white bg-black px-4 py-3 text-base hover:bg-white dark:hover:border-white dark:hover:bg-midnight dark:hover:text-white hover:border-black hover:text-black text-white dark:text-black'>
            Explore more
        </button>
      </article>
      <article className='flex flex-col pb-20 pt-20 my-20'>
        <div className='flex items-center mx-auto w-11/12 sm:max-w-7xl'>
          
        </div>
      </article>
    
    </main>
  );
}
