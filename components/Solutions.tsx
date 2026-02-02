import React from 'react';
import { RobotIcon, FileCheckIcon, CurrencyIcon } from './Icons';

const Solutions: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 gradient-text tracking-tighter lg:whitespace-nowrap px-4 pb-4 text-gray-900">
            How Iris AI Solves Your Biggest Challenges
          </h2>
          <div className="h-1.5 w-32 bg-emerald-500 mx-auto rounded-full shadow-[0_0_20px_rgba(16,185,129,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-gray-200 rounded-3xl hover:border-emerald-500/30 transition-all group hover:shadow-xl hover:shadow-emerald-500/5">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 transition-all text-emerald-600 group-hover:text-white shadow-inner">
              <RobotIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Automated Clinical Interviews</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              Gathers dental history, treatment goals, and concerns automatically—acting as a 24/7 digital triage nurse for your practice.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-200 rounded-3xl hover:border-emerald-500/30 transition-all group hover:shadow-xl hover:shadow-emerald-500/5">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 transition-all text-emerald-600 group-hover:text-white shadow-inner">
              <FileCheckIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Custom Patient Reports</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              Generates personalized PDFs (e.g., "Your Invisalign Journey", "Implant Cost Guide") instantly, educating patients with real value.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-200 rounded-3xl hover:border-emerald-500/30 transition-all group hover:shadow-xl hover:shadow-emerald-500/5">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 transition-all text-emerald-600 group-hover:text-white shadow-inner">
              <CurrencyIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">High-Value Prioritization</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              Automatically identifies patients ready for £5,000+ treatments and fast-tracks them to your treatment coordinator's diary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
