// Development optimizations to speed up builds
export const isDevelopment = process.env.NODE_ENV === 'development';

// Lazy load framer-motion in development
export const lazyMotion = {
  motion: isDevelopment 
    ? () => import('framer-motion').then(mod => ({ default: mod.motion }))
    : () => import('framer-motion').then(mod => ({ default: mod.motion })),
  useInView: isDevelopment
    ? () => import('framer-motion').then(mod => ({ default: mod.useInView }))
    : () => import('framer-motion').then(mod => ({ default: mod.useInView })),
  AnimatePresence: isDevelopment
    ? () => import('framer-motion').then(mod => ({ default: mod.AnimatePresence }))
    : () => import('framer-motion').then(mod => ({ default: mod.AnimatePresence })),
};

// Disable expensive features in development
export const developmentConfig = {
  disableAnimations: isDevelopment,
  disableSourceMaps: isDevelopment,
  disableTypeChecking: isDevelopment,
  disableESLint: isDevelopment,
  fastRefresh: isDevelopment,
};

// Optimized image loading for development
export const imageConfig = {
  priority: !isDevelopment,
  loading: isDevelopment ? 'lazy' : 'eager',
  quality: isDevelopment ? 75 : 90,
}; 