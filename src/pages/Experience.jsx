// src/pages/Experience.jsx
import { experiences, hackathons } from '../data/experience';
import TimelineItem from '../components/TimelineItem';
import HackathonImageCarousel from '../components/HackathonImageCarousel';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div className="py-24 px-4 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary dark:text-white">
          Professional Experience
        </h1>
        <p className="text-xl text-gray-800 dark:text-gray-200 mt-6 max-w-3xl mx-auto leading-relaxed">
          From biomedical internships to AI research and FinTech innovation — my journey across industries and technologies.
        </p>
      </motion.div>

      {/* Main Experience Timeline */}
      <div className="space-y-16 mb-24">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <TimelineItem
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          </motion.div>
        ))}
      </div>

      {/* Hackathons Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16"
      >
        <h2 className="text-4xl font-bold text-center mb-12 font-heading text-primary dark:text-white">
          Hackathons & Competitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(6, 182, 212, 0.2)" }}
              className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Carousel */}
              <HackathonImageCarousel images={hack.images} interval={2500} />

              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-2xl text-primary dark:text-white leading-tight">
                  {hack.name}
                </h3>
                {hack.award && (
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
                    🏆 {hack.award}
                  </span>
                )}
              </div>
              <p className="text-lg text-secondary dark:text-gray-300 mb-4">
                {hack.org}
              </p>
              <p className="text-gray-800 dark:text-gray-200 mb-5 leading-relaxed flex-grow">
                {hack.description}
              </p>
              <div className="pt-4 mt-auto border-t border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Team:</span> {hack.team}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}