import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver',
  ];

  useEffect(() => {
    const typeText = () => {
      const currentRole = roles[currentIndex];

      if (isTyping) {
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsTyping(true);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isTyping, roles]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-32 sm:pt-36 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated SVG Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <svg
          className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] opacity-30 left-[-100px] top-[-100px] animate-[spin_40s_linear_infinite]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#60A5FA"
            d="M45.3,-58.1C56.3,-48.7,61.8,-31.8,62.2,-17.3C62.7,-2.7,58.1,10.5,50.4,21.1C42.8,31.6,32.2,39.6,20.3,44.5C8.4,49.3,-4.7,51,-15.9,46.5C-27.2,41.9,-36.6,31.2,-44.2,19.1C-51.8,7.1,-57.5,-6.3,-53.5,-17.4C-49.5,-28.4,-35.7,-37,-22.1,-44.3C-8.5,-51.6,5.1,-57.5,19.5,-59.2C33.9,-60.8,48.9,-58.6,45.3,-58.1Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] opacity-20 right-[-120px] bottom-[-120px] animate-[spin_60s_reverse_linear_infinite]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#C084FC"
            d="M40.3,-51.7C53.6,-45.8,67.4,-35.2,67.7,-23.2C67.9,-11.3,54.7,2,47.2,16.5C39.6,31.1,37.8,46.8,29.2,54.5C20.5,62.2,5,61.9,-6.8,55.8C-18.5,49.8,-26.6,37.9,-35.8,27.6C-44.9,17.2,-55.1,8.6,-56.5,-1.2C-58,-11.1,-50.8,-22.2,-42.3,-29.2C-33.9,-36.3,-24.3,-39.4,-14.4,-47.3C-4.5,-55.2,5.7,-68,16.5,-69.3C27.2,-70.5,38.6,-60.2,40.3,-51.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dinesh
            </span>
          </h1>

          {/* Typing Effect */}
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8 h-12">
            <span className="text-blue-600">{currentText}</span>
            <span className="animate-pulse">|</span>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            I craft beautiful, responsive web experiences with modern
            technologies. Passionate about creating user-friendly interfaces
            that make a difference.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>

          {/* Scroll Arrow */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
