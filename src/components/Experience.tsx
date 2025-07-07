import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'The Entrepreneurship Network',
      location: 'Remote',
      period: 'Mar 2025 - Jun 2025',
      description: 'Worked as a Frontend Developer for two projects called TEN Summit and TEN Sentinel extensively , creating and customizing web pages to enhance functionality and design.',
      achievements: [
        'Enhanced skills in ReactJS and Tailwind CSS',
        'cloning repositories via Git and GitHub Desktop',
        'Strengthened my communication and teamwork skills by collaborating with leaders and team members',
        'Form responsive layout design to building interactive components'
      ]
    },
    {
      id: 2,
      title: 'Web Developer',
      company: 'GAOTek Inc.',
      location: 'Remote',
      period: 'Oct 2024 - Jan 2025',
      description: 'Worked extensively with WordPress and XAMPP, creating and customizing web pages to enhance functionality and design.',
      achievements: [
        'Built and enhanced the Shop Page, managing e-commerce functionality through WooCommerce and other plugins',
        'Designed and optimized contact forms',
        'Created an Ajax Search for a shop page inorder to serach the products based on the categories',
        'MegaMenu was designed to show the available products '
      ]
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in frontend development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-20">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center text-gray-500">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;