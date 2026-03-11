import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
  {
    step: '01',
    title: 'AUDIT',
    desc: 'Assess current infrastructure for Canadian sovereignty compliance.',
    Visual: () => (
      <svg className="w-full h-full text-accent" viewBox="0 0 100 100">
        <g className="spin-slow" style={{ transformOrigin: 'center' }}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="1" />
        </g>
      </svg>
    )
  },
  {
    step: '02',
    title: 'ISOLATE',
    desc: 'Establish a fenced logic layer to ensure data residency and security.',
    Visual: () => (
      <div className="w-full h-full flex flex-col justify-between py-10 relative">
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 opacity-20">
           {Array.from({length: 100}).map((_, i) => <div key={i} className="bg-primary rounded-full w-1 h-1 place-self-center"></div>)}
        </div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-accent shadow-[0_0_8px_#E63B2E] scanner-line"></div>
      </div>
    )
  },
  {
    step: '03',
    title: 'SCALE',
    desc: 'Deploy and scale Agentic AI solutions within the secured perimeter.',
    Visual: () => (
      <svg className="w-full h-full text-accent" viewBox="0 0 200 100" preserveAspectRatio="none">
        <path 
          className="waveform-path"
          d="M0,50 L40,50 L50,20 L60,80 L70,50 L200,50" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round" 
        />
      </svg>
    )
  }
];

export default function Protocol() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, index) => {
        if (index === 0) return;
        gsap.to(cards[index - 1], {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(20px)',
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          }
        });
      });
      
      gsap.to('.spin-slow', { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
      gsap.to('.scanner-line', { top: '100%', duration: 2, yoyo: true, repeat: -1, ease: 'power1.inOut' });
      
      const wavePaths = document.querySelectorAll('.waveform-path');
      wavePaths.forEach(wavePath => {
        const len = wavePath.getTotalLength();
        gsap.set(wavePath, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(wavePath, { strokeDashoffset: 0, duration: 2, repeat: -1, ease: 'power2.inOut', yoyo: true });
      });

    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className="relative bg-background">
      {protocols.map((p, i) => (
        <div 
          key={i} 
          className="protocol-card sticky top-0 h-[100dvh] w-full flex items-center justify-center p-6 md:p-12 lg:p-24 bg-background z-10"
          style={{ zIndex: i + 10 }}
        >
          <div className="w-full max-w-6xl h-full max-h-[700px] rounded-[3rem] bg-dark text-primary p-8 md:p-16 flex flex-col md:flex-row gap-8 shadow-xl overflow-hidden relative border border-dark/20">
            <div className="flex-1 relative flex items-center justify-center border border-primary/10 rounded-2xl bg-dark/50 overflow-hidden min-h-[50%] md:min-h-0">
               <p.Visual />
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
               <div className="font-data text-accent text-sm mb-4 border border-accent/30 rounded-full px-4 py-1 self-start">STAGE {p.step}</div>
               <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6 tracking-tight uppercase">{p.title}</h2>
               <p className="font-sans text-lg md:text-xl text-primary/70 leading-relaxed max-w-md">
                 {p.desc}
               </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
