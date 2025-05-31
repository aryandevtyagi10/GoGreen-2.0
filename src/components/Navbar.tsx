import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const handleGetInvolved = () => {
    scrollToSection('projects');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Leaf className="h-8 w-8 text-green-700" />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-green-700' : 'text-white'}`}>
              GoGreen
            </span>
          </div>

          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-8">
              {['Home', 'About', 'Resources', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-base font-medium hover:text-green-500 transition-colors ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={handleGetInvolved}
              className="ml-8 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md transition-colors duration-300"
            >
              Get Involved
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-green-700' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 shadow-xl p-4">
            <ul className="space-y-4">
              {['Home', 'About', 'Resources', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-gray-800 font-medium hover:text-green-700 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={handleGetInvolved}
                  className="w-full bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md transition-colors duration-300"
                >
                  Get Involved
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;