import './globals.css';
import { Poppins } from 'next/font/google';

const inter = Poppins({ subsets: ['devanagari'], weight: '400' });

export const metadata = {
  title: 'Safwahdev',
  description:
    'a roadmap-guided coding school aim to provide a comprehensive roadmap for web developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={` bg-black text-sm ${inter.className}`}>{children}</body>
    </html>
  );
}
