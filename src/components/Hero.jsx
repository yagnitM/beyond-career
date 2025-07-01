import React from 'react';
import { ArrowRight, Users, Target, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                IIT Kharagpur Startup
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {' '}Career Journey
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Connect with industry mentors, land dream internships, and build your professional network with Beyond Career's comprehensive platform.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-white">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-white">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">95%</div>
                <div className="text-sm text-white">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Career Mentorship</div>
                    <div className="text-blue-200 text-sm">1-on-1 guidance from industry experts</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Internship Placement</div>
                    <div className="text-blue-200 text-sm">Direct connections to top companies</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <div className="text-sm text-blue-200">Next Batch Starts</div>
                  <div className="text-2xl font-bold">July 15, 2025</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;