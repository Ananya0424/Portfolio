import React, { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-16 md:w-20 bg-[#1a1a1a] flex flex-col justify-between items-center py-6 z-50">
      {/* Logo */}
      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded flex items-center justify-center font-bold text-white text-xl">
        A
      </div>

      {/* Nav Links */}
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12 flex-1 mt-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            className="text-white font-semibold text-sm md:text-base tracking-widest hover:text-orange-500 transition-colors whitespace-nowrap"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-full flex items-center justify-center text-white mt-8 hover:bg-orange-500 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      </button>
    </nav>
  );
}
