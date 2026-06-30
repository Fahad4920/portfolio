'use client';

import React, { useEffect, useState } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function ScrollProgress() {
  const scrollY = useScrollPosition();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      const percentage = (scrollY / height) * 100;
      setProgress(percentage);
    }
  }, [scrollY]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none w-full">
      <div
        className="h-full bg-gradient-main transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
