
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

  const planets = useMemo(() => [
    { size: 4, orbit: 180, duration: 25, color: '#f97316', delay: -2 },
    { size: 6, orbit: 320, duration: 45, color: '#ffffff', delay: -10 },
    { size: 5, orbit: 500, duration: 65, color: '#f97316', delay: -25 },
    { size: 8, orbit: 700, duration: 90, color: '#ffffff', delay: -5 },
  ], []);

  const stars = useMemo(() => [...Array(60)].map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: 1,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.4 + 0.1,
    depth: Math.random() * 15
  })), []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020202]">
      {/* Subtle single-color nebula glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Minimal Starfield */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
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

          {/* Minimal Central Star */}
          <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_20px_2px_#f97316] z-20" />
          <div className="absolute w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] animate-pulse" />

          {/* Orbits and Planets */}
          {planets.map((planet, i) => (
            <React.Fragment key={i}>
              {/* Clean Orbit Path */}
              <div
                className="absolute border border-white/[0.05] rounded-full"
                style={{
                  width: `${planet.orbit}px`,
                  height: `${planet.orbit}px`,
                }}
              />

              {/* Orbital Motion Wrapper */}
              <div
                className="absolute flex items-center justify-center animate-orbit"
                style={{
                  width: `${planet.orbit}px`,
                  height: `${planet.orbit}px`,
                  animationDuration: `${planet.duration}s`,
                  animationDelay: `${planet.delay}s`
                }}
              >
                {/* Planet Dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotateX-[-70deg]">
                  <div
                    className="rounded-full transition-transform hover:scale-150"
                    style={{
                      width: `${planet.size}px`,
                      height: `${planet.size}px`,
                      backgroundColor: planet.color,
                      boxShadow: planet.color === '#f97316' ? `0 0 10px #f97316` : `0 0 8px rgba(255,255,255,0.5)`
                    }}
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
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
  <div className={`flex gap-5 group items-start p-6 -ml-6 rounded-[2rem] transition-all duration-500 hover:bg-zinc-900/40 hover:shadow-xl hover:shadow-orange-950/5 hover:-translate-y-1 cursor-default ${isLast ? 'mb-0' : ''}`}>
    <div className="shrink-0 w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black text-orange-500">
      <Icon size={20} className="transition-colors duration-300" />
    </div>
    <div>
      <h3 className="serif font-bold text-white text-lg mb-1 transition-colors duration-300 group-hover:text-orange-400">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed max-w-sm transition-colors duration-300 group-hover:text-gray-300">
        {desc}
      </p>
    </div>
  </div>
);

const InputGroup: React.FC<{ label: string, value: string, onChange: (v: string) => void, placeholder: string, type?: string }> = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500/60 ml-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-zinc-950/40 border border-white/10 rounded-xl py-3 px-5 text-white placeholder:text-zinc-800 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
    />
  </div>
);

const OptionCard: React.FC<{ label: string, selected: boolean, onClick: () => void }> = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`group w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 ${selected
      ? 'bg-orange-500 border-orange-400 text-black shadow-lg shadow-orange-500/20'
      : 'bg-zinc-950/40 border-white/10 text-gray-400 hover:border-orange-500/50'
      }`}
  >
    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${selected ? 'bg-white border-white text-orange-600' : 'border-white/20 bg-zinc-950/60'
      }`}>
      {selected && <Check size={12} strokeWidth={4} />}
    </div>
    <span className={`font-medium text-sm transition-colors ${selected ? 'text-black' : 'group-hover:text-gray-200'}`}>{label}</span>
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
    agencyName: '',
    website: '',
    role: '',
    roleOther: '',
    currentMagnets: '',
    magnetsOther: '',
    desiredMagnets: [] as string[],
    desiredOther: '',
    leadVolume: '',
    mustHave: '',
    skepticism: '',
    skepticismOther: ''
  });

  const roleOptions = ["Agency Owner/Founder", "Marketing Director/Manager", "Sales Director/Manager", "Other"];
  const currentMagnetOptions = ["Generic lead magnets (PDFs, guides)", "Free audits/assessments", "Reports", "Other"];
  const desiredMagnetOptions = ["Custom research reports", "Personalized strategy guides", "Tailored audits", "Custom templates/frameworks", "Other"];
  const leadVolumeOptions = ["0-10", "11-50", "51-100", "101-500", "500+"];
  const skepticismOptions = ["Quality/accuracy of content", "Sounding too robotic", "Privacy/data security", "Integration complexity", "Other"];

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleMulti = (field: 'desiredMagnets', value: string) => {
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
      case 1: return !!(formData.firstName && formData.lastName && formData.email && formData.agencyName && formData.website);
      case 2: return formData.role === 'Other' ? !!formData.roleOther : !!formData.role;
      case 3: return formData.currentMagnets === 'Other' ? !!formData.magnetsOther : !!formData.currentMagnets;
      case 4:
        if (formData.desiredMagnets.length === 0) return false;
        if (formData.desiredMagnets.includes('Other')) return !!formData.desiredOther;
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
      // Final step - submit to webhook
      setIsSubmitting(true);
      try {
        const webhookData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          agencyName: formData.agencyName,
          website: formData.website,
          role: formData.role === 'Other' ? formData.roleOther : formData.role,
          currentMagnets: formData.currentMagnets === 'Other' ? formData.magnetsOther : formData.currentMagnets,
          desiredMagnets: formData.desiredMagnets.includes('Other')
            ? [...formData.desiredMagnets.filter(m => m !== 'Other'), formData.desiredOther]
            : formData.desiredMagnets,
          leadVolume: formData.leadVolume,
          mustHave: formData.mustHave,
          skepticism: formData.skepticism === 'Other' ? formData.skepticismOther : formData.skepticism,
        };

        const response = await fetch('https://hook.eu2.make.com/4ao7q0wwnvtcvmyenuvnnsga4mq35ust', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        setIsSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Still show success to user even if webhook fails
        setIsSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

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
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/40 relative z-10 animate-[bounce_2s_infinite]">
          <CheckCircle2 size={32} className="text-black" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 animate-ping">
          <Sparkles className="text-orange-300" size={16} />
        </div>
        <div className="absolute -inset-4 bg-orange-400/20 rounded-full blur-xl animate-pulse" />
      </div>

      <h2 className="serif text-3xl md:text-4xl text-white italic mb-2 leading-tight">Success!</h2>

      <div className="max-w-md space-y-1.5 mb-8">
        <p className="text-orange-100 text-lg leading-relaxed serif italic">
          Your request for early access has been received.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          We're reviewing your application and will be in touch with you very soon!
        </p>
      </div>

      <button
        onClick={() => onNavigate('home')}
        className="group relative px-6 py-3.5 bg-orange-500 text-black rounded-xl text-sm font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5 overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Home size={16} /> Return to Homepage
        </span>
        <div className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );

  const renderFormContent = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleNext} className="flex-1 flex flex-col h-full">
            <div className="flex-1">
              <h2 className="serif text-4xl md:text-5xl text-white italic mb-4 leading-tight">Secure Your<br />Spot Now!</h2>
              <div className="w-16 h-1.5 bg-orange-500 rounded-full mb-6" />
              <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md italic serif">If you're an agency owner looking to automate personalization, fill out the form below!</p>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <InputGroup label="First Name" value={formData.firstName} onChange={v => updateField('firstName', v)} placeholder="John" />
                  <InputGroup label="Last Name" value={formData.lastName} onChange={v => updateField('lastName', v)} placeholder="Doe" />
                </div>
                <InputGroup label="Work Email" type="email" value={formData.email} onChange={v => updateField('email', v)} placeholder="john@agency.com" />
                <InputGroup label="Agency Name" value={formData.agencyName} onChange={v => updateField('agencyName', v)} placeholder="Midas Marketing" />
                <InputGroup label="Website" value={formData.website} onChange={v => updateField('website', v)} placeholder="https://agency.com" />
              </div>
            </div>

            <button
              type="submit"
              disabled={!isStepValid()}
              className={`w-full mt-8 py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() ? 'bg-orange-500 hover:bg-orange-400 text-black shadow-lg shadow-orange-500/20 text-lg' : 'bg-zinc-800 text-zinc-600 cursor-not-allowed text-lg'
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
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">Deep Dive</span>
              </div>
              <h2 className="serif text-5xl md:text-6xl text-white italic leading-[1.1] mb-6 tracking-tight">
                Almost Finished...
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-md serif italic">
                Help us tailor the Midas AI experience for your agency's unique workflow.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              {step === 2 && (
                <>
                  <h3 className="text-white text-xl serif font-normal leading-snug mb-6">1. What's your role at the agency?</h3>
                  <div className="space-y-3">
                    {roleOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.role === opt} onClick={() => updateField('role', opt)} />)}
                  </div>
                  {formData.role === 'Other' && (
                    <div className="mt-4 animate-fade-in">
                      <input
                        className="w-full bg-zinc-950/40 border border-white/20 rounded-xl p-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-orange-500 transition-all text-sm"
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
                  <h3 className="text-white text-xl serif font-normal leading-snug mb-6">2. What type of lead magnets do you currently use?</h3>
                  <div className="space-y-3">
                    {currentMagnetOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.currentMagnets === opt} onClick={() => updateField('currentMagnets', opt)} />)}
                  </div>
                  {formData.currentMagnets === 'Other' && (
                    <div className="mt-4 animate-fade-in">
                      <input
                        className="w-full bg-zinc-950/40 border border-white/20 rounded-xl p-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-orange-500 transition-all text-sm"
                        placeholder="Specify your lead magnets..."
                        value={formData.magnetsOther}
                        onChange={(e) => updateField('magnetsOther', e.target.value)}
                      />
                    </div>
                  )}
                </>
              )}
              {step === 4 && (
                <>
                  <h3 className="text-white text-xl serif font-normal leading-snug mb-6">3. Which personalized lead magnets would be most valuable?</h3>
                  <p className="text-orange-500/60 text-xs mb-4 uppercase tracking-widest font-bold">Select all that apply</p>
                  <div className="space-y-3">
                    {desiredMagnetOptions.map(opt => (
                      <OptionCard
                        key={opt}
                        label={opt}
                        selected={formData.desiredMagnets.includes(opt)}
                        onClick={() => toggleMulti('desiredMagnets', opt)}
                      />
                    ))}
                  </div>
                  {formData.desiredMagnets.includes('Other') && (
                    <div className="mt-4 animate-fade-in">
                      <input
                        className="w-full bg-zinc-950/40 border border-white/20 rounded-xl p-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-orange-500 transition-all text-sm"
                        placeholder="Specify other lead magnets..."
                        value={formData.desiredOther}
                        onChange={(e) => updateField('desiredOther', e.target.value)}
                      />
                    </div>
                  )}
                </>
              )}
              {step === 5 && (
                <>
                  <h3 className="text-white text-xl serif font-normal leading-snug mb-6">4. How many leads does your agency generate per month?</h3>
                  <div className="space-y-3">
                    {leadVolumeOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.leadVolume === opt} onClick={() => updateField('leadVolume', opt)} />)}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => handleNext()}
              disabled={!isStepValid()}
              className={`w-full mt-10 py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() ? 'bg-orange-500 hover:bg-orange-400 text-black shadow-lg text-lg' : 'bg-zinc-800 text-zinc-600 cursor-not-allowed text-lg'
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
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">The "Must Have"</span>
              </div>
              <h2 className="serif text-5xl md:text-6xl text-white italic leading-[1.1] mb-6">
                Core Value...
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-md serif italic">
                Tell us about your vision for a perfect lead generation engine.
              </p>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-white text-xl serif font-normal leading-snug mb-6">5. What would make Midas AI a "must-have" tool for your agency?</h3>
              <textarea
                value={formData.mustHave}
                onChange={(e) => updateField('mustHave', e.target.value)}
                placeholder="Ex: Ability to integrate with my custom CRM and generate 20-page audits instantly..."
                className="flex-1 min-h-[150px] bg-zinc-950/40 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-none mb-10 text-base"
              />
            </div>

            <button
              onClick={() => handleNext()}
              disabled={!isStepValid()}
              className={`w-full py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() ? 'bg-orange-500 hover:bg-orange-400 text-black shadow-lg text-lg' : 'bg-zinc-800 text-zinc-600 cursor-not-allowed text-lg'
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
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">The Final Step</span>
              </div>
              <h2 className="serif text-5xl md:text-6xl text-white italic leading-[1.1] mb-6">
                Honesty Box...
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-md serif italic">
                Help us address common concerns before we launch.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              <h3 className="text-white text-xl serif font-normal leading-snug mb-6">6. What are you most skeptical about when using this technology?</h3>
              <div className="space-y-3">
                {skepticismOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.skepticism === opt} onClick={() => updateField('skepticism', opt)} />)}
              </div>
              {formData.skepticism === 'Other' && (
                <div className="mt-4 animate-fade-in">
                  <textarea
                    className="w-full bg-zinc-950/40 border border-white/20 rounded-xl p-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-orange-500 transition-all h-24 text-sm"
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
              className={`w-full mt-10 py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() && !isSubmitting ? 'bg-orange-500 hover:bg-orange-400 text-black shadow-xl scale-105 text-lg' : 'bg-zinc-800 text-zinc-600 cursor-not-allowed text-lg'
                }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
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
              className="flex items-center gap-2 text-zinc-500 hover:text-orange-500 font-bold text-xs uppercase tracking-widest transition-colors mb-12 group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              {step === 1 ? 'Back to Home' : 'Previous Step'}
            </button>

            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <div className="flex flex-col">
                <div className="mb-8">
                  <h1 className="text-6xl md:text-7xl serif text-white leading-[1.1] mb-6">
                    Sign-Up For<br />
                    <span className="text-orange-500 italic drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">Early Access</span>
                  </h1>
                  <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
                    Midas AI is currently in final testing with select agencies. We're opening a limited number of spots for our exclusive beta program. From the applications, <span className="serif font-bold text-white italic">three agencies</span> will receive the following lifetime benefits:
                  </p>
                </div>

                <div className="space-y-2">
                  <BenefitItem
                    icon={Target}
                    title="Be First to Market"
                    desc="Gain a 6-12 month competitive advantage over agencies still using generic PDFs by offering hyper-personalized lead gen."
                  />
                  <BenefitItem
                    icon={ShieldCheck}
                    title="40% Lifetime Discount"
                    desc="Beta members lock in early-bird pricing forever, regardless of future platform updates or expansion."
                  />
                  <BenefitItem
                    icon={Zap}
                    title="Priority Feature Requests"
                    desc="Direct access to our engineering team to request custom templates and integrations specific to your niche."
                    isLast={true}
                  />
                </div>
              </div>

              <div className="relative flex flex-col h-full">
                <div className="relative bg-zinc-900/40 rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden flex flex-col h-full backdrop-blur-xl">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-950/20 blur-[100px] rounded-full pointer-events-none" />

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
            <div className="relative bg-zinc-900/60 rounded-[3rem] shadow-2xl border border-white/10 overflow-hidden w-full flex flex-col items-center justify-center p-6 backdrop-blur-2xl">
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
                  backgroundSize: '25px 25px'
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent opacity-50 pointer-events-none" />
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
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(249, 115, 22, 0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default SignUpPage;
