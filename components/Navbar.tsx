
import React from 'react';
import { HammerIcon } from './Icons';

interface NavbarProps {
  onSignUp: () => void;
  onHome: () => void;
  currentView?: 'home' | 'signup';
}

const Navbar: React.FC<NavbarProps> = ({ onSignUp, onHome, currentView }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      if (currentView === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onHome();
      }
    } else {
      if (currentView !== 'home') {
        onHome();
        // Give time for view to switch then scroll
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 transition-all duration-300">
      <div className="w-full max-w-5xl backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, 'home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-black group-hover:scale-110 transition-transform">
            <HammerIcon className="w-5 h-5" />
          </div>
          <span className="font-bold tracking-tight text-xl group-hover:text-orange-500 transition-colors">MIDAS AI</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, 'home')}
            className="hover:text-white transition-colors"
          >
            Home
          </a>
          <a 
            href="#comparison" 
            onClick={(e) => handleScroll(e, 'comparison')}
            className="hover:text-white transition-colors"
          >
            The Difference
          </a>
          <a 
            href="#how-it-works" 
            onClick={(e) => handleScroll(e, 'how-it-works')}
            className="hover:text-white transition-colors"
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleScroll(e, 'faq')}
            className="hover:text-white transition-colors"
          >
            FAQ
          </a>
        </div>

        <button 
          onClick={onSignUp}
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all cta-glow"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
