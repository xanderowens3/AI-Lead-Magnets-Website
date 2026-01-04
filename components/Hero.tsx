
import React from 'react';
import { FileCheckIcon } from './Icons';

interface HeroProps {
  onSignUp: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignUp }) => {
  return (
    <section id="home" className="relative pt-40 pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          NEW: AI-POWERED LEAD GENERATION
        </div>

        <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.3] md:leading-[1.2] mb-8 max-w-5xl mx-auto tracking-tighter text-balance">
          <span className="gradient-text block pb-2 sm:pb-4">Turn Skeptical Prospects</span>
          <span className="gradient-text">Into </span>
          <span className="text-orange-500 italic font-semibold drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]" style={{ WebkitTextFillColor: '#f97316' }}>
            Sexy Leads
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Midas AI generates custom reports, guides, and templates tailored to each of your prospect's exact situation while incorporating your agency's expertise—in seconds, not weeks.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button
            onClick={onSignUp}
            className="w-full md:w-auto bg-orange-500 text-black font-bold py-5 px-12 rounded-2xl text-xl hover:scale-105 transition-transform cta-glow"
          >
            Sign Up
          </button>
          <div className="flex flex-col items-start gap-3 text-sm text-gray-400 text-left md:ml-4">
            <div className="flex items-center gap-3 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                <FileCheckIcon className="w-3.5 h-3.5" />
              </div>
              <span>Generate personalized lead magnets instantly</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                <FileCheckIcon className="w-3.5 h-3.5" />
              </div>
              <span>Build trust 5x faster than generic content</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                <FileCheckIcon className="w-3.5 h-3.5" />
              </div>
              <span>Capture qualified leads while competitors wait</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;