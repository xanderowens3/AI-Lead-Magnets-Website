
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="serif text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.3] tracking-tighter text-gray-900">
            <span className="gradient-text block pb-2 md:pb-4">From Website Visitor to Qualified Patient</span>
            <span className="italic text-emerald-600 block mt-2">in 3 Simple Steps</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic text-lg opacity-80">
            No complicated setup. No manual work. No generic content. <br className="hidden md:block" />
            Just instant, personalized value that converts.
          </p>
          <div className="h-1 w-24 bg-emerald-500/30 mx-auto mt-10 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {[
              {
                step: "01",
                title: "Patient Enquires",
                desc: "Website visitor shares their smile goals and concerns through your new interactive assessment form."
              },
              {
                step: "02",
                title: "AI Engages & Qualifies",
                desc: "Iris AI instantly creates a personalized report, guide, or template tailored to their specific inputs and your agency's expertise."
              },
              {
                step: "03",
                title: "Appointment Booked",
                desc: "High-value patients will be prioritized and automatically booked into your diary."
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-20 h-20 bg-white border border-gray-200 rounded-[24px] flex items-center justify-center mx-auto mb-8 text-emerald-600 font-mono font-bold text-2xl shadow-xl shadow-gray-200/50 group-hover:scale-110 group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10 transition-all duration-500">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 italic group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed px-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
