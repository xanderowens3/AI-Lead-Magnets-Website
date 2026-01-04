
import React from 'react';
import { HammerIcon } from './Icons';

interface FooterProps {
  onHome: () => void;
}

const Footer: React.FC<FooterProps> = ({ onHome }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      onHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        onHome();
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#050505] relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
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

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
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
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>© 2025 Midas AI. All rights reserved.</p>
        <div className="flex gap-6 italic">
          <p>Built for agencies who give first.</p>
          <p>Powered by Gemini 3 Pro.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
