import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import main1 from '../assets/img/main1.png';
import Img1 from '../assets/img/icon1.png'
import Img2 from '../assets/img/icon2.png'
import Img3 from '../assets/img/icon3.png'
import Img4 from '../assets/img/icon4.png'
import Img5 from '../assets/img/icon5.png'
import Img6 from '../assets/img/icon6.png'
import Photo1 from "../assets/img/clinic1.jpg";
import Photo2 from "../assets/img/foto1.png";
import Photo3 from "../assets/img/foto5.jpg";
import Photo4 from "../assets/img/foto6.jpg";
import Photo5 from "../assets/img/foto3.png";
import Photo6 from "../assets/img/foto7.jpg";
import Photo7 from "../assets/img/foto8.jpg";
import Photo8 from "../assets/img/foto10.png";
import Photo11 from "../assets/img/doctor1.png";
import Photo22 from "../assets/img/doctor2.png";
import Photo33 from "../assets/img/Diellza.png";



function Home() {
    return (
        <div>
            <Navbar />
            <section className="relative min-h-screen bg-gradient-to-r from-white to-blue-50 overflow-hidden" id="Shtepia">
 
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#01ba5b] opacity-5 transform rotate-12 translate-x-1/3"></div>
    <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-400 opacity-5 transform -rotate-12 -translate-x-1/3"></div>

    <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center">
          
            <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 z-10">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
                    Kujdesi Juaj Shëndetësor është 
                    <span className="text-[#01ba5b] animate-text-gradient ml-2">Prioriteti Ynë</span>
                </h1>
                <p className="text-gray-600 text-xl mb-8 leading-relaxed animate-fade-in-up delay-200">
                    Që nga viti 1996, Poliklinika Aorta Plus ofron shërbime mjekësore të specializuara me përkushtim të plotë ndaj shëndetit tuaj dhe familjes suaj.
                </p>

               
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-300">
                    <a href="#Konk" 
                       className="inline-flex items-center justify-center bg-[#01ba5b] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-400 transition duration-300 transform hover:scale-105 shadow-lg">
                        <span>Cakto Termin</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                    <a href="#Sherbimet" 
                       className="inline-flex items-center justify-center border-2 border-[#01ba5b] text-[#01ba5b] px-8 py-4 rounded-full font-semibold hover:bg-[#01ba5b] hover:text-white transition duration-300 shadow-lg">
                        <span>Shërbimet Tona</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                    </a>
                </div>

              
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 animate-fade-in-up delay-400">
                    <div className="text-center transform hover:scale-105 transition duration-300">
                        <div className="text-3xl font-bold text-[#01ba5b] counter">28+</div>
                        <div className="text-gray-600">Vite Përvojë</div>
                    </div>
                    <div className="text-center transform hover:scale-105 transition duration-300">
                        <div className="text-3xl font-bold text-[#01ba5b] counter">10k+</div>
                        <div className="text-gray-600">Pacientë të Kënaqur</div>
                    </div>
                    <div className="text-center transform hover:scale-105 transition duration-300">
                        <div className="text-3xl font-bold text-[#01ba5b] counter">15+</div>
                        <div className="text-gray-600">Specialistë</div>
                    </div>
                   
                </div>
            </div>

            
            <div className="w-full lg:w-1/2 relative z-10 animate-fade-in-up delay-200">
                <div className="relative">
                   
                    <div className="absolute inset-0 z-0">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path fill="#01ba5b" fill-opacity="0.1" 
                                d="M55.2,-65.7C71.9,-55.5,85.8,-37.7,89.5,-18.1C93.2,1.5,86.7,22.9,75.4,39.5C64.1,56.1,47.9,67.9,29.8,73.5C11.7,79,-8.4,78.3,-27.5,72.1C-46.6,65.9,-64.7,54.3,-76.6,36.9C-88.4,19.5,-94,-3.7,-88.2,-23.6C-82.3,-43.5,-65,-60.2,-46.5,-69.8C-28,-79.5,-8.3,-82.1,11.5,-79.7C31.3,-77.3,38.5,-75.9,55.2,-65.7Z" 
                                transform="translate(100 100)" />
                        </svg>
                    </div>

                    
                    <div className="relative z-20 transform hover:scale-105 transition duration-500">
                        <div className="custom-blob-shape overflow-hidden">
                            <img src={main1} alt="Doctor" className="w-full h-auto" />
                        </div>
                    </div>
                    
                  
                    <div className="absolute top-10 -left-10 z-30 bg-white p-4 rounded-xl shadow-lg transform hover:scale-110 transition duration-300">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-[#01ba5b] rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">Staf i Kualifikuar</p>
                                <p className="text-xs text-gray-500">Ekspertë në fushën e tyre</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 -right-10 z-30 bg-white p-4 rounded-xl shadow-lg transform hover:scale-110 transition duration-300">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">Shërbim</p>
                                <p className="text-xs text-gray-500">Gjithmonë në dispozicion</p>
                            </div>
                        </div>
                    </div>

                  
                    <div className="absolute top-1/4 -right-8 w-16 h-16 bg-blue-400 rounded-full opacity-10"></div>
                    <div className="absolute bottom-1/4 -left-8 w-20 h-20 bg-[#01ba5b] rounded-full opacity-10"></div>
                </div>
            </div>
        </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </div>
</section>


<section className="bg-white py-16" id="Sherbimet">
    <div className="container mx-auto px-4">
      
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#01ba5b] mb-4">Shërbimet Tona</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Poliklinika Aorta Plus ofron një gamë të gjerë shërbimesh mjekësore për të përmbushur nevojat tuaja shëndetësore. Ekipi ynë i specializuar është i përkushtuar për t'ju ofruar kujdesin më të mirë të mundshëm.
            </p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={Img1} alt="Laboratori Biokimik" className="w-20 h-20 mx-auto mt-8" />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-[#01ba5b] mb-3">Laboratori Biokimik</h3>
                    <p className="text-gray-600 mb-4">Testet laboratorike biokimike të lëngjeve trupore për diagnostikim të saktë.</p>
                    <a href="/biochem" className="inline-flex items-center text-blue-500 hover:text-[#01ba5b] transition duration-300">
                        Lexo më shumë
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={Img2} alt="Mjekësia familjare" className="w-20 h-20 mx-auto mt-8" />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-[#01ba5b] mb-3">Mjekësia Familjare</h3>
                    <p className="text-gray-600 mb-4">Kujdes gjithëpërfshirës shëndetësor për të gjitha moshat dhe nevojat familjare.</p>
                    <a href="/medi" className="inline-flex items-center text-blue-500 hover:text-[#01ba5b] transition duration-300">
                        Lexo më shumë
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

       
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={Img3} alt="ORL" className="w-20 h-20 mx-auto mt-8" />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-[#01ba5b] mb-3">ORL</h3>
                    <p className="text-gray-600 mb-4">Shërbime të specializuara për vesh, hundë dhe fyt nga otorinolaringologët tanë.</p>
                    <a href="/orl" className="inline-flex items-center text-blue-500 hover:text-[#01ba5b] transition duration-300">
                        Lexo më shumë
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={Img4} alt="Kirurgji" className="w-20 h-20 mx-auto mt-8" />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-[#01ba5b] mb-3">Kirurgji</h3>
                    <p className="text-gray-600 mb-4">Procedura kirurgjikale të avancuara dhe kujdes postoperativ profesional.</p>
                    <a href="/surgery" className="inline-flex items-center text-blue-500 hover:text-[#01ba5b] transition duration-300">
                        Lexo më shumë
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

   
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={Img5} alt="Pediatri" className="w-20 h-20 mx-auto mt-8" />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-[#01ba5b] mb-3">Pediatri</h3>
                    <p className="text-gray-600 mb-4">Kujdes i specializuar mjekësor për foshnjat, fëmijët dhe adoleshentët.</p>
                    <a href="/Pedri" className="inline-flex items-center text-blue-500 hover:text-[#01ba5b] transition duration-300">
                        Lexo më shumë
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={Img6} alt="Kardiologu" className="w-20 h-20 mx-auto mt-8" />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-[#01ba5b] mb-3">Kardiologji</h3>
                    <p className="text-gray-600 mb-4">Diagnostikim dhe trajtim i specializuar për sëmundjet e zemrës dhe enëve të gjakut.</p>
                    <a href="/cardio" className="inline-flex items-center text-blue-500 hover:text-[#01ba5b] transition duration-300">
                        Lexo më shumë
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="bg-white py-20" id="Reth">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
               
                <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
                    <h2 className="text-3xl font-semibold text-blue-400 mb-4">Rreth Nesh</h2>
                    <h3 className="text-4xl font-bold text-[#01ba5b] mb-6">Çfarë ofron klinika jonë</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        Mirë se vini në Poliklinikën Aorta Plus, partneri juaj i besuar i kujdesit shëndetësor në Ferizaj, Kosovë që nga viti 1996. Klinika jonë është e përkushtuar për të ofruar kujdes mjekësor gjithëpërfshirës në një sërë specialitetesh, duke përfshirë biokiminë, mjekësinë familjare, otorinolaringologji (ORL), kirurgji dhe më shumë.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Në Poliklinikën Aorta Plus, ne besojmë në një qasje holistike ndaj shëndetit dhe mirëqenies. Misioni ynë është të mbështesim pacientët tanë në çdo fazë të udhëtimit të tyre shëndetësor, nga kontrollet rutinë deri te trajtimet e avancuara.
                    </p>
                </div>
    
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <img className="h-auto w-full object-cover" src={Photo1} alt="Clinic Image 1" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <img className="h-auto w-full object-cover" src={Photo2} alt="Clinic Image 2" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <img className="h-auto w-full object-cover" src={Photo3} alt="Clinic Image 3" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <img className="h-auto w-full object-cover" src={Photo4} alt="Clinic Image 4" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <img className="h-auto w-full object-cover" src={Photo5} alt="Clinic Image 5" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <img className="h-auto w-full object-cover" src={Photo6} alt="Clinic Image 6" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <img className="h-auto w-full object-cover" src={Photo7} alt="Clinic Image 7" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <img className="h-auto w-full object-cover" src={Photo8} alt="Clinic Image 8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white py-16" id="Mjek">
    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#01ba5b] mb-4">Stafi Ynë Profesional</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Poliklinika Aorta Plus krenohet me një ekip të përkushtuar specialistësh mjekësorë të klasit të lartë, të gatshëm për t'ju ofruar kujdesin më të mirë shëndetësor.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           
            <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-[#01ba5b] shadow-lg">
                    <img className="w-full h-full object-cover" src={Photo11} alt="Dr. Hekuran Shahini" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Hekuran Shahini</h3>
                <p className="text-[#01ba5b] font-semibold mb-3">Specialist i Otroionolarinogologjisë</p>
                <p className="text-gray-600 text-center">Ekspert në diagnostikimin dhe trajtimin e çrregullimeve të veshit, hundës dhe fytit.</p>
            </div>

           
            <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-[#01ba5b] shadow-lg">
                    <img className="w-full h-full object-cover" src={Photo22} alt="Dr. Visar Haliti" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Visar Haliti</h3>
                <p className="text-[#01ba5b] font-semibold mb-3">Mjeku Familjar</p>
                <p className="text-gray-600 text-center">Ofron kujdes gjithëpërfshirës për pacientë të të gjitha moshave, me fokus në parandalim dhe mirëqenie.</p>
            </div>

            
            <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-[#01ba5b] shadow-lg">
                    <img className="w-full h-full object-cover" src={Photo33} alt="Dr. Diellza Mani" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Diellza Mani</h3>
                <p className="text-[#01ba5b] font-semibold mb-3">Mjeke Familjare</p>
                <p className="text-gray-600 text-center">E specializuar në kujdesin shëndetësor për të gjithë familjen, me një qasje të përqendruar te pacienti.</p>
            </div>
        </div>

        <div className="text-center mt-12">
            <a href="#" className="inline-block bg-[#01ba5b] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-400 transition duration-300">
                Njihuni me të gjithë stafin tonë
            </a>
        </div>
    </div>
</section>


<section className="bg-white py-16" id="Konk">
    <div className="container mx-auto px-4">
    
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#01ba5b] mb-4">Na Kontaktoni</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Jemi këtu për t'ju ndihmuar. Na kontaktoni për çdo pyetje ose për të caktuar një takim.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         
            <div className="space-y-8">
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#01ba5b] hover:transform hover:scale-105 transition duration-300">
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#01ba5b] p-3 rounded-full">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Na telefononi</h3>
                                <p className="text-[#01ba5b] font-bold">044-172-429</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#01ba5b] hover:transform hover:scale-105 transition duration-300">
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#01ba5b] p-3 rounded-full">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                                <p className="text-[#01ba5b] font-bold">aortaplus@yahoo.com</p>
                            </div>
                        </div>
                    </div>

              
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#01ba5b] hover:transform hover:scale-105 transition duration-300">
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#01ba5b] p-3 rounded-full">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Orari i punës</h3>
                                <p className="text-[#01ba5b] font-bold">E Hënë - E Shtunë</p>
                                <p className="text-gray-600">08:00 - 21:00</p>
                            </div>
                        </div>
                    </div>

                 
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#01ba5b] hover:transform hover:scale-105 transition duration-300">
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#01ba5b] p-3 rounded-full">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Lokacioni</h3>
                                <p className="text-[#01ba5b] font-bold">Ferizaj, Kosovë</p>
                            </div>
                        </div>
                    </div>
                </div>

         
                <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg border-4 border-[#01ba5b]">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94232.15507445006!2d21.085066239062492!3d42.43295286127629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13547f00568aa849%3A0x9db1c04dbad9f57!2sPoliklinika%20Aorta%20Plus!5e0!3m2!1sen!2s!4v1731436627777!5m2!1sen!2s"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

   
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Na dërgoni një mesazh</h3>
                <form className="space-y-6" target="_blank" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="f89d0ea2-8e31-4761-897b-6125c25f5670" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Emri</label>
                            <input type="text" id="name" name="Name" required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01ba5b] focus:ring-2 focus:ring-[#01ba5b] focus:ring-opacity-20 transition duration-300"
                                placeholder="Emri" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" name="Email" required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01ba5b] focus:ring-2 focus:ring-[#01ba5b] focus:ring-opacity-20 transition duration-300"
                                placeholder="email@juaj.com" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Numri i telefonit</label>
                        <input type="tel" id="phone" name="Telephone" required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01ba5b] focus:ring-2 focus:ring-[#01ba5b] focus:ring-opacity-20 transition duration-300"
                            placeholder="044-XXX-XXX" />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="message">Mesazhi</label>
                        <textarea id="message" name="Message" rows="4" required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#01ba5b] focus:ring-2 focus:ring-[#01ba5b] focus:ring-opacity-20 transition duration-300"
                            placeholder="Shkruani mesazhin tuaj këtu..."></textarea>
                    </div>

                    <button type="submit"
                        className="w-full bg-[#01ba5b] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-400 transition duration-300 transform hover:scale-105">
                        Dërgo Mesazhin
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>





            <Footer />
        </div>
    );
}

export default Home;