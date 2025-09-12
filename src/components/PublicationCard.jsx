import { motion } from 'framer-motion';

export default function PublicationCard({ publication }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.3)" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <h3 className="font-bold text-lg text-primary dark:text-white leading-tight">
        {publication.title}
      </h3>
      <p className="text-sm text-secondary dark:text-gray-400 mt-2">
        {publication.conference}
      </p>

      {publication.accuracy && (
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded inline-block">
          Accuracy: {publication.accuracy}
        </p>
      )}

      {publication.model && (
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          Model: <span className="font-mono bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">{publication.model}</span>
        </p>
      )}

      {publication.techniques && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {publication.techniques.map((tech, idx) => (
            <span
              key={idx}
              className="bg-accent/10 text-accent text-xs px-2.5 py-1 rounded-full border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {publication.link && (
        <a
          href={publication.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center text-accent hover:underline text-sm font-medium"
        >
          Read Paper →
        </a>
      )}
    </motion.div>
  );
}