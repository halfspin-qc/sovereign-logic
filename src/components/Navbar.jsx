import React, { useEffect, useState } from 'react';

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 py-4 flex items-center justify-between gap-8 md:gap-16 w-[90%] max-w-5xl
        ${scrolled 
          ? 'bg-background/80 backdrop-blur-xl border border-dark/10 text-dark shadow-sm' 
          : 'bg-transparent text-primary'}`}
    >
      <div className="font-heading font-bold text-xl tracking-tight whitespace-nowrap">
        SOVEREIGN LOGIC
      </div>
      <div className="hidden md:flex items-center gap-8 font-sans text-base font-bold">
        <a href="#audit" className="hover:-translate-y-[1px] transition-transform">Audit</a>
        <a href="#fenced-layer" className="hover:-translate-y-[1px] transition-transform">Fenced Layer</a>
        <a href="#roadmap" className="hover:-translate-y-[1px] transition-transform">Roadmap</a>
      </div>
      <button 
        onClick={onBookClick}
        className="group relative overflow-hidden rounded-[2rem] bg-accent text-white px-6 py-2.5 font-sans text-base font-bold transition-transform duration-300 hover:scale-[1.03]" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
        <span className="relative z-10">Book Audit</span>
        <span className="absolute inset-0 z-0 bg-dark translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      </button>
    </nav>
  );
}
