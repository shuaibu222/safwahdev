import './globals.css';
import { Poppins, Lato } from 'next/font/google';
import Providers from './components/providers';

const inter = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Safwahdev Coding School',
  description:
    'a roadmap-guided coding school aim to provide a comprehensive roadmap for web developers',
  charset: 'UTF-8',
  author: 'shuaibu abdulkadir hussain',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`bg-white text-base dark:bg-black dark:text-white ${inter.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
