import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="h-screen w-full flex items-center justify-center px-4 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full pt-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wide">
            Let's Work Together
          </h2>
          <div className="text-base md:text-lg font-medium text-white/80 mb-8 leading-relaxed flex flex-wrap gap-x-1.5">
            {"I'm currently seeking entry-level opportunities and would love to hear from you. Whether you have a question, want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!".split(' ').map((word, i) => (
              <span key={`contact-${i}`} className="inline-block transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:-translate-y-1 cursor-default">{word}</span>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 text-sm md:text-base font-medium">
          <a href="mailto:ananyasharma242004@gmail.com" className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all shadow-lg group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
            <span>ananyasharma242004@gmail.com</span>
          </a>

          <a href="tel:8307985403" className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all shadow-lg group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
            </div>
            <span>+91 8307985403</span>
          </a>

          <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-lg cursor-default group hover:border-purple-500/50 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Noida, UP</span>
          </div>
        </div>
      </div>
      
      {/* Footer Text */}
      <div className="absolute bottom-6 left-0 w-full text-center text-sm text-white/50 border-t border-white/10 pt-4 px-4">
        <p>&copy; 2026 Ananya Sharma. All rights reserved.</p>
      </div>
    </section>
  );
}
