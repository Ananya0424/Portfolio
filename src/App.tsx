import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Info from './components/Info';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans relative selection:bg-purple-500/30">
      
      {/* Tech Grid Background */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <CustomCursor />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main className="flex-1 w-full z-10 relative">
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
