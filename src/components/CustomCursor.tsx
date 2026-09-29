import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const scalableTags = ['a', 'button', 'p', 'h1', 'h2', 'h3', 'span'];
      if (scalableTags.includes(target.tagName.toLowerCase()) || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Spotlight Flashlight Effect (Brighter and Larger) */}
      <div
        className="pointer-events-none fixed inset-0 z-50 hidden md:block transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), rgba(168, 85, 247, 0.1) 25%, transparent 60%)`
        }}
      />
      
      {/* Core Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-purple-400 pointer-events-none z-[999] mix-blend-screen hidden md:block shadow-[0_0_15px_rgba(168,85,247,1)]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(168, 85, 247, 0.8)',
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
    </>
  );
}
