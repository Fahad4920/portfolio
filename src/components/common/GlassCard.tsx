'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  enableTilt?: boolean;
  glowColor?: 'purple' | 'blue' | 'none';
  hoverEffect?: 'scale' | 'lift' | 'none';
}

export default function GlassCard({
  children,
  enableTilt = true,
  glowColor = 'purple',
  hoverEffect = 'lift',
  className,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (enableTilt) {
      // Calculate rotation (-10deg to 10deg)
      const rX = ((y - height / 2) / height) * -10;
      const rY = ((x - width / 2) / width) * 10;
      
      setRotateX(rX);
      setRotateY(rY);
    }

    // Set cursor highlight coordinates for the dynamic radial background
    setGlowStyle({
      background: `radial-gradient(circle 250px at ${x}px ${y}px, rgba(139, 92, 246, 0.12), transparent)`,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowStyle({});
  };

  const borderGlowClass = 
    glowColor === 'purple' 
      ? 'hover:border-primary/40 shadow-primary/5 hover:shadow-primary/10'
      : glowColor === 'blue'
      ? 'hover:border-accent/40 shadow-accent/5 hover:shadow-accent/10'
      : '';

  const hoverClass =
    hoverEffect === 'lift'
      ? 'hover:-translate-y-1.5'
      : hoverEffect === 'scale'
      ? 'hover:scale-[1.02]'
      : '';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "glass-panel rounded-2xl relative overflow-hidden transition-all duration-300 ease-out shadow-lg",
        hoverClass,
        borderGlowClass,
        className
      )}
      style={{
        transform: enableTilt 
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` 
          : undefined,
        transformStyle: 'preserve-3d',
        willChange: enableTilt ? 'transform' : undefined,
        ...props.style,
      }}
      {...props}
    >
      {/* Dynamic mouse glow highlighter */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 hover:opacity-100" 
        style={glowStyle}
      />
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
