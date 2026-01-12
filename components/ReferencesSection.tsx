import React from 'react';
import { Reference } from '../types';

interface ReferencesProps {
  references: Reference[];
}

const ReferencesSection: React.FC<ReferencesProps> = ({ references }) => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Professional Endorsements</h2>
        <p className="text-slate-400 italic serif text-lg font-light">What colleagues and partners say</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {references.map((ref, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="mb-8">
              <svg className="w-10 h-10 text-slate-100 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v8h6v12h-8v-12h-2v-8h4zm12 0v8h6v12h-8v-12h-2v-8h4z"/>
              </svg>
              <p className="text-xl text-slate-700 leading-relaxed font-light italic serif">
                "{ref.quote}"
              </p>
            </div>
            
            <div className="mt-auto flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white text-xs font-bold tracking-widest uppercase">
                {ref.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{ref.name}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{ref.title}</p>
                <p className="text-[10px] text-slate-500 italic mt-0.5">{ref.relation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 py-10 border-t border-slate-50 text-center">
        <a 
          href="https://www.linkedin.com/in/brian-burns-b7716a4/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-slate-900 transition-all flex items-center justify-center gap-2"
        >
          View all 10+ Endorsements on LinkedIn
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ReferencesSection;
