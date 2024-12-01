import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BioImg from '../assets/img/biochem.jpg';
import { Link } from 'react-router-dom';


function Biochem() {
    return (
        <div>
            <Navbar />
            
      <div className="container flex flex-col mx-auto px-4 md:flex-row items-center py-40">
      <div className="w-full md:w-1/2 p-4">
         <h2 className="text-4xl font-bold text-blue-950 font-bold ">Laboratori Biokimis</h2>
         <p className="text-xl font-bold mt-4">
          Në Poliklinikën AortaPlus, ne ofrojmë një laborator biokimik të specializuar, ku kryejmë teste për të studiuar proceset kimike që ndodhin në trupin tuaj. Laboratori ynë është i pajisur me instrumente të avancuara që na mundësojnë të masim me saktësi përqendrimet e kimikateve, enzimave, hormoneve dhe metabolitëve të ndryshëm në lëngjet biologjike. Këto analiza na ndihmojnë të japim një vlerësim të detajuar të gjendjes tuaj shëndetësore, duke na mundësuar të sigurojmë kujdesin më të mirë të mundshëm.
        </p>
        <p className="text-4xl text-blue-400 font-bold mt-4">
            Çfarë bën një laborator biokimik?  
        </p>
          <ol className="text-xl" >
            <li>Mbledhja dhe përgatitja e mostrav</li>
            <li>Testimi i glukozës në gjak</li>
            <li>Testet e funksionit të mëlçisë (LFT)</li>
            <li>Testet e funksionit të veshkave</li>
            <li>Bilanci i elektroliteve</li>
            <li>Analizat hormonale etj.</li>
          </ol>
        </div>  
  <div className="w-full md:w-1/2 p-4">
    <img src={BioImg} className="rounded-lg w-full h-auto" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Biochem;