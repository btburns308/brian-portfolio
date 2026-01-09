import React, { useState, useEffect } from 'react';
import { 
  PROFESSIONAL_EXPERIENCE, 
  CONTACT_INFO, 
  SKILLS, 
  REFERENCES, 
  EDUCATION,
  CERTIFICATIONS
} from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ReferencesSection from './components/ReferencesSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = ['home', 'skills', 'experience', 'certifications', 'references', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} contactInfo={CONTACT_INFO} />
      
      <main>
        <Hero contactInfo={CONTACT_INFO} id="home" />
        
        <section id="skills" className="py-24 bg-slate-50 border-b border-slate-100">
          <SkillsSection skillCategories={SKILLS} />
        </section>

        <section id="experience" className="py-24 bg-white">
          <ExperienceSection experiences={PROFESSIONAL_EXPERIENCE} />
        </section>

        <section id="certifications" className="py-24 bg-slate-50 border-y border-slate-100">
          <CertificationsSection certifications={CERTIFICATIONS} />
        </section>

        <section id="references" className="py-24 bg-white">
          <ReferencesSection references={REFERENCES} />
        </section>

        <section id="education" className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-4"></span>
              Education
            </h2>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                  <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-slate-500 text-sm">{edu.location}</p>
                  {edu.details && <p className="mt-4 text-slate-700 leading-relaxed italic">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer contactInfo={CONTACT_INFO} />

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-slate-900 text-white rounded-full shadow-2xl transition-all duration-300 z-50 hover:bg-blue-600 hover:-translate-y-1 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  );
};

export default App;
