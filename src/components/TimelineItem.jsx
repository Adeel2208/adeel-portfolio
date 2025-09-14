import { motion } from 'framer-motion';

export default function TimelineItem({ experience, isLast }) {
  return (
    <div className="relative flex flex-col md:flex-row">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-3 sm:left-4 md:left-0 top-6 sm:top-7 w-0.5 bg-gray-300 dark:bg-gray-700 h-[calc(100%-1.5rem)] sm:h-[calc(100%-1.75rem)]"></div>
      )}

      {/* Timeline Dot */}
      <div className="z-10 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-accent rounded-full shrink-0 md:ml-1">
        <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
      </div>

      {/* Experience Card */}
      <motion.div
        whileHover={{ y: -5 }}
        className="ml-10 sm:ml-12 md:ml-16 p-4 sm:p-6 lg:p-8 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-700 w-full transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 sm:mb-4">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-heading text-primary dark:text-white mb-1 sm:mb-2">
              {experience.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-secondary dark:text-gray-300">
              {experience.company}
            </p>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium">
            {experience.period}
          </p>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 font-medium bg-gray-50 dark:bg-gray-800/50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl inline-block">
          {experience.location}
        </p>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
          {experience.description}
        </p>
        {experience.tech && (
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-800">
            <h4 className="text-xs sm:text-sm font-semibold text-secondary dark:text-gray-400 mb-2 sm:mb-3 uppercase tracking-wider">
              Technologies & Skills
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {experience.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white dark:bg-gray-800 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}