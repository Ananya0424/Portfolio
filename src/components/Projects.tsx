import React from 'react';

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

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full flex items-center px-8 md:px-20 py-20 snap-start">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-wide">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow group flex flex-col h-full border-b-4 border-transparent hover:border-[#FDBB2D]">
              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">{project.title}</h3>
              <p className="text-orange-500 font-semibold mb-3 text-xs uppercase tracking-wider">{project.role}</p>
              
              <p className="text-gray-600 mb-6 flex-1 text-sm leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-bold bg-[#FDBB2D] text-white py-2 px-4 rounded-xl hover:bg-orange-500 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-bold bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
