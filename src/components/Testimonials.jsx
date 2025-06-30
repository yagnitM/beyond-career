import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      university: "IIT Delhi",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Beyond Career transformed my approach to job hunting. Their mentorship program connected me with industry experts who guided me through every step of landing my dream job at Google.",
      rating: 5,
      achievement: "₹45L Package"
    },
    {
      name: "Arjun Patel",
      role: "Product Manager at Microsoft",
      university: "IIT Bombay",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The career guidance sessions were incredibly insightful. Beyond Career helped me pivot from engineering to product management, and I couldn't be happier with my career trajectory.",
      rating: 5,
      achievement: "Career Pivot Success"
    },
    {
      name: "Sneha Gupta",
      role: "Data Scientist at Amazon",
      university: "IIT Kharagpur",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The internship opportunities through Beyond Career were exceptional. I got hands-on experience that directly led to my full-time offer. Their support throughout the process was outstanding.",
      rating: 5,
      achievement: "Direct PPO"
    },
    {
      name: "Rahul Singh",
      role: "Startup Founder",
      university: "IIT Madras",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Beyond Career's community engagement helped me network with like-minded entrepreneurs. The connections I made through their platform were instrumental in launching my startup.",
      rating: 5,
      achievement: "$2M Funding Raised"
    },
    {
      name: "Anita Reddy",
      role: "Consultant at McKinsey",
      university: "IIT Kanpur",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      quote: "The interview preparation and case study practice sessions were game-changers. Beyond Career's structured approach helped me crack the most challenging consulting interviews.",
      rating: 5,
      achievement: "Top-tier Consulting"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who transformed their careers and achieved their dreams with Beyond Career
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0 text-center lg:text-left">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-32 h-32 rounded-full mx-auto lg:mx-0 object-cover border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900">{testimonials[currentSlide].name}</h3>
                  <p className="text-blue-600 font-semibold">{testimonials[currentSlide].role}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentSlide].university}</p>
                  <div className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full inline-block">
                    {testimonials[currentSlide].achievement}
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">92%</h4>
            <p className="text-gray-600">Job Placement Rate</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-indigo-100">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">156%</h4>
            <p className="text-gray-600">Average Salary Increase</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">4.9/5</h4>
            <p className="text-gray-600">Student Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;