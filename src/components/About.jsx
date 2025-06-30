import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Beyond Career</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Redefining how students approach their careers through innovation and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To serve as a one-stop solution for students, helping them unlock opportunities, 
                connect with industry leaders, and achieve their aspirations through comprehensive 
                career guidance and mentorship.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the leading platform that bridges the gap between student potential 
                and career success, fostering a community where dreams transform into achievements.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Founded by IIT Kharagpur Visionaries</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Beyond Career was born from the innovative minds of dynamic students at IIT Kharagpur, 
              one of India's premier technical institutions. Our founders recognized the gap between 
              academic excellence and real-world career success.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-sm">Industry Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">I</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
            <p className="text-gray-600 text-sm">Cutting-edge solutions for modern career challenges</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-indigo-100 hover:border-indigo-300 transition-colors duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">E</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
            <p className="text-gray-600 text-sm">Commitment to delivering exceptional results</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-purple-100 hover:border-purple-300 transition-colors duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">C</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Community</h4>
            <p className="text-gray-600 text-sm">Building networks that last a lifetime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;