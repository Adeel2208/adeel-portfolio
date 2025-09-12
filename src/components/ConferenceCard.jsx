// src/components/ConferenceCard.jsx
import { motion } from 'framer-motion';

export default function ConferenceCard({ conference }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(6, 182, 212, 0.15)" }}
      className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {conference.image && (
        <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden mb-6 bg-slate-100">
          <img
            src={conference.image}
            alt={conference.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <h3 className="text-xl font-bold text-[#020617] mb-3 leading-tight">
        {conference.title}
      </h3>
      <p className="text-lg font-medium text-cyan-600 mb-3">
        {conference.event}
      </p>
      <p className="text-slate-600 text-sm mb-4">
        {conference.location} • {conference.date}
      </p>
      <p className="text-slate-800 mb-5 flex-grow leading-relaxed">
        {conference.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {conference.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-cyan-50 text-cyan-700 text-xs px-3 py-1.5 rounded-full font-medium border border-cyan-100"
          >
            {tag}
          </span>
        ))}
      </div>
      {conference.link && (
        <a
          href={conference.link}
          className="text-cyan-600 hover:text-cyan-800 font-medium text-sm flex items-center group"
        >
          View Proceedings →
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      )}
    </motion.div>
  );
}