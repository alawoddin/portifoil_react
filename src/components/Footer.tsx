import React from 'react';
import { Code, ArrowUp, Github, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="flex items-center gap-2 font-bold text-2xl mb-4">
              <Code size={28} className="text-primary-500" />
              <span className="text-gradient font-display">Alawoddin Khedmat</span>
            </a>
            <p className="text-gray-400 mb-6">
              Creating beautiful digital experiences with clean, efficient code.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/alawoddin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/info-khedmat-a58b58343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/17gPjNTeFe/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>Kabul, Pul-e-Surkh</p>
              <p>
                <a href="hashmatullahm90@gmail.com" className="hover:text-primary-400 transition-colors">
                  alawoddinkhan84@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+15551234567" className="hover:text-primary-400 transition-colors">
                  +93 (744) 620-492
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Alawoddin Khedmat. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;