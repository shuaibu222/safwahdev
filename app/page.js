import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { LiaArrowDownSolid } from 'react-icons/lia';
import { SiInstructure, SiWebpack, SiJest } from 'react-icons/si';
import { TbWorldCode, TbBrandNextjs } from 'react-icons/tb';
import { MdOutlineComputer } from "react-icons/md";
import {
  BiSolidTime,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from 'react-icons/bi';
import {
  FaNpm,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaAngular,
  FaGitAlt,
} from 'react-icons/fa';
import dynamic from 'next/dynamic';
import NavSpinner from './components/NavSpinner';
import Image from 'next/image';

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
      'Our frontend engineering roadmap is carefully designed to take you on a step-by-step journey from the fundamentals of HTML, CSS, and JavaScript to advanced topics like React, Angular, and Vue.js.',
  },
  {
    icon: <TbWorldCode />,
    title: 'Hands-on Projects',
    content:
      'We believe that hands-on experience is crucial for mastering coding skills. Throughout our roadmap, you"ll work on real-world projects that simulate industry scenarios, allowing you to apply what you"ve learned and build an impressive portfolio.',
  },
  {
    icon: <BiSolidTime />,
    title: 'Flexibility and Convenience',
    content:
      'Learning should fit into your schedule. With our online courses, you can study at your own pace, from the comfort of your home or anywhere with an internet connection.',
  },
];

const technologies = [
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    bgcolor: 'hover:text-orange-600',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
    bgcolor: 'hover:text-blue-600',
  },
  {
    name: 'JavaScript',
    icon: <BiLogoJavascript />,
    bgcolor: 'hover:text-yellow-400',
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    bgcolor: 'hover:text-orange-600',
  },
  {
    name: 'React js',
    icon: <FaReact />,
    bgcolor: 'hover:text-teal-300',
  },
  {
    name: 'Vue js',
    icon: <FaVuejs />,
    bgcolor: 'hover:text-green-600',
  },
  {
    name: 'Angular js',
    icon: <FaAngular />,
    bgcolor: 'hover:text-red-600',
  },
  {
    name: 'Tailwind CSS',
    icon: <BiLogoTailwindCss />,
    bgcolor: 'hover:text-cyan-500',
  },
  {
    name: 'Webpack',
    icon: <SiWebpack />,
    bgcolor: 'hover:text-blue-300/60',
  },
  {
    name: 'NPM',
    icon: <FaNpm />,
    bgcolor: 'hover:text-red-600',
  },
  {
    name: 'Jest js',
    icon: <SiJest />,
    bgcolor: 'hover:text-lime-500',
  },
  {
    name: 'Next js',
    icon: <TbBrandNextjs />,
    bgcolor: '',
  },
];

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Nav />
      <section className='mx-auto flex gap-12 md:gap-0 flex-col w-11/12 pb-16 pt-28 sm:max-w-7xl md:flex-row'>
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
          className='mt-7 self-start rounded-md border-2 outline-none hover:bg-white hover:text-black hover:transition-all hover:duration-150 hover:ease-in-out hover:border-black bg-black text-white dark:bg-white dark:text-black dark:hover:bg-midnight dark:hover:text-white px-5 py-3 text-sm  dark:border-white sm:text-lg'
        >
          Get Started Now!
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
      </section>
      <article
        className='mx-auto flex w-11/12 flex-col gap-20 pb-20 pt-20 sm:max-w-7xl'
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
      </article>
      <article className='mx-auto flex w-11/12 flex-col gap-20 pb-20 pt-20 sm:max-w-7xl'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-bold md:text-4xl'>
            What you will learn
          </h1>
          <div className='h-1 w-24 dark:bg-white bg-black'></div>
        </div>
        <section className='grid grid-cols-12 gap-7'>
          {technologies.map((technology, i) => {
            const { name, icon, bgcolor } = technology;
            return (
              <div
                key={i}
                className={`grid place-content-center gap-3 px-10 py-8 hover:transition-all hover:duration-150 hover:ease-in-out`}
              >
                <div
                  className={`grid place-content-center ${bgcolor} hover:delay-50 text-9xl hover:transition`}
                >
                  {icon}
                </div>
                <p className='text-center text-base'>{name}</p>
              </div>
            );
          })}
        </section>
      </article>
      <article className='mx-auto flex w-11/12 flex-col gap-10 pb-20 pt-20 sm:max-w-7xl'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-bold md:text-4xl'>Free web templates</h1>
          <div className='h-1 w-24 dark:bg-white bg-black'></div>
        </div>
        <div className='mb-10'>
          <p>
            Learn how to structure and build a website using ready-made and
            well-designed templates.
          </p>
        </div>
        <div className='flex flex-col items-center gap-7'>
          <Image
            width={1200}
            height={831}
            alt='main-template'
            className=' rounded-lg brightness-50'
            src={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F3200%2F0*OFrVIaXkKTr6Fnqh&f=1&nofb=1&ipt=5fbb07c45fd33a7d2c707b34e38c2475c7ed331276890f4c3cb0d35a17929785&ipo=images'
            }
          />
          <button className='rounded-md outline-none hover:transition-all hover:ease-in-out hover:duration-150 border-2 dark:bg-white bg-black px-4 py-3 text-base hover:bg-white dark:hover:border-white dark:hover:bg-midnight dark:hover:text-white hover:border-black hover:text-black text-white dark:text-black'>
            Browse for More
          </button>
        </div>
      </article>
    
    </main>
  );
}
