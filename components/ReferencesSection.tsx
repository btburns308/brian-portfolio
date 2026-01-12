import React from 'react';
import { Reference } from '../types';

interface ReferencesProps { references: Reference[]; }

const ReferencesSection: React.FC<ReferencesProps> = ({ references }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Endorsements</h2>
        <div className="w-24 h-2 bg-blue-600"></div>
        <p className="mt-6 text-xl text-slate-400 italic serif">Words from leadership and colleagues</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {references.slice(0, 3).map((ref, idx) => (
          <div key={idx} className="bg-slate-50 p-12 rounded-sm border border-slate-100 flex flex-col relative group hover:border-blue-200 transition-all duration-500">
            <div className="mb-10 relative z-10">
              <svg className="w-12 h-12 text-blue-100 mb-8 group-hover:text-blue-200 transition-colors" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v8h6v12h-8v-12h-2v-8h4zm12 0v8h6v12h-8v-12h-2v-8h4z"/>
              </svg>
              <p className="text-lg text-slate-700 leading-relaxed italic font-medium serif">
                "{ref.quote}"
              </p>
            </div>
            
            <div className="mt-auto flex items-center gap-5 pt-10 border-t border-slate-200">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-base font-black overflow-hidden ring-4 ring-white shadow-xl">
                {ref.avatar ? (
                    <img 
                      src={`/${ref.avatar}`} 
                      alt={ref.name} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                ) : null}
                <span className="uppercase">{ref.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm uppercase tracking-tight">{ref.name}</p>
                <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.2em]">{ref.title}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{ref.relation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <a 
          href="https://www.linkedin.com/in/brian-burns-b7716a4/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-12 py-5 bg-slate-900 text-white hover:bg-blue-600 transition-all font-black text-xs uppercase tracking-[0.2em] flex items-center gap-4 shadow-2xl"
        >
          Verify Endorsements on LinkedIn
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}; export default ReferencesSection;
