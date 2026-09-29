import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Ananya Sharma.";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 3000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 40);
      } else {
        timeout = setTimeout(() => setIsTyping(true), 1000);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <section id="home" className="relative h-screen max-h-screen w-full flex flex-col justify-center px-6 md:px-20 overflow-hidden bg-[#0a0a0a] pt-16">
      
      {/* Background Animated Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -30, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-600/30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 30, 0] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 md:right-20 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
      />

      <div className="max-w-5xl w-full z-10 flex flex-col justify-center">
        
        {/* Intro */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-400 font-medium tracking-[0.2em] mb-2 md:mb-4 text-xs md:text-sm uppercase"
        >
          Hi there, my name is
        </motion.p>
        
        {/* Typing Name */}
        <div className="min-h-[60px] md:min-h-[80px] lg:min-h-[100px] flex items-center mb-2 md:mb-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-tight">
            {text}<span className="animate-pulse text-purple-500 font-sans font-light">|</span>
          </h1>
        </div>

        {/* Tagline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-gray-400 mb-4 md:mb-6 tracking-tight leading-tight"
        >
          I design & build intelligent applications.
        </motion.h2>
        
        {/* Bio */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8 max-w-2xl leading-relaxed"
        >
          I'm a software developer specializing in <span className="text-white font-medium">Full-Stack Development</span> and <span className="text-white font-medium">Generative AI</span>. I love creating beautiful, scalable, and user-centric digital experiences.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4 md:gap-6"
        >
          {/* Primary CTA */}
          <a href="/resume.pdf" download="Ananya_Sharma_Resume.pdf" className="group relative h-12 md:h-14 bg-transparent border border-purple-500 rounded-full px-6 md:px-8 flex items-center justify-center text-white font-semibold text-sm md:text-base transition-all hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">Download CV <span className="group-hover:translate-y-1 transition-transform">↓</span></span>
          </a>

          {/* Social Icons */}
          <div className="flex gap-3 md:gap-4">
            <a href="https://github.com/Ananya0424" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#111] border border-gray-800 text-gray-400 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a href="https://www.linkedin.com/in/ananya-sharma-31a00539b" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#111] border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
