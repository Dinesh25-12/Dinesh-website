import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Wordpress.',
      longDescription: 'This comprehensive e-commerce solution features user authentication, product catalog, shopping cart, Ajax Search, and MegaMenu. Built with modern Wordpress Astra Theme and optimized for performance.',
      image: 'https://img.freepik.com/premium-vector/ecommerce-online-shopping-illustration_943124-3524.jpg',
      technologies: ['Wordpress', 'XAMPP'],
      liveUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/alexmorgan/ecommerce'
    },
    {
      id: 2,
      title: 'ScyllaDB Team Website',
      description: 'A collaborative task management application of ScyllaDB with real-time updates and team features.',
      longDescription: 'Feature-rich task management tool with real-time collaboration, team management, and analytics dashboard. Supports multiple project workflows and integrations.',
      image: 'https://img.freepik.com/premium-vector/employees-corporate-office-attending-meeting-through-online-video-conference_1108340-368.jpg',
      technologies: ['React', 'Tailwindcss', 'Vite'],
      liveUrl: 'https://www.scylladb.com/company/#team',
      githubUrl: 'https://github.com/Chirag-33/Ten-Summit.git'
    },
    {
      id: 3,
      title: 'ISO 27001 Website',
      description: 'a website to communicate ISO 27001 compliance.',
      longDescription: 'ISO 27001 showcasing Information Security Commitment, Certification, Continuous Improvement and Risk Management.',
      image: 'https://blog.emojot.com/wp-content/uploads/2024/01/4420124.jpg',
      technologies: ['React', 'Tailwind CSS'],
      liveUrl: 'https://cybersapiens.com.au/iso-27001-certification/',
      githubUrl: 'https://github.com/yogita0914/Ten_Sentinel.git'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for frontend development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    View Details
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={projects.find(p => p.id === selectedProject)?.image}
                  alt={projects.find(p => p.id === selectedProject)?.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {projects.find(p => p.id === selectedProject)?.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects.find(p => p.id === selectedProject)?.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={projects.find(p => p.id === selectedProject)?.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={projects.find(p => p.id === selectedProject)?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
