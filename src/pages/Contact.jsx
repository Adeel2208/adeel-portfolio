import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen py-14 px-2 sm:px-9 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 dark:from-gray-900 dark:to-cyan-900/10"></div>

      {/* Floating Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 dark:bg-accent/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info — Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8 mt-16 sm:mt-20 lg:mt-24"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary dark:text-white mb-6 leading-tight">
                Let’s Build <br />
                <span className="text-accent">Something Amazing</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-lg text-justify">
                Whether you need an AI engineer, research collaborator, or strategic consultant — I’m here to help you turn ideas into intelligent, scalable reality.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  label: "Email",
                  value: "adeelmukhtar051@gmail.com",
                  href: "mailto:adeelmukhtar051@gmail.com",
                  icon: "✉️",
                },
                {
                  label: "Phone",
                  value: "+92-322-6869338",
                  href: "tel:+923226869338",
                  icon: "📱",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/adeelmukhtar",
                  href: "https://www.linkedin.com/in/adeel-mukhtar-174b71270/",
                  icon: "🔗",
                },
                {
                  label: "GitHub",
                  value: "github.com/Adeel2208",
                  href: "https://github.com/Adeel2208",
                  icon: "💻",
                },
                {
                  label: "Medium",
                  value: "medium.com/@adeelmukhtar051",
                  href: "https://medium.com/@adeelmukhtar051/about",
                  icon: "📝",
                },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.label !== "Email" && item.label !== "Phone" ? "_blank" : undefined}
                  rel={item.label !== "Email" && item.label !== "Phone" ? "noreferrer" : undefined}
                  className="group flex items-center p-5 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-accent hover:shadow-xl transition-all duration-300"
                  whileHover={{ x: 8, y: -4 }}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, type: "spring", stiffness: 100 }}
                >
                  <span className="mr-5 text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-secondary dark:text-gray-300 mb-1">
                      {item.label}
                    </div>
                    <div className="font-semibold text-base text-gray-900 dark:text-gray-100 group-hover:text-accent transition-colors duration-300">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image — Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative flex justify-center lg:justify-end mt-32 sm:mt-28 lg:mt-24"
          >
            <div className="relative w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[30rem] lg:max-w-[32rem]">
              {/* Floating Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="w-full h-auto aspect-square rounded-2xl overflow-hidden border-6 border-white dark:border-gray-800 shadow-2xl drop-shadow-xl"
              >
                <img
                  src="/image/profile2.png"
                  alt="Adeel Mukhtar — AI/ML Engineer & Consultant"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </motion.div>

              {/* Glowing Effects */}
              <div className="absolute inset-0 rounded-2xl border-3 border-accent/40 -z-10 animate-pulse"></div>
              <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-2xl -z-20 opacity-90"></div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.25 }}
          className="text-center mt-28 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-base text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            I respond to all messages within 24 hours. Let’s discuss how AI can transform your business, research, or product.
          </p>
          <motion.a
            whileHover={{ scale: 1.08, y: -6 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:adeelmukhtar051@gmail.com"
            className="group relative inline-block bg-gradient-to-r from-accent via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-600 hover:to-cyan-700 text-white px-10 py-5 rounded-2xl font-bold font-heading text-base shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Send Me an Email
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}