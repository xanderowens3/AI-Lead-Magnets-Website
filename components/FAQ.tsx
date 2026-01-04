
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How is this different from just offering a free PDF?",
      a: "Generic PDFs are ignored because they're not relevant to each prospect's specific situation. Midas AI creates truly personalized resources based on each visitor's inputs—making them instantly more valuable and memorable."
    },
    {
      q: "Does this require technical knowledge to set up?",
      a: "Not at all. We integrate Midas AI with your existing website forms and other systems for you. Your prospects fill out their information, and the system automatically generates and delivers their personalized lead magnet. Setup takes minutes, not weeks."
    },
    {
      q: "What types of lead magnets can I create?",
      a: "Midas AI generates personalized reports, guides, templates, and other information-based digital products tailored to each prospect's industry, challenges, and goals."
    },
    {
      q: "Will this work for my agency's niche?",
      a: "Yes! Midas AI adapts to your expertise to make the lead magnets super relevant and accurate. The personalization is based on the prospect's inputs, so whether you serve e-commerce, B2B, local businesses, or enterprise clients, the lead magnets will be relevant."
    },
    {
      q: "What information do prospects need to provide?",
      a: "You control the questions. Typically, agencies ask about industry, business challenges, goals, and current situation. Midas AI uses these inputs combined with your agency’s expertise to create personalized content."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-zinc-950/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="serif text-4xl text-center mb-12">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-zinc-900/20">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-gray-200">{faq.q}</span>
                <span className={`text-orange-500 text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
