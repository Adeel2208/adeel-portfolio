import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

export default function Navbar() {
  const location = useLocation();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Adeel_Mukhtar_Resume.pdf';
    link.download = 'Adeel_Mukhtar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl border-b border-primary-100/50 px-4 sm:px-6 lg:px-8 shadow-lg shadow-primary-500/5"
      >
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 sm:py-3">
            {/* Logo and Profile Image */}
            <motion.div 
              className="flex items-center justify-between w-full sm:w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Link
                to="/"
                className="text-lg sm:text-xl lg:text-2xl font-heading font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent hover:from-primary-800 hover:to-accent-700 transition-all duration-300"
              >
                Adeel Mukhtar
              </Link>
              <motion.div 
                className="ml-4 sm:hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ResponsiveImage
                  src="/image/profile.png"
                  alt="Adeel Mukhtar"
                  containerClassName="w-10 h-10 rounded-full border-2 border-gradient-to-r from-primary-400 to-accent-400 shadow-md hover:shadow-lg cursor-pointer transition-all duration-300"
                  whileHoverScale={1.08}
                />
              </motion.div>
            </motion.div>

            {/* Navigation Links and Resume Button */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-0 text-[0.65rem] sm:text-xs lg:text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/experience">Experience</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/certifications">Certifications</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium text-[0.65rem] sm:text-xs shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 border border-primary-500/20"
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 sm:h-16 lg:h-14"></div>
    </>
  );
}

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-[0.65rem] sm:text-xs lg:text-sm font-medium transition-all duration-300 relative px-2 py-2 sm:px-3 sm:py-2 rounded-lg ${
        isActive 
          ? 'text-white bg-gradient-to-r from-primary-600 to-accent-600 shadow-md' 
          : 'text-secondary-700 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500'
      }`}
    >
      {children}
    </Link>
  );
}