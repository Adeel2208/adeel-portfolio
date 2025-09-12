// src/pages/Skills.jsx
import { skillCategories } from '../data/skills';
import SkillTag from '../components/SkillTag';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <div className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary dark:text-white">
          Technical Skills
        </h1>
        <p className="text-xl text-secondary dark:text-gray-300 mt-4 max-w-3xl mx-auto">
          Tools, frameworks, and technologies I use to build intelligent, scalable, and explainable AI systems.
        </p>
      </motion.div>

      <div className="space-y-12">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4" role="img" aria-label={category.name}>
                {category.icon}
              </span>
              <h2 className="text-2xl font-bold font-heading text-primary dark:text-white">
                {category.name}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <SkillTag key={i} delay={i * 0.05}>
                  {skill}
                </SkillTag>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
      >
        <p className="text-gray-600 dark:text-gray-400">
          Constantly learning, experimenting, and pushing the boundaries of what AI can do.
        </p>
      </motion.div>
    </div>
  );
}