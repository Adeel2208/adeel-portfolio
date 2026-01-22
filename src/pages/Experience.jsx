import { experiences, hackathons } from '../data/experience';
import TimelineItem from '../components/TimelineItem';
import HackathonImageCarousel from '../components/HackathonImageCarousel';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary dark:text-white">
          Professional Experience
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed text-justify">
          From biomedical internships to AI research, Medical AI & FinTech innovation — my journey across industries and technologies.
        </p>
      </motion.div>

      {/* Main Experience Timeline */}
      <div className="space-y-12 sm:space-y-18 lg:space-y-22 mb-18 sm:mb-20 lg:mb-26">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <TimelineItem
              experience={exp}
              isLast={index === experiences.length - 1}
              index={index}
            />
          </motion.div>
        ))}
      </div>

      {/* Hackathons Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-12 sm:mt-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 font-heading text-primary dark:text-white">
          Hackathons & Competitions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {hackathons.map((hack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full min-w-0"
            >
              {/* Image Carousel */}
              <HackathonImageCarousel images={hack.images} interval={3000} />

              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-primary dark:text-white leading-tight break-words">
                  {hack.name}
                </h3>
                {hack.award && (
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md shrink-0">
                    🏆 {hack.award}
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-secondary dark:text-gray-300 mb-3 sm:mb-4 break-words">
                {hack.org}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 mb-4 sm:mb-5 leading-relaxed text-justify break-words flex-grow">
                {hack.description}
              </p>
              <div className="pt-3 sm:pt-4 mt-auto border-t border-gray-100 dark:border-gray-800">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-words">
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