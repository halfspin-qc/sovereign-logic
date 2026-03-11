import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Footer from './components/Footer';
import AuditSurvey from './components/AuditSurvey';

export default function App() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  return (
    <main className="w-full min-h-screen relative">
      <Navbar onBookClick={() => setIsSurveyOpen(true)} />
      <Hero onBookClick={() => setIsSurveyOpen(true)} />
      <Features />
      <Philosophy />
      <Protocol />
      
      <section className="py-40 px-6 flex justify-center items-center bg-background relative z-20">
        <div className="max-w-4xl w-full text-center flex flex-col items-center">
           <h2 className="font-heading font-bold text-5xl md:text-7xl mb-8 tracking-tight">Ready to secure the grid?</h2>
           <button 
            onClick={() => setIsSurveyOpen(true)}
            className="group relative overflow-hidden rounded-[2rem] bg-accent text-white px-10 py-5 font-sans font-bold text-lg transition-transform duration-300 hover:scale-[1.03]" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
            <span className="relative z-10 flex items-center gap-2">
              Book a 15-min audit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 z-0 bg-dark translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="absolute inset-0 z-0 bg-dark text-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-center gap-2 font-bold top-0">
               Book a 15-min audit
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </section>
      
      <Footer />

      {isSurveyOpen && (
        <AuditSurvey onClose={() => setIsSurveyOpen(false)} />
      )}
    </main>
  );
}
