import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SkillBar({ skill, percentage, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-secondary-800">{skill}</span>
        <span className="text-sm text-secondary-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: delay / 1000 }}
        />
      </div>
    </div>
  );
}