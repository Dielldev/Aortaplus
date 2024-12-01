import React from 'react';
import Logo from '../assets/img/logoo.png';
import { Link } from 'react-router-dom';

function Footer() {
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gradient-to-b from-white to-blue-50 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Column 1 - Logo and About */}
                    <div className="space-y-6 text-center md:text-left">
                        <img src={Logo} alt="Aorta Plus Logo" className="h-20 mx-auto md:mx-0" />
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Poliklinika Aorta Plus është një qendër mjekësore e përkushtuar për të ofruar shërbime shëndetësore të klasit të parë për komunitetin tonë që nga viti 1996.
                        </p>
                        {/* Social Media Links */}
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="https://www.facebook.com/profile.php?id=61557633473126&paipv=0&eav=AfYSpxieUbWG4Kzrz_noWJLnj9e9bDXi-lKvDac2h9ndsciYnIkP2R-cMCwQsha1XDc"
                               className="text-blue-400 hover:text-[#01ba5b] transition duration-300">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Facebook">
                                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/aorta.pluss/" 
                               className="text-blue-400 hover:text-[#01ba5b] transition duration-300">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Instagram">
                                    <path d="M12,2.2c3.2,0,3.6,0,4.9,0.1c3.3,0.1,4.8,1.7,4.9,4.9c0.1,1.3,0.1,1.6,0.1,4.8c0,3.2,0,3.6-0.1,4.8c-0.1,3.2-1.7,4.8-4.9,4.9c-1.3,0.1-1.6,0.1-4.9,0.1c-3.2,0-3.6,0-4.8-0.1c-3.3-0.1-4.8-1.7-4.9-4.9c-0.1-1.3-0.1-1.6-0.1-4.8c0-3.2,0-3.6,0.1-4.8c0.1-3.2,1.7-4.8,4.9-4.9C8.4,2.2,8.8,2.2,12,2.2z M12,0C8.7,0,8.3,0,7.1,0.1c-4.4,0.2-6.8,2.6-7,7C0,8.3,0,8.7,0,12s0,3.7,0.1,4.9c0.2,4.4,2.6,6.8,7,7C8.3,24,8.7,24,12,24s3.7,0,4.9-0.1c4.4-0.2,6.8-2.6,7-7C24,15.7,24,15.3,24,12s0-3.7-0.1-4.9c-0.2-4.4-2.6-6.8-7-7C15.7,0,15.3,0,12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,16,12,16z M18.4,4.2c-0.8,0-1.4,0.6-1.4,1.4S17.6,7,18.4,7c0.8,0,1.4-0.6,1.4-1.4S19.2,4.2,18.4,4.2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-gray-900 font-bold text-lg mb-6">Linqe të Shpejta</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="text-gray-600 hover:text-[#01ba5b] transition duration-300">Kryefaqja</Link>
                            </li>
                            <li>
                                <a href="#Sherbimet" 
                                   onClick={(e) => handleScroll(e, '#Sherbimet')} 
                                   className="text-gray-600 hover:text-[#01ba5b] transition duration-300">
                                    Shërbimet
                                </a>
                            </li>
                            <li>
                                <a href="#Reth" 
                                   onClick={(e) => handleScroll(e, '#Reth')} 
                                   className="text-gray-600 hover:text-[#01ba5b] transition duration-300">
                                    Rreth Nesh
                                </a>
                            </li>
                            <li>
                                <a href="#Mjek" 
                                   onClick={(e) => handleScroll(e, '#Mjek')} 
                                   className="text-gray-600 hover:text-[#01ba5b] transition duration-300">
                                    Stafi
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div className="text-center md:text-left">
                        <h3 className="text-gray-900 font-bold text-lg mb-6">Shërbimet Tona</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#Sherbimet" 
                                   onClick={(e) => handleScroll(e, '#Sherbimet')} 
                                   className="text-gray-600 hover:text-[#01ba5b] transition duration-300">
                                    Laboratori Biokimik
                                </a>
                            </li>
                            <li>
                                <a href="#Sherbimet" 
                                   onClick={(e) => handleScroll(e, '#Sherbimet')} 
                                   className="text-gray-600 hover:text-[#01ba5b] transition duration-300">
                                    Mjekësia Familjare
                                </a>
                            </li>
                            <li>
                                <a href="#Sherbimet" 
                                   onClick={(e) => handleScroll(e, '#Sherbimet')} 
                                   className="text-gray-600 hover:text-[#01ba5b] transition duration-300">
                                    ORL
                                </a>
                            </li>
                            <li>
                                <a href="#Sherbimet" 
                                   onClick={(e) => handleScroll(e, '#Sherbimet')} 
                                   className="text-gray-600 hover:text-[#01ba5b] transition duration-300">
                                    Kardiologjia
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - Contact Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-gray-900 font-bold text-lg mb-6">Kontakt Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 justify-center md:justify-start">
                                <svg className="h-6 w-6 text-[#01ba5b] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span className="text-gray-600">Ferizaj, Kosovë</span>
                            </li>
                            <li className="flex items-start space-x-3 justify-center md:justify-start">
                                <svg className="h-6 w-6 text-[#01ba5b] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span className="text-gray-600">plusaorta@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-400">© 2024 Poliklinika AortaPlus. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer;
