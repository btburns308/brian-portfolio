import React from 'react';
import { Passion } from '../types';

interface PassionProps {
  passions: Passion[];
}

const PassionSection: React.FC<PassionProps> = ({ passions }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-24 flex flex-col items-center text-center">
        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Passion</h2>
        <div className="w-24 h-2 bg-blue-600"></div>
        <p className="mt-8 text-xl text-slate-400 italic serif">Precision. Timing. Collaborative Performance.</p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {passions.map((passion, idx) => (
          <div key={idx} className="bg-slate-950 text-white rounded-sm overflow-hidden shadow-2xl relative group">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
               <svg className="absolute -right-20 -top-20 w-[600px] h-[600px] text-blue-500" fill="currentColor" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 5" />
               </svg>
            </div>

            <div className="relative z-10 p-12 lg:p-24 flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-2/5">
                <div className="inline-block px-4 py-2 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  Featured Interest
                </div>
                <h3 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 leading-[0.9]">
                  {passion.role}
                </h3>
                <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm">
                  {passion.title}
                </p>
                
                <div className="mt-12 h-0.5 w-full bg-slate-800 relative">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-600"></div>
                </div>
              </div>

              <div className="w-full lg:w-3/5">
                <blockquote className="text-3xl lg:text-4xl text-slate-300 leading-tight italic serif mb-12 relative">
                  <span className="absolute -left-8 -top-4 text-6xl text-blue-600/30 font-serif">"</span>
                  {passion.description}
                </blockquote>
                
                <div className="grid grid-cols-1 gap-6">
                  {passion.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-6 p-4 border border-slate-800 bg-slate-900/50 hover:border-blue-600 transition-colors">
                      <div className="w-10 h-10 shrink-0 bg-blue-600 flex items-center justify-center font-black text-xs">
                        0{hIdx + 1}
                      </div>
                      <p className="text-sm font-bold text-white uppercase tracking-widest leading-none">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassionSection;
