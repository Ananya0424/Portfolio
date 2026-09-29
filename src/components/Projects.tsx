import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'PrepPilot AI',
    role: 'Personalized AI Interview Prep Platform',
    desc: 'Full-stack Next.js app using Gemini API and web scraping to extract job requirements and generate targeted interview questions.',
    tech: ['Next.js', 'Gemini API', 'Web Scraping'],
    github: 'https://github.com/Ananya0424/prep-pilot-ai',
    live: 'https://prep-pilot-ai-kappa.vercel.app/'
  },
  {
    title: 'TFG - EdTech Portal',
    role: 'AI-Driven Education Platform',
    desc: 'Responsive React.js platform with an API config panel for managing LLM keys. Integrated with Unity through APIs for real-time 3D games.',
    tech: ['React.js', 'Tailwind', 'Node.js', 'Unity API'],
    github: 'https://github.com/Ananya0424/Metaverse-TFG-Educational-',
    live: 'https://tfg.future4next.com/'
  },
  {
    title: 'Personal Finance Tracker',
    role: 'AI-Powered Finance App',
    desc: 'Full-stack app for transaction management with a Flask + Pandas analytics service to generate spending insights from user data.',
    tech: ['React', 'Node.js', 'Flask', 'MongoDB'],
    github: 'https://github.com/Ananya0424/financeee',
    live: 'https://financeee-flax.vercel.app/'
  },
  {
    title: 'AI Medical Chatbot',
    role: 'Healthcare Document AI',
    desc: 'Offline chatbot built with LangChain, FAISS, and Ollama (Phi-3). Processes medical text chunks with MiniLM embeddings for instant retrieval.',
    tech: ['LangChain', 'FAISS', 'Ollama', 'Python'],
    github: 'https://github.com/Ananya0424/AI-Medical-chatboT',
    live: ''
  },
  {
    title: 'Advanced AI Chatbot (RAG)',
    role: 'Multimodal Chatbot',
    desc: 'Advanced chatbot utilizing Retrieval-Augmented Generation to handle complex text and chat histories efficiently while remembering the conversation.',
    tech: ['RAG', 'Python', 'LLM APIs'],
    github: 'https://github.com/Ananya0424/AI-Medical-chatboT', 
    live: 'https://ai-advanced-chatbot-1.onrender.com/'
  },
  {
    title: 'Document Scanner',
    role: 'Web-based Scanner Utility',
    desc: 'A live interactive application for scanning and processing documents efficiently directly from the browser.',
    tech: ['React', 'Web APIs', 'Tailwind'],
    github: 'https://github.com/Ananya0424/doc-scanner',
    live: 'https://doc-scanner-alpha-bice.vercel.app'
  },
  {
    title: 'AI Photobooth',
    role: 'AI-Enhanced Photo Booth',
    desc: 'An AI-powered photobooth application that adds generative AI capabilities to a real-time photography experience.',
    tech: ['AI APIs', 'Frontend', 'Backend'],
    github: 'https://github.com/Ananya0424/AI-Photobooth',
    live: 'https://ai-photobooth-bfen.onrender.com'
  }
];

// Reusable Tilt Card Component
function TiltCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative flex flex-col h-full bg-[#111] p-6 rounded-3xl border border-gray-800 hover:border-purple-500/50 group transition-colors shadow-2xl"
    >
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="flex flex-col h-full relative z-10 pointer-events-none"
      >
        <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
        <p className="text-purple-500 font-semibold mb-4 text-xs uppercase tracking-[0.1em]">{project.role}</p>
        
        <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech: string, i: number) => (
            <span key={i} className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(60px)" }} 
        className="flex items-center gap-4 pt-4 border-t border-gray-800 w-full mt-auto relative z-20"
      >
        {project.live && (
          <a 
            href={project.live} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all"
          >
            Live Demo
          </a>
        )}
        
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm font-bold bg-white/10 text-white py-3 px-4 rounded-xl hover:bg-white/20 transition-all border border-white/10"
          >
            GitHub
          </a>
        )}
      </div>

      {/* Hover Gradient Glow behind card */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10 pointer-events-none" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full flex items-center px-8 md:px-20 py-20 snap-start text-white relative z-10">
      <div className="max-w-6xl w-full mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display font-bold mb-16 tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
        >
          Selected Works
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
