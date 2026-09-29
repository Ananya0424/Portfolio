import React from 'react';
import { motion } from 'framer-motion';

const orbits = [
  {
    radius: 95, // Inner orbit (Frontend)
    duration: 25,
    skills: [
      { name: 'React.js', color: 'text-cyan-400', border: 'border-cyan-400/50' },
      { name: 'Next.js', color: 'text-white', border: 'border-white/50' },
      { name: 'Tailwind', color: 'text-teal-400', border: 'border-teal-400/50' },
      { name: 'HTML5', color: 'text-orange-500', border: 'border-orange-500/50' },
      { name: 'CSS3', color: 'text-blue-500', border: 'border-blue-500/50' },
    ]
  },
  {
    radius: 160, // Middle orbit (Backend & DB)
    duration: 35,
    reverse: true,
    skills: [
      { name: 'Node.js', color: 'text-green-500', border: 'border-green-500/50' },
      { name: 'Express', color: 'text-gray-300', border: 'border-gray-500/50' },
      { name: 'Python', color: 'text-yellow-400', border: 'border-yellow-400/50' },
      { name: 'Flask', color: 'text-gray-400', border: 'border-gray-400/50' },
      { name: 'MongoDB', color: 'text-green-400', border: 'border-green-400/50' },
      { name: 'PostgreSQL', color: 'text-blue-400', border: 'border-blue-400/50' },
      { name: 'SQL', color: 'text-blue-300', border: 'border-blue-300/50' },
    ]
  },
  {
    radius: 235, // Outer orbit (AI, Tools & Others)
    duration: 45,
    skills: [
      { name: 'LangChain', color: 'text-blue-300', border: 'border-blue-300/50' },
      { name: 'Ollama', color: 'text-gray-100', border: 'border-gray-300/50' },
      { name: 'Gemini', color: 'text-purple-400', border: 'border-purple-400/50' },
      { name: 'FAISS', color: 'text-indigo-400', border: 'border-indigo-400/50' },
      { name: 'TypeScript', color: 'text-blue-500', border: 'border-blue-500/50' },
      { name: 'JavaScript', color: 'text-yellow-300', border: 'border-yellow-300/50' },
      { name: 'Git/GitHub', color: 'text-orange-400', border: 'border-orange-400/50' },
      { name: 'REST APIs', color: 'text-gray-200', border: 'border-gray-200/50' },
      { name: 'JWT', color: 'text-pink-400', border: 'border-pink-400/50' },
    ]
  }
];

export default function Info() {
  return (
    <section id="about" className="h-screen w-full flex items-center px-4 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full pt-16">
        
        {/* Left: About Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
            About Me
          </h2>
          
          <div className="text-sm md:text-base font-medium text-white/90 leading-relaxed space-y-4">
            <p className="flex flex-wrap gap-x-1.5">
              {"I am a B.Tech Computer Science student specializing in AI & ML at Panipat Institute of Engineering and Technology (2022-2026).".split(' ').map((word, i) => (
                <span key={`p1-${i}`} className="inline-block transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:-translate-y-1 cursor-default">{word}</span>
              ))}
            </p>
            
            <p className="flex flex-wrap gap-x-1.5">
              {"With hands-on experience as a Developer Intern at Metaverse 911 and a Web Developer Intern at BNG, I have developed multiple full-stack applications, custom AI chatbots, and interactive platforms.".split(' ').map((word, i) => (
                <span key={`p2-${i}`} className="inline-block transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:-translate-y-1 cursor-default">{word}</span>
              ))}
            </p>

            <p className="flex flex-wrap gap-x-1.5">
              {"My technical stack includes Python, JavaScript, React.js, Next.js, Node.js, Express.js, Flask, MongoDB, and PostgreSQL. I am particularly passionate about Generative AI, RAG pipelines, and LangChain.".split(' ').map((word, i) => (
                <span key={`p3-${i}`} className="inline-block transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:-translate-y-1 cursor-default">{word}</span>
              ))}
            </p>
          </div>
        </div>

        {/* Right: Orbit System */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center scale-75 md:scale-100">
          {/* Core Center */}
          <div className="absolute z-20 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-[0_0_30px_rgba(168,85,247,0.6)] border border-white/20">
            <span className="text-sm md:text-base font-black text-white tracking-widest uppercase">Skills</span>
          </div>

          {/* Orbits */}
          {orbits.map((orbit, orbitIndex) => {
            const rotationDirection = orbit.reverse ? -360 : 360;
            return (
              <div 
                key={orbitIndex}
                className="absolute rounded-full border border-white/25 border-dashed shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                style={{
                  width: orbit.radius * 2,
                  height: orbit.radius * 2,
                }}
              >
                <motion.div
                  className="w-full h-full relative"
                  animate={{ rotate: rotationDirection }}
                  transition={{ duration: orbit.duration, ease: "linear", repeat: Infinity }}
                >
                  {orbit.skills.map((skill, skillIndex) => {
                    const angle = (360 / orbit.skills.length) * skillIndex;
                    const radian = (angle * Math.PI) / 180;
                    const x = Math.cos(radian) * orbit.radius;
                    const y = Math.sin(radian) * orbit.radius;

                    return (
                      <div
                        key={skillIndex}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                      >
                        <motion.div
                          animate={{ rotate: -rotationDirection }}
                          transition={{ duration: orbit.duration, ease: "linear", repeat: Infinity }}
                          className={`px-2 py-1 bg-[#0a0a0c] backdrop-blur-md rounded-full border ${skill.border} shadow-lg flex items-center justify-center hover:scale-110 cursor-default`}
                        >
                          <span className={`text-[10px] md:text-xs font-bold whitespace-nowrap ${skill.color}`}>
                            {skill.name}
                          </span>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
