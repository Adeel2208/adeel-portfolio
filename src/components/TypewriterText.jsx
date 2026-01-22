import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 100, 
  className = "",
  showCursor = true 
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + (currentIndex * speed));

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-6 bg-current ml-1"
        />
      )}
    </span>
  );
}