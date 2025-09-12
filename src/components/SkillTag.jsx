// src/components/SkillTag.jsx
import { motion } from 'framer-motion';

export default function SkillTag({ children, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.05 }}
      transition={{ delay, type: "spring", stiffness: 300, damping: 15 }}
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2.5 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md cursor-default transition-all duration-300"
    >
      {children}
    </motion.span>
  );
}