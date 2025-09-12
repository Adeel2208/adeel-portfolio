// src/pages/Certifications.jsx
import { certifications } from '../data/certifications';
import CertificationCard from '../components/CertificationCard';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <div className="min-h-screen py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary dark:text-white mb-6">
            Certifications & Credentials
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Validated expertise in AI, Machine Learning, LLMs, MLOps, and Ethical AI from globally recognized institutions.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <CertificationCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>

        {/* Verification CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20 pt-10 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto text-lg leading-relaxed">
            All credentials are independently verifiable via my professional profile:
          </p>
          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.linkedin.com/in/adeel-mukhtar-174b71270/details/certifications/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-cyan-500/10 hover:from-accent/20 hover:to-cyan-500/20 px-8 py-4 rounded-2xl border-2 border-accent/30 hover:border-accent text-accent font-bold text-lg transition-all duration-300 group"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View My LinkedIn Profile →
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}