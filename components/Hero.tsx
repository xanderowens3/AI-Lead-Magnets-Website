
import { ArrowRight } from 'lucide-react';
import { FileCheckIcon, CurrencyIcon, HandshakeIcon } from './Icons';

interface HeroProps {
  onSignUp: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignUp }) => {
  return (
    <section id="home" className="relative pt-40 pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          NEW: DIGITAL TREATMENT COORDINATOR FOR DENTISTS
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-gray-900 block mb-2">{`Turn more website visitors`}</span>
          <span className="gradient-text serif italic">{`into booked appointments`}</span>
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Like having a digital Treatment Coordinator who interviews every visitor, qualifies them for finance, and hands them a personalized clinical guide—before they even walk through your door.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onSignUp}
            className="group relative px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center gap-2"
          >
            Get Your Free Patient Assessment System
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Trusted by 100+ UK Practices</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: FileCheckIcon, label: 'Automated Custom Reports' },
            { icon: CurrencyIcon, label: 'Qualify £5k+ Cases' },
            { icon: HandshakeIcon, label: 'Zero-Pressure Conversion' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/50 border border-gray-100 backdrop-blur-sm">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-medium text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;