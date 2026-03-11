import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.bg-parallax', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
      
      gsap.from('.ph-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-48 px-6 md:px-12 lg:px-24 bg-dark text-primary overflow-hidden w-full">
      <div 
        className="bg-parallax absolute top-[-20%] left-0 w-full h-[140%] z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop")' }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12">
        <div className="ph-text">
          <p className="font-sans text-xl md:text-2xl text-primary/60 tracking-tight">
            Most infrastructure focuses on: <span className="text-primary font-bold">generic hyperscale.</span>
          </p>
        </div>
        
        <div className="ph-text">
          <p className="font-sans text-xl md:text-2xl text-primary/60 tracking-tight">
            We focus on:
          </p>
          <h2 className="font-drama italic text-5xl md:text-8xl lg:text-[7rem] leading-none mt-4 text-primary">
            Absolute <span className="text-accent underline decoration-accent/50 underline-offset-8">Sovereignty</span>.
          </h2>
        </div>
      </div>
    </section>
  );
}
