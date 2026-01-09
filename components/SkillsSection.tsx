
import React from 'react';
import { SkillCategory } from '../types';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsProps> = ({ skillCategories }) => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-16 flex items-center">
        <span className="w-8 h-1 bg-blue-600 mr-4"></span>
        Expertise & Toolset
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-50 flex items-center justify-between">
              {cat.category}
              <span className="text-blue-100 no-print">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, iIdx) => (
                <span 
                  key={iIdx} 
                  className="px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-white hover:text-blue-600 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div id="talk-tech-banner" className="mt-20 bg-blue-600 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center gap-8 no-print">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Interested in my full technical capabilities?</h3>
          <p className="text-blue-100 leading-relaxed">
            I leverage modern BI stacks including Azure SQL, Tableau, and Power BI to build automated, 
            high-performance reporting ecosystems that drive executive decision-making.
          </p>
        </div>
        <a 
          href={`mailto:btburns308@icloud.com`}
          className="whitespace-nowrap bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl"
        >
          Let's Talk Tech
        </a>
      </div>
    </div>
  );
};

export default SkillsSection;
