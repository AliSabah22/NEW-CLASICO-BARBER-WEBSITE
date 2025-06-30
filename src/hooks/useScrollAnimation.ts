import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
<<<<<<< HEAD
  margin?: string;
=======
>>>>>>> d1a22c5 (Fix build: correct Navigation import, add @ alias to tsconfig, fix useScrollAnimation hook, rename analytics.tsx)
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
<<<<<<< HEAD
    threshold: options.threshold || 0.1,
    triggerOnce: options.triggerOnce ?? true,
    margin: options.margin || "-100px",
=======
    once: options.triggerOnce ?? true,
>>>>>>> d1a22c5 (Fix build: correct Navigation import, add @ alias to tsconfig, fix useScrollAnimation hook, rename analytics.tsx)
  });

  return { ref, isInView };
} 