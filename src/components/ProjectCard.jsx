// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import ProjectImageCarousel from './ProjectImageCarousel';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col h-full"
    >
      {/* Image Carousel */}
      <div className="shrink-0">
        <ProjectImageCarousel images={project.images} interval={1500} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="inline-block bg-accent/10 text-accent text-xs px-3 py-1 rounded-full border border-accent/20 font-medium">
            {project.type}
          </span>
        </div>

        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{project.title}</h3>
        <p className="text-secondary dark:text-gray-300 text-sm mb-4">{project.subtitle}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 dark:bg-gray-700 text-xs px-2.5 py-1 rounded-full text-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2.5 py-1 rounded-full text-gray-500 dark:text-gray-400">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm mb-5 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              className="text-accent hover:underline text-sm font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Code →
            </a>
          )}
          {project.paper && (
            <a
              href={project.paper}
              className="text-accent hover:underline text-sm font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Paper →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}