
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Will asking these questions put patients off?",
      a: "No—it actually builds trust. Patients see it as a 'Digital Treatment Coordinator' taking a clinical interest in their case, not a sales bot. By offering a personalized report (e.g., 'Am I Eligible for Implants?'), you give value before asking for a booking."
    },
    {
      q: "Does it integrate with SOE (Exact) or Dentally?",
      a: "Iris AI captures all pre-clinical data and hands it off perfectly for your reception team to input into your Practice Management System. We can also integrate directly with your CRM to automate follow-ups."
    },
    {
      q: "Can it really filter out time-wasters?",
      a: "Yes. The system asks specific clinical questions to identify high-value private patients (e.g., Implants, Ortho) versus general NHS enquiries, allowing your team to prioritize the £5k+ cases that drive revenue."
    },
    {
      q: "Is this GDPR compliant?",
      a: "100%. All patient data is encrypted and handled according to strict UK data privacy standards. You retain full ownership of all patient records."
    },
    {
      q: "I'm a Principal Dentist, not a tech expert. Is this hard to run?",
      a: "It's completely hands-off. We install the 'Digital Coordinator' on your site for you. You simply receive the qualified booked appointments and the pre-filled clinical reports."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="serif text-4xl text-center mb-12 text-gray-900">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white/50 hover:bg-white transition-colors duration-300 shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <span className={`text-emerald-500 text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
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
