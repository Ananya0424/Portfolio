import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Info from './components/Info';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex min-h-screen bg-[#8C6200] text-white overflow-hidden font-sans">
      <Navbar />
      <main className="flex-1 ml-16 md:ml-20 overflow-y-auto h-screen snap-y snap-mandatory scroll-smooth">
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
