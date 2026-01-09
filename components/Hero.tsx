
import React from 'react';

interface HeroProps {
  contactInfo: any;
  id: string;
}

const Hero: React.FC<HeroProps> = ({ contactInfo, id }) => {
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <section id={id} className="relative py-32 overflow-hidden bg-white">
      {/* Print-only Header */}
      <div id="print-header" className="hidden">
        <h1 className="text-3xl font-bold">{contactInfo.name}</h1>
        <p className="text-blue-600 font-semibold">{contactInfo.headline}</p>
        <div className="flex gap-6 mt-2 text-sm text-gray-600">
          <span>{contactInfo.location}</span>
          <span>{contactInfo.phone}</span>
          <span>{contactInfo.email}</span>
          <span>LinkedIn: {contactInfo.linkedin.replace('https://www.', '')}</span>
        </div>
      </div>

      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 no-print"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 no-print"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-blue-600 font-semibold mb-4 tracking-wide uppercase text-sm no-print">Operations & Business Intelligence</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] no-print">
            Transforming data into <br/>
            <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">strategic solutions.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light no-print">
            I'm <strong>{contactInfo.name}</strong>, a seasoned <strong>{contactInfo.headline}</strong>. 
            I specialize in scaling operations through business intelligence and process optimization.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 no-print">
            <button 
              onClick={handlePrint}
              className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
            >
              <span>Save as PDF / Print CV</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            </button>
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
            >
              <span>LinkedIn Profile</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-500 border-t border-gray-100 pt-8 no-print">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 no-print">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 no-print">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <span>{contactInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
