import React, { useState } from 'react';

interface HeroProps {
  contactInfo: any;
  id: string;
}

const Hero: React.FC<HeroProps> = ({ contactInfo, id }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id={id} className="relative pt-20 pb-32 hero-gradient border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image with minimalist frame */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-[3/4] bg-slate-100 overflow-hidden shadow-sm">
              {!imageError ? (
                <img 
                  src={contactInfo.profileImage} 
                  alt={contactInfo.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900">
                  <span className="text-8xl font-bold text-white/10 uppercase">BB</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Text content */}
          <div className="w-full lg:w-3/5">
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-6 leading-[0.9] tracking-tight">
              {contactInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light mb-8 italic serif">
              {contactInfo.headline}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-xl font-light">
              {contactInfo.summary}
            </p>

            <div className="flex flex-wrap gap-x-12 gap-y-8 py-8 border-t border-slate-100">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Location</span>
                <span className="text-sm font-medium text-slate-900">{contactInfo.location}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="text-sm font-medium text-slate-900 hover:text-slate-500 transition-colors underline decoration-slate-200 underline-offset-4">{contactInfo.email}</a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Phone</span>
                <span className="text-sm font-medium text-slate-900">{contactInfo.phone}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 no-print">
              <a 
                href={contactInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-900 text-white text-sm font-semibold tracking-wide hover:bg-slate-700 transition-all uppercase"
              >
                Download Resume
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 text-sm font-semibold tracking-wide hover:border-slate-900 transition-all uppercase"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
