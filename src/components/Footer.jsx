import React from 'react';
import { Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white h-28 flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Beyond Career
            </h3>
            <div className="hidden md:flex items-center space-x-4 text-sm text-blue-200">
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>example@beyondcareer.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+91 9000000000</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Beyond Career. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-sm">
            <a
              href="https://linkedin.com/company/beyondgradess"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-blue-200 hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;