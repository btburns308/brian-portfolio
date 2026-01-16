import React from 'react';
import { Passion } from '../types';

interface PassionProps {
  passions: Passion[];
}

const PassionSection: React.FC<PassionProps> = ({ passions }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-24">
        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Passion</h2>
        <div className="w-24 h-2 bg-blue-600"></div>
        <p className="mt-8 text-xl text-slate-400 italic serif">Beyond the Data: Precision & Rhythm</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        {passions.map((passion, idx) => (
          <div key={idx} className="bg-slate-900 text-white p-12 lg:p-20 rounded-sm flex flex-col lg:flex-row gap-16 items-center shadow-2xl relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
            
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
              <div className="w-24 h-24 bg-blue-600 flex items-center justify-center rounded-full mb-8 shadow-xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-center lg:text-left">{passion.role}</h3>
              <p className="text-blue-400 font-bold uppercase tracking-widest text-xs">{passion.title}</p>
            </div>

            <div className="w-full lg:w-2/3">
              <p className="text-2xl text-slate-300 leading-relaxed italic serif mb-12">
                "{passion.description}"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {passion.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-4">
                    <div className="w-1.5 h-6 bg-blue-600 shrink-0 mt-1"></div>
                    <p className="text-sm font-bold text-white uppercase tracking-wider leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassionSection;
