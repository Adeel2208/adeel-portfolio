import { motion } from 'framer-motion';

export default function TimelineItem({ experience, isLast, index = 0 }) {
  // Define different icons for different types of experiences
  const getExperienceIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'internship':
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
        );
      case 'research':
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
        );
      case 'freelance':
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        );
    }
  };

  // Define gradient colors based on experience type
  const getGradientColors = (type) => {
    switch (type?.toLowerCase()) {
      case 'internship':
        return 'from-emerald-500 to-emerald-600';
      case 'research':
        return 'from-indigo-500 to-indigo-600';
      case 'freelance':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-primary-500 to-accent-500';
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row group">
      {/* Enhanced Timeline Line with Gradient */}
      {!isLast && (
        <div className="absolute left-6 sm:left-7 md:left-8 top-12 sm:top-14 w-0.5 h-[calc(100%-3rem)] sm:h-[calc(100%-3.5rem)]">
          <div className="w-full h-full bg-gradient-to-b from-primary-300 via-accent-300 to-primary-300 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary-400 to-accent-400 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm"></div>
        </div>
      )}

      {/* Enhanced Timeline Dot with Animation */}
      <motion.div 
        className="z-20 flex items-center justify-center relative"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: index * 0.1, 
          duration: 0.6,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        viewport={{ once: true }}
      >
        {/* Outer Ring with Pulse Animation */}
        <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-primary-200 to-accent-200 opacity-30 animate-ping"></div>
        
        {/* Middle Ring */}
        <div className="absolute inset-1 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 opacity-50"></div>
        
        {/* Main Dot with Icon */}
        <motion.div 
          className={`relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r ${getGradientColors(experience.type)} rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300`}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          {getExperienceIcon(experience.type)}
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
        </motion.div>
      </motion.div>

      {/* Enhanced Experience Card */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ 
          delay: index * 0.1 + 0.2, 
          duration: 0.8,
          ease: [0.25, 0.25, 0, 1]
        }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="ml-16 sm:ml-20 md:ml-24 p-6 sm:p-8 lg:p-10 bg-white/90 backdrop-blur-xl rounded-3xl border border-primary-100/50 w-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-200/80 group-hover:bg-white/95"
      >
        {/* Header Section with Enhanced Typography */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 sm:mb-6">
          <div className="flex-1">
            <motion.h3 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-heading bg-gradient-to-r from-secondary-900 to-primary-700 bg-clip-text text-transparent mb-2 sm:mb-3 leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {experience.title}
            </motion.h3>
            <p className="text-sm sm:text-base md:text-lg text-primary-700 font-semibold mb-1">
              {experience.company}
            </p>
          </div>
          
          {/* Enhanced Period Badge */}
          <motion.div 
            className="mt-3 md:mt-0 md:ml-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 text-sm font-medium rounded-full border border-primary-200/50 shadow-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {experience.period}
            </span>
          </motion.div>
        </div>

        {/* Enhanced Location Badge */}
        <motion.div 
          className="mb-5 sm:mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-indigo-50 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200/50 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {experience.location}
          </span>
        </motion.div>

        {/* Enhanced Description */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-secondary-700 leading-relaxed text-justify mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {experience.description}
        </motion.p>

        {/* Enhanced Technologies Section */}
        {experience.tech && (
          <motion.div 
            className="pt-4 sm:pt-6 border-t border-gradient-to-r from-primary-100 to-accent-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h4 className="text-sm sm:text-base font-bold text-primary-700 uppercase tracking-wider">
                Technologies & Skills
              </h4>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {experience.tech.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.1 + 0.8 + (idx * 0.05), 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gradient-to-r from-white to-primary-50 text-primary-700 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-primary-200/50 font-medium shadow-sm hover:shadow-md hover:border-primary-300/70 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Decorative Corner Element */}
        <div className="absolute top-4 right-4 w-12 h-12 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary-600">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}