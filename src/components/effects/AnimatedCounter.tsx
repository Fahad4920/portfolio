'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimatedCounterProps {
  end: number;
  duration?: number; // duration in ms
  suffix?: string;
}

export default function AnimatedCounter({ end, duration = 1500, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startCount = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      
      setCount(Math.floor(startCount + easedProgress * (end - startCount)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}
