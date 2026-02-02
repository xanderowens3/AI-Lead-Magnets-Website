
import React, { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Send, ArrowRight, Check, CheckCircle2, Sparkles, Home, Target, ShieldCheck, Zap } from 'lucide-react';

interface SignUpPageProps {
  onNavigate: (view: 'home' | 'signup') => void;
}

/**
 * Minimalist CosmicBackground: A diagrammatic, architectural solar system
 * with clean lines, subtle parallax, and a monochromatic-leaning palette.
 */
const CosmicBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  const stars = useMemo(() => [...Array(60)].map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: 1,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.4 + 0.1,
    depth: Math.random() * 15
  })), []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      {/* Subtle single-color nebula glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Minimal Starfield - Dark stars for light mode */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gray-400"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transform: `translate3d(${mousePos.x * star.depth}px, ${mousePos.y * star.depth}px, 0)`
          }}
        />
      ))}

      {/* Architectural Solar System Container */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-1000 ease-out"
        style={{
          perspective: '2000px',
          transform: `rotateY(${mousePos.x * 3}deg) rotateX(${mousePos.y * -3}deg)`
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center transform rotateX-[70deg]">



        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit { animation: orbit linear infinite; }
      `}</style>
    </div>
  );
};

const BenefitItem: React.FC<{ icon: any, title: string, desc: string, isLast?: boolean }> = ({ icon: Icon, title, desc, isLast }) => (
  <div className={`flex gap-5 group items-start p-6 -ml-6 rounded-[2rem] transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 cursor-default ${isLast ? 'mb-0' : ''}`}>
    <div className="shrink-0 w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white text-emerald-600">
      <Icon size={20} className="transition-colors duration-300" />
    </div>
    <div>
      <h3 className="serif font-bold text-gray-900 text-lg mb-1 transition-colors duration-300 group-hover:text-emerald-700">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-sm transition-colors duration-300 group-hover:text-gray-700">
        {desc}
      </p>
    </div>
  </div>
);

const InputGroup: React.FC<{ label: string, value: string, onChange: (v: string) => void, placeholder: string, type?: string }> = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600/70 ml-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white border border-gray-200 rounded-xl py-3 px-5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm shadow-sm"
    />
  </div>
);

const OptionCard: React.FC<{ label: string, selected: boolean, onClick: () => void }> = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`group w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 ${selected
      ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20'
      : 'bg-white border-gray-200 text-gray-600 hover:border-emerald-500/50 hover:bg-gray-50'
      }`}
  >
    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${selected ? 'bg-white border-white text-emerald-600' : 'border-gray-300 bg-gray-50'
      }`}>
      {selected && <Check size={12} strokeWidth={4} />}
    </div>
    <span className={`font-medium text-sm transition-colors ${selected ? 'text-white' : 'group-hover:text-gray-900'}`}>{label}</span>
  </button>
);

const SignUpPage: React.FC<SignUpPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    practiceName: '',
    website: '',
    role: '',
    roleOther: '',
    currentProcess: '',
    processOther: '',
    focusTreatments: [] as string[],
    treatmentsOther: '',
    leadVolume: '',
    mustHave: '',
    skepticism: '',
    skepticismOther: ''
  });

  const roleOptions = ["Principal Dentist", "Practice Manager", "Treatment Coordinator", "Other"];
  const currentProcessOptions = ["Front Desk / Phone", "Email Enquiries", "Generic Contact Form", "Other"];
  const focusTreatmentsOptions = ["Dental Implants", "Invisalign / Orthodontics", "Composite Bonding", "Smile Makeovers", "General Dentistry"];
  const leadVolumeOptions = ["0-20", "21-50", "51-100", "100+"];
  const skepticismOptions = ["Patient adoption vs. human touch", "Integration with SOE/Dentally", "Cost vs. ROI", "Data Security/GDPR", "Other"];

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleMulti = (field: 'focusTreatments', value: string) => {
    setFormData(prev => {
      const current = prev[field];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(v => v !== value) };
      }
      return { ...prev, [field]: [...current, value] };
    });
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return !!(formData.firstName && formData.lastName && formData.email && formData.practiceName && formData.website);
      case 2: return formData.role === 'Other' ? !!formData.roleOther : !!formData.role;
      case 3: return formData.currentProcess === 'Other' ? !!formData.processOther : !!formData.currentProcess;
      case 4:
        if (formData.focusTreatments.length === 0) return false;
        if (formData.focusTreatments.includes('Other')) return !!formData.treatmentsOther;
        return true;
      case 5: return !!formData.leadVolume;
      case 6: return !!formData.mustHave;
      case 7: return formData.skepticism === 'Other' ? !!formData.skepticismOther : !!formData.skepticism;
      default: return false;
    }
  };

  const handleNext = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step < 7) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      try {
        const webhookData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          practiceName: formData.practiceName,
          website: formData.website,
          role: formData.role === 'Other' ? formData.roleOther : formData.role,
          currentProcess: formData.currentProcess === 'Other' ? formData.processOther : formData.currentProcess,
          focusTreatments: formData.focusTreatments.includes('Other')
            ? [...formData.focusTreatments.filter(m => m !== 'Other'), formData.treatmentsOther]
            : formData.focusTreatments,
          leadVolume: formData.leadVolume,
          mustHave: formData.mustHave,
          skepticism: formData.skepticism === 'Other' ? formData.skepticismOther : formData.skepticism,
        };

        const response = await fetch('https://hook.eu2.make.com/4ao7q0wwnvtcvmyenuvnnsga4mq35ust', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(webhookData),
        });

        if (!response.ok) throw new Error('Failed to submit form');
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // ... (handleBack, renderSuccessBlock remain same)

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onNavigate('home');
    }
  };

  const renderSuccessBlock = () => (
    <div className="flex-1 flex flex-col items-center justify-center text-center animate-step-in py-6">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 relative z-10 animate-[bounce_2s_infinite]">
          <CheckCircle2 size={32} className="text-white" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 animate-ping">
          <Sparkles className="text-emerald-300" size={16} />
        </div>
        <div className="absolute -inset-4 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
      </div>

      <h2 className="serif text-3xl md:text-4xl text-gray-900 italic mb-2 leading-tight">Success!</h2>

      <div className="max-w-md space-y-1.5 mb-8">
        <p className="text-emerald-600 text-lg leading-relaxed serif italic">
          Your request for early access has been received.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          We're reviewing your application and will be in touch with you very soon!
        </p>
      </div>

      <button
        onClick={() => onNavigate('home')}
        className="group relative px-6 py-3.5 bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5 overflow-hidden hover:bg-emerald-500"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Home size={16} /> Return to Homepage
        </span>
      </button>
    </div>
  );

  const renderFormContent = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleNext} className="flex-1 flex flex-col h-full">
            <div className="flex-1">
              <h2 className="serif text-4xl md:text-5xl text-gray-900 italic mb-4 leading-tight">Secure Your<br />Practice's Future</h2>
              <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-6 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
              <p className="text-gray-600 text-sm mb-8 leading-relaxed max-w-md italic serif">If you're a practice owner looking to automate high-value patient intake, fill out the form below!</p>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <InputGroup label="First Name" value={formData.firstName} onChange={v => updateField('firstName', v)} placeholder="John" />
                  <InputGroup label="Last Name" value={formData.lastName} onChange={v => updateField('lastName', v)} placeholder="Doe" />
                </div>
                <InputGroup label="Work Email" type="email" value={formData.email} onChange={v => updateField('email', v)} placeholder="dr.john@clinic.com" />
                <InputGroup label="Practice Name" value={formData.practiceName} onChange={v => updateField('practiceName', v)} placeholder="Bright Smile Dental" />
                <InputGroup label="Website" value={formData.website} onChange={v => updateField('website', v)} placeholder="https://brightsmile.com" />
              </div>
            </div>

            <button
              type="submit"
              disabled={!isStepValid()}
              className={`w-full mt-8 py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 text-lg transform hover:-translate-y-1' : 'bg-gray-200 text-gray-400 cursor-not-allowed text-lg'
                }`}
            >
              Next Step <ArrowRight size={20} />
            </button>
          </form>
        );
      case 2:
      case 3:
      case 4:
      case 5:
        return (
          <div className="flex-1 flex flex-col h-full">
            <div className="mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">Deep Dive</span>
              </div>
              <h2 className="serif text-5xl md:text-6xl text-gray-900 italic leading-[1.1] mb-6 tracking-tight">
                Almost Finished...
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-md serif italic">
                Help us tailor the Iris AI experience for your practice's unique workflow.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              {step === 2 && (
                <>
                  <h3 className="text-gray-900 text-xl serif font-normal leading-snug mb-6">1. What's your role at the practice?</h3>
                  <div className="space-y-3">
                    {roleOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.role === opt} onClick={() => updateField('role', opt)} />)}
                  </div>
                  {formData.role === 'Other' && (
                    <div className="mt-4 animate-fade-in">
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 transition-all text-sm shadow-sm"
                        placeholder="Specify your role..."
                        value={formData.roleOther}
                        onChange={(e) => updateField('roleOther', e.target.value)}
                      />
                    </div>
                  )}
                </>
              )}
              {step === 3 && (
                <>
                  <h3 className="text-gray-900 text-xl serif font-normal leading-snug mb-6">2. How do you currently handle new patient enquiries?</h3>
                  <div className="space-y-3">
                    {currentProcessOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.currentProcess === opt} onClick={() => updateField('currentProcess', opt)} />)}
                  </div>
                  {formData.currentProcess === 'Other' && (
                    <div className="mt-4 animate-fade-in">
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 transition-all text-sm shadow-sm"
                        placeholder="Specify your process..."
                        value={formData.processOther}
                        onChange={(e) => updateField('processOther', e.target.value)}
                      />
                    </div>
                  )}
                </>
              )}
              {step === 4 && (
                <>
                  <h3 className="text-gray-900 text-xl serif font-normal leading-snug mb-6">3. Which treatments do you want to grow most?</h3>
                  <p className="text-emerald-600/60 text-xs mb-4 uppercase tracking-widest font-bold">Select all that apply</p>
                  <div className="space-y-3">
                    {focusTreatmentsOptions.map(opt => (
                      <OptionCard
                        key={opt}
                        label={opt}
                        selected={formData.focusTreatments.includes(opt)}
                        onClick={() => toggleMulti('focusTreatments', opt)}
                      />
                    ))}
                  </div>
                  {formData.focusTreatments.includes('Other') && (
                    <div className="mt-4 animate-fade-in">
                      <input
                        className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 transition-all text-sm shadow-sm"
                        placeholder="Specify other treatments..."
                        value={formData.treatmentsOther}
                        onChange={(e) => updateField('treatmentsOther', e.target.value)}
                      />
                    </div>
                  )}
                </>
              )}
              {step === 5 && (
                <>
                  <h3 className="text-gray-900 text-xl serif font-normal leading-snug mb-6">4. How many new enquiries do you get per month?</h3>
                  <div className="space-y-3">
                    {leadVolumeOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.leadVolume === opt} onClick={() => updateField('leadVolume', opt)} />)}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => handleNext()}
              disabled={!isStepValid()}
              className={`w-full mt-10 py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg text-lg transform hover:-translate-y-1' : 'bg-gray-200 text-gray-400 cursor-not-allowed text-lg'
                }`}
            >
              Continue <ArrowRight size={20} />
            </button>
          </div>
        );
      case 6:
        return (
          <div className="flex-1 flex flex-col h-full">
            <div className="mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">The "Must Have"</span>
              </div>
              <h2 className="serif text-5xl md:text-6xl text-gray-900 italic leading-[1.1] mb-6">
                Core Value...
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-md serif italic">
                Tell us about your vision for a perfect patient intake engine.
              </p>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-gray-900 text-xl serif font-normal leading-snug mb-6">5. What would make Iris AI a "must-have" tool for your practice?</h3>
              <textarea
                value={formData.mustHave}
                onChange={(e) => updateField('mustHave', e.target.value)}
                placeholder="Ex: Ability to integrate with my dentally software and book consults..."
                className="flex-1 min-h-[150px] bg-white border border-gray-200 rounded-xl px-6 py-5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none mb-10 text-base shadow-sm"
              />
            </div>

            <button
              onClick={() => handleNext()}
              disabled={!isStepValid()}
              className={`w-full py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg text-lg transform hover:-translate-y-1' : 'bg-gray-200 text-gray-400 cursor-not-allowed text-lg'
                }`}
            >
              Next <ArrowRight size={20} />
            </button>
          </div>
        );
      case 7:
        return (
          <div className="flex-1 flex flex-col h-full">
            <div className="mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">The Final Step</span>
              </div>
              <h2 className="serif text-5xl md:text-6xl text-gray-900 italic leading-[1.1] mb-6">
                Honesty Box...
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-md serif italic">
                Help us address common concerns before we launch.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              <h3 className="text-gray-900 text-xl serif font-normal leading-snug mb-6">6. What's your biggest concern about using AI in your practice?</h3>
              <div className="space-y-3">
                {skepticismOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.skepticism === opt} onClick={() => updateField('skepticism', opt)} />)}
              </div>
              {formData.skepticism === 'Other' && (
                <div className="mt-4 animate-fade-in">
                  <textarea
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 transition-all h-24 text-sm shadow-sm"
                    placeholder="Share your concerns..."
                    value={formData.skepticismOther}
                    onChange={(e) => updateField('skepticismOther', e.target.value)}
                  />
                </div>
              )}
            </div>

            <button
              onClick={() => handleNext()}
              disabled={!isStepValid() || isSubmitting}
              className={`w-full mt-10 py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() && !isSubmitting ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl scale-105 text-lg transform hover:-translate-y-1' : 'bg-gray-200 text-gray-400 cursor-not-allowed text-lg'
                }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Finish Application <Check size={24} strokeWidth={3} />
                </>
              )}
            </button>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6 overflow-x-hidden">
      <CosmicBackground />

      <div className={`relative z-10 w-full flex flex-col items-center ${isSubmitted ? 'justify-center py-12 md:py-24' : 'max-w-7xl mx-auto pt-32 pb-24'}`}>
        {!isSubmitted && (
          <div className="w-full">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 font-bold text-xs uppercase tracking-widest transition-colors mb-12 group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              {step === 1 ? 'Back to Home' : 'Previous Step'}
            </button>

            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <div className="flex flex-col">
                <div className="mb-8">
                  <h1 className="text-6xl md:text-7xl serif text-gray-900 leading-[1.1] mb-6">
                    Sign-Up For<br />
                    <span className="text-emerald-600 italic drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Early Access</span>
                  </h1>
                  <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                    Iris AI is currently in final testing with select practices. We're opening a limited number of spots for our exclusive beta program. From the applications, <span className="serif font-bold text-gray-900 italic">three practices</span> will receive the following lifetime benefits:
                  </p>
                </div>

                <div className="space-y-2">
                  <BenefitItem
                    icon={Target}
                    title="Be First in Your Area"
                    desc="Gain a 6-12 month competitive advantage over local clinics still using generic contact forms."
                  />
                  <BenefitItem
                    icon={ShieldCheck}
                    title="40% Lifetime Discount"
                    desc="Beta members lock in early-bird pricing forever, regardless of future platform updates or expansion."
                  />
                  <BenefitItem
                    icon={Zap}
                    title="Priority Feature Requests"
                    desc="Direct access to our engineering team to request custom templates and integrations specific to your services."
                    isLast={true}
                  />
                </div>
              </div>

              <div className="relative flex flex-col h-full">
                <div className="relative bg-white/60 rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden flex flex-col h-full backdrop-blur-xl">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none" />

                  <div key={step} className="flex-1 p-8 md:p-14 pt-12 relative z-10 animate-step-in flex flex-col h-full overflow-hidden">
                    {renderFormContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


        {isSubmitted && (
          <div className="max-w-xl mx-auto w-full animate-fade-in flex flex-col items-center justify-center">
            <div className="relative bg-white/80 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden w-full flex flex-col items-center justify-center p-6 backdrop-blur-2xl">
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
                  backgroundSize: '25px 25px'
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent opacity-50 pointer-events-none" />
              <div className="relative z-10 w-full flex flex-col items-center justify-center">
                {renderSuccessBlock()}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes step-in { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-step-in { animation: step-in 0.4s ease-out forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default SignUpPage;
