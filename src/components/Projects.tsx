import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'PrepPilot AI',
    role: 'AI Interview Platform',
    desc: 'An AI-driven platform that scrapes job descriptions and generates tailored interview questions using Gemini API to help candidates prepare effectively.',
    tech: ['Next.js', 'Gemini API', 'Python'],
    github: 'https://github.com/Ananya0424/prep-pilot-ai',
    live: 'https://prep-pilot-ai-kappa.vercel.app/',
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'EdTech Portal',
    role: 'Education Platform',
    desc: 'A React-based platform featuring a secure API config panel. Seamlessly integrates with Unity WebGL to deliver real-time interactive 3D gaming experiences.',
    tech: ['React', 'Unity API', 'Node.js'],
    github: 'https://github.com/Ananya0424/Metaverse-TFG-Educational-',
    live: 'https://tfg.future4next.com/',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Finance Tracker',
    role: 'AI Finance App',
    desc: 'A comprehensive personal finance app using React and Flask. Leverages a Pandas-based analytics engine to generate smart spending insights from user data.',
    tech: ['Flask', 'MongoDB', 'React'],
    github: 'https://github.com/Ananya0424/financeee',
    live: 'https://financeee-flax.vercel.app/',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'AI Chatbots',
    role: 'Medical & Multimodal RAG',
    desc: 'Two advanced AI bots combined: an offline Medical Assistant (Ollama, FAISS) and a complex RAG-based Multimodal bot that maintains chat histories.',
    tech: ['LangChain', 'Ollama', 'RAG'],
    github: 'https://github.com/Ananya0424/AI-Medical-chatboT', 
    live: 'https://ai-advanced-chatbot-1.onrender.com/',
    color: 'from-rose-500 to-orange-500'
  },
  {
    title: 'AI Photo Booth',
    role: 'Interactive Web App',
    desc: 'A fun, interactive application that utilizes the browser camera API to capture photos, apply custom filters, and allow instant image downloads.',
    tech: ['React', 'Webcam API', 'Canvas'],
    github: 'https://github.com/Ananya0424/photobooth',
    live: 'https://photobooth-delta.vercel.app', // Added temporary live link
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Doc Scanner',
    role: 'Scanner Utility',
    desc: 'An interactive application designed for scanning, analyzing, and processing documents directly and efficiently from the browser.',
    tech: ['React', 'Web APIs'],
    github: 'https://github.com/Ananya0424/doc-scanner',
    live: 'https://doc-scanner-alpha-bice.vercel.app',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="h-screen w-full flex flex-col justify-center px-4 md:px-12 relative z-10 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6 pt-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
          Projects
        </h2>
        <p className="text-gray-400 mt-2 text-sm">Hover over a card to flip and view details.</p>
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
            className="group relative w-full h-[180px] md:h-[200px] [perspective:1000px] cursor-pointer"
          >
            {/* Inner Container for Flip Effect */}
            <div className="w-full h-full relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-700 ease-in-out shadow-lg">
              
              {/* Front of Card */}
              <div className="absolute inset-0 w-full h-full bg-[#0f0f11] rounded-2xl border border-white/10 [backface-visibility:hidden] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                <div className={`absolute top-0 w-full h-2 bg-gradient-to-r ${project.color} opacity-90`} />
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-xs font-bold tracking-widest uppercase text-purple-400">{project.role}</p>
              </div>

              {/* Back of Card (Flipped) */}
              <div className="absolute inset-0 w-full h-full bg-[#1a1a1f] rounded-2xl border border-purple-500/30 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col p-5">
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3 flex-1">
                  {project.desc}
                </p>
                
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded text-[10px] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 text-center bg-purple-600 text-white py-1.5 rounded-lg font-bold text-xs hover:bg-purple-500 transition-colors"
                    >
                      Live Site
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 text-center bg-white/10 text-white py-1.5 rounded-lg font-bold text-xs hover:bg-white/20 transition-colors border border-white/10"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
