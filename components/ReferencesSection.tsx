import React from 'react';
import { Reference } from '../types';

interface ReferencesProps { 
  references: Reference[]; 
}

const ReferencesSection: React.FC<ReferencesProps> = ({ references }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-24">
        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Endorsements</h2>
        <div className="w-24 h-2 bg-blue-600"></div>
        <p className="mt-8 text-xl text-slate-400 italic serif">Professional Leadership Testimonials</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {references.slice(0, 3).map((ref, idx) => (
          <div key={idx} className="bg-white p-12 rounded-sm border-2 border-slate-100 flex flex-col relative group hover:border-blue-600 transition-all duration-500 shadow-sm hover:shadow-2xl">
            {/* Quote Icon */}
            <div className="mb-12">
              <svg className="w-12 h-12 text-blue-600 opacity-20 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v8h6v12h-8v-12h-2v-8h4zm12 0v8h6v12h-8v-12h-2v-8h4z"/>
              </svg>
            </div>

            <div className="flex-grow">
              <p className="text-xl text-slate-800 leading-relaxed italic font-medium serif mb-12">
                "{ref.quote}"
              </p>
            </div>
            
            <div className="mt-auto pt-10 border-t-4 border-slate-900 flex items-center gap-6">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-lg font-black shrink-0 shadow-lg">
                {ref.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex flex-col">
                <p className="font-black text-slate-900 text-lg uppercase tracking-tight leading-none mb-2">
                  {ref.name}
                </p>
                <p className="text-xs text-blue-600 font-black uppercase tracking-[0.1em] mb-1">
                  {ref.title}
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  {ref.relation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 flex justify-center">
        <a 
          href="https://www.linkedin.com/in/brian-burns-b7716a4/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-12 py-5 bg-slate-900 text-white hover:bg-blue-600 transition-all font-black text-xs uppercase tracking-[0.3em] flex items-center gap-6 shadow-2xl"
        >
          View Verified Recommendations
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ReferencesSection;
