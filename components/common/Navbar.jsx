'use client';

import { useState } from 'react';
// next image
import { navLink } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="padding-x fixed z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <Link href="/">
          <Image
            src={'/assets/logo-dark.svg'}
            width={210}
            height={50}
            alt="company dark logo"
          />
        </Link>
        <ul className="flex flex-1 items-center justify-end gap-16 max-lg:hidden">
          {navLink.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-slate-gray text-lg leading-normal"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <FaBars className="cursor-pointer text-xl" />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
