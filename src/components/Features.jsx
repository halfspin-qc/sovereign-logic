import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
  const [items, setItems] = useState([
    "Threat Assessment",
    "Compliance Verification",
    "Infrastructure Scanning"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-[400px] relative overflow-hidden group">
      <h3 className="font-heading font-bold text-2xl mb-2">Security Audits</h3>
      <p className="font-sans text-sm text-dark/70 mb-8">2026 Canadian security and compliance audits.</p>
      
      <div className="flex-1 relative flex items-center justify-center">
        {items.map((item, index) => {
          const isTop = index === 0;
          const isMid = index === 1;
          
          return (
            <div 
              key={item}
              className="absolute w-full px-6 py-4 rounded-xl bg-background border border-dark/10 shadow-sm transition-all duration-700 font-data text-xs text-center"
              style={{
                top: isTop ? '15%' : isMid ? '35%' : '55%',
                transform: `scale(${isTop ? 1 : isMid ? 0.95 : 0.9})`,
                opacity: isTop ? 1 : isMid ? 0.6 : 0.3,
                zIndex: 3 - index,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              [SCAN] {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TypewriterCard = () => {
  const msgs = [
    "[SYS_INIT] Fencing logic partition...",
    "[VERIFY] Data sovereignty confirmed...",
    "[MONITOR] Live node status: secure..."
  ];
  const [text, setText] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    let currentMsg = msgs[msgIdx];
    let charIdx = 0;
    let timer;
    
    setText("");

    const type = () => {
      if (charIdx < currentMsg.length) {
        setText(currentMsg.substring(0, charIdx + 1));
        charIdx++;
        timer = setTimeout(type, 50);
      } else {
        setTimeout(() => {
          setMsgIdx((prev) => (prev + 1) % msgs.length);
        }, 2000);
      }
    };
    
    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, [msgIdx]);

  return (
    <div className="bg-primary border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-[400px]">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-heading font-bold text-2xl">Logic Layer</h3>
        <div className="flex items-center gap-2 text-xs font-data bg-dark text-primary px-3 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          Live Feed
        </div>
      </div>
      <p className="font-sans text-sm text-dark/70 mb-8">Fenced Logic Layer for Canada.</p>
      
      <div className="flex-1 bg-dark text-primary rounded-xl p-6 font-data text-sm flex items-start">
        <span className="text-accent mr-2">{'>'}</span>
        <span className="break-all">{text}<span className="inline-block w-2 bg-accent h-4 ml-1 animate-pulse"></span></span>
      </div>
    </div>
  );
};

const SchedulerCard = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.set('.cursor', { x: 0, y: 0, opacity: 0 });
      tl.to('.cursor', { x: 30, y: 30, opacity: 1, duration: 0.5, ease: 'power2.out' });
      tl.to('.cursor', { x: 120, y: 60, duration: 1, ease: 'power2.inOut' });
      tl.to('.cursor', { scale: 0.8, duration: 0.1 });
      tl.to('.day-wed', { backgroundColor: '#E63B2E', color: '#fff', duration: 0.1 }, "<");
      tl.to('.cursor', { scale: 1, duration: 0.1 });
      tl.to('.cursor', { x: 200, y: 150, duration: 1, ease: 'power2.inOut', delay: 0.5 });
      tl.to('.cursor', { scale: 0.8, duration: 0.1 });
      tl.to('.btn-save', { scale: 0.95, duration: 0.1 }, "<");
      tl.to('.cursor', { scale: 1, duration: 0.1 });
      tl.to('.btn-save', { scale: 1, duration: 0.1 }, "<");
      tl.to('.cursor', { x: 250, y: 200, opacity: 0, duration: 0.5, delay: 0.5 });
      tl.to('.day-wed', { backgroundColor: 'transparent', color: '#111111', duration: 0 }, "+=0.5");
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const days = ['S','M','T','W','T','F','S'];

  return (
    <div ref={containerRef} id="roadmap" className="bg-primary border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-[400px] relative">
      <h3 className="font-heading font-bold text-2xl mb-2">AI Roadmap</h3>
      <p className="font-sans text-sm text-dark/70 mb-8">Sovereign AI roadmap implementation.</p>
      
      <div className="flex-1 border border-dark/10 rounded-xl p-6 relative flex flex-col justify-between">
        <div className="flex justify-between w-full max-w-[200px]">
          {days.map((d, i) => (
             <div key={i} className={`w-6 h-6 rounded flex items-center justify-center font-data text-xs font-bold ${i === 3 ? 'day-wed' : ''}`}>
               {d}
             </div>
          ))}
        </div>
        
        <div className="btn-save mt-auto self-end bg-dark text-primary px-4 py-1.5 rounded-full font-sans tracking-tight text-xs">
          Save Protocol
        </div>
        
        <div className="cursor absolute top-0 left-0 z-10 w-6 h-6 text-dark fill-current drop-shadow-md pointer-events-none">
          <svg viewBox="0 0 24 24">
            <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2 1-3.2-7.4-4.4 4.5z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="fenced-layer" className="py-32 px-6 md:px-12 lg:px-24 bg-background z-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="feature-card">
          <ShufflerCard />
        </div>
        <div className="feature-card">
          <TypewriterCard />
        </div>
        <div className="feature-card">
          <SchedulerCard />
        </div>
      </div>
    </section>
  );
}
