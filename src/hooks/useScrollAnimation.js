import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Reusable custom hook for triggering Framer Motion scroll animations
 * @param {object} options - Options for useInView
 * @returns {object} { ref, isInView, fadeInVariants }
 */
export const useScrollAnimation = (options = { once: true, amount: 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return { ref, isInView, variants };
};
