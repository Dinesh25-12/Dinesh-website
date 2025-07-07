import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Dinesh25-12', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dinesh-neela-aa4053324/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dineshneela2512@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dinesh Neela
            </h3>
            <p className="text-gray-400">
              Frontend Developer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Hyderabad, Telangana</p>
              <p>dineshneela2512@gmail.com</p>
              <p>+91 7093479561</p>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <span>Back to top</span>
              <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-2 border-r-2 border-b-2 border-current transform rotate-180"></div>
              </div>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Dinesh Neela. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;