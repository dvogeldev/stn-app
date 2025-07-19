import React from 'react';
import { Church } from 'lucide-react'; // Importing Lucide icon for the logo
import { ThemeSwitcher } from './ThemeSwitcher';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* Church Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Church className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-white rounded-lg">St. Nicholas Orthodox Church</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 rounded-lg">
              Grand Rapids, Michigan
            </p>
            <p className="text-gray-400 text-base leading-relaxed rounded-lg">
              Preserving the ancient faith in the modern world. Join us as we worship,
              learn, and grow together in Orthodox Christian community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 rounded-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-lg">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-lg">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-lg">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-lg">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 rounded-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/prayer-book" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-lg">Prayer Book</a></li>
              <li><a href="/calendar" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-lg">Orthodox Calendar</a></li>
              <li><a href="/materials" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-lg">Educational Materials</a></li>
              <li><a href="/newsletter" className="text-gray-400 hover:text-white transition-colors duration-200 rounded-lg">Parish Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="mb-2 rounded-lg">
              Made with <span className="text-red-500">&hearts;</span> for our Orthodox community
            </p>
            <p className="rounded-lg">
              &copy; 2025 St. Nicholas Orthodox Church. All rights reserved.
            </p>
          </div>
          
          {/* Development Theme Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">Theme:</span>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

