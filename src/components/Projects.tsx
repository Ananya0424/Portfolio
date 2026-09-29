import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'PrepPilot AI',
    category: 'AI INTERVIEW PREPARATION PLATFORM',
    desc: 'AI-powered interview preparation platform that generates personalized preparation kits from job descriptions and company information, including interview questions, flashcards, requirements and preparation schedules.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'LLM APIs'],
    github: 'https://github.com/Ananya0424/prep-pilot-ai',
    live: 'https://prep-pilot-ai-kappa.vercel.app/',
    uiMockup: 'prep-pilot'
  },
  {
    id: '02',
    title: 'Finance Tracker+',
    category: 'PERSONAL FINANCE MANAGEMENT',
    desc: 'Full-stack personal finance platform for tracking expenses, managing budgets, visualizing spending patterns and generating financial insights.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Flask'],
    github: 'https://github.com/Ananya0424/financeee',
    live: 'https://financeee-flax.vercel.app/',
    uiMockup: 'finance'
  },
  {
    id: '03',
    title: 'AI Chatbot Suite',
    category: 'MULTIMODAL + RAG AI',
    desc: 'A collection of AI-powered conversational applications combining a multimodal chatbot for text and image interactions with an offline RAG-based medical assistant.',
    tech: ['React', 'Node.js', 'Express', 'LangChain', 'FAISS', 'Ollama'],
    includes: ['Multimodal AI Chatbot', 'Medical RAG Assistant'],
    github: 'https://github.com/Ananya0424/AI-Medical-chatboT',
    live: 'https://ai-advanced-chatbot-1.onrender.com/',
    uiMockup: 'chatbot'
  },
  {
    id: '04',
    title: 'AI Photo Booth',
    category: 'AI-POWERED PHOTO EXPERIENCE',
    desc: 'AI-powered photo experience that allows users to generate creative images while preserving facial identity, with a modern React interface and cloud-based image processing.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/Ananya0424/photobooth',
    live: 'https://photobooth-delta.vercel.app',
    uiMockup: 'photo'
  },
  {
    id: '05',
    title: 'DocScan AI',
    category: 'AI DOCUMENT SCANNER',
    desc: 'AI-powered document scanning application that extracts text from images and PDFs using OCR, processes documents directly in the browser and provides an intuitive interface for reviewing extracted content.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'PDF.js', 'Tesseract OCR'],
    github: 'https://github.com/Ananya0424/doc-scanner',
    live: 'https://doc-scanner-alpha-bice.vercel.app',
    uiMockup: 'doc'
  },
  {
    id: '06',
    title: 'EdTech Learning Platform',
    category: 'FULL-STACK EDUCATION PLATFORM',
    desc: 'Full-stack education platform designed for managing learning content and providing a structured digital learning experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Ananya0424/Metaverse-TFG-Educational-',
    live: 'https://tfg.future4next.com/',
    uiMockup: 'edtech'
  },
  {
    id: '07',
    title: 'TFG Web Platform',
    category: 'FULL-STACK WEB APPLICATION',
    desc: 'A production-style web application developed during my internship, featuring a React frontend integrated with backend REST APIs.',
    tech: ['React', 'REST APIs', 'JavaScript', 'CSS'],
    github: 'https://github.com/Ananya0424',
    live: '',
    uiMockup: 'tfg'
  }
];

const AbstractMockup = ({ type }: { type: string }) => {
  switch (type) {
    case 'prep-pilot':
      return (
        <div className="w-full h-full bg-[#111] p-3 flex flex-col gap-2 rounded-t-xl opacity-80 group-hover:scale-105 transition-transform duration-500">
          <div className="flex gap-2">
            <div className="w-1/3 h-16 bg-purple-500/20 rounded-md border border-purple-500/30" />
            <div className="w-2/3 flex flex-col gap-2">
              <div className="h-4 bg-white/10 rounded-sm w-3/4" />
              <div className="h-4 bg-white/5 rounded-sm w-full" />
              <div className="h-4 bg-white/5 rounded-sm w-5/6" />
            </div>
          </div>
          <div className="w-full h-12 mt-auto bg-blue-500/10 rounded border border-blue-500/20 flex items-center justify-center">
            <div className="w-1/2 h-2 bg-blue-500/30 rounded-full" />
          </div>
        </div>
      );
    case 'finance':
      return (
        <div className="w-full h-full bg-[#111] p-4 flex flex-col justify-end gap-2 rounded-t-xl opacity-80 group-hover:scale-105 transition-transform duration-500">
          <div className="w-1/2 h-4 bg-white/10 rounded mb-2" />
          <div className="flex items-end justify-between h-20 gap-1 border-b border-white/10 pb-2">
            {[40, 70, 45, 90, 60, 30, 85].map((h, i) => (
              <div key={i} className="w-full bg-emerald-500/30 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      );
    case 'chatbot':
      return (
        <div className="w-full h-full bg-[#111] p-3 flex flex-col gap-3 rounded-t-xl opacity-80 group-hover:scale-105 transition-transform duration-500">
          <div className="self-end w-2/3 h-8 bg-blue-500/20 rounded-l-xl rounded-tr-xl border border-blue-500/30" />
          <div className="self-start w-3/4 h-12 bg-white/10 rounded-r-xl rounded-tl-xl flex items-center px-2 gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-500/40 shrink-0" />
            <div className="w-full flex flex-col gap-1">
              <div className="h-1.5 bg-white/20 rounded w-full" />
              <div className="h-1.5 bg-white/20 rounded w-2/3" />
            </div>
          </div>
          <div className="mt-auto h-6 w-full bg-white/5 rounded-full border border-white/10" />
        </div>
      );
    case 'photo':
      return (
        <div className="w-full h-full bg-[#111] p-3 flex items-center justify-center rounded-t-xl opacity-80 group-hover:scale-105 transition-transform duration-500">
          <div className="w-full h-full border-2 border-dashed border-white/20 rounded-lg flex items-center justify-center relative">
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500/60 rounded-full" />
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      );
    case 'doc':
      return (
        <div className="w-full h-full bg-[#111] p-4 flex items-center justify-center rounded-t-xl opacity-80 group-hover:scale-105 transition-transform duration-500">
          <div className="w-2/3 h-full bg-white/5 border border-white/10 rounded shadow-lg relative p-2 flex flex-col gap-2 overflow-hidden">
            <div className="w-full h-2 bg-white/20 rounded-sm" />
            <div className="w-3/4 h-2 bg-white/10 rounded-sm" />
            <div className="w-5/6 h-2 bg-white/10 rounded-sm" />
            <div className="w-full h-2 bg-white/10 rounded-sm" />
            {/* Scanner line */}
            <motion.div 
              className="absolute left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              animate={{ top: ['10%', '90%', '10%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      );
    case 'edtech':
      return (
        <div className="w-full h-full bg-[#111] p-3 flex flex-col gap-2 rounded-t-xl opacity-80 group-hover:scale-105 transition-transform duration-500">
          <div className="w-full h-20 bg-white/5 border border-white/10 rounded-md flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center pl-0.5">
              <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white/60 border-b-[4px] border-b-transparent" />
            </div>
          </div>
          <div className="flex gap-2 h-full">
            <div className="w-2/3 bg-white/5 rounded-md" />
            <div className="w-1/3 bg-white/5 rounded-md" />
          </div>
        </div>
      );
    case 'tfg':
    default:
      return (
        <div className="w-full h-full bg-[#111] p-3 flex flex-col gap-2 rounded-t-xl opacity-80 group-hover:scale-105 transition-transform duration-500">
          <div className="w-full h-4 flex justify-between gap-2 border-b border-white/10 pb-1">
            <div className="w-4 h-full bg-white/20 rounded-sm" />
            <div className="w-1/2 h-full bg-white/10 rounded-sm" />
          </div>
          <div className="flex-1 flex gap-2 pt-1">
            <div className="w-1/4 h-full bg-white/5 rounded-sm" />
            <div className="w-3/4 h-full flex flex-col gap-2">
              <div className="h-1/2 w-full bg-white/5 rounded-sm" />
              <div className="h-1/2 w-full flex gap-2">
                <div className="w-1/2 h-full bg-white/5 rounded-sm" />
                <div className="w-1/2 h-full bg-white/5 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      );
  }
};

const ProjectCard = ({ project }: { project: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group relative w-full h-[400px] [perspective:1500px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-xl ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        
        {/* Front of Card */}
        <div className="absolute inset-0 w-full h-full bg-[#111113] rounded-2xl border border-white/5 [backface-visibility:hidden] flex flex-col overflow-hidden group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] group-hover:-translate-y-2 transition-all duration-300">
          
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-white/5">
            <span className="text-sm text-white/40 font-mono font-medium">{project.id}</span>
            <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-2.5 py-1 rounded-full">{project.category}</span>
          </div>

          {/* Abstract Mockup */}
          <div className="h-44 w-full border-b border-white/5 relative overflow-hidden bg-[#0a0a0a]">
            <AbstractMockup type={project.uiMockup} />
          </div>
          
          {/* Footer Info */}
          <div className="p-5 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-xs text-white/50 font-mono line-clamp-1">{project.tech.join(' • ')}</p>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest group-hover:text-purple-400 transition-colors">Explore Project</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>

        {/* Back of Card (Flipped) */}
        <div className="absolute inset-0 w-full h-full bg-[#141417] rounded-2xl border border-purple-500/40 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col p-6 shadow-2xl">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
            <p className="text-[10px] font-bold tracking-widest uppercase text-purple-400 mt-1">{project.category}</p>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
            {project.desc}
          </p>
          
          {project.includes && (
            <div className="mb-4 text-xs">
              <p className="font-bold text-white/50 mb-2 uppercase tracking-wider text-[10px]">Includes</p>
              <ul className="text-gray-400 space-y-1">
                {project.includes.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto">
            <p className="font-bold text-white/50 mb-2 uppercase tracking-wider text-[10px]">Built With</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((tech: string, i: number) => (
                <span key={i} className="bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded text-[10px] font-medium">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevent flip on link click
                  className="flex-1 text-center bg-white text-black py-2 rounded-xl font-bold text-xs hover:bg-gray-200 transition-colors"
                >
                  LIVE DEMO ↗
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center bg-white/5 text-white py-2 rounded-xl font-bold text-xs hover:bg-white/10 transition-colors border border-white/10"
                >
                  GITHUB ↗
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full flex flex-col justify-center px-4 md:px-12 py-24 relative z-10 overflow-hidden">
      
      <div className="w-full max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-purple-400 font-mono font-bold tracking-widest text-sm">01 / 07</span>
            <div className="h-[1px] w-12 bg-purple-400/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight uppercase">
            Selected Work
          </h2>
          <p className="text-gray-400 mt-4 text-lg md:text-xl font-medium max-w-2xl">
            Things I've built, shipped and experimented with.
          </p>
          <p className="text-gray-500 mt-2 text-sm max-w-2xl">
            Full-stack applications, AI-powered products and developer experiments.
          </p>
        </motion.div>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
