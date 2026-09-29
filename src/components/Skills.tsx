import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = {
  ALL: [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'TypeScript',
    'Tailwind CSS', 'Bootstrap', 'Node.js', 'Express.js', 'Python',
    'RESTful APIs', 'JWT Authentication', 'MongoDB', 'PostgreSQL', 'SQL',
    'LangChain', 'FAISS', 'Ollama', 'Gemini API'
  ],
  FRONTEND: [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'TypeScript',
    'Tailwind CSS', 'Bootstrap'
  ],
  BACKEND: [
    'Node.js', 'Express.js', 'Python', 'RESTful APIs', 'JWT Authentication'
  ],
  DATABASE: [
    'MongoDB', 'PostgreSQL', 'SQL', 'FAISS'
  ],
  'AI & TOOLS': [
    'LangChain', 'Ollama', 'Gemini API', 'Git', 'GitHub'
  ]
};

const categories = Object.keys(skillsData);

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <section id="skills" className="min-h-[80vh] w-full flex items-center px-8 md:px-20 py-20 snap-start text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl w-full mx-auto flex flex-col items-center z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-wide bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          My Arsenal
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 w-full max-w-4xl relative">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-2 md:px-8 md:py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                activeTab === cat 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Pills */}
        <motion.div layout className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl min-h-[300px] items-center content-center">
          <AnimatePresence mode="popLayout">
            {skillsData[activeTab as keyof typeof skillsData].map((skill, index) => (
              <motion.div
                key={skill}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.5)"
                }}
                className="bg-[#1a1a1a] border border-gray-800 text-gray-200 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold cursor-pointer flex items-center justify-center relative group overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{skill}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
