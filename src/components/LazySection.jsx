import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function LazySection({ 
  children, 
  className = "", 
  threshold = 0.1,
  rootMargin = "50px",
  fallback = null 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        fallback || <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
      )}
    </div>
  );
}