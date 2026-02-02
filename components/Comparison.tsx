
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
      title: "Missed Leads After Hours",
      Icon: HourglassIcon,
      sub: "Patients research treatments at 8 PM. If you don't answer, they move to the next clinic."
    },
    {
      title: "Generic Chatbots Fail",
      Icon: FileXIcon,
      sub: "Basic widgets can't answer complex questions about implants or Invisalign prices."
    },
    {
      title: "Wasted Reception Time",
      Icon: DuplicateIcon,
      sub: "Your team spends hours answering the same FAQs or chasing leads who never pick up."
    },
    {
      title: "Price Shoppers & Tire Kickers",
      Icon: DollarIcon,
      sub: "Filling your diary with low-value checkups while high-ticket cases slip away."
    },
    {
      title: "No Finance Qualification",
      Icon: BrokenShieldIcon,
      sub: "Booking consults for patients who can't afford £3k+ treatments."
    }
  ];

  const newSolutions = [
    {
      title: "24/7 Digital Coordinator",
      Icon: TimerIcon,
      sub: "Instant, clinical-grade responses day or night. Never miss an emergency or enquiry."
    },
    {
      title: "Custom Patient Reports",
      Icon: FileCheckIcon,
      sub: "Deliver personalized treatment guides that educate and build trust instantly."
    },
    {
      title: "Automated Admin Killer",
      Icon: GroupIcon,
      sub: "Iris AI handles the intake, triage, and booking so your team can focus on care."
    },
    {
      title: "High-Value Prioritization",
      Icon: ShieldIcon,
      sub: "Automatically flags and fast-tracks patients interested in Implants & Ortho."
    },
    {
      title: "Financial Screening",
      Icon: CurrencyIcon,
      sub: "Politely qualifies budget and finance eligibility before they book a slot."
    }
  ];

  return (
    <section id="comparison" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 gradient-text tracking-tighter whitespace-nowrap px-4 pb-4 text-gray-900">
            The Old Way vs. <span className="italic">The Iris Way</span>
          </h2>
          <div className="h-1.5 w-32 bg-emerald-500 mx-auto rounded-full shadow-[0_0_20px_rgba(16,185,129,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">

          {/* Old Way Block */}
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 relative group flex flex-col h-full shadow-sm">
            <div className="mb-6 lg:min-h-[130px]">
              <span className="text-gray-500 font-mono text-xs mb-2 block tracking-widest uppercase italic opacity-80">The Old Approach</span>
              <h2 className="serif text-4xl font-medium mb-2 text-gray-800">The Broken Playbook</h2>
              <p className="text-gray-500 text-sm">Most practices are still using the same tired tactics—and wondering why chairs are empty.</p>
            </div>

            <ul className="space-y-2 flex-grow">
              {oldPainPoints.map((point, i) => (
                <li key={i} className="flex gap-4 opacity-70 group-hover:opacity-100 transition-all duration-500 group/item hover:translate-x-1 lg:min-h-[75px]">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center mt-0.5 text-gray-500 group-hover/item:text-gray-700 group-hover/item:bg-gray-300 transition-all">
                    <point.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-base mb-0.5 transition-colors">{point.title}</h4>
                    <p className="text-gray-500 text-sm leading-tight opacity-90">{point.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* New Way Block */}
          <div className="p-1 px-1 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-transparent flex flex-col h-full">
            <div className="h-full p-8 rounded-[22px] bg-white border border-emerald-500/20 relative overflow-hidden group flex flex-col shadow-xl shadow-emerald-500/5">
              <div className="absolute top-0 right-0 p-8 pointer-events-none">
                <div className="w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
              </div>

              <div className="mb-6 lg:min-h-[130px]">
                <span className="text-emerald-600 font-mono text-xs mb-2 block tracking-widest uppercase font-bold">The Iris AI Approach</span>
                <h2 className="serif text-4xl font-medium mb-2 text-gray-900">Your Digital Coordinator</h2>
                <p className="text-gray-600 text-sm">Instantly deliver customized value that turns skeptical visitors into booked patients.</p>
              </div>

              <ul className="space-y-2 flex-grow">
                {newSolutions.map((solution, i) => (
                  <li key={i} className="flex gap-4 group/item transition-all duration-300 hover:translate-x-2 lg:min-h-[75px]">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mt-0.5 group-hover/item:scale-110 group-hover/item:bg-emerald-600 transition-all text-emerald-600 group-hover/item:text-white shadow-inner">
                      <solution.Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-base mb-0.5 group-hover/item:text-emerald-600 transition-colors">{solution.title}</h4>
                      <p className="text-gray-600 group-hover/item:text-gray-500 text-sm leading-tight transition-colors">{solution.sub}</p>
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
