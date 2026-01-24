import React from 'react';
import { SkillCategory } from '../types';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsProps> = ({ skillCategories }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Core Competencies</h2>
        <div className="w-24 h-2 bg-blue-600 mx-auto"></div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-12 max-w-lg w-full">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-sm border border-slate-100 shadow-sm">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8 text-center">
                {cat.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-center group/item">
                    <span className="w-2 h-2 bg-blue-600 mr-4 shrink-0"></span>
                    <span className="text-base font-bold text-slate-700 tracking-tight">{item}</span>
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

export default SkillsSection;
