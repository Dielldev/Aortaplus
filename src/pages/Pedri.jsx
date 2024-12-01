import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pedri from '../assets/img/pedri.jpg';

function Pedri() {
    return (
        <div>
            <Navbar />
            <div class="container flex flex-col mx-auto px-4 md:flex-row items-center  py-40">
      <div class="w-full md:w-1/2 p-4">
      <img src={pedri} alt="Medifamily" class="h-96 w-full object-cover rounded-lg" />
    </div>
  <div class="w-full md:w-1/2 p-4">
    <h1 class="text-4xl text-blue-950 font-bold">Pediatria</h1>
    <p class="text-gray-500 text-xl my-4">Poliknikia AortaPlus ofron Pediatrinë e cila është një degë e mjekësisë që fokusohet në kujdesin mjekësor të foshnjave, fëmijëve dhe adoleshentëve, zakonisht deri në moshën 18 vjeç, megjithëse në disa raste mund të shtrihet tek të rriturit e rinj. Pediatrit janë mjekë të specializuar në këtë fushë, duke adresuar çështjet unike shëndetësore, nevojat e zhvillimit dhe sëmundjet e pacientëve më të rinj.
        
    </p>
    </div> 
    </div>
            <Footer />
        </div>
    );
}

export default Pedri;