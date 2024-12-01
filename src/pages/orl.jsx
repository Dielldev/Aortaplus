import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import orl from '../assets/img/orl.jpg';
import ear from '../assets/img/ear.jpg';
import nose from '../assets/img/nose.jpg';
import mouth from '../assets/img/mouth.jpg';

const Orl = () => {
    return (
        <>
        <Navbar />
        <div className="min-h-screen flex flex-col py-40">
            <div className="container flex flex-col items-center justify-center mx-auto px-4 md:flex-row">
                <div className="w-full p-4">
                    <h1 className="text-4xl text-blue-950 font-bold text-center">ORL</h1>
                    <h1 className="text-2xl text-blue-950 font-bold text-center">(Otorinolaringologjia)</h1>
                    <p className="text-gray-500 text-xl my-4 text-center justify-center">Në Poliklinikën AortaPlus, departamenti ynë i ORL (Otorinolaringologjisë) është i përkushtuar në diagnostikimin dhe trajtimin e çrregullimeve që lidhen me veshin, hundën dhe fytin, si dhe strukturat përkatëse të kokës dhe qafës. Ndonjëherë kjo fushë referohet si ENT (veshi, hunda, fyti) për thjeshtësi. Dr. Hekuran Shahini, specialisti ynë në këtë fushë, ofron kujdes të avancuar për trajtimin e një game të gjerë problemesh shëndetësore, duke përfshirë infeksionet e veshit, sinusitet, problemet me dëgjimin dhe çrregullimet e zërit, gjithmonë me përkushtim ndaj shëndetit dhe mirëqenies së pacientëve tanë.</p>
                    <p className="text-gray-500 text-xl my-4 text-center justify-center font-bold">Ndarja e termit:
                        <ol className="text-xl">
                            <li>Oto: I referohet veshit.</li>
                            <li>Rhino: I referohet hundës.</li>
                            <li>Laringo: I referohet laringut ose fytit.</li>
                            <li>Logjia: Studimi</li>
                        </ol>
                    </p>    
                    <img src={orl} alt="Medifamily" className="h-96 w-full shadow-xl object-cover border-2 rounded-xl" />
                </div> 
            </div>

            <div className="container flex flex-col mx-auto px-4 md:flex-row items-center mt-12">
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-4xl text-blue-950 font-bold">Veshi (Oto)</h1>
                    <p className="text-gray-500 text-2xl my-4">Veshi është përgjegjës për dëgjimin dhe ekuilibrin. Kushtet e zakonshme që prekin veshin përfshijnë: </p>
                        <ol className="text-xl">
                            <li>Otitis Media: Infeksion i veshit të mesëm.</li>
                            <li>Tringëllimë në veshët: Tringëllimë në vesh.</li>
                            <li>Humbja e dëgjimit: Mund të shkaktohet nga mosha, lëndimi ose infeksioni.</li>
                            <li>Sëmundja e Meniere: Çrregullim i veshit të brendshëm që ndikon në ekuilibrin dhe dëgjimin.</li>
                        </ol>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <img src={ear} alt="Medifamily" className="h-96 w-full object-cover border-2 rounded-xl shadow-xl" />  
                </div> 
            </div>

            <div className="container flex flex-col mx-auto px-4 md:flex-row items-center mt-12">
                <div className="w-full md:w-1/2 p-4">
                    <img src={nose} alt="Medifamily" className="h-96 w-full object-cover border-2 rounded-xl shadow-xl" />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-4xl text-blue-950 font-bold">Hunda (Rhino)</h1>
                    <p className="text-gray-500 text-2xl my-4">Hunda është thelbësore për frymëmarrjen, filtrimin e ajrit dhe nuhatjen. Kushtet e zakonshme që prekin hundën përfshijnë: </p>
                        <ol className="text-xl">
                            <li>Sinusiti: Inflamacion i sinuseve.</li>
                            <li>Polipet e hundës: Rritje jo kanceroze në kanalin e hundës.</li>
                            <li>Devijimi i septumit: Keqrregullimi i septumit të hundës, i cili mund të shkaktojë probleme me frymëmarrjen.</li>
                            <li>Riniti alergjik: Inflamacion për shkak të alergjive.</li>
                        </ol>
                    <p className="text-gray-500 text-2xl mt-4">Hunda gjithashtu luan një rol në shqisën e nuhatjes (olfaksionit) dhe kontribon në perceptimin e shijes.</p>
                </div> 
            </div>

            <div className="container flex flex-col mx-auto px-4 md:flex-row items-center mt-12">
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-4xl text-blue-950 font-bold">Gojë/Fyt (Laringo)</h1>
                    <p className="text-gray-500 text-2xl my-4">Goja dhe fyti janë çelësi për tretjen (përtypja dhe gëlltitja), të folurit dhe frymëmarrjen. Gryka përfshin faringun dhe laringun kutinë e zërit. Kushtet e zakonshme që prekin fytin përfshijnë: </p>
                        <ol className="text-xl">
                            <li>Faringjiti: Inflamacion i faringut, i njohur zakonisht si dhimbje e fytit.</li>
                            <li>Laringiti: Inflamacion i laringut, i cili prek zërin.</li>
                            <li>Tonsillitis: Inflamacion i bajameve, zakonisht për shkak të infeksionit.</li>
                            <li>Apnea e gjumit: Një gjendje ku frymëmarrja ndalet në mënyrë të përsëritur gjatë gjumit, shpesh për shkak të bllokimit në fyt.</li>
                        </ol>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <img src={mouth} alt="Medifamily" className="h-96 w-full object-cover border-2 rounded-xl shadow-xl" />  
                </div> 
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Orl;