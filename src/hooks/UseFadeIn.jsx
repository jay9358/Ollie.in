import { useState, useEffect } from 'react';

export const useFadeIn = (itemCount, delay = 200) => {
  const [visibleItems, setVisibleItems] = useState(Array(itemCount).fill(false));

  useEffect(() => {
    
    let timers = [];
    for (let i = 0; i < itemCount; i++) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => {
          const newVisible = [...prev];
          newVisible[i] = true;
          return newVisible;
        });
      }, i * delay);
      timers.push(timer);
    }
    
    return () => {
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemCount, delay]);

  return visibleItems;
};
