'use client';

import React, { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const word = words[currentWordIndex];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setCurrentText((prev) => word.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Handle states transition
    if (!isDeleting && currentText === word) {
      // Finished typing, start delete pause
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === '') {
      // Finished deleting, shift word index
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-block min-h-[1.2em]">
      <span className="text-gradient font-bold">{currentText}</span>
      <span className="ml-1 inline-block w-[3px] bg-primary animate-pulse text-primary h-[0.9em] align-middle">
        |
      </span>
    </span>
  );
}
