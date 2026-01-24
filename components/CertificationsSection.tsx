import React from 'react';
import { Certification } from '../types';

interface CertificationsProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Accreditation</h2>
        <div className="w-24 h-2 bg-blue-600 mx-auto"></div>
      </div>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 max-w-sm w-full">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm border border-slate-100 shadow-sm hover:border-blue-600 hover:shadow-2xl transition-all duration-500 group">
              <div className="mb-6 text-blue-100 group-hover:text-blue-600 transition-colors">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-black text-slate-900 text-sm uppercase tracking-tight mb-2 leading-tight">
                {cert.name}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{cert.date}</span>
                <span className={`px-2 py-1 ${cert.status === 'Verified' ? 'bg-slate-900' : 'bg-blue-600'} text-white text-[9px] font-black rounded uppercase tracking-tighter`}>
                  {cert.status || 'Verified'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
