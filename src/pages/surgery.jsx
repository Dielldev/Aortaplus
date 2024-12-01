import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurgeryImg from '../assets/img/surgery.jpg';
import { Link } from 'react-router-dom';

function Surgery() {
    return (
        <div>
            <Navbar />
            <section className="bg-gradient-to-r from-white to-blue-50 py-40 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Column - Text Content */}
                    <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Kujdesi Shëndetësor <span className="text-[#01ba5b]">Profesional</span> për Familjen Tuaj
                        </h1>
                        <p className="text-gray-600 text-lg mb-8">
                            Në Poliklinikën Aorta Plus, ne ofrojmë shërbime mjekësore të specializuara me përkushtim të plotë ndaj shëndetit tuaj. Me një ekip të përkushtuar specialistësh dhe teknologji moderne, ne sigurojmë kujdes shëndetësor të klasit të parë.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <a href="#Konk" className="inline-block bg-[#01ba5b] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 transition duration-300 text-center transform hover:scale-105">
                                Cakto Termin
                            </a>
                            <a href="#Sherbimet" class="inline-block border-2 border-[#01ba5b] text-[#01ba5b] px-8 py-3 rounded-full font-semibold hover:bg-[#01ba5b] hover:text-white transition duration-300 text-center">
                                Shërbimet Tona
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Features */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Feature 1 */}
                        <div class="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300">
                            <div class="text-[#01ba5b] mb-4">
                                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Staf i Kualifikuar</h3>
                            <p class="text-gray-600">Ekipi ynë përbëhet nga specialistë me përvojë të gjatë në fushën e mjekësisë.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300">
                            <div className="text-[#01ba5b] mb-4">
                                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Pajisje Moderne</h3>
                            <p class="text-gray-600">Përdorim teknologjinë më të fundit për diagnostikim dhe trajtim të saktë.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300">
                            <div className="text-[#01ba5b] mb-4">
                                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Orar Fleksibil</h3>
                            <p class="text-gray-600">Ofrojmë shërbime gjatë gjithë javës me orare të përshtatshme për ju.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300">
                            <div className="text-[#01ba5b] mb-4">
                                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Kujdes Individual</h3>
                            <p class="text-gray-600">Çdo pacient merr vëmendje të personalizuar dhe plan trajtimi të dedikuar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="container flex flex-col mx-auto px-4 md:flex-row items-center mt-12 ">
      <div className="w-full md:w-1/2 p-4">
      <img src={SurgeryImg} alt="Medifamily" className="h-96 w-full object-cover rounded-lg"/>
    </div>
  <div className="w-full md:w-1/2 p-4">
    <h1 className="text-4xl text-blue-950 font-bold">Kirurgjia</h1>
    <p className="text-gray-500 text-xl my-4"> Poliknikia AortaPlus ofron Kirurgjië e cila është një degë e mjekësisë që përfshin ndërhyrje manuale ose instrumentale në trupin e një pacienti për të trajtuar sëmundje, lëndime ose kushte të tjera mjekësore. Zakonisht përfshin prerjen, heqjen, riparimin ose manipulimin e indeve ose organeve për të përmirësuar ose rivendosur funksionin trupor, për të trajtuar sëmundjen ose për të lehtësuar simptomat. Procedurat kirurgjikale mund të variojnë nga teknikat minimalisht invazive (si kirurgjia laparoskopike) deri te operacionet e mëdha (si transplantimi i organeve).
        
    </p>
    </div> 
    </div>
            
            <Footer />
        </div>
    );
}

export default Surgery;