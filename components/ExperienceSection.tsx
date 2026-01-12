import React from 'react';
import { Experience } from '../types';

interface ExperienceProps { experiences: Experience[]; }

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Professional History</h2>
        <div className="w-24 h-2 bg-blue-600"></div>
      </div>

      <div className="relative">
        {/* Simple left-aligned vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-100 ml-4 lg:ml-0"></div>

        <div className="space-y-24">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-12 lg:pl-16 group">
              
              {/* Timeline Marker */}
              <div className="absolute left-0 top-2 w-8 h-8 lg:w-4 lg:h-4 bg-white border-4 border-slate-900 rounded-full z-10 -translate-x-1/2 ml-4 lg:ml-0 group-hover:bg-blue-600 transition-colors"></div>

              <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between mb-4">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  {exp.role}
                </h3>
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest mt-2 lg:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-8">
                <span className="text-slate-900">{exp.company}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
              
              <p className="text-slate-500 mb-10 leading-relaxed font-medium max-w-3xl italic serif text-lg">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex gap-4 items-start">
                    <span className="text-blue-500 font-black text-xl shrink-0 leading-none">/</span>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{ach}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; export default ExperienceSection;
