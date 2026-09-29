import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full flex items-center pl-8 md:pl-20 py-20 snap-start">
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide">
          Let's Work Together
        </h2>
        
        <p className="text-xl md:text-2xl font-medium text-white/90 mb-12 max-w-2xl leading-relaxed">
          I'm currently seeking entry-level opportunities and would love to hear from you. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col gap-6 text-lg font-medium">
          <a href="mailto:ananyasharma242004@gmail.com" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FDBB2D]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
            ananyasharma242004@gmail.com
          </a>

          <a href="tel:8307985403" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FDBB2D]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
            </div>
            +91 8307985403
          </a>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FDBB2D]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
            </div>
            Noida, UP
          </div>
        </div>

        <div className="mt-16 text-sm text-white/70">
          <p>&copy; 2026 Ananya Sharma. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
