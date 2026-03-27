import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-primary rounded-t-[4rem] px-6 md:px-12 lg:px-24 py-16 md:py-24 relative z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="font-heading font-bold text-3xl mb-4 tracking-tight">SOVEREIGN LOGIC</h2>
            <p className="font-sans text-primary/70 max-w-sm">
              Securing the Canadian Sovereign AI roadmap, one fenced logic layer at a time.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-3 font-data text-xs px-4 py-2 bg-primary/5 rounded-full w-max border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            SYSTEM OPERATIONAL
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-heading font-bold tracking-widest text-xs text-primary/50 mb-4">PLATFORM</h4>
          <div className="flex items-center gap-3 opacity-50 pointer-events-none">
            <a href="#" className="font-sans text-sm">Risk Assessment</a>
            <span className="text-[9px] font-sans bg-primary/10 text-primary/70 px-2 py-0.5 rounded-full uppercase tracking-wider">Coming soon</span>
          </div>
          <div className="flex items-center gap-3 opacity-50 pointer-events-none">
            <a href="#" className="font-sans text-sm">Compliance Verification</a>
            <span className="text-[9px] font-sans bg-primary/10 text-primary/70 px-2 py-0.5 rounded-full uppercase tracking-wider">Coming soon</span>
          </div>
          <div className="flex items-center gap-3 opacity-50 pointer-events-none">
            <a href="#" className="font-sans text-sm">Infrastructure Scanner</a>
            <span className="text-[9px] font-sans bg-primary/10 text-primary/70 px-2 py-0.5 rounded-full uppercase tracking-wider">Coming soon</span>
          </div>
          <div className="flex items-center gap-3 opacity-50 pointer-events-none">
            <a href="#" className="font-sans text-sm">Sovereign Layer Pricing</a>
            <span className="text-[9px] font-sans bg-primary/10 text-primary/70 px-2 py-0.5 rounded-full uppercase tracking-wider">Coming soon</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-heading font-bold tracking-widest text-xs text-primary/50 mb-4">LEGAL</h4>
          <div className="flex items-center gap-3 opacity-50 pointer-events-none">
            <a href="#" className="font-sans text-sm">Privacy Policy</a>
            <span className="text-[9px] font-sans bg-primary/10 text-primary/70 px-2 py-0.5 rounded-full uppercase tracking-wider">Coming soon</span>
          </div>
          <div className="flex items-center gap-3 opacity-50 pointer-events-none">
            <a href="#" className="font-sans text-sm">Terms of Service</a>
            <span className="text-[9px] font-sans bg-primary/10 text-primary/70 px-2 py-0.5 rounded-full uppercase tracking-wider">Coming soon</span>
          </div>
          <div className="flex items-center gap-3 opacity-50 pointer-events-none">
            <a href="#" className="font-sans text-sm">Data Residency</a>
            <span className="text-[9px] font-sans bg-primary/10 text-primary/70 px-2 py-0.5 rounded-full uppercase tracking-wider">Coming soon</span>
          </div>
          <div className="flex items-center gap-3 opacity-50 pointer-events-none">
            <a href="#" className="font-sans text-sm">Contact Support</a>
            <span className="text-[9px] font-sans bg-primary/10 text-primary/70 px-2 py-0.5 rounded-full uppercase tracking-wider">Coming soon</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-data text-primary/40">
        <p>&copy; 2026 Sovereign Logic Inc. All rights reserved.</p>
        <p>Built for the Canadian Grid.</p>
      </div>
    </footer>
  );
}
