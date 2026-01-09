import React from 'react';
import { Experience } from '../types';

interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Professional History</h2>
        <p className="text-slate-500 text-lg font-light">Over a decade of driving growth through data-backed strategies.</p>
      </div>

      <div className="space-y-16">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group relative pl-10 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 md:left-1/2 md:-ml-px"></div>
            
            <div className={`md:flex items-start gap-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-1/2 mb-4 md:mb-0">
                <div className={`${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-black rounded-full mb-4 tracking-tighter uppercase">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-semibold text-slate-500 mb-2">{exp.company}</p>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">{exp.location}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] bg-white border-2 border-slate-900 rounded-full z-10 md:left-1/2 md:ml-[-5.5px]"></div>

              <div className="md:w-1/2">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>
                <ul className="space-y-4">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start text-sm text-slate-600 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-3 shrink-0"></span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
