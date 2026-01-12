import React from 'react';

interface HeaderProps {
  activeSection: string;
  contactInfo: any;
}

const Header: React.FC<HeaderProps> = ({ activeSection, contactInfo }) => {
  const navItems = [
    { label: 'Introduction', id: 'home' },
    { label: 'Competencies', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Accreditation', id: 'certifications' },
    { label: 'References', id: 'references' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold text-xs uppercase tracking-tighter">
            BB
          </div>
          <span className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] hidden sm:block">
            {contactInfo.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-slate-900 ${
                activeSection === item.id ? 'text-slate-900' : 'text-slate-400'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href={`mailto:${contactInfo.email}`}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-slate-900 px-6 py-3 hover:bg-slate-700 transition-all"
          >
            Connect
          </a>
        </nav>

        <div className="lg:hidden">
            <a href={`mailto:${contactInfo.email}`} className="text-[10px] font-bold uppercase tracking-widest underline underline-offset-4">
                Inquiry
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
