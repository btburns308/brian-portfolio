import React from 'react';
import { SkillCategory } from '../types';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsProps> = ({ skillCategories }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Core Competencies</h2>
        <p className="text-slate-500 text-lg font-light">Advanced analytical toolset and operational framework expertise.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="relative p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>{cat.category}</span>
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {cat.items.map((item, iIdx) => (
                <span 
                  key={iIdx} 
                  className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl border border-slate-50 hover:bg-white hover:border-blue-200 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
