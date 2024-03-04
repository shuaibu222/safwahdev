import './globals.css';
import { Rubik } from 'next/font/google';
import Providers from './components/providers';

const inter = Rubik({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Safwahdev Academy',
  description:
    'a multi-purpose coding school aim to provide a comprehensive roadmap for web developers',
  charset: 'UTF-8',
  author: 'Safwahdev Academy',
};

export const viewport = {
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth dark'>
      <body
        className={`bg-white tracking-wide text-base dark:bg-midnight ${inter.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
