import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ResponsiveImage from './ResponsiveImage';
import Chatbot from './Chatbot'; // Import the Chatbot component

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

  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat

  return (
    <>
      <motion.nav
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 lg:px-8 shadow-sm"
      >
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-2.5">
            {/* Logo and Profile Image */}
            <div className="flex items-center justify-between w-full sm:w-auto">
              <Link
                to="/"
                className="text-base sm:text-lg lg:text-xl font-heading font-bold text-slate-900 hover:text-accent transition-colors"
              >
                Adeel Mukhtar
              </Link>
              <div className="ml-4"> {/* Shifts the image right */}
                <ResponsiveImage
                  src="/image/profile.png"
                  alt="Adeel Mukhtar"
                  containerClassName="w-9 h-9 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-cyan-300/50 hover:border-accent transition-all duration-300 shadow-md cursor-pointer"
                  whileHoverScale={1.08}
                  style={{ marginRight: '16px' }} // Fallback inline style
                />
              </div>
            </div>

            {/* Navigation Links, Chat Button, and Resume Button */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mt-2 sm:mt-0 text-[0.65rem] sm:text-xs lg:text-sm">
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
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="bg-accent hover:bg-cyan-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg font-medium text-[0.65rem] sm:text-xs shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1"
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="hidden sm:inline">Chat</span>
                <span className="sm:hidden">AI</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadResume}
                className="bg-accent hover:bg-cyan-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg font-medium text-[0.65rem] sm:text-xs shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1"
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Chatbot Toggle */}
      {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}

      {/* Spacer to prevent content overlap on mobile */}
      <div className="h-24 sm:h-16 lg:h-14"></div>
    </>
  );
}

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-[0.65rem] sm:text-xs lg:text-sm font-medium text-slate-700 hover:text-accent transition-colors relative group px-1.5 py-1.5 sm:px-2 sm:py-2 rounded-md ${
        isActive ? 'text-accent font-semibold' : ''
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-accent group-hover:w-2 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 ${
          isActive ? 'w-2 -translate-x-1/2' : ''
        }`}
      ></span>
    </Link>
  );
}