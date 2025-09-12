// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ResponsiveImage from './ResponsiveImage';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Adeel_Mukhtar_Resume.pdf';
    link.download = 'Adeel_Mukhtar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 lg:px-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-slate-900 hover:text-cyan-600 transition-colors">
            Adeel Mukhtar
          </Link>

          {/* Desktop Nav (hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            {/* Download Resume Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-medium text-xs md:text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1 md:gap-2"
            >
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="hidden xs:inline">Download Resume</span>
            </motion.button>
          </div>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-4">
            {/* Profile Image (visible on all screens) */}
            <div className="hidden sm:block">
              <ResponsiveImage
                src="/image/profile.png"
                alt="Adeel Mukhtar"
                containerClassName="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-cyan-300/50 hover:border-cyan-400 transition-all duration-300 shadow-md cursor-pointer"
                whileHoverScale={1.05}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-cyan-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-slate-200 bg-white/90 backdrop-blur-sm"
            >
              <div className="py-6 space-y-4 px-4">
                <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </MobileNavLink>
                <MobileNavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </MobileNavLink>
                <MobileNavLink to="/experience" onClick={() => setIsMenuOpen(false)}>
                  Experience
                </MobileNavLink>
                <MobileNavLink to="/skills" onClick={() => setIsMenuOpen(false)}>
                  Skills
                </MobileNavLink>
                <MobileNavLink to="/certifications" onClick={() => setIsMenuOpen(false)}>
                  Certifications
                </MobileNavLink>
                <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </MobileNavLink>

                {/* Download Resume Button (Mobile) */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleDownloadResume();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white py-3 rounded-xl font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </motion.button>

                {/* Profile Image (Mobile) */}
                <div className="pt-4 border-t border-slate-200 mt-4">
                  <div className="flex items-center justify-center">
                    <ResponsiveImage
                      src="/image/profile.png"
                      alt="Adeel Mukhtar"
                      containerClassName="w-20 h-20 rounded-full border-4 border-cyan-300/50 shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm md:text-lg text-slate-700 hover:text-cyan-600 transition-colors font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-4 group-hover:left-1/2 group-hover:translate-x-[-50%] transition-all duration-300"></span>
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-3 text-lg font-medium text-slate-800 hover:text-cyan-600 hover:bg-slate-50 rounded-xl px-4 transition-colors"
    >
      {children}
    </Link>
  );
}