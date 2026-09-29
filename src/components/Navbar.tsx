import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#1a1a1a]/90 backdrop-blur-md flex justify-between items-center px-8 md:px-20 z-50 shadow-md transition-all">
      {/* Logo */}
      <div className="px-4 py-2 bg-purple-600 rounded flex items-center justify-center font-bold text-white text-lg tracking-widest">
        ANANYA
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`font-semibold text-sm md:text-base tracking-widest transition-colors ${
              activeSection === item.id ? 'text-purple-400' : 'text-white hover:text-purple-300'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
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
