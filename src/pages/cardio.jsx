import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cardio from '../assets/img/cardio.jpg';

function Cardio() {
    return (
        <div>
            <Navbar />
            <div class="container flex flex-col mx-auto px-4 md:flex-row items-center py-40 ">
      <div class="w-full md:w-1/2 p-4">
      <img src={cardio} alt="Medifamily" class="h-96 w-full object-cover rounded-lg" />
    </div>
  <div class="w-full md:w-1/2 p-4">
    <h1 class="text-4xl text-blue-950 font-bold">Kardiologjia</h1>
    <p class="text-gray-500 text-xl my-4">Një ndër degët më të rëndësishme që Poliklinika Aorta Plus ofron është Kardiologjia, Një degë e mjekësisë që merret me çrregullimet e zemrës dhe të sistemit kardiovaskular. Fusha përfshin diagnozën mjekësore dhe trajtimin e defekteve të lindura të zemrës, sëmundjes së arterieve koronare, dështimit të zemrës, sëmundjes valvulare të zemrës dhe elektrofiziologjisë.
        
    </p>
    </div> 
    </div>
            <Footer />
        </div>
    );
}

export default Cardio;