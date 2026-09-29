import React from 'react';
import { motion } from 'framer-motion';

const orbits = [
  {
    radius: 100, // Inner orbit
    duration: 25,
    skills: [
      { name: 'React.js', color: 'text-cyan-400', border: 'border-cyan-400/50' },
      { name: 'Next.js', color: 'text-white', border: 'border-white/50' },
      { name: 'Tailwind', color: 'text-teal-400', border: 'border-teal-400/50' },
      { name: 'Node.js', color: 'text-green-500', border: 'border-green-500/50' },
    ]
  },
  {
    radius: 180, // Middle orbit
    duration: 35,
    reverse: true,
    skills: [
      { name: 'Python', color: 'text-yellow-400', border: 'border-yellow-400/50' },
      { name: 'MongoDB', color: 'text-green-400', border: 'border-green-400/50' },
      { name: 'PostgreSQL', color: 'text-blue-400', border: 'border-blue-400/50' },
      { name: 'Express.js', color: 'text-gray-300', border: 'border-gray-500/50' },
      { name: 'TypeScript', color: 'text-blue-500', border: 'border-blue-500/50' },
    ]
  },
  {
    radius: 260, // Outer orbit
    duration: 45,
    skills: [
      { name: 'LangChain', color: 'text-blue-300', border: 'border-blue-300/50' },
      { name: 'Ollama', color: 'text-gray-100', border: 'border-gray-300/50' },
      { name: 'Gemini API', color: 'text-purple-400', border: 'border-purple-400/50' },
      { name: 'Git & GitHub', color: 'text-orange-400', border: 'border-orange-400/50' },
      { name: 'JavaScript', color: 'text-yellow-300', border: 'border-yellow-300/50' },
      { name: 'FAISS', color: 'text-indigo-400', border: 'border-indigo-400/50' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-20 py-20 relative z-10 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12 z-20"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
          My <span className="text-purple-400">Tech Universe</span>
        </h2>
        <p className="text-gray-400">Everything I use to build intelligent applications.</p>
      </motion.div>

      {/* Orbit System Container */}
      <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center transform scale-75 md:scale-100">
        
        {/* Core Center */}
        <div className="absolute z-20 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-[0_0_50px_rgba(168,85,247,0.6)] border border-white/20">
          <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">AI</span>
        </div>

        {/* Orbits */}
        {orbits.map((orbit, orbitIndex) => {
          const rotationDirection = orbit.reverse ? -360 : 360;
          return (
            <div 
              key={orbitIndex}
              className="absolute rounded-full border border-white/10"
              style={{
                width: orbit.radius * 2,
                height: orbit.radius * 2,
              }}
            >
              <motion.div
                className="w-full h-full relative"
                animate={{ rotate: rotationDirection }}
                transition={{
                  duration: orbit.duration,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {orbit.skills.map((skill, skillIndex) => {
                  const angle = (360 / orbit.skills.length) * skillIndex;
                  // Convert angle to radians for positioning
                  const radian = (angle * Math.PI) / 180;
                  const x = Math.cos(radian) * orbit.radius;
                  const y = Math.sin(radian) * orbit.radius;

                  return (
                    <div
                      key={skillIndex}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      {/* Counter-rotate so text stays upright */}
                      <motion.div
                        animate={{ rotate: -rotationDirection }}
                        transition={{
                          duration: orbit.duration,
                          ease: "linear",
                          repeat: Infinity,
                        }}
                        className={`px-4 py-2 bg-[#0a0a0c] backdrop-blur-md rounded-full border ${skill.border} shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all cursor-default group`}
                      >
                        <span className={`text-sm font-bold whitespace-nowrap ${skill.color}`}>
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
      
    </section>
  );
}
