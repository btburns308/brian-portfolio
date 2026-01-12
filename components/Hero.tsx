import React, { useState } from 'react';

interface HeroProps {
  contactInfo: any;
  id: string;
}

const Hero: React.FC<HeroProps> = ({ contactInfo, id }) => {
  const [imageError, setImageError] = useState(false);

  // Directly use the filename from data.ts
  const imageSrc = contactInfo.profileImage;

  return (
    <section id={id} className="relative pt-24 pb-32 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Content */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 leading-none tracking-tighter">
              {contactInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-400 font-medium mb-8">
              {contactInfo.headline}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-xl font-light">
              {contactInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 no-print">
              <a 
                href={contactInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-900 text-white text-sm font-bold tracking-widest uppercase hover:bg-blue-600 transition-all rounded-lg"
              >
                View Resume
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 text-sm font-bold tracking-widest uppercase hover:bg-slate-50 transition-all rounded-lg"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">{contactInfo.email}</a>
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Phone</span>
                <span className="text-sm font-bold text-slate-900">{contactInfo.phone}</span>
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Based</span>
                <span className="text-sm font-bold text-slate-900">{contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              {!imageError ? (
                <img 
                  src={imageSrc} 
                  alt={contactInfo.name}
                  className="w-full h-full object-cover transition-all duration-700"
                  onError={() => {
                    console.error("Hero: Failed to load image at", imageSrc);
                    setImageError(true);
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900">
                  <span className="text-9xl font-black text-white/10 select-none">BB</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; export default Hero;
