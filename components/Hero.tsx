import React, { useState } from 'react';

interface HeroProps {
  contactInfo: any;
  id: string;
}

const Hero: React.FC<HeroProps> = ({ contactInfo, id }) => {
  const [imageError, setImageError] = useState(false);
  
  // Directly use the filenames from data.ts. 
  // Browsers will look for these files in the same folder as your index.html.
  const profileImageUrl = contactInfo.profileImage;
  const resumeUrl = contactInfo.resumeUrl;

  return (
    <section id={id} className="relative pt-32 pb-24 overflow-hidden bg-white">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform origin-top no-print pointer-events-none z-0"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Main Text Area */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 mb-8 border border-blue-100 no-print">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">Available for new opportunities</span>
            </div>
            
            <h1 className="text-7xl lg:text-9xl font-black text-slate-900 leading-[0.85] mb-8 tracking-tighter">
              {contactInfo.name}
            </h1>
            
            <p className="text-2xl lg:text-3xl font-medium text-slate-400 mb-10 leading-tight">
              {contactInfo.headline}
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl font-light">
              {contactInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 no-print">
              <a 
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border-2 border-slate-100 hover:border-blue-600 hover:text-blue-600 transition-all shadow-lg hover:-translate-y-1 flex items-center gap-3"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>

            {/* Quick Contact Bar */}
            <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-slate-100 pt-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">{contactInfo.email}</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone</span>
                <span className="text-sm font-bold text-slate-900">{contactInfo.phone}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Based in</span>
                <span className="text-sm font-bold text-slate-900">{contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image / Fallback */}
          <div className="lg:col-span-5 relative group">
            <div className="relative w-full aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              
              {/* Fallback View (Monogram) - Always present behind */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                <span className="text-[12rem] font-black text-white/5 select-none tracking-tighter uppercase">
                  {contactInfo.name.split(' ').map((n: string) => n[0]).join('')}
                </span>
              </div>
              
              {!imageError && (
                <img 
                  src={profileImageUrl} 
                  alt={contactInfo.name}
                  onError={() => setImageError(true)}
                  className="relative w-full h-full object-cover z-10 transition-opacity duration-500"
                />
              )}

              {/* Float Performance Badge */}
              <div className="absolute bottom-10 -right-4 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-50 hidden md:block transform transition-all group-hover:-translate-x-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900 leading-none">100%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">Data Integrity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
