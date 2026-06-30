import { useState, useEffect } from 'react';

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Check if we are in the browser
    if (typeof window === 'undefined') return;

    // Simulate visitor counter using localStorage
    const countKey = 'fahad_portfolio_visitor_count';
    const hasVisitedKey = 'fahad_portfolio_has_visited';

    let currentCount = Number(localStorage.getItem(countKey) || '0');
    const hasVisited = localStorage.getItem(hasVisitedKey);

    if (!hasVisited) {
      // First visit in this session/browser
      currentCount += 1;
      localStorage.setItem(countKey, currentCount.toString());
      localStorage.setItem(hasVisitedKey, 'true');
    } else if (currentCount === 0) {
      // Fallback for initial value display
      currentCount = Math.floor(Math.random() * 450) + 120; // Simulated realistic starter value
      localStorage.setItem(countKey, currentCount.toString());
    }

    setVisitorCount(currentCount);
  }, []);

  return visitorCount;
};
