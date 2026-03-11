import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero({ onBookClick }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1728493411049-f0a8b0d68885?q=80&w=2000&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />

      <div className="relative z-10 max-w-5xl">
        <h1 className="flex flex-col gap-2">
          <span className="hero-elem font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-primary uppercase tracking-tight">
            Audit the
          </span>
          <span className="hero-elem font-drama italic text-7xl md:text-9xl text-primary leading-none" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}>
            Sovereign Layer.
          </span>
        </h1>
        <p className="hero-elem mt-8 text-primary/80 font-data text-2xl md:text-3xl max-w-3xl leading-relaxed">
          Security audits, infrastructure scaling, and Agentic AI build consulting solutions for the Canadian Sovereign AI initiatives.
        </p>
        <div className="hero-elem mt-10">
          <button
            onClick={onBookClick}
            className="group relative overflow-hidden rounded-[2rem] bg-accent text-white px-8 py-4 font-sans font-bold transition-transform duration-300 hover:scale-[1.03]" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
            <span className="relative z-10 flex items-center gap-2">
              Book a 15-min audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 z-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="absolute inset-0 z-0 bg-white text-dark top-0 left-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-center gap-2 font-bold pointer-events-none">
              Book a 15-min audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
