import Navbar from '@/components/common/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
