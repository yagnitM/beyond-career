import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <section id='hero' className="pb-20 bg-gray-50">
        <Hero />
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <About />
      </section>
      
      <section id="services" className="py-20 bg-white">
        <Services />
      </section>
      
      <section id="testimonials" className="py-20 bg-gray-50">
        <Testimonials />
      </section>

      <section id="contact" className="py-20 bg-white">
        <Contact />
      </section>
    </div>
  );
};

export default Home;