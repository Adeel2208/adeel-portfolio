// src/pages/Home.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import { skillCategories } from '../data/skills';
import { certifications } from '../data/certifications';
import { publications } from '../data/publications';
import { conferences } from '../data/conferences';
import ProjectCard from '../components/ProjectCard';
import TimelineItem from '../components/TimelineItem';
import SkillTag from '../components/SkillTag';
import CertificationCard from '../components/CertificationCard';
import PublicationCard from '../components/PublicationCard';
import ConferenceCard from '../components/ConferenceCard';

export default function Home() {
  const images = ['/image/profile.png', '/image/profile2.png'];
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isImageHovered, setIsImageHovered] = useState(false);

  // Preload images
  useEffect(() => {
    const preloaded = [];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        preloaded.push(src);
        setLoadedImages([...new Set(preloaded)]);
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
      };
    });
  }, []);

  // Auto rotate
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Skip to next if current image failed to load
  useEffect(() => {
    if (images.length > 1 && !loadedImages.includes(images[currentImage])) {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }
  }, [currentImage, loadedImages, images]);

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/40"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sophisticated-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1.5" fill="currentColor" className="text-slate-600" />
                <circle cx="0" cy="0" r="1" fill="currentColor" className="text-blue-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sophisticated-grid)" />
          </svg>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-15 blur-2xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
              viewport={{ once: true }}
              className="space-y-6 lg:pr-8"
            >
              {/* Main Heading */}
              <div className="space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading text-slate-900 leading-[1.1] tracking-tight"
                >
                  <span className="block">Hello, I'm</span>
                  <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Adeel Mukhtar
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed"
                >
                  AI/ML Engineer & Researcher
                </motion.p>
              </div>

              {/* Description Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-50/50 rounded-2xl blur-sm"></div>
                <div className="relative bg-white/90 backdrop-blur-md rounded-xl p-6 border border-white/50 shadow-lg shadow-cyan-500/5">
                  <p className="text-base lg:text-lg text-slate-700 leading-relaxed mb-3">
                    I'm an AI engineer specializing in the development and deployment of intelligent systems powered by large language models (LLMs). My work focuses on creating agentic AI, which are autonomous systems capable of reasoning, planning, and executing complex tasks. I'm dedicated to building scalable and impactful applications that drive innovation..
                  </p>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                    Specializing in <span className="font-semibold text-cyan-600">Large Language Models (LLMs)</span> and their applications in biomedical challenges, with publications at IEEE conferences.
                  </p>
                </div>
              </motion.div>

              {/* Call-to-Action Buttons — IMPROVED EXPLORE BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                {/* ✅ FIXED: Solid blue gradient, white text */}
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#featured-projects"
                  className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <span className="relative z-10">Explore My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="group border-2 border-slate-300 hover:border-cyan-500 text-slate-700 hover:text-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center hover:bg-cyan-50/50"
                >
                  Let's Connect
                </motion.a>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/50"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">40+</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">3</div>
                  <div className="text-sm text-slate-600">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">12+</div>
                  <div className="text-sm text-slate-600">Certifications</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Image Section — CRYSTAL CLEAR, NO BLUR */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end lg:-mt-16 relative"
            >
              <div className="relative">
                {/* Image Container — LARGER & CLEAN */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.7, ease: [0.25, 0.25, 0, 1] }}
                      className="absolute inset-0 rounded-3xl overflow-hidden"
                      onHoverStart={() => setIsImageHovered(true)}
                      onHoverEnd={() => setIsImageHovered(false)}
                      whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
                    >
                      {/* ✅ CLEARED: No blur, no glow, pure sharp image */}
                      <img
                        src={images[currentImage]}
                        alt={`Adeel Mukhtar - Profile ${currentImage + 1}`}
                        className="w-full h-full object-contain object-center rounded-3xl shadow-2xl border-4 border-white"
                        loading="eager"
                        onError={(e) => {
                          console.error(`Image failed to load: ${images[currentImage]}`);
                          e.target.style.display = 'none';
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* HOVER TOOLTIP */}
                  <AnimatePresence>
                    {isImageHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap shadow-lg z-30"
                      >
                        AI Researcher & Engineer
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Image Indicators */}
                  {images.length > 1 && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImage(idx)}
                          className={`transition-all duration-300 rounded-full ${
                            idx === currentImage
                              ? 'w-8 h-3 bg-gradient-to-r from-cyan-500 to-blue-500'
                              : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`View profile ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Clean Background Accents — No Blur on Image */}
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-100/20 via-blue-100/10 to-indigo-100/20 rounded-[4rem] opacity-30 -z-10"></div>
                
                {/* Accent Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-200/40 to-blue-300/40 rounded-full opacity-50"></div>
                <div className="absolute -bottom-8 -left-6 w-16 h-16 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full opacity-40"></div>

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-xl border-2 border-cyan-100"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-24 px-4 lg:px-8 bg-white/70">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 mt-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#020617] mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              From ancient wisdom digitization to medical AI — here's what I've built.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="inline-flex items-center gap-3 text-cyan-600 hover:text-cyan-800 font-bold text-xl group"
            >
              View All Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#020617] mb-6">
              Research & Publications
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Published at IEEE conferences — advancing explainable AI for medical diagnostics.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.slice(0, 3).map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <PublicationCard publication={pub} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/publications"
              className="inline-flex items-center gap-3 text-cyan-600 hover:text-cyan-800 font-bold text-xl group"
            >
              View All Publications
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-24 px-4 lg:px-8 bg-white/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#020617] mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              From biomedical internships to AI research and FinTech innovation.
            </p>
          </motion.div>
          <div className="space-y-16 mb-12">
            {experiences.slice(0, 4).map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TimelineItem experience={exp} isLast={index === 3} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/experience"
              className="inline-flex items-center gap-3 text-cyan-600 hover:text-cyan-800 font-bold text-xl group"
            >
              View Full Timeline
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Toolkit */}
      <section className="py-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#020617] mb-6">
              Technical Toolkit
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Tools, frameworks, and technologies I use to build intelligent systems.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.slice(0, 8).map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-5 flex items-center text-[#020617]">
                  <span className="mr-3 text-2xl">{category.icon}</span>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.slice(0, 5).map((skill, i) => (
                    <SkillTag key={i} delay={i * 0.02}>
                      {skill}
                    </SkillTag>
                  ))}
                  {category.skills.length > 5 && (
                    <span className="bg-slate-100 text-xs px-3 py-2 rounded-full text-slate-600 font-medium">
                      +{category.skills.length - 5}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/skills"
              className="inline-flex items-center gap-3 text-cyan-600 hover:text-cyan-800 font-bold text-xl group"
            >
              View All Skills
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-4 lg:px-8 bg-white/70">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#020617] mb-6">
              Certifications
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Validated expertise from NUST, Vanderbilt, IBM, Docker, and more.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certifications.slice(0, 3).map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <CertificationCard cert={cert} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/certifications"
              className="inline-flex items-center gap-3 text-cyan-600 hover:text-cyan-800 font-bold text-xl group"
            >
              View All Certifications
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Conferences & Presentations */}
      <section className="py-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#020617] mb-6">
              Conferences & Presentations
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Sharing research at international forums — advancing AI for healthcare and sustainability.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {conferences.map((conf, idx) => (
              <motion.div
                key={conf.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ConferenceCard conference={conf} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/experience#conferences"
              className="inline-flex items-center gap-3 text-cyan-600 hover:text-cyan-800 font-bold text-xl group"
            >
              View All Presentations
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-8"
          >
            Ready to Build the Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you need an AI engineer, research collaborator, or strategic consultant — I bring technical mastery, leadership, and relentless curiosity to every challenge.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <span className="relative z-10">Start a Project →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="/resume"
              className="group border-2 border-slate-400 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-cyan-500/10"
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t border-slate-700"
          >
            <p className="text-slate-400 mb-4">Get in touch</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-300">
              <a href="mailto:adeelmukhtar051@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                adeelmukhtar051@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/adeel-mukhtar-174b71270/" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/Adeel2208" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}