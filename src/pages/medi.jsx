import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Medi1 from '../assets/img/medi1.jpeg';

function Medi() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-grow py-16">
                <div className="container flex flex-col mx-auto px-4 md:flex-row items-center mt-12">
                    <div className="w-full md:w-1/2 p-4">
                        <img src={Medi1} alt="Medifamily" className="h-96 w-full object-cover rounded-lg" />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <h1 className="text-4xl text-blue-950 font-bold">Mjeksia Familiare</h1>
                        <p className="text-gray-500 text-xl my-4">Në Poliklinikën AortaPlus, mjekësia familjare është një nga fushat kryesore ku ne përqendrojmë kujdesin tonë shëndetësor gjithëpërfshirës për individët e të gjitha moshave, gjinive dhe gjendjeve shëndetësore. Mjekët tanë, Dr. Visar Haliti dhe Dr. Triumf Azemi, janë të specializuar në ndërtimin e marrëdhënieve afatgjata dhe të besueshme me pacientët dhe familjet e tyre. Ata fokusohen në vazhdimësinë e kujdesit gjatë gjithë jetës, nga fëmijëria deri në pleqëri. Të trajnuar për të trajtuar një gamë të gjerë çështjesh mjekësore, ata ofrojnë kujdes parandalues, diagnostikim dhe trajtim të sëmundjeve akute dhe kronike, si dhe koordinim me specialistët e tjerë kur është e nevojshme.
                    </p>
                    </div> 
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Medi;

