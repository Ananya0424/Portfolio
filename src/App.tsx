import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Info from './components/Info';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Info />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
