
import React from 'react';
import { Reference } from '../types';

interface ReferencesProps {
  references: Reference[];
}

const ReferencesSection: React.FC<ReferencesProps> = ({ references }) => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-16 flex items-center">
        <span className="w-8 h-1 bg-blue-600 mr-4"></span>
        Recommendations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {references.map((ref, idx) => (
          <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="text-blue-600 mb-6">
                <svg className="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V15M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-8">
                "{ref.quote}"
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <img 
                src={ref.avatar} 
                alt={ref.name} 
                className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all cursor-pointer"
              />
              <div>
                <p className="font-bold text-gray-900 leading-tight">{ref.name}</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{ref.title}</p>
                <p className="text-[10px] text-blue-600 font-semibold">{ref.relation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm">
          More recommendations available on my 
          <a 
            href="https://www.linkedin.com/in/brian-burns-b7716a4/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 font-bold ml-1 hover:underline"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default ReferencesSection;
