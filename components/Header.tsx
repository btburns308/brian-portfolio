import React from 'react';

interface HeaderProps {
  activeSection: string;
  contactInfo: any;
}

const Header: React.FC<HeaderProps> = ({ activeSection, contactInfo }) => {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certs', id: 'certifications' },
    { label: 'References', id: 'references' },
    { label: 'Education', id: 'education' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex flex-col">
          <span className="text-xl font-bold text-gray-900 tracking-tight">{contactInfo.name}</span>
          <span className="text-xs font-medium text-blue-600 uppercase tracking-widest">Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href={`mailto:${contactInfo.email}`}
            className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm"
          >
            Contact
          </a>
        </nav>

        <div className="md:hidden">
            {/* Mobile simplified contact link */}
            <a href={`mailto:${contactInfo.email}`} className="text-blue-600 font-semibold text-sm">
                Get In Touch
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
