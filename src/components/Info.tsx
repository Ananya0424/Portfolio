import React from 'react';

export default function Info() {
  return (
    <section id="about" className="min-h-[80vh] w-full flex items-center px-8 md:px-20 py-20 snap-start">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-wide">
          About Me
        </h2>
        
        <div className="text-lg md:text-2xl font-medium text-white/90 leading-relaxed space-y-8">
          <p className="flex flex-wrap gap-x-1.5">
            {"I am a B.Tech Computer Science student specializing in AI & ML at Panipat Institute of Engineering and Technology (2022-2026).".split(' ').map((word, i) => (
              <span key={`p1-${i}`} className="inline-block transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:-translate-y-1 cursor-default">{word}</span>
            ))}
          </p>
          
          <p className="flex flex-wrap gap-x-1.5">
            {"With hands-on experience as a Developer Intern at Metaverse 911 and a Web Developer Intern at BNG, I have developed multiple full-stack applications, custom AI chatbots, and interactive platforms.".split(' ').map((word, i) => (
              <span key={`p2-${i}`} className="inline-block transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:-translate-y-1 cursor-default">{word}</span>
            ))}
          </p>

          <p className="flex flex-wrap gap-x-1.5">
            {"My technical stack includes Python, JavaScript, React.js, Next.js, Node.js, Express.js, Flask, MongoDB, and PostgreSQL. I am particularly passionate about Generative AI, RAG pipelines, and LangChain.".split(' ').map((word, i) => (
              <span key={`p3-${i}`} className="inline-block transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:-translate-y-1 cursor-default">{word}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
