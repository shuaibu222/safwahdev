import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { LiaArrowDownSolid } from 'react-icons/lia';
import { CgScreen } from "react-icons/cg";
import { SiInstructure} from 'react-icons/si';
import { TbWorldCode } from 'react-icons/tb';
import {AiFillDatabase} from 'react-icons/ai';
import { MdOutlineComputer } from "react-icons/md";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import {
  BiSolidTime,
  BiLogoJavascript,
} from 'react-icons/bi';
import dynamic from 'next/dynamic';
import NavSpinner from './components/NavSpinner';

const inter = Poppins({ subsets: ['devanagari'], weight: '600' });

const Nav = dynamic(() => import('./components/Nav'), {
  ssr: false,
  loading: () => <NavSpinner />,
});

const chooseData = [
  {
    icon: <SiInstructure />,
    title: 'Structured Roadmap',
    content:
      'Our roadmap is carefully designed to take you on a step-by-step journey from the fundamentals of every software engineer, Frontend and its frameworks to advanced topics like Backend, Databases, and Cloud.',
  },
  {
    icon: <TbWorldCode />,
    title: 'Hands-on Projects',
    content:
      'We believe that hands-on experience is crucial for mastering coding skills. Throughout our roadmap, you"ll work on real-world projects that simulate industry scenarios, allowing you to apply what you"ve learned and build an impressive portfolio.',
  },
  {
    icon: <BiSolidTime />,
    title: 'Flexibility',
    content:
      'Learning should fit into your schedule. With our online courses, you can study at your own pace, from the comfort of your home or anywhere with an internet connection.',
  },
];

const technologies = [
  {
    name: 'Frontend',
    icon: <CgScreen />,
  },
  {
    name: 'Backend',
    icon: <AiFillDatabase />,
  },
  {
    name: 'Fullstack',
    icon: <PiProjectorScreenChartFill/>,
  },
];

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Nav />
      <article className='mx-auto flex gap-12 md:gap-0 flex-col w-11/12 pb-16 pt-28 sm:max-w-7xl md:flex-row'>
        <div className='flex flex-col'>
        <h1 className='sm:text-xlg flex flex-col gap-1 text-lg dark:text-white md:text-2xl'>
          Become a
          <br />
          <span
            className={`py-5 text-5xl sm:text-6xl md:text-7xl ${inter.className}`}
          >
            Software Engineer
          </span>
        </h1>
        <p className='text-base dark:text-orange-50 sm:w-2/3 md:w-1/2'>
          with this intensive Frontend Engineer Roadmap designed with resources to
          guide you succeed in the web development industry from zero to pro!
        </p>
        <Link
          href='signup'
          className='mt-7 self-start rounded-md border-2 outline-none hover:bg-white hover:text-black hover:transition-all hover:duration-150 hover:ease-in-out hover:border-black bg-black text-white dark:bg-white dark:text-black dark:hover:bg-midnight dark:hover:text-white px-5 py-3 text-sm md:text-base  dark:border-white'
        >
          Start now!
        </Link>
        
        </div>
        <div className='self-center md:self-end md:relative md:bottom-16 md:right-16 text-highfont lg:text-highestfont '>
          <MdOutlineComputer />
        </div>
        {/* <Link
          href='#choose'
          className='mt-24 animate-bounce cursor-pointer absolute top-3/4 left-2/4 rounded-3xl border-2 dark:border-white border-black p-3 text-2xl'
        >
          <LiaArrowDownSolid />
        </Link> */}
      </article>
      {/* <article
        className='mx-auto flex w-11/12 flex-col gap-20 py-16 px-10 my-120 rounded-2xl sm:max-w-7xl inset-0 bg-opacity-10 -z-10 backdrop-blur-lg bg-white'
        id='choose'
      >
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-bold md:text-4xl '>Why choose us?</h1>
          <div className='h-1 w-24 dark:bg-white bg-black'></div>
        </div>

        <section className='flex flex-col gap-5 md:flex-row'>
          {chooseData.map((choose, i) => {
            const { icon, title, content } = choose;
            return (
              <div
                className='flex flex-col items-center gap-5 rounded-lg p-6 text-center'
                key={i}
              >
                <span className='text-7xl dark:text-white'>{icon}</span>
                <p className='text-2xl font-semibold'>{title}</p>
                <p className=' text-base'>{content}</p>
              </div>
            );
          })}
        </section>
      </article> */}
      <article className='mx-auto flex w-11/12 flex-col gap-20 py-16 px-10 rounded-2xl sm:max-w-7xl my-20 inset-0 bg-opacity-10 -z-10 backdrop-blur-lg bg-white'>
        <div className='flex flex-col gap-5 self-center'>
          <h1 className='text-3xl font-bold md:text-4xl'>
            Explore roadmap
          </h1>
          <div className='h-1 w-24 dark:bg-white self-center bg-black'></div>
        </div>
        <section className='grid grid-cols-12 gap-7'>
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
      </article>
      <article className='flex flex-col pb-20 pt-20 dark:bg-white bg-black my-20'>
        <div className='flex items-center mx-auto w-11/12 sm:max-w-7xl'>
          <div className='self-center'>
            <input name='email' type='email' placeholder='Join our mailing list' />
            <button className='rounded-md outline-none hover:transition-all hover:ease-in-out hover:duration-150 border-2 dark:bg-white bg-black px-4 py-3 text-base hover:bg-white dark:hover:border-white dark:hover:bg-midnight dark:hover:text-white hover:border-black hover:text-black text-white dark:text-black'>
              Browse for More
            </button>
          </div>
        </div>
      </article>
    
    </main>
  );
}
