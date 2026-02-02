
import React from 'react';
import { RobotIcon, FileCheckIcon, CurrencyIcon, MedalIcon, SparklesIcon } from './Icons';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "24/7 Digital Treatment Coordinator",
      desc: "Iris AI works around the clock, interviewing and qualifying patients while you sleep. No manual work, no delays, no missed after-hours leads.",
      icon: <RobotIcon className="w-12 h-12" />,
      featured: true
    },
    {
      title: "Custom Patient Assessment",
      desc: "Hand every patient a custom Invisalign or Implant roadmap based on their unique answers—building trust before they even meet you.",
      icon: <FileCheckIcon className="w-10 h-10" />
    },
    {
      title: "Financial Qualification",
      desc: "Identify patients ready to invest £5,000+ immediately vs. those just looking for NHS checkups.",
      icon: <CurrencyIcon className="w-10 h-10" />
    },
    {
      title: "Trust-First Conversion",
      desc: "Educate patients with value and clinical authority, not sales tactics. Reduce 'sticker shock' and increase case acceptance.",
      icon: <MedalIcon className="w-10 h-10" />
    },
    {
      title: "Automated Diary Filling",
      desc: "Iris AI syncs with your calendar to book qualified consultations directly, reducing admin time and no-shows.",
      icon: <SparklesIcon className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 px-6 relative border-y border-gray-200 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-100/50 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="serif text-4xl md:text-5xl lg:text-7xl font-medium mb-6 gradient-text tracking-tighter max-w-4xl mx-auto pb-2 leading-none text-gray-900">
            Why Iris AI is Suited for Your Practice
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Stop wasting time on manual outreach and admin tasks. Start scaling your high-value treatments through AI-driven triage.
          </p>
          <div className="h-1.5 w-32 bg-emerald-500 mx-auto mt-10 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.6)]"></div>
        </div>

        {/* Benefits Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`p-8 rounded-[40px] border border-gray-200 bg-white/50 hover:border-emerald-500/30 transition-all duration-500 group flex flex-col h-full backdrop-blur-sm relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 ${b.featured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-emerald-500/5 to-transparent' : ''
                }`}
            >
              {/* Featured Glow Effect */}
              {b.featured && (
                <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                  <div className="w-64 h-64 bg-emerald-500 rounded-full blur-[100px]"></div>
                </div>
              )}

              <div className="text-emerald-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 inline-block">
                {b.icon}
              </div>

              <div className="flex-grow">
                <h3 className={`${b.featured ? 'text-3xl' : 'text-2xl'} font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight`}>
                  {b.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity ${b.featured ? 'text-lg max-w-xl' : 'text-base'}`}>
                  {b.desc}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <div className="h-[1px] flex-grow bg-gray-200 group-hover:bg-emerald-500/20 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
