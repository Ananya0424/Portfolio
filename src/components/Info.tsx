import React from 'react';

export default function Info() {
  return (
    <section id="about" className="min-h-[80vh] w-full flex items-center px-8 md:px-20 py-20 snap-start">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-wide">
          About Me
        </h2>
        
        <div className="text-lg md:text-2xl font-medium text-white/90 leading-relaxed space-y-8">
          <p>
            I am a B.Tech Computer Science student specializing in AI & ML at Panipat Institute of Engineering and Technology (2022-2026).
          </p>
          
          <p>
            With hands-on experience as a Developer Intern at Metaverse 911 and a Web Developer Intern at BNG, I have developed multiple full-stack applications, custom AI chatbots, and interactive platforms. 
          </p>

          <p>
            My technical stack includes Python, JavaScript, React.js, Next.js, Node.js, Express.js, Flask, MongoDB, and PostgreSQL. I am particularly passionate about Generative AI, RAG pipelines, and LangChain.
          </p>
        </div>
      </div>
    </section>
  );
}
