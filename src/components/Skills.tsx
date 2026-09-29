import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'TypeScript', 'HTML5/CSS3'],
    borderColor: 'hover:border-blue-500/50',
    bgColor: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20'
  },
  {
    title: 'Backend Systems',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'REST APIs'],
    borderColor: 'hover:border-green-500/50',
    bgColor: 'bg-green-500/10',
    iconBorder: 'border-green-500/20'
  },
  {
    title: 'Databases',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    skills: ['MongoDB', 'PostgreSQL', 'SQL', 'FAISS (Vector)'],
    borderColor: 'hover:border-yellow-500/50',
    bgColor: 'bg-yellow-500/10',
    iconBorder: 'border-yellow-500/20'
  },
  {
    title: 'Generative AI',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    skills: ['LangChain', 'Ollama', 'Gemini API', 'RAG Pipelines', 'LLMs'],
    borderColor: 'hover:border-purple-500/50',
    bgColor: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-20 py-24 relative z-10 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 z-20"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
          Technical <span className="text-purple-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-lg">Technologies I use to bring ideas to life.</p>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-20">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`bg-[#0f0f11] border border-white/5 rounded-3xl p-8 transition-all shadow-xl flex flex-col h-full ${category.borderColor}`}
          >
            <div className={`w-14 h-14 rounded-2xl ${category.bgColor} border ${category.iconBorder} flex items-center justify-center mb-8`}>
              {category.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-6">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2.5 mt-auto">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
