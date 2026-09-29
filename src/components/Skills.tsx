import React, { useState } from 'react';

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
    <section id="skills" className="min-h-[80vh] w-full flex items-center px-8 md:px-20 py-20 snap-start text-white">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 w-full max-w-4xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-md text-sm font-bold tracking-wider transition-all border border-[#6b21a8] ${
                activeTab === cat 
                  ? 'bg-[#7c3aed] text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]' 
                  : 'bg-transparent text-[#a78bfa] hover:bg-[#5b21b6] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Pills */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {skillsData[activeTab as keyof typeof skillsData].map((skill, index) => {
            // Randomize tilt slightly for each pill (-4deg to 4deg)
            const tilt = (index % 3 === 0) ? '-3deg' : (index % 2 === 0) ? '3deg' : '-1deg';
            return (
              <div
                key={skill}
                style={{ transform: `rotate(${tilt})` }}
                className="bg-[#7c3aed] text-white px-6 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer border border-[#8b5cf6]/50"
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
