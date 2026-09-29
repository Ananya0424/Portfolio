import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  // Use motion values to bypass React render cycle for continuous mouse movement
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28, mass: 0.5 });
  
  const flashlightRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only update DOM directly or use Motion values inside mousemove (NO setStates!)
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      
      if (flashlightRef.current) {
        flashlightRef.current.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(255, 255, 255, 0.15), rgba(168, 85, 247, 0.1) 25%, transparent 60%)`;
      }
    };

    // State updates are fine for mouseover because they don't fire continuously
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Use passive listener for better performance
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Spotlight Flashlight Effect */}
      <div
        ref={flashlightRef}
        className="pointer-events-none fixed inset-0 z-50 hidden md:block"
        style={{ background: 'transparent' }} // Initial state
      />
      
      {/* Core Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[999] mix-blend-screen hidden md:block shadow-[0_0_15px_rgba(168,85,247,1)]"
        style={{
          x: springX,
          y: springY
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(168, 85, 247, 0.8)',
          borderWidth: '2px'
        }}
        transition={{ duration: 0.2 }} // Only animate the hover changes
      />
    </>
  );
}
