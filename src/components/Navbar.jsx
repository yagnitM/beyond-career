import React, { useState } from 'react';
import logo from '../assets/BeyondCareer.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking a link
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <img 
                            src={logo}
                            alt="Beyond Career Logo"
                            className="h-8 w-auto"
                        />
                        <div className="text-white text-lg font-bold">Beyond Career</div>
                    </div>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-4">
                        <li>
                            <button 
                                onClick={() => scrollToSection('hero')}
                                className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer transition-colors duration-200"
                            >
                                Hero
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('about')}
                                className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer transition-colors duration-200"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('services')}
                                className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer transition-colors duration-200"
                            >
                                Services
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('testimonials')}
                                className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer transition-colors duration-200"
                            >
                                Testimonials
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="text-white hover:text-gray-300 bg-transparent border-none cursor-pointer transition-colors duration-200"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-500 p-2 rounded"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <ul className="flex flex-col space-y-2 mt-4 pb-4">
                        <li>
                            <button 
                                onClick={() => scrollToSection('hero')}
                                className="block w-full text-left text-white hover:text-gray-300 hover:bg-gray-700 bg-transparent border-none cursor-pointer px-4 py-2 rounded transition-colors duration-200"
                            >
                                Hero
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('about')}
                                className="block w-full text-left text-white hover:text-gray-300 hover:bg-gray-700 bg-transparent border-none cursor-pointer px-4 py-2 rounded transition-colors duration-200"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('services')}
                                className="block w-full text-left text-white hover:text-gray-300 hover:bg-gray-700 bg-transparent border-none cursor-pointer px-4 py-2 rounded transition-colors duration-200"
                            >
                                Services
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('testimonials')}
                                className="block w-full text-left text-white hover:text-gray-300 hover:bg-gray-700 bg-transparent border-none cursor-pointer px-4 py-2 rounded transition-colors duration-200"
                            >
                                Testimonials
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left text-white hover:text-gray-300 hover:bg-gray-700 bg-transparent border-none cursor-pointer px-4 py-2 rounded transition-colors duration-200"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;