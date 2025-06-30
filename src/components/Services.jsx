import React from 'react';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Career Guidance",
      description: "Personalized career counseling to help you discover your passion and align it with market opportunities.",
      features: ["One-on-one sessions", "Career path mapping", "Industry insights", "Skill gap analysis"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      title: "Internship Opportunities",
      description: "Access to exclusive internship programs with top companies across various industries.",
      features: ["Curated opportunities", "Application support", "Interview preparation", "Performance tracking"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Mentorship Programs",
      description: "Connect with industry leaders and experienced professionals for guidance and networking.",
      features: ["Expert mentors", "Regular check-ins", "Industry connections", "Goal setting"],
      gradient: "from-purple-500 to-blue-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community Engagement",
      description: "Join a vibrant community of like-minded students and professionals sharing knowledge and opportunities.",
      features: ["Networking events", "Skill workshops", "Peer learning", "Success celebrations"],
      gradient: "from-blue-600 to-indigo-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your career journey and unlock your potential
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of students who have already taken the leap towards their dream careers. 
            Your journey to success starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
              1000+
            </div>
            <div className="text-gray-600 font-medium">Students Placed</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
              200+
            </div>
            <div className="text-gray-600 font-medium">Partner Companies</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
              98%
            </div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              5+
            </div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;