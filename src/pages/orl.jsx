import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import orl from '../assets/img/orl.jpg';

function Orl() {
  return (
    <ServiceLayout
      eyebrow="ORL · Otorinolaringologjia"
      title={<>Vesh · Hundë · <span className="text-mint">Fyt.</span></>}
      intro="Departamenti i ORL-së, i udhëhequr nga Dr. Hekuran Shahini, merret me diagnostikimin dhe trajtimin e çrregullimeve të veshit, hundës, fytit dhe strukturave të kokës e qafës — me përkushtim total ndaj pacientit."
      image={orl}
      points={[
        { title: "Oto — Veshi", desc: "Otitis media, tringëllima, humbja e dëgjimit, sëmundja e Meniere." },
        { title: "Rhino — Hunda", desc: "Sinusiti, polipet, devijimi i septumit, riniti alergjik." },
        { title: "Laringo — Fyti", desc: "Faringjit, laringit, tonsilit dhe apnea e gjumit." },
        { title: "Dëgjimi & ekuilibri", desc: "Vlerësim i dëgjimit dhe çrregullimeve vestibulare." },
        { title: "Zëri", desc: "Çrregullimet e zërit dhe kordave vokale." },
        { title: "Ndjekja", desc: "Terapia, kontrollet dhe parandalimi i rikthimit." },
      ]}
      note="Oto = vesh · Rhino = hundë · Laringo = fyt · Logjia = studimi. Një ekip, një adresë për të gjithë spektrin ENT."
    />
  );
}

export default Orl;
