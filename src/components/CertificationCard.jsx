// src/components/CertificationCard.jsx
import { motion } from 'framer-motion';
import ProjectImageCarousel from './ProjectImageCarousel';

export default function CertificationCard({ cert }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col h-full"
    >
      {/* Image Carousel */}
      <div className="shrink-0">
        <ProjectImageCarousel images={cert.images} interval={2000} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-secondary-700 dark:text-gray-300 text-sm mb-2 font-medium">
          {cert.issuer}
        </p>
        <p className="text-xs text-secondary-600 dark:text-gray-400 mb-4">
          {cert.date} • ID: {cert.credentialId}
        </p>

        <p className="text-secondary-700 dark:text-gray-300 text-sm mb-5 flex-grow line-clamp-3">
          {cert.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {cert.skills.slice(0, 4).map((skill, i) => (
            <span
              key={i}
              className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded-full text-secondary-800 dark:text-gray-200"
            >
              {skill}
            </span>
          ))}
          {cert.skills.length > 4 && (
            <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded-full text-secondary-600 dark:text-gray-400">
              +{cert.skills.length - 4}
            </span>
          )}
        </div>

        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto text-accent-700 hover:text-accent-800 hover:underline text-sm font-medium flex items-center"
        >
          View Credential →
        </a>
      </div>
    </motion.div>
  );
}