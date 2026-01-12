
import React, { useState, useEffect } from 'react';

interface HeroProps {
  contactInfo: any;
  id: string;
}

const Hero: React.FC<HeroProps> = ({ contactInfo, id }) => {
  const [imageSrc, setImageSrc] = useState(contactInfo.profileImage);
  const [hasFailedOnce, setHasFailedOnce] = useState(false);

  // Sync state if contactInfo changes
  useEffect(() => {
    setImageSrc(contactInfo.profileImage);
    setHasFailedOnce(false);
  }, [contactInfo.profileImage]);

  const handleError = () => {
    if (!hasFailedOnce) {
      // Try fallback: remove leading slash if it exists, or add one if it doesn't
      const fallback = contactInfo.profileImage.startsWith('/') 
        ? contactInfo.profileImage.substring(1) 
        : `/${contactInfo.profileImage}`;
      
      console.warn(`Initial image load failed for ${imageSrc}. Retrying with: ${fallback}`);
      setImageSrc(fallback);
      setHasFailedOnce(true);
    } else {
      console.error(`Final image load failed for ${imageSrc}. Check filename, extension casing, and placement.`);
    }
  };

  return (
    /* Hero section with dynamic ID and layout */
    <section id={id} className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Design Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform origin-top no-print pointer-events-none z-0"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Open to new opportunities</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              {contactInfo.name}
              <span className="block text-blue-600 mt-2 text-3xl lg:text-4xl font-bold tracking-tight">
                {contactInfo.headline}
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-light">
              {contactInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-xl shadow-slate-200"
              >
                Get In Touch
              </a>
              <a 
                href={contactInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border-2 border-slate-100 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                View Resume
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8 text-slate-400 grayscale opacity-60">
                <span className="text-xs font-bold uppercase tracking-widest border-r border-slate-200 pr-8">Expertise</span>
                <div className="flex space-x-6 items-center">
                   <span className="text-sm font-bold">Azure SQL</span>
                   <span className="text-sm font-bold">Tableau</span>
                   <span className="text-sm font-bold">Power BI</span>
                </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
               <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
               <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-200 rounded-full blur-3xl opacity-30"></div>
               
               <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl z-10 group">
                  <img 
                    src={imageSrc} 
                    alt={contactInfo.name}
                    onError={handleError}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
               </div>
               
               <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-50 hidden md:block">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900">100%</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Data Integrity</p>
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

// Exporting component as default to match App.tsx import expectation
export default Hero;
