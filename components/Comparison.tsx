
import React from 'react';
import { 
  FileCheckIcon, 
  TimerIcon, 
  ShieldIcon, 
  GroupIcon, 
  CurrencyIcon,
  FileXIcon,
  HourglassIcon,
  BrokenShieldIcon,
  DuplicateIcon,
  DollarIcon
} from './Icons';

const Comparison: React.FC = () => {
  const oldPainPoints = [
    {
      title: "Generic Lead Magnets That Get Ignored",
      Icon: FileXIcon,
      sub: "Your 'Ultimate Guide' sits in downloads folders alongside 47 others, doing nothing."
    },
    {
      title: "Weeks to Create, Minutes to Dismiss",
      Icon: HourglassIcon,
      sub: "By the time you've custom-created a resource, they've already chosen a competitor."
    },
    {
      title: "Trust Takes Forever to Build",
      Icon: BrokenShieldIcon,
      sub: "You're asking for discovery calls before proving your expertise, creating friction."
    },
    {
      title: "One-Size-Fits-All Content Doesn't Convert",
      Icon: DuplicateIcon,
      sub: "Prospects with different goals all get the same cookie-cutter magnet that barely resonates."
    },
    {
      title: "High Value = High Cost",
      Icon: DollarIcon,
      sub: "Creating custom resources isn't scalable. You either spend thousands or settle for generic."
    }
  ];

  const newSolutions = [
    {
      title: "Hyper-Personalized Lead Magnets",
      Icon: FileCheckIcon,
      sub: "Every prospect receives a custom report tailored specifically to their industry and challenges."
    },
    {
      title: "From Stranger to Advocate in 60 Seconds",
      Icon: TimerIcon,
      sub: "Generate personalized, high-value resources instantly while the prospect is still on your site."
    },
    {
      title: "Build Trust Before the First Call",
      Icon: ShieldIcon,
      sub: "Deliver genuine value before asking for anything. Prospects arrive already convinced."
    },
    {
      title: "1:1 Personalization at Scale",
      Icon: GroupIcon,
      sub: "Each visitor gets a unique lead magnet based on industry data and pain points."
    },
    {
      title: "Premium Value, Zero Marginal Cost",
      Icon: CurrencyIcon,
      sub: "Create unlimited custom lead magnets without design fees or production time."
    }
  ];

  return (
    <section id="comparison" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 gradient-text tracking-tighter whitespace-nowrap px-4 pb-4">
            The Old Way vs. <span className="italic">The Midas Way</span>
          </h2>
          <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          
          {/* Old Way Block */}
          <div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 relative group flex flex-col h-full">
            <div className="mb-6 lg:min-h-[130px]">
              <span className="text-zinc-400 font-mono text-xs mb-2 block tracking-widest uppercase italic opacity-80">The Old Approach</span>
              <h2 className="serif text-4xl font-medium mb-2 text-zinc-200">The Broken Playbook</h2>
              <p className="text-zinc-400 text-sm">Most agencies are still using the same tired tactics—and wondering why prospects ghost them.</p>
            </div>
            
            <ul className="space-y-2 flex-grow">
              {oldPainPoints.map((point, i) => (
                <li key={i} className="flex gap-4 opacity-70 group-hover:opacity-100 transition-all duration-500 group/item hover:translate-x-1 lg:min-h-[75px]">
                  <div className="flex-shrink-0 w-10 h-10 bg-zinc-800/50 rounded-xl flex items-center justify-center mt-0.5 text-zinc-400 group-hover/item:text-zinc-200 group-hover/item:bg-zinc-800 transition-all">
                    <point.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-zinc-100 font-semibold text-base mb-0.5 group-hover/item:text-white transition-colors">{point.title}</h4>
                    <p className="text-zinc-400 text-sm leading-tight opacity-90">{point.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* New Way Block */}
          <div className="p-1 px-1 rounded-3xl bg-gradient-to-br from-orange-500/20 to-transparent flex flex-col h-full">
            <div className="h-full p-8 rounded-[22px] bg-[#050505] border border-orange-500/20 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 p-8 pointer-events-none">
                <div className="w-24 h-24 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all"></div>
              </div>
              
              <div className="mb-6 lg:min-h-[130px]">
                <span className="text-orange-500 font-mono text-xs mb-2 block tracking-widest uppercase font-bold">The Midas AI Approach</span>
                <h2 className="serif text-4xl font-medium mb-2 text-white">The Midas AI Playbook</h2>
                <p className="text-gray-400 text-sm">Instantly deliver customized value that turns skeptical visitors into eager prospects.</p>
              </div>

              <ul className="space-y-2 flex-grow">
                {newSolutions.map((solution, i) => (
                  <li key={i} className="flex gap-4 group/item transition-all duration-300 hover:translate-x-2 lg:min-h-[75px]">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center mt-0.5 group-hover/item:scale-110 group-hover/item:bg-orange-500 transition-all text-orange-500 group-hover/item:text-black shadow-inner">
                      <solution.Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-0.5 group-hover/item:text-orange-400 transition-colors">{solution.title}</h4>
                      <p className="text-gray-400 group-hover/item:text-gray-300 text-sm leading-tight transition-colors">{solution.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
