import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative min-h-screen py-20 px-4 lg:px-8 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-5 dark:opacity-15">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 dark:bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section — Image + Title Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Text Content — Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10 mt-6"
          >
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-primary dark:text-white leading-tight tracking-tight">
                Adeel <br />
                <span className="text-accent">Mukhtar</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary dark:text-gray-300 font-semibold mt-6 max-w-lg leading-snug">
                AI/ML Engineer • Generative AI Specialist • XAI Researcher
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-xl">
              Crafting intelligent, ethical, and transparent AI solutions to transform healthcare, finance, and scientific innovation.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="/contact"
                className="group relative bg-gradient-to-r from-accent to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold font-heading shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
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
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-xl font-bold font-heading transition-all duration-300"
              >
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image — Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center lg:justify-end mt-4"
          >
            <div className="relative max-w-full">
              {/* Floating Hero Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-[270px] h-[270px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[470px] lg:h-[470px] xl:w-[550px] xl:h-[550px] rounded-3xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl drop-shadow-2xl"
              >
                <img
                  src="/images/profile4.png"
                  alt="Adeel Mukhtar — AI/ML Engineer"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </motion.div>

              {/* Glowing Halo */}
              <div className="absolute inset-0 rounded-3xl border-4 border-accent/30 -z-10 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-transparent via-accent/25 to-transparent blur-3xl -z-20 opacity-80"></div>
            </div>
          </motion.div>
        </div>

        {/* Bio Section — Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 mb-24 mt-6"
        >
          {/* Paragraph 1 */}
          <TypewriterSection
            text="As an AI/ML Engineer, I blend clinical expertise with advanced machine learning to create impactful solutions for healthcare, finance, and scientific discovery."
            delay={0.1}
            className="text-center max-w-4xl mx-auto text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed"
          />

          {/* Paragraph 2 */}
          <TypewriterSection
            text="With over three years of freelancing, one year in industry, and a year in academic research, I’ve delivered 25+ AI projects, including FinTech automation and explainable AI models published in IEEE conferences."
            delay={0.3}
            className="text-center max-w-4xl mx-auto text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed"
          />

          {/* Leadership Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5 }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-accent/5 to-cyan-500/5 p-8 md:p-12 rounded-3xl border border-accent/20 backdrop-blur-sm shadow-lg"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-accent mb-10 text-center md:text-left flex items-center justify-center md:justify-start">
              <span className="mr-4">🚀</span>
              Leadership & Strategic Consulting
            </h3>
            <div className="space-y-8 text-gray-800 dark:text-gray-100">
              <TypewriterSection
                text="Beyond coding, I lead transformative AI initiatives with a focus on:"
                delay={0.6}
                className="font-semibold text-lg md:text-xl text-center md:text-left leading-snug"
              />
              <ul className="space-y-6 md:pl-8">
                {[
                  "Project Leadership: Guided remote teams across 25+ AI projects, managing timelines, budgets, and stakeholder goals.",
                  "AI Strategy: Advised startups and businesses on AI adoption, model selection, and ethical, scalable deployments.",
                  "Effective Communication: Simplified complex AI concepts for non-technical stakeholders to drive informed decisions.",
                  "Research Innovation: Mentored researchers, co-authored three IEEE papers, with two more under review."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-accent mr-4 mt-2 text-lg">✦</span>
                    <TypewriterSection
                      text={item}
                      delay={0.7 + idx * 0.1}
                      className="text-lg md:text-xl leading-relaxed"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 1.0 }}
          className="text-center py-16 border-t border-gray-200 dark:border-gray-700 mt-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary dark:text-white mb-8">
            Shape the Future with AI
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Partner with me to build cutting-edge AI solutions. As an engineer, researcher, or consultant, I deliver expertise, leadership, and innovation to every project.
          </p>
          <motion.a
            whileHover={{ scale: 1.07, y: -5 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="inline-block bg-gradient-to-r from-accent via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-600 hover:to-cyan-700 text-white px-10 py-5 rounded-2xl font-bold font-heading text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Launch Your Project →
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

// Reusable Typewriter Component — Optimized for Contrast
function TypewriterSection({ text, delay = 0, className = "" }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        type: "spring",
        stiffness: 80,
        damping: 12,
      }}
      className={`text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-100 font-sans ${className}`}
    >
      {text}
    </motion.p>
  );
}