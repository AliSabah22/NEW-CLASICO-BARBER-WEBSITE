import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.triggerOnce ?? true,
  });

  return { ref, isInView };
} 