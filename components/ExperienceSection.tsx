import React from 'react';
import { Experience } from '../types';

interface ExperienceProps { 
  experiences: Experience[]; 
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="mb-24">
        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Experience</h2>
        <div className="w-24 h-2 bg-blue-600"></div>
      </div>

      <div className="relative border-l-2 border-slate-100 ml-4 lg:ml-0">
        <div className="space-y-32">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-12 lg:pl-24 group">
              
              {/* Dot on the Line */}
              <div className="absolute left-[-11px] top-1.5 w-5 h-5 bg-white border-4 border-slate-900 rounded-full z-10 group-hover:bg-blue-600 transition-colors duration-300"></div>

              <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between mb-4">
                <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-none">
                  {exp.role}
                </h3>
                <span className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 mt-4 lg:mt-0 inline-block">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
                <span className="text-slate-900">{exp.company}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
              
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light italic serif max-w-3xl">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex gap-4 items-start">
                    <span className="text-blue-500 font-black text-2xl shrink-0 leading-none">/</span>
                    <p className="text-sm text-slate-600 font-semibold leading-relaxed">{ach}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
