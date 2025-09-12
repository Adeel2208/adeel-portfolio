import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-accent">Adeel Mukhtar</h3>
            <p className="mt-2 text-gray-300">AI/ML Engineer • Researcher • Deep Learning Specialist</p>
          </div>

          <div className="flex space-x-6">
            <a href="mailto:adeelmukhtar051@gmail.com" className="hover:text-accent transition-colors">
              Email
            </a>
            <a href="tel:+923226869338" className="hover:text-accent transition-colors">
              Phone
            </a>
            <a href="https://www.linkedin.com/in/adeel-mukhtar-174b71270/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/Adeel2208" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adeel Mukhtar. Built with React, Vite & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}