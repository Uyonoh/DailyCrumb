
'use client';

import { useState } from 'react'; // <-- Need useState to manage visibility
import Link from 'next/link';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex justify-between w-full px-10 py-4 border-b border-[#ccc] items-center">
      <div className="z-100 logo text-lg font-bold">The Daily Crumb</div>
      <nav className="hidden md:flex">
        <ul className="flex gap-7 text-[#aaa]">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/browse">Browse</Link></li>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Mobile nav toggle button */}
      <button onClick={toggleNav} className="md:hidden">
        H {/* Replace with a hamburger icon for better UX */}
      </button>

      {/* Mobile navigation menu */}
      <nav 
        dir="ltr"
        className={`flex flex-col z-99 absolute top-0 left-0 w-full bg-white transition-transform duration-300 md:hidden ${
         isNavOpen ? 'translate-y-10' : '-translate-y-full'
        }`}
      >
        <ul className="flex mx-5 flex-col items-end gap-7 text-[#aaa] p-5">
          <li><a href="#">Home</a></li>
          <li><a href="#">Browse</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;