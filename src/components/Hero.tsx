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

        {/* Tagline with Word Hover Effect */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-gray-400 mb-4 md:mb-6 tracking-tight leading-tight flex flex-wrap gap-x-3 gap-y-2"
        >
          {["I", "design", "&", "build", "intelligent", "applications."].map((word, i) => (
            <span key={i} className="inline-block transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:-translate-y-2 cursor-default">
              {word}
            </span>
          ))}
        </motion.h2>
        
        {/* Bio with Word Hover Effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8 max-w-2xl leading-relaxed flex flex-wrap gap-x-1.5"
        >
          {"I'm a software developer specializing in ".split(' ').map((word, i) => (
            <span key={`a-${i}`} className="inline-block transition-all duration-300 hover:scale-[1.3] hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:-translate-y-1 cursor-default">{word}</span>
          ))}
          <span className="inline-block transition-all duration-300 hover:scale-[1.2] hover:-translate-y-1 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] text-white font-medium cursor-default">Full-Stack Development</span>
          <span className="inline-block transition-all duration-300 hover:scale-[1.3] hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:-translate-y-1 cursor-default">and</span>
          <span className="inline-block transition-all duration-300 hover:scale-[1.2] hover:-translate-y-1 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] text-white font-medium cursor-default">Generative AI.</span>
          {"I love creating beautiful, scalable, and user-centric digital experiences.".split(' ').map((word, i) => (
            <span key={`b-${i}`} className="inline-block transition-all duration-300 hover:scale-[1.3] hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:-translate-y-1 cursor-default">{word}</span>
          ))}
        </motion.div>
        
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
            
            <a href="tel:8307985403" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#111] border border-gray-800 text-gray-400 hover:text-white hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.077-7.077l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </a>

            <a href="https://wa.me/918307985403" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#111] border border-gray-800 text-gray-400 hover:text-white hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
