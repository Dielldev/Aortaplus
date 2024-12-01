import React from "react";
import logo from "../assets/img/logo111.png"; 
import { Link } from 'react-router-dom';

    


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (mobileMenu && mobileMenuButton && 
          !mobileMenu.contains(event.target) && 
          !mobileMenuButton.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-md mb-2">
    <div className="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
            
            <div className="flex items-center">
                <a href="index.html" className="flex items-center space-x-3">
                    <img src={logo} className="h-16" alt="Aorta Plus Logo" />
                </a>
            </div>

            
            <div className="hidden lg:flex items-center space-x-12">
                <Link to="/" className="nav-link group">
                    <span className="text-gray-800 font-semibold group-hover:text-[#01ba5b] transition-colors duration-300">Kryefaqja</span>
                    <div className="h-0.5 w-0 group-hover:w-full bg-[#01ba5b] transition-all duration-300"></div>
                </Link>
                <a href="#Sherbimet" onClick={(e) => handleScroll(e, '#Sherbimet')} className="nav-link group">
                    <span className="text-gray-800 font-semibold group-hover:text-[#01ba5b] transition-colors duration-300">Shërbimet</span>
                    <div className="h-0.5 w-0 group-hover:w-full bg-[#01ba5b] transition-all duration-300"></div>
                </a>
                <a href="#Reth" onClick={(e) => handleScroll(e, '#Reth')} className="nav-link group">
                    <span className="text-gray-800 font-semibold group-hover:text-[#01ba5b] transition-colors duration-300">Rreth Nesh</span>
                    <div className="h-0.5 w-0 group-hover:w-full bg-[#01ba5b] transition-all duration-300"></div>
                </a>
                <a href="#Mjek" onClick={(e) => handleScroll(e, '#Mjek')} className="nav-link group">
                    <span className="text-gray-800 font-semibold group-hover:text-[#01ba5b] transition-colors duration-300">Mjekët</span>
                    <div className="h-0.5 w-0 group-hover:w-full bg-[#01ba5b] transition-all duration-300"></div>
                </a>
            </div>

            
            <div className="hidden lg:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-[#01ba5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-gray-600 text-sm">E Hënë-Shtunë (08:00-21:00)</span>
                </div>
                <a href="#Konk" className="bg-[#01ba5b] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-400 transition duration-300 transform hover:scale-105">
                    Kontakt
                </a>
            </div>

            <div className="lg:hidden">
                <button 
                  id="mobile-menu-button" 
                  className="text-gray-600 hover:text-[#01ba5b] focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                          className="mobile-menu-icon" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    
    <div id="mobile-menu" className={`lg:hidden bg-white border-t border-gray-100 ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" className="block text-gray-800 font-semibold hover:text-[#01ba5b] transition-colors duration-300">Kryefaqja</Link>
            <a href="#Sherbimet" onClick={(e) => handleScroll(e, '#Sherbimet')} className="block text-gray-800 font-semibold hover:text-[#01ba5b] transition-colors duration-300">Shërbimet</a>
            <a href="#Reth" onClick={(e) => handleScroll(e, '#Reth')} className="block text-gray-800 font-semibold hover:text-[#01ba5b] transition-colors duration-300">Rreth Nesh</a>
            <a href="#Mjek" onClick={(e) => handleScroll(e, '#Mjek')} className="block text-gray-800 font-semibold hover:text-[#01ba5b] transition-colors duration-300">Mjekët</a>
            <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                    <svg className="w-5 h-5 text-[#01ba5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-gray-600 text-sm">E Hënë-Shtunë (08:00-21:00)</span>
                </div>
                <a href="#Konk" className="block text-center bg-[#01ba5b] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-400 transition duration-300">
                    Kontakt
                </a>
            </div>
        </div>
    </div>
</nav>
  );
}


export default Navbar;