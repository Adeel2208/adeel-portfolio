import { motion } from 'framer-motion';
import ResponsiveImage from '../components/ResponsiveImage';
import { useState } from 'react';

export default function About() {
  // Enhanced testimonials based on actual experience
  const testimonials = [
    { quote: "Adeel's AI agents reduced our manual processing time by 60% and transformed our FinTech operations completely.", author: "Technical Lead, GICOH (Gourmet)" },
    { quote: "His explainable AI research has advanced medical diagnostics with 97.8% accuracy while maintaining transparency.", author: "Dr. Rehan Ch, HOD Biomedical Engineering" },
    { quote: "The RehabFlex device improved patient recovery tracking by 45% through innovative AI integration.", author: "Clinical Researcher, Aura Health Labs" },
    { quote: "Adeel's automated billing system reduced our processing errors by 35% and saved countless hours.", author: "Data Manager, CareCloud" },
  ];

  // Enhanced skills based on CV
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "PyTorch", icon: "🔥" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "LLMs", icon: "🤖" },
    { name: "XAI", icon: "💡" },
    { name: "MLOps", icon: "⚙️" },
    { name: "Computer Vision", icon: "👁️" },
    { name: "RAG", icon: "🔍" },
  ];

  // Carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const visibleTestimonialsCount = window.innerWidth < 640 ? 1 : 2;
  const visibleTestimonials = testimonials.slice(currentTestimonial, currentTestimonial + visibleTestimonialsCount);

  const goToNextTestimonial = () => {
    if (currentTestimonial + visibleTestimonialsCount < testimonials.length) {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  };

  const goToPrevTestimonial = () => {
    if (currentTestimonial > 0) {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };

  const canGoNextTestimonial = currentTestimonial + visibleTestimonialsCount < testimonials.length;
  const canGoPrevTestimonial = currentTestimonial > 0;

  return (
    <div className="relative min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#fafbfc] dark:bg-gray-900 overflow-hidden">
      {/* Animated Background Gradient and Grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/40 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-5 dark:opacity-10">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent/30 dark:bg-accent/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto">
        {/* Hero Section — Image + Title Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-16 sm:mb-20 lg:mb-24">
          {/* Text Content — Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 sm:space-y-8 mt-4 sm:mt-6"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary dark:text-white leading-tight tracking-tight">
                Adeel <br />
                <span className="bg-gradient-to-r from-accent to-cyan-500 bg-clip-text text-transparent">Mukhtar</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-secondary dark:text-gray-300 font-semibold mt-4 sm:mt-6 leading-snug">
                AI/ML Engineer • Machine Learning Researcher • LLM Specialist
              </p>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-xl break-words text-justify">
              Passionate AI Engineer with 3+ years of combined experience in research, industry, and freelancing. Specializing in explainable AI for healthcare, Large Language Models, and production-ready ML solutions that drive real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="/contact"
                className="group relative bg-gradient-to-r from-accent to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold font-heading shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                aria-label="Collaborate with Adeel Mukhtar"
              >
                <span className="relative z-10">Collaborate with Me</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="https://linkedin.com/in/adeelmukhtar"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold font-heading transition-all duration-300"
                aria-label="Connect with Adeel Mukhtar on LinkedIn"
              >
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image — Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center lg:justify-end mt-6 sm:mt-8"
          >
            <div className="relative max-w-full">
              <motion.div
                whileHover={{ scale: 1.03, rotate: [0, 1, -1, 0] }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-64 sm:w-80 md:w-96 lg:w-[400px] h-auto rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
              >
                <ResponsiveImage
                  src="/image/profile4.png"
                  alt="Adeel Mukhtar — AI/ML Engineer"
                  containerClassName="w-full h-auto"
                  className="object-contain w-full h-auto"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-2xl border-2 border-accent/20 -z-10 animate-pulse"></div>
              <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-2xl -z-20 opacity-70"></div>
            </div>
          </motion.div>
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12 sm:space-y-16 mb-16 sm:mb-20 lg:mb-24"
        >
          {/* About Me */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-primary dark:text-white mb-6 sm:mb-8 text-center">
              About Me
            </h2>
            <TypewriterSection
              text="I'm an AI/ML Engineer and researcher, I completed my Bachelor's in Biomedical Engineering at UET Lahore with minor in AI, with specialized training from NUST's Advanced AI Bootcamp. With 3 years of freelancing, 1 year of industry experience, and 1 year in academic research, I bridge the gap between cutting-edge AI research and practical applications."
              delay={0.1}
              className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed text-justify break-words"
            />
            <TypewriterSection
              text="My expertise spans explainable AI for medical diagnostics, Large Language Models, computer vision, and MLOps. I've published 3 peer-reviewed IEEE papers achieving up to 97.8% accuracy in medical AI applications, and delivered 25+ successful projects across healthcare, FinTech, and technology sectors. I'm passionate about creating transparent, ethical AI solutions that make a real difference in people's lives."
              delay={0.3}
              className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed text-justify break-words mt-4 sm:mt-6"
            />
          </div>

          {/* Skills Snapshot */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-primary dark:text-white mb-6 sm:mb-8 text-center">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="bg-white/70 dark:bg-gray-900/50 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">{skill.icon}</span>
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research & Impact */}
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-accent/10 to-cyan-500/10 p-6 sm:p-8 md:p-12 rounded-2xl border border-accent/20 backdrop-blur-sm shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-accent mb-6 sm:mb-8 text-center flex items-center justify-center">
              <span className="mr-3 sm:mr-4">🔬</span>
              Research & Impact
            </h2>
            <TypewriterSection
              text="My work combines rigorous research with practical applications to create AI solutions that matter:"
              delay={0.5}
              className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 text-center leading-snug mb-6 sm:mb-8"
            />
            <ul className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
              {[
                "Published Research: 3 IEEE conference papers on explainable AI for medical diagnostics, with 2 journal articles in review. Achieved 97.8% accuracy in Parkinson's disease detection from voice signals.",
                "Industry Innovation: Reduced manual processing by 60% through AI agents at GICOH, and improved patient recovery tracking by 45% with the RehabFlex rehabilitation device.",
                "Freelance Excellence: Delivered 25+ successful AI/ML projects across healthcare, finance, and technology sectors over 3 years, serving clients globally.",
                "Academic Leadership: Led undergraduate research at UET Lahore for 1 year, collaborating with medical professionals to validate AI models for clinical applications."
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-start group"
                >
                  <span className="text-accent mr-3 sm:mr-4 mt-1 sm:mt-2 text-lg sm:text-xl">✦</span>
                  <span className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed break-words">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Current Focus */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-gray-700/50 p-6 sm:p-8 rounded-2xl border border-blue-200/50 dark:border-gray-600/50">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-primary dark:text-white mb-6 text-center flex items-center justify-center">
              <span className="mr-3">🚀</span>
              Current Focus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-accent">AI for Healthcare</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Currently working at CataLyst4AI, developing AI-driven medical diagnostics with explainable AI techniques for clinical transparency and compliance.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-accent">Mathematical AI</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Leading research at SkyLabs AI on autoformalization pipelines for interactive theorem proving using LEAN4, advancing automated mathematical reasoning.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.8 }}
          className="text-center py-12 sm:py-16 border-t border-slate-200 dark:border-gray-700"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-primary dark:text-white mb-6 sm:mb-8">
            Let's Build Intelligent Healthcare Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-justify break-words">
            Whether you need innovative biomedical devices, explainable AI for healthcare, or intelligent agentic systems that automate complex workflows, I bring proven expertise in both engineering and AI. Let's create solutions that are not just intelligent, but impactful and ethical.
          </p>
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="inline-block bg-gradient-to-r from-accent via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-600 hover:to-cyan-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold font-heading text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            aria-label="Start a project with Adeel Mukhtar"
          >
            Start Your Project →
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

// Reusable Typewriter Component
function TypewriterSection({ text, delay = 0, className = "" }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className={`text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-100 font-sans break-words ${className}`}
    >
      {text}
    </motion.p>
  );
}