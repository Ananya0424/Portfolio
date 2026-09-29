import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Info from './components/Info';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-white overflow-x-hidden font-sans">
      <Navbar />
      <main className="flex-1 w-full mt-20">
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
