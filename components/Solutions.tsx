import React from 'react';
import { UsersIcon, TargetIcon, LightningIcon } from './Icons';

const Solutions: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 gradient-text tracking-tighter lg:whitespace-nowrap px-4 pb-4">
            How Midas AI Solves Your Biggest Challenges
          </h2>
          <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all group hover:bg-zinc-900/60">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all text-orange-500 group-hover:text-black shadow-inner">
              <UsersIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Instant Trust-Building</h3>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              In an era where consumer trust is at historic lows, stand out by giving first. Personalized, valuable content reverses skepticism instantly.
            </p>
          </div>

          <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all group hover:bg-zinc-900/60">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all text-orange-500 group-hover:text-black shadow-inner">
              <TargetIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">True 1:1 Personalization</h3>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Capture prospect inputs and generate reports that speak directly to their situation by using your agency's expertise automatically.
            </p>
          </div>

          <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all group hover:bg-zinc-900/60">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all text-orange-500 group-hover:text-black shadow-inner">
              <LightningIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Speed Meets Quality</h3>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Deliver high-value, customized resources in under 60 seconds while competitors are still sending generic "Thanks" auto-replies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
