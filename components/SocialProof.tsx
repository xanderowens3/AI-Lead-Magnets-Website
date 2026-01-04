
import React from 'react';

interface SocialProofProps {
  onSignUp: () => void;
}

const SocialProof: React.FC<SocialProofProps> = ({ onSignUp }) => {
  const quotes = [
    {
      text: "71% of consumers expect companies to deliver personalized interactions, and 76% get frustrated when this doesn't happen.",
      author: "McKinsey & Company",
      year: "2025"
    },
    {
      text: "Around 78% of consumers say they expect more personalization than ever before.",
      author: "HubSpot",
      year: "2024"
    },
    {
      text: "High-level lead nurturing results in 50% more sales at a 33% lower cost.",
      author: "Marketo",
      year: "2024"
    },
    {
      text: "Cut the time between a lead expressing interest and it being sent to the correct sales rep from 25 minutes to 45 seconds using automation.",
      author: "Salesforce",
      year: "2024"
    }
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 gradient-text tracking-tighter pb-2">
            What Industry Leaders Say About Personalized Lead Magnets
          </h2>
          <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((q, i) => (
            <div 
              key={i} 
              className="p-8 bg-zinc-900/20 backdrop-blur-sm border border-white/5 rounded-3xl relative transition-all duration-500 hover:bg-zinc-900/40 hover:border-orange-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group"
            >
              <div className="absolute top-6 left-6 text-orange-500/10 text-6xl serif font-bold group-hover:text-orange-500/20 transition-colors duration-500">"</div>
              <p className="text-gray-400 group-hover:text-gray-200 italic mb-6 relative z-10 leading-relaxed transition-colors duration-500">
                {q.text}
              </p>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-orange-500/50 group-hover:w-12 group-hover:bg-orange-500 transition-all duration-500"></div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest transition-colors duration-500">
                  {q.author} ({q.year})
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-12 bg-gradient-to-t from-orange-500/20 via-orange-500/5 to-transparent rounded-[40px] border border-orange-500/20 w-full">
            <h2 className="serif text-4xl md:text-5xl font-medium mb-4 text-white">Ready to Transform How You Generate Leads?</h2>
            <p className="text-gray-400 mb-8">Join the waitlist and be among the first agencies to access Midas AI when we launch.</p>
            <button 
              onClick={onSignUp}
              className="bg-orange-500 text-black font-bold py-4 px-12 rounded-2xl text-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              Sign Up Now
            </button>
            <p className="text-xs text-orange-500/70 mt-6 font-medium">Get early access pricing and turn every website visitor into a qualified opportunity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
