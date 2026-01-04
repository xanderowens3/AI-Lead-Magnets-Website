
import React from 'react';
import { RobotIcon, PlugIcon, ChartIcon, MedalIcon, PhoneIcon } from './Icons';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "24/7 Lead Qualification Machine",
      desc: "Midas AI works around the clock, turning website visitors into qualified leads while you sleep. No manual work, no delays, no missed opportunities. It handles the heavy lifting of vetting every single visitor based on your specific criteria.",
      icon: <RobotIcon className="w-12 h-12" />,
      featured: true
    },
    {
      title: "Seamless Integration",
      desc: "Embed directly into your existing website forms and workflows. Prospects fill out their information, and Midas AI instantly generates and delivers their personalized lead magnet.",
      icon: <PlugIcon className="w-10 h-10" />
    },
    {
      title: "Unlimited Scalability",
      desc: "Whether you're capturing 10 or 10,000 leads per month, Midas AI delivers the same personalized experience without increasing your workload.",
      icon: <ChartIcon className="w-10 h-10" />
    },
    {
      title: "Instant Differentiation",
      desc: "Stand out in a crowded market by being the agency that demonstrates value before asking for a meeting.",
      icon: <MedalIcon className="w-10 h-10" />
    },
    {
      title: "Higher-Quality Discovery Calls",
      desc: "Prospects arrive at sales calls already warmed up, pre-qualified, and convinced of your expertise. Less convincing, more closing.",
      icon: <PhoneIcon className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#030303] relative border-y border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-orange-950/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="serif text-4xl md:text-5xl lg:text-7xl font-medium mb-6 gradient-text tracking-tighter max-w-4xl mx-auto pb-2 leading-none">
            Why Midas AI is Suited for Your Agency
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Stop wasting time on manual outreach and generic content. Start scaling your expertise through AI-driven personalization.
          </p>
          <div className="h-1.5 w-32 bg-orange-500 mx-auto mt-10 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)]"></div>
        </div>

        {/* Benefits Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-[40px] border border-white/5 bg-zinc-900/10 hover:border-orange-500/30 transition-all duration-500 group flex flex-col h-full backdrop-blur-sm relative overflow-hidden ${
                b.featured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-500/5 to-transparent' : ''
              }`}
            >
              {/* Featured Glow Effect */}
              {b.featured && (
                <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                  <div className="w-64 h-64 bg-orange-500 rounded-full blur-[100px]"></div>
                </div>
              )}

              <div className="text-orange-500 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 inline-block">
                {b.icon}
              </div>

              <div className="flex-grow">
                <h3 className={`${b.featured ? 'text-3xl' : 'text-2xl'} font-bold text-white mb-4 group-hover:text-orange-400 transition-colors leading-tight`}>
                  {b.title}
                </h3>
                <p className={`text-gray-400 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity ${b.featured ? 'text-lg max-w-xl' : 'text-base'}`}>
                  {b.desc}
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-3">
                <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-orange-500/20 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
