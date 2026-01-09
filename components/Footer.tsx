
import React from 'react';

interface FooterProps {
  contactInfo: any;
}

const Footer: React.FC<FooterProps> = ({ contactInfo }) => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8">Let's build something <span className="text-blue-400">great</span> together.</h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">
              I am currently open to new opportunities in Operations and Business Intelligence. 
              Feel free to reach out for my full resume or a confidential conversation.
            </p>
            <div className="space-y-4">
               <a href={`mailto:${contactInfo.email}`} className="block text-2xl font-light hover:text-blue-400 transition-colors">
                 {contactInfo.email}
               </a>
               <p className="text-xl text-gray-500 font-light">{contactInfo.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-6">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#references" className="text-gray-300 hover:text-white transition-colors">References</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-6">Connect</h4>
              <ul className="space-y-4">
                <li><a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Brian Burns. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="font-medium italic">Operations & BI Specialist</span>
            <span>Based in Georgia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
