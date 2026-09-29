import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'PrepPilot AI',
    role: 'AI Interview Platform',
    desc: 'Full-stack Next.js app using Gemini API and web scraping to extract job requirements and generate targeted interview questions.',
    tech: ['Next.js', 'Gemini API', 'Web Scraping'],
    github: 'https://github.com/Ananya0424/prep-pilot-ai',
    live: 'https://prep-pilot-ai-kappa.vercel.app/',
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'EdTech Portal',
    role: 'Education Platform',
    desc: 'Responsive React.js platform with an API config panel for managing LLM keys. Integrated with Unity through APIs for real-time 3D games.',
    tech: ['React.js', 'Tailwind', 'Unity API'],
    github: 'https://github.com/Ananya0424/Metaverse-TFG-Educational-',
    live: 'https://tfg.future4next.com/',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Finance Tracker',
    role: 'AI Finance App',
    desc: 'Full-stack app for transaction management with a Flask + Pandas analytics service to generate spending insights from user data.',
    tech: ['React', 'Flask', 'MongoDB'],
    github: 'https://github.com/Ananya0424/financeee',
    live: 'https://financeee-flax.vercel.app/',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Medical Chatbot',
    role: 'Healthcare Document AI',
    desc: 'Offline chatbot built with LangChain, FAISS, and Ollama (Phi-3). Processes medical text chunks with MiniLM embeddings for instant retrieval.',
    tech: ['LangChain', 'FAISS', 'Ollama'],
    github: 'https://github.com/Ananya0424/AI-Medical-chatboT',
    live: '',
    color: 'from-rose-500 to-orange-500'
  },
  {
    title: 'Advanced AI (RAG)',
    role: 'Multimodal Chatbot',
    desc: 'Advanced chatbot utilizing Retrieval-Augmented Generation to handle complex text and chat histories efficiently while remembering the conversation.',
    tech: ['RAG', 'Python', 'LLM APIs'],
    github: 'https://github.com/Ananya0424/AI-Medical-chatboT', 
    live: 'https://ai-advanced-chatbot-1.onrender.com/',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Document Scanner',
    role: 'Scanner Utility',
    desc: 'A live interactive application for scanning and processing documents efficiently directly from the browser.',
    tech: ['React', 'Web APIs', 'Tailwind'],
    github: 'https://github.com/Ananya0424/doc-scanner',
    live: 'https://doc-scanner-alpha-bice.vercel.app',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="min-h-screen w-full flex flex-col justify-center py-24 relative z-10 overflow-hidden">
      <div className="w-full px-6 md:px-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Selected Works
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Swipe or use arrows to explore more.</p>
        </motion.div>

        {/* Carousel Navigation Arrows */}
        <div className="flex gap-4">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-white/20 bg-[#0f0f11] flex items-center justify-center text-white hover:bg-white/10 hover:border-purple-500 transition-all"
          >
            ←
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-white/20 bg-[#0f0f11] flex items-center justify-center text-white hover:bg-white/10 hover:border-purple-500 transition-all"
          >
            →
          </button>
        </div>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-20 pb-12 pt-4 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="snap-center shrink-0 w-[320px] md:w-[400px] group flex flex-col bg-[#0f0f11] rounded-3xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 shadow-xl"
          >
            {/* Thumbnail Placeholder */}
            <div className="w-full h-48 relative overflow-hidden bg-[#050505] border-b border-white/5">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <span className="font-display text-5xl font-bold text-white/20 uppercase tracking-widest">{project.title.substring(0, 2)}</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4">
                {project.role}
              </p>
              
              <p className="text-gray-400 mb-6 flex-1 text-sm md:text-base leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                {project.live ? (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 text-center bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors shadow-lg"
                  >
                    Live Demo
                  </a>
                ) : null}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 text-center bg-white/5 text-white py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors border border-white/10"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* CSS to hide scrollbar across browsers */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
