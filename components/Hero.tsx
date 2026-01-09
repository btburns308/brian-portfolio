import React from 'react';

interface HeroProps {
  contactInfo: any;
  id: string;
}

const Hero: React.FC<HeroProps> = ({ contactInfo, id }) => {
  return (
    <section id={id} className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Design Elements - Subtle gradients for a modern look */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50/50 to-transparent -skew-x-12 transform origin-top no-print"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 no-print border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 mb-8 leading-[0.95] tracking-tight text-balance">
            {contactInfo.name}. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400">Operations & BI.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-light">
            An expert at bridging the gap between <span className="text-slate-900 font-medium italic underline decoration-blue-200 underline-offset-4">complex data</span> and <span className="text-slate-900 font-medium italic underline decoration-blue-200 underline-offset-4">operational excellence.</span>
          </p>

          <div className="flex flex-wrap gap-4 mb-16 no-print">
            <a 
              href={contactInfo.resumeUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center space-x-3 group"
            >
              <span>View Resume</span>
              <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </a>
            <a 
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center space-x-3 hover:border-blue-200"
            >
              <span>View LinkedIn</span>
              <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 border-t border-slate-100 no-print">
            <div className="group">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-blue-500 transition-colors">Location</p>
              <p className="text-slate-900 font-medium">{contactInfo.location}</p>
            </div>
            <div className="group">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-blue-500 transition-colors">Contact</p>
              <p className="text-slate-900 font-medium">{contactInfo.phone}</p>
            </div>
            <div className="group">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-blue-500 transition-colors">Email</p>
              <p className="text-slate-900 font-medium hover:text-blue-600 transition-colors">
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
