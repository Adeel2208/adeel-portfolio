// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

export default function Navbar() {
  const handleDownloadResume = () => {
    // Create invisible anchor and trigger click
    const link = document.createElement('a');
    link.href = '/resume/Adeel_Mukhtar_Resume.pdf'; // 👈 Path to your resume
    link.download = 'Adeel_Mukhtar_Resume.pdf';     // 👈 Filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 lg:px-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-2xl font-bold text-slate-900 hover:text-cyan-600 transition-colors">
            Adeel Mukhtar
          </Link>

          {/* Nav Links + Download Button */}
          <div className="hidden md:flex items-center space-x-6">
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
              className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </motion.button>
          </div>

          {/* Profile Image */}
          <div className="flex items-center">
            <ResponsiveImage
              src="/image/profile.png"
              alt="Adeel Mukhtar"
              containerClassName="w-14 h-14 rounded-full border-2 border-cyan-300/50 hover:border-cyan-400 transition-all duration-300 shadow-md cursor-pointer"
              whileHoverScale={1.05}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-lg text-slate-700 hover:text-cyan-600 transition-colors font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-4 group-hover:left-1/2 group-hover:translate-x-[-50%] transition-all duration-300"></span>
    </Link>
  );
}