import React, { useState } from 'react';

interface HeroProps {
  contactInfo: any;
  id: string;
}

const Hero: React.FC<HeroProps> = ({ contactInfo, id }) => {
  const [imageError, setImageError] = useState(false);

  // Using standard relative paths - ensure files are in the public/root directory
  const imageSrc = contactInfo.profileImage;
  const resumeSrc = contactInfo.resumeUrl;

  return (
    <section id={id} className="relative pt-24 pb-32 bg-white hero-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Content */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1 text-left">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 leading-[0.9] tracking-tighter">
              {contactInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 font-bold mb-8 uppercase tracking-wide">
              {contactInfo.headline}
            </p>
            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-xl font-light italic serif">
              {contactInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 no-print mb-16">
              <a 
                href={resumeSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-slate-900 text-white text-[10px] font-black tracking-[0.3em] uppercase hover:bg-blue-600 transition-all rounded-sm shadow-2xl"
              >
                View Full Resume
              </a>
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-slate-50 transition-all rounded-sm"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-slate-100">
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">{contactInfo.email}</a>
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Phone</span>
                <span className="text-sm font-bold text-slate-900">{contactInfo.phone}</span>
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Location</span>
                <span className="text-sm font-bold text-slate-900">{contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden shadow-2xl border-b-[16px] border-slate-900">
              {!imageError ? (
                <img 
                  src={imageSrc} 
                  alt={contactInfo.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={() => {
                    console.error("Hero: Failed to load image at " + imageSrc);
                    setImageError(true);
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 p-12 text-center">
                  <div className="w-32 h-32 rounded-full bg-slate-900 flex items-center justify-center mb-8">
                    <span className="text-4xl font-black text-white">BB</span>
                  </div>
                  <p className="text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Check File Location</p>
                  <p className="text-slate-400 text-[9px] leading-relaxed">
                    Ensure <strong>brian-burns.jpg</strong> is in the same folder as index.html
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; export default Hero;
