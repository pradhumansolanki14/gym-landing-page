import { useState, useEffect } from 'react';

/**
 * Animated counter hook that smoothly counts up to target number when visible
 * @param {number} targetValue - Number to count up to
 * @param {boolean} isTriggered - Boolean indicating if animation should run
 * @param {number} durationMs - Duration of counter animation
 * @returns {number} Current count
 */
export const useCounter = (targetValue, isTriggered = true, durationMs = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);

      setCount(Math.floor(progress * targetValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetValue, isTriggered, durationMs]);

  return count;
};
