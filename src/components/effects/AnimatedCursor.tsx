'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const trailRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if pointer is touch-based (mobile)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Set cursor-active class on body to hide default pointer
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-hover-glow]'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add observers or listeners for dynamic elements
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [hidden]);

  // Smooth follow logic using requestAnimationFrame
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const followMouse = () => {
      if (!cursorRingRef.current) return;
      
      const speed = 0.15; // interpolation factor
      const nextX = trailRef.current.x + (position.x - trailRef.current.x) * speed;
      const nextY = trailRef.current.y + (position.y - trailRef.current.y) * speed;
      
      trailRef.current = { x: nextX, y: nextY };
      
      cursorRingRef.current.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`;
      
      reqRef.current = requestAnimationFrame(followMouse);
    };

    reqRef.current = requestAnimationFrame(followMouse);
    
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [position]);

  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer follow ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-50 transition-all duration-300 ease-out ${
          hidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } ${linkHovered ? 'w-14 h-14 bg-primary/10 border-primary scale-110' : ''} ${
          clicked ? 'scale-90 border-accent bg-accent/20' : ''
        }`}
        style={{
          transform: 'translate3d(0px, 0px, 0) translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      
      {/* Inner dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 transition-transform duration-200 ${
          hidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } ${linkHovered ? 'scale-0' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          willChange: 'left, top',
        }}
      />
    </>
  );
}
