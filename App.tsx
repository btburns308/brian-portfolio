
import React, { useState, useEffect } from 'react';
import { 
  PROFESSIONAL_EXPERIENCE, 
  CONTACT_INFO, 
  SKILLS, 
  REFERENCES, 
  EDUCATION 
} from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ReferencesSection from './components/ReferencesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'references', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} contactInfo={CONTACT_INFO} />
      
      <main>
        <Hero contactInfo={CONTACT_INFO} id="home" />
        
        <section id="skills" className="py-24 bg-gray-50 border-b border-gray-100">
          <SkillsSection skillCategories={SKILLS} />
        </section>

        <section id="experience" className="py-24 bg-white">
          <ExperienceSection experiences={PROFESSIONAL_EXPERIENCE} />
        </section>

        <section id="references" className="py-24 bg-gray-50 border-y border-gray-100">
          <ReferencesSection references={REFERENCES} />
        </section>

        <section id="education" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
              <span className="w-8 h-1 bg-blue-600 mr-4"></span>
              Education
            </h2>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                  {edu.details && <p className="mt-4 text-gray-700 leading-relaxed italic">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer contactInfo={CONTACT_INFO} />
    </div>
  );
};

export default App;
