import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'PrepPilot AI',
    role: 'AI Interview Platform',
    desc: 'Next.js app using Gemini API to extract job requirements and generate interview questions.',
    tech: ['Next.js', 'Gemini API'],
    github: 'https://github.com/Ananya0424/prep-pilot-ai',
    live: 'https://prep-pilot-ai-kappa.vercel.app/',
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'EdTech Portal',
    role: 'Education Platform',
    desc: 'React.js platform with LLM key config panel. Integrated with Unity through APIs.',
    tech: ['React', 'Unity API'],
    github: 'https://github.com/Ananya0424/Metaverse-TFG-Educational-',
    live: 'https://tfg.future4next.com/',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Finance Tracker',
    role: 'AI Finance App',
    desc: 'Full-stack app with a Flask analytics service to generate spending insights from user data.',
    tech: ['Flask', 'MongoDB'],
    github: 'https://github.com/Ananya0424/financeee',
    live: 'https://financeee-flax.vercel.app/',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Medical Chatbot',
    role: 'Healthcare AI',
    desc: 'Offline chatbot with LangChain, FAISS, and Ollama. Processes chunks with MiniLM.',
    tech: ['LangChain', 'Ollama'],
    github: 'https://github.com/Ananya0424/AI-Medical-chatboT',
    live: '',
    color: 'from-rose-500 to-orange-500'
  },
  {
    title: 'Advanced AI (RAG)',
    role: 'Multimodal Chatbot',
    desc: 'Chatbot utilizing RAG to handle complex text and chat histories efficiently.',
    tech: ['RAG', 'LLM APIs'],
    github: 'https://github.com/Ananya0424/AI-Medical-chatboT', 
    live: 'https://ai-advanced-chatbot-1.onrender.com/',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Doc Scanner',
    role: 'Scanner Utility',
    desc: 'Interactive application for scanning and processing documents directly from browser.',
    tech: ['React', 'Web APIs'],
    github: 'https://github.com/Ananya0424/doc-scanner',
    live: 'https://doc-scanner-alpha-bice.vercel.app',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full flex flex-col justify-center px-4 md:px-12 py-16 relative z-10 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
          Projects
        </h2>
      </motion.div>

      {/* Grid Container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex flex-col bg-[#0f0f11] rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all shadow-lg relative"
          >
            {/* Subtle Top Border Gradient instead of the big box */}
            <div className={`w-full h-2 bg-gradient-to-r ${project.color} opacity-70`} />
            
            <div className="p-5 md:p-6 flex flex-col h-full">
              <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                {project.title}
              </h3>
              <p className="text-[10px] font-bold tracking-wider uppercase text-purple-400 mb-2">
                {project.role}
              </p>
              
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                {project.desc}
              </p>

              {/* Links / Buttons */}
              <div className="flex gap-2 mt-auto">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 text-center bg-white text-black py-2 rounded-lg font-bold text-xs hover:bg-gray-200 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 text-center bg-white/5 text-white py-2 rounded-lg font-bold text-xs hover:bg-white/10 transition-colors border border-white/10"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
