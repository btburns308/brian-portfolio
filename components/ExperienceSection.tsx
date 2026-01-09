
import React from 'react';
import { Experience } from '../types';

interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <span className="w-8 h-1 bg-blue-600 mr-4"></span>
            Professional Journey
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            A track record of success in operational excellence and business intelligence systems.
          </p>
        </div>
      </div>

      <div className="relative space-y-12">
        {/* Vertical line for desktop */}
        <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline node */}
            <div className="absolute left-[20px] md:left-[50%] w-10 h-10 -ml-5 bg-white border-4 border-blue-600 rounded-full z-10 hidden md:block"></div>
            
            {/* Content side */}
            <div className="w-full md:w-[45%]">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-2 tracking-wide uppercase">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="font-bold text-gray-800">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  {exp.description}
                </p>

                <ul className="space-y-3">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start text-sm text-gray-700">
                      <span className="mr-3 text-blue-600 mt-1 font-bold">▪</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Empty side for layout on desktop */}
            <div className="hidden md:block w-[45%]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
