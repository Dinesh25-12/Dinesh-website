import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'Java', level: 90, color: 'bg-blue-600' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'Python', level: 85, color: 'bg-gray-800' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
    { name: 'MySQL', level: 80, color: 'bg-green-600' },
    { name: 'Wordpress', level: 75, color: 'bg-pink-500' },
    { name: 'C++', level: 70, color: 'bg-green-500' }
  ];

  const tools = [
    'VS Code', 'Git', 'powerbi', 'Vite', 'AWS', 'Excel'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left ${
                        isVisible ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className={`bg-white p-4 rounded-lg shadow-md text-center font-semibold text-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white text-center">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;