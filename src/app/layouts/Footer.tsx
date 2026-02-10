'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gray-900 p-4 py-2 sm:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Middle: Go to Top */}
      <div className="mb-4 md:mb-0">
        <button
          onClick={handleGoToTop}
          className="px-2 py-0 border border-current rounded hover:bg-black-200 dark:hover:bg-gray-800 transition-all"
          aria-label="Go to top"
        >
          ↑
        </button>
      </div>

      {/* Right: Social Links */}
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/mozammel-khandakar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600 transition-colors"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/KM-Mozammel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-700 dark:hover:text-white transition-colors"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="mailto:mozammel.khandakar@outlook.com"
          aria-label="Mail"
          className="hover:text-red-600 transition-colors"
        >
          <FaEnvelope size={20} />
        </a>
      </div>

      {/* Left: Copyright */}
      <div className="mt-2 md:mb-0 text-sm">
        &copy; 2026 Mozammel Khandakar
      </div>
    </footer>
  );
};

export default Footer;
