import React from 'react';
import { Certification } from '../types';

interface CertificationsProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center">
        <span className="w-8 h-1 bg-blue-600 mr-4"></span>
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4 group">
            <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">{cert.name}</h3>
              <p className="text-sm text-slate-500">{cert.issuer}</p>
              <div className="mt-3 flex items-center space-x-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{cert.date}</span>
                {cert.status && (
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-black rounded uppercase tracking-tighter">
                    {cert.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
