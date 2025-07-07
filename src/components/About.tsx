import React from 'react';
import { User, MapPin, Calendar, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Intro */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences that users love.
          </p>
        </div>

        {/* Layout: Text left, Image right on large; column-reverse on mobile */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 items-center lg:items-start">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 mt-6 lg:mt-0">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                I'm a passionate frontend developer with a strong foundation in building responsive and user-friendly web applications using React, Tailwindcss, Wordpress and modern tools. I enjoy writing clean, maintainable code and continuously improving my skills by learning the latest technologies and best practices.
              </p>
              <p>
                Beyond coding, I love exploring new tech trends, participating in open-source projects, and sharing what I learn through blogs and community discussions. I'm eager to grow, collaborate, and contribute meaningfully to innovative development teams.
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Hyderabad, Telangana</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Experience</p>
                  <p className="text-gray-600">Fresher</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Role</p>
                  <p className="text-gray-600">Frontend Developer</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Passion</p>
                  <p className="text-gray-600">Clean Code & UX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl p-1">
                <div className="w-full h-full bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/9a/93/04/9a93048f86f70994ca0296d6a8a478f6.jpg"
                    alt="Profile"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
