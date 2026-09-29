import React, { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#1a1a1a]/90 backdrop-blur-md flex justify-between items-center px-8 md:px-20 z-50 shadow-md">
      {/* Logo */}
      <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600 rounded flex items-center justify-center font-bold text-white text-xl">
        A
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-white font-semibold text-sm md:text-base tracking-widest hover:text-purple-400 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon (Placeholder for simplicity) */}
      <div className="md:hidden flex items-center">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
