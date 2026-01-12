import React from 'react';
import { Experience } from '../types';

interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="mb-24">
        <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">Professional History</h2>
        <div className="w-24 h-1 bg-slate-900"></div>
      </div>

      <div className="space-y-32">
        {experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Period */}
            <div className="lg:col-span-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                {exp.period}
              </span>
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              <h3 className="text-3xl font-bold text-slate-900 mb-1 serif italic">
                {exp.role}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6 text-sm font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-slate-900">{exp.company}</span>
                <span className="hidden md:inline">•</span>
                <span>{exp.location}</span>
              </div>
              
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex gap-4 group">
                    <span className="text-slate-200 font-black text-xl leading-none transition-colors group-hover:text-slate-900">/</span>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">{ach}</p>
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

export default ExperienceSection;
