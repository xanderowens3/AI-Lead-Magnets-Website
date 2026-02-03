
import { GoogleGenAI } from "@google/genai";
import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { Analytics } from "@vercel/analytics/react"; // Vercel Analytics
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SignUpPage from './components/SignUpPage';

// Memoize sections to avoid unnecessary re-renders
const NavbarMemo = React.memo(Navbar);
const ComparisonMemo = React.memo(Comparison);
const SolutionsMemo = React.memo(Solutions);
const BenefitsMemo = React.memo(Benefits);
const HowItWorksMemo = React.memo(HowItWorks);
const FAQMemo = React.memo(FAQ);
const FooterMemo = React.memo(Footer);

/**
 * Performance-First Scroll Tracker
 */
const ProgressBar = React.memo(({ isVisible }: { isVisible: boolean }) => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(null);

  useEffect(() => {
    if (!isVisible) return;
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        setProgress((currentScroll / (totalScroll || 1)) * 100);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-emerald-600 z-[100] shadow-[0_0_20px_rgba(16,185,129,1)] pointer-events-none"
      style={{ width: `${progress}%`, transform: 'translateZ(0)' }}
    />
  );
});

/**
 * Architectural SolarBackground: 
 * Features a scroll-responsive solar system and a cursor-tracking emerald glow.
 */
const SolarBackground = React.memo(() => {
  const [scrollPct, setScrollPct] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRafRef = useRef<number>(null);
  const mouseRafRef = useRef<number>(null);

  useEffect(() => {
    // Handle Scroll
    const handleScroll = () => {
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = requestAnimationFrame(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = window.scrollY / (docHeight || 1);
        setScrollPct(pct);
        if (containerRef.current) {
          containerRef.current.style.setProperty('--scroll-pct', pct.toString());
        }
      });
    };

    // Handle Mouse Move for Glow
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseRafRef.current) cancelAnimationFrame(mouseRafRef.current);
      mouseRafRef.current = requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
          containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
      if (mouseRafRef.current) cancelAnimationFrame(mouseRafRef.current);
    };
  }, []);



  const focalPoint = useMemo(() => ({
    x: 90 - scrollPct * 20,
    y: 15 + scrollPct * 75
  }), [scrollPct]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none transition-colors duration-1000 ease-in-out"
      style={{
        backgroundColor: '#ffffff',
        transform: 'translateZ(0)',
        '--mouse-x': '50%',
        '--mouse-y': '50%'
      } as any}
    >
      {/* Interactive Cursor Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300 will-change-transform"
        style={{
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          left: 0,
          top: 0,
          transform: 'translate3d(calc(var(--mouse-x) - 300px), calc(var(--mouse-y) - 300px), 0)',
          zIndex: 1
        }}
      />

      {/* Background Atmosphere - Global Gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${focalPoint.x}% ${focalPoint.y}%, var(--glow-color, rgba(16,185,129,0.1)) 0%, transparent 80%)`,
          opacity: 0.7
        }}
      />

      {/* Subtle Grid - Radial Masked */}
      <div
        className="absolute inset-0 opacity-[0.8] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(17, 24, 39, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 24, 39, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: `radial-gradient(circle at ${focalPoint.x}% ${focalPoint.y}%, black, transparent 90%)`,
          WebkitMaskImage: `radial-gradient(circle at ${focalPoint.x}% ${focalPoint.y}%, black, transparent 90%)`
        }}
      />

      {/* Architectural Solar System - REMOVED per user request */}
      <div
        className="absolute flex items-center justify-center transition-transform duration-700 ease-out will-change-transform"
        style={{
          left: `${focalPoint.x}vw`,
          top: `${focalPoint.y}vh`,
          perspective: '1500px',
          transform: `translate(-50%, -50%) rotateX(${15 + scrollPct * 30}deg) scale(${0.8 + scrollPct * 0.4})`
        }}
      >
        <div className="relative w-[100vw] h-[100vw] flex items-center justify-center transform rotateX-[70deg]">



        </div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute w-px h-px bg-gray-600 rounded-full animate-twinkle"
            style={{ top: `${(i * 13.7) % 100}%`, left: `${(i * 21.3) % 100}%`, opacity: Math.random(), animationDelay: `${Math.random() * 5}s` }} />
        ))}
      </div>

      <div className="absolute inset-0 noise opacity-[0.05] mix-blend-multiply pointer-events-none" />

      <style>{`
        :root {
          --scroll-pct: 0;
          --glow-color: rgba(16, 185, 129, 0.1);
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit { animation: orbit linear infinite; }

        @keyframes pulse-core {
          0%, 100% { transform: scale(0.9); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
        .animate-pulse-core { animation: pulse-core 4s ease-in-out infinite; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
});

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'signup'>('home');

  const handleNavigate = useCallback((newView: 'home' | 'signup') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSignUp = useCallback(() => handleNavigate('signup'), [handleNavigate]);
  const handleHome = useCallback(() => handleNavigate('home'), [handleNavigate]);

  return (
    <div className="relative min-h-screen text-gray-900 selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      <SolarBackground />
      <ProgressBar isVisible={view === 'home'} />
      <NavbarMemo onSignUp={handleSignUp} onHome={handleHome} currentView={view} />

      {view === 'home' ? (
        <main className="relative z-10 w-full">
          <Hero onSignUp={handleSignUp} />
          <ComparisonMemo />
          <SolutionsMemo />
          <BenefitsMemo />
          <HowItWorksMemo />
          <SocialProof onSignUp={handleSignUp} />
          <FAQMemo />
        </main>
      ) : (
        <SignUpPage onNavigate={handleNavigate} />
      )}

      <FooterMemo onHome={handleHome} />
      <Analytics />
    </div>
  );
};

export default App;
