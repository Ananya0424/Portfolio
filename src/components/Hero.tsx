import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Ananya Sharma";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(true), 500);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <section id="home" className="min-h-[90vh] w-full flex items-center px-8 md:px-20 py-20 mt-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-xl md:text-3xl font-medium tracking-widest mb-4 flex items-center gap-3 text-purple-400">
          HELLO, <span className="text-2xl md:text-4xl">👋</span> THERE
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 min-h-[130px] md:min-h-[200px] lg:min-h-[240px] text-white leading-tight">
          I'M {text}<span className="animate-pulse text-purple-500">|</span>
        </h1>
        
        <p className="text-lg md:text-xl font-medium text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Software Developer | Full-Stack & GenAI | Building Real-World Applications
        </p>
        
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-12">
          {/* GitHub */}
          <a href="https://github.com/Ananya0424" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-purple-500 hover:text-white hover:bg-purple-600 hover:scale-110 transition-all shadow-lg border border-purple-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ananya-sharma-31a00539b" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-purple-500 hover:text-white hover:bg-purple-600 hover:scale-110 transition-all shadow-lg border border-purple-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          {/* Phone */}
          <a href="tel:8307985403" className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-purple-500 hover:text-white hover:bg-purple-600 hover:scale-110 transition-all shadow-lg border border-purple-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.077-7.077l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/918307985403" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-purple-500 hover:text-white hover:bg-purple-600 hover:scale-110 transition-all shadow-lg border border-purple-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
          </a>
          
          {/* Download CV */}
          <a href="/resume.pdf" download="Ananya_Sharma_Resume.pdf" className="h-12 bg-purple-600 rounded-full px-8 flex items-center justify-center text-white font-bold text-sm md:text-base hover:bg-purple-500 hover:scale-105 transition-all shadow-[0_0_15px_rgba(147,51,234,0.5)] ml-2">
            Download CV &darr;
          </a>
        </div>
      </div>
    </section>
  );
}
