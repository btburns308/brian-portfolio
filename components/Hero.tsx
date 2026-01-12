import React from 'react';

interface HeroProps {
  contactInfo: any;
  id: string;
}

const Hero: React.FC<HeroProps> = ({ contactInfo, id }) => {
  return (
    <section id={id} className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Design Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform origin-top no-print pointer-events-none z-0"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 no-print border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 leading-[0.95] tracking-tight">
              {contactInfo.name}. <br/>
              <span className="text-slate-500">
                Operations & Business Intelligence.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-light">
              An expert at bridging the gap between <span className="text-slate-900 font-medium">complex data</span> and <span className="text-slate-900 font-medium">operational excellence.</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-16 no-print">
              <a 
                href={contactInfo.resumeUrl}
                download
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center space-x-3 cursor-pointer"
              >
                <span>Download Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center space-x-3 cursor-pointer"
              >
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-slate-100 no-print">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                <p className="text-slate-900 font-medium">{contactInfo.location}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                <p className="text-slate-900 font-medium">{contactInfo.phone}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                <p className="text-slate-900 font-medium">
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Still Picture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl bg-slate-100">
              <img 
                src={contactInfo.profileImage} 
                alt={contactInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
