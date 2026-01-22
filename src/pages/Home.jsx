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
import HackathonImageGallery from '../components/HackathonImageCarousel';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import FloatingMenu from '../components/FloatingMenu';

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

  // Assume hackathon images are in experiences data
  const hackathonImages = experiences.hackathonImages || [];

  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-hidden">
      <ScrollProgress />
      <BackToTop />
      <FloatingMenu />
      {/* Enhanced Hero Section with Professional Graphics */}
      <section className="relative pt-28 sm:pt-20 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Sophisticated Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background-primary to-accent-50/30"></div>
        
        {/* Advanced Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="animate-pulse-soft">
            <defs>
              <pattern id="professional-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="2.5" fill="currentColor" className="text-primary-400" />
                <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-accent-400" />
                <circle cx="80" cy="80" r="2" fill="currentColor" className="text-primary-300" />
                <rect x="20" y="20" width="1" height="40" fill="currentColor" className="text-primary-200" opacity="0.5" />
                <rect x="60" y="20" width="1" height="40" fill="currentColor" className="text-accent-200" opacity="0.5" />
              </pattern>
              <linearGradient id="mesh-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(14, 165, 233, 0.1)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.05)" />
                <stop offset="100%" stopColor="rgba(14, 165, 233, 0.1)" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#professional-grid)" />
            <rect width="100%" height="100%" fill="url(#mesh-gradient)" />
          </svg>
        </div>

        {/* Enhanced Floating Elements with Professional Animation */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-primary-200/30 to-accent-200/30 rounded-full opacity-60 blur-3xl animate-professional-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-accent-300/25 to-primary-300/25 rounded-full opacity-50 blur-2xl animate-gentle-bounce"></div>
        <div className="absolute bottom-32 right-16 w-56 h-56 bg-gradient-to-r from-primary-200/20 to-accent-200/20 rounded-full opacity-40 blur-3xl animate-subtle-pulse"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-r from-accent-400/15 to-primary-400/15 rounded-full opacity-60 blur-xl animate-float-delayed"></div>

        {/* Professional Geometric Shapes with Enhanced Animations */}
        <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full animate-subtle-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-accent-500/30 rotate-45 animate-smooth-scale"></div>
        <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-primary-500/25 rounded-full animate-gentle-bounce animate-stagger-1"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-accent-400/40 rounded-full animate-professional-float animate-stagger-2"></div>

        {/* Sophisticated Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50/50 to-transparent opacity-30"></div>

        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)] py-8 sm:py-12 lg:py-16">
            
            {/* Text Content with Enhanced Staggered Animations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.25, 0, 1] }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-full lg:max-w-4xl order-2 lg:order-1"
            >
              {/* Main Heading with Improved Animation */}
              <div className="space-y-2 sm:space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.25, 0, 1] }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-[1.2] tracking-tight"
                >
                  <motion.span 
                    className="block text-secondary-900"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Hello, I'm
                  </motion.span>
                  <motion.span 
                    className="block gradient-heading bg-gradient-to-r from-primary-700 via-accent-600 to-primary-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.25, 0, 1] }}
                    viewport={{ once: true }}
                  >
                    Adeel Mukhtar
                  </motion.span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg lg:text-xl text-secondary-700 font-medium leading-relaxed"
                >
                  AI/ML Engineer & Researcher
                </motion.p>
              </div>

              {/* Enhanced Description Card with Professional Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1, ease: [0.25, 0.25, 0, 1] }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-100/60 to-accent-50/60 rounded-3xl blur-sm"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  viewport={{ once: true }}
                ></motion.div>
                <div className="relative glass rounded-2xl p-4 sm:p-5 lg:p-6 border border-primary-200/60 shadow-large hover:shadow-professional transition-all duration-500">
                  <motion.p 
                    className="text-sm sm:text-base lg:text-lg text-secondary-800 leading-relaxed mb-3 sm:mb-4 text-justify"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    I'm a passionate AI/ML Engineer with <span className="font-semibold text-primary-700">3+ years of combined experience</span> in research, industry, and freelancing. I specialize in developing and deploying intelligent systems powered by <span className="font-semibold text-accent-700">Large Language Models (LLMs)</span> and creating agentic AI systems capable of autonomous reasoning, planning, and complex task execution.
                  </motion.p>
                  <motion.p 
                    className="text-xs sm:text-sm lg:text-base text-secondary-700 leading-relaxed mb-2 sm:mb-3 text-justify"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    My expertise spans <span className="font-semibold text-primary-700">Healthcare AI & Medical Informatics</span>, with deep understanding of <span className="font-semibold text-emerald-600">clinical workflows</span>, <span className="font-semibold text-indigo-600">medical device integration</span>, and <span className="font-semibold text-purple-600">regulatory compliance (FDA, HIPAA)</span>. I've successfully delivered projects ranging from diagnostic AI systems to patient monitoring solutions, always focusing on scalability, interpretability, and ethical AI practices.
                  </motion.p>
                  <motion.p 
                    className="text-xs sm:text-sm lg:text-base text-secondary-700 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Currently advancing the field through research in <span className="font-semibold text-accent-700">Explainable Medical AI</span>, <span className="font-semibold text-primary-700">Computer Vision for Diagnostics</span>, and <span className="font-semibold text-emerald-600">Clinical Decision Support Systems</span>, with a commitment to building AI systems that enhance patient outcomes while maintaining the highest standards of safety and reliability.
                  </motion.p>
                </div>
              </motion.div>

              {/* Enhanced Call-to-Action Buttons with Professional Styling */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href="#featured-projects"
                  className="group relative btn-primary text-center overflow-hidden shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore My Work
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="group btn-secondary text-center flex items-center justify-center gap-2"
                >
                  Let's Connect
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Enhanced Quick Stats with Professional Styling */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-primary-200/60"
              >
                <div className="text-center group cursor-default">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-heading bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-1">40+</div>
                  <div className="text-xs sm:text-sm text-secondary-700 font-medium">Projects Delivered</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-heading bg-gradient-to-r from-accent-600 to-primary-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-1">3</div>
                  <div className="text-xs sm:text-sm text-secondary-700 font-medium">IEEE Publications</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-accent-400 to-primary-400 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center group cursor-default">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-heading bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-1">15+</div>
                  <div className="text-xs sm:text-sm text-secondary-700 font-medium">Certifications</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Profile Image Section with Professional Styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative">
                {/* Enhanced Image Container with Professional Effects */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[448px] xl:h-[448px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.7, ease: [0.25, 0.25, 0, 1] }}
                      className="absolute inset-0 rounded-3xl overflow-hidden group"
                      onHoverStart={() => setIsImageHovered(true)}
                      onHoverEnd={() => setIsImageHovered(false)}
                      whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/15 to-accent-400/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img
                        src={images[currentImage]}
                        alt={`Adeel Mukhtar - AI/ML Engineer ${currentImage + 1}`}
                        className="w-full h-full object-contain object-center rounded-3xl shadow-2xl border-4 border-white/90 backdrop-blur-sm group-hover:border-accent-200/80 transition-all duration-300"
                        loading="eager"
                        onError={(e) => {
                          console.error(`Image failed to load: ${images[currentImage]}`);
                          e.target.style.display = 'none';
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Enhanced Professional Hover Tooltip */}
                  <AnimatePresence>
                    {isImageHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -top-16 sm:-top-18 left-1/2 transform -translate-x-1/2 glass-dark text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-3 rounded-2xl whitespace-nowrap shadow-glow z-30 border border-white/10"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                          AI/ML Engineer & Researcher
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-secondary-800"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Enhanced Image Indicators with Professional Styling */}
                  {images.length > 1 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImage(idx)}
                          className={`transition-all duration-300 rounded-full border-2 ${
                            idx === currentImage
                              ? 'w-8 sm:w-10 h-3 sm:h-4 bg-gradient-to-r from-accent-500 to-primary-500 shadow-glow border-white/50'
                              : 'w-3 sm:w-4 h-3 sm:h-4 bg-secondary-300 hover:bg-secondary-400 border-white/30 hover:border-white/50'
                          }`}
                          aria-label={`View profile ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Enhanced Professional Background Accents */}
                <div className="absolute -inset-10 sm:-inset-12 lg:-inset-16 bg-gradient-to-r from-primary-100/40 via-accent-50/30 to-primary-100/40 rounded-[4rem] sm:rounded-[5rem] opacity-50 -z-10 animate-pulse-soft"></div>
                
                {/* Enhanced Professional Accent Elements */}
                <div className="absolute -top-8 sm:-top-10 lg:-top-12 -right-8 sm:-right-10 lg:-right-12 w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-br from-primary-200/40 to-accent-300/40 rounded-full opacity-60 animate-float blur-sm"></div>
                <div className="absolute -bottom-10 sm:-bottom-12 lg:-bottom-16 -left-8 sm:-left-10 lg:-left-12 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-accent-200/40 to-primary-300/40 rounded-full opacity-50 animate-bounce-soft blur-sm"></div>

                {/* Enhanced Professional Achievement Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 sm:-bottom-7 lg:-bottom-8 -right-6 sm:-right-7 lg:-right-8 glass rounded-full p-3 sm:p-4 shadow-glow border-2 border-primary-200/60"
                >
                  <div className="w-8 sm:w-9 h-8 sm:h-9 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healthcare Expertise Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-background-secondary to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="healthcare-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor" className="text-emerald-400" />
                <path d="M25 30h10M30 25v10" stroke="currentColor" strokeWidth="1" className="text-indigo-400" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#healthcare-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading gradient-heading bg-gradient-to-r from-emerald-600 via-primary-700 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Healthcare AI Expertise
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-700 max-w-4xl mx-auto text-justify font-medium">
              Bridging the gap between cutting-edge AI technology and healthcare innovation with deep understanding of medical workflows and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: "🏥",
                title: "Clinical Decision Support",
                description: "AI-powered diagnostic assistance systems that enhance clinical decision-making while maintaining physician oversight and patient safety.",
                color: "emerald"
              },
              {
                icon: "🔬",
                title: "Medical Imaging AI",
                description: "Advanced computer vision models for medical image analysis, including X-ray, MRI, and CT scan interpretation with explainable results.",
                color: "indigo"
              },
              {
                icon: "📊",
                title: "Healthcare Analytics",
                description: "Predictive models for patient outcomes, treatment optimization, and population health management using electronic health records.",
                color: "purple"
              },
              {
                icon: "🛡️",
                title: "Regulatory Compliance",
                description: "Deep understanding of FDA regulations, HIPAA compliance, and medical device standards for AI/ML in healthcare applications.",
                color: "primary"
              },
              {
                icon: "⚕️",
                title: "Medical Device Integration",
                description: "Experience with IoT medical devices, real-time patient monitoring systems, and seamless EHR integration.",
                color: "accent"
              },
              {
                icon: "🧬",
                title: "Precision Medicine",
                description: "Personalized treatment recommendations using genomic data, patient history, and AI-driven biomarker analysis.",
                color: "emerald"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.1, 
                  duration: 0.8,
                  ease: [0.25, 0.25, 0, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{item.icon}</div>
                <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-${item.color}-700`}>
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-secondary-700 leading-relaxed text-justify">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Section */}
      <section id="featured-projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-background-secondary to-accent-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-hero-pattern"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading gradient-heading bg-gradient-to-r from-secondary-900 via-primary-700 to-accent-700 bg-clip-text text-transparent mb-4 sm:mb-6">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-700 max-w-3xl mx-auto text-justify font-medium">
              From ancient wisdom digitization to medical AI — here's what I've built.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.15, 
                  duration: 0.8,
                  ease: [0.25, 0.25, 0, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 sm:gap-3 text-accent-700 hover:text-accent-800 font-bold text-base sm:text-lg lg:text-xl group"
            >
              View All Projects
              <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-secondary-900 mb-4 sm:mb-6">
              Research & Publications
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-700 max-w-3xl mx-auto text-justify">
              Published at IEEE conferences — advancing explainable AI for medical diagnostics.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
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
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/publications"
              className="inline-flex items-center gap-2 sm:gap-3 text-accent-700 hover:text-accent-800 font-bold text-base sm:text-lg lg:text-xl group"
            >
              View All Publications
              <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-secondary-900 mb-4 sm:mb-6">
              Professional Journey
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-700 max-w-3xl mx-auto text-justify">
              From biomedical internships to AI research and FinTech innovation.
            </p>
          </motion.div>
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 mb-8 sm:mb-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id || index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TimelineItem experience={exp} isLast={index === experiences.length - 1} />
              </motion.div>
            ))}
          </div>
          {hackathonImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 sm:mt-12"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-secondary-900 mb-4 sm:mb-6 text-center">
                Hackathon Highlights
              </h3>
              <HackathonImageGallery images={hackathonImages} />
            </motion.div>
          )}
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/experience"
              className="inline-flex items-center gap-2 sm:gap-3 text-accent-700 hover:text-accent-800 font-bold text-base sm:text-lg lg:text-xl group"
            >
              View Full Timeline
              <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Toolkit */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-secondary-900 mb-4 sm:mb-6">
              Technical Toolkit
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-700 max-w-3xl mx-auto text-justify">
              Tools, frameworks, and technologies I use to build intelligent systems.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skillCategories.slice(0, 8).map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-5 flex items-center text-secondary-900">
                  <span className="mr-2 sm:mr-3 text-lg sm:text-xl lg:text-2xl">{category.icon}</span>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.slice(0, 5).map((skill, i) => (
                    <SkillTag key={i} delay={i * 0.02}>
                      {skill}
                    </SkillTag>
                  ))}
                  {category.skills.length > 5 && (
                    <span className="bg-slate-100 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full text-secondary-700 font-medium">
                      +{category.skills.length - 5}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/skills"
              className="inline-flex items-center gap-2 sm:gap-3 text-accent-700 hover:text-accent-800 font-bold text-base sm:text-lg lg:text-xl group"
            >
              View All Skills
              <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-background-secondary to-primary-50 relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-secondary-900 mb-4 sm:mb-6">
              Certifications
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-700 max-w-3xl mx-auto text-justify">
              Validated expertise from NUST, Vanderbilt, IBM, Docker, and more — 15+ professional certifications in AI/ML and healthcare technology.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
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
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/certifications"
              className="inline-flex items-center gap-2 sm:gap-3 text-accent-700 hover:text-accent-800 font-bold text-base sm:text-lg lg:text-xl group"
            >
              View All Certifications
              <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Conferences & Presentations */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-secondary-900 mb-4 sm:mb-6">
              Conferences & Presentations
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-700 max-w-3xl mx-auto text-justify">
              Sharing research at international forums — advancing AI for healthcare and sustainability.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
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
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/experience#conferences"
              className="inline-flex items-center gap-2 sm:gap-3 text-accent-700 hover:text-accent-800 font-bold text-base sm:text-lg lg:text-xl group"
            >
              View All Presentations
              <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary-900 via-primary-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-accent-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6 sm:mb-8"
          >
            Ready to Build the Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-justify"
          >
            Whether you need an AI engineer, research collaborator, or strategic consultant — I bring technical mastery, leadership, and relentless curiosity to every challenge.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group relative bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
            >
              <span className="relative z-10">Start a Project →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="/resume"
              className="group border-2 border-slate-300 hover:border-primary-400 text-slate-200 hover:text-primary-300 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:bg-primary-500/10"
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-700"
          >
            <p className="text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">Get in touch</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-slate-200">
              <a href="mailto:adeelmukhtar051@gmail.com" className="hover:text-primary-400 transition-colors flex items-center gap-2 text-sm sm:text-base">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                adeelmukhtar051@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/adeel-mukhtar-174b71270/" className="hover:text-primary-400 transition-colors flex items-center gap-2 text-sm sm:text-base">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/Adeel2208" className="hover:text-primary-400 transition-colors flex items-center gap-2 text-sm sm:text-base">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
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