import React from 'react';
import { SkillCategory } from '../types';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsProps> = ({ skillCategories }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Core Competencies</h2>
        <div className="w-20 h-1 bg-slate-900"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="group">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 group-hover:text-slate-900 transition-colors">
              {cat.category}
            </h3>
            <div className="flex flex-col gap-4">
              {cat.items.map((item, iIdx) => (
                <div key={iIdx} className="flex items-center group/item">
                  <span className="w-1.5 h-1.5 bg-slate-200 group-hover/item:bg-slate-900 mr-4 transition-colors"></span>
                  <span className="text-base font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
