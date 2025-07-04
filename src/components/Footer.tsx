import React from 'react';
import { Brain, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">IRIS</h3>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Your Second Brain for the Web. Empowering students to learn, think, and grow 
            through intelligent knowledge management that actually works.
          </p>
          
          <div className="flex items-center justify-center text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 mx-2" />
            <span>for learners everywhere</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="text-gray-600 text-xs">
              © 2024 IRIS. Privacy-first knowledge management for the next generation of learners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;