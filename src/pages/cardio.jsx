import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import cardio from '../assets/img/cardio.jpg';

function Cardio() {
  return (
    <ServiceLayout
      eyebrow="Kardiologjia"
      title={<>Zemër <span className="text-mint">e shëndetshme.</span></>}
      intro="Një nga shtyllat e Aorta Plus: diagnostikimi dhe trajtimi i sëmundjeve të zemrës dhe sistemit kardiovaskular — nga defektet e lindura te sëmundja koronare, valvulare dhe elektrofiziologjia."
      image={cardio}
      points={[
        { title: "EKG & monitorimi", desc: "Elektrokardiogramë dhe Holter për ritmin kardiak." },
        { title: "Sëmundja koronare", desc: "Vlerësim i rrezikut dhe menaxhim modern." },
        { title: "Hipertensioni", desc: "Diagnostikim, terapi dhe ndjekje afatgjatë." },
        { title: "Dështimi kardiak", desc: "Optimizim i terapisë dhe cilësisë së jetës." },
        { title: "Sëmundjet valvulare", desc: "Detektim i hershëm dhe referim i saktë." },
        { title: "Parandalimi", desc: "Kolesteroli, stili i jetesës dhe kontrollet." },
      ]}
      note="Zemra juaj meriton vëmendje të veçantë — kontrollet e rregullta parandalojnë komplikimet serioze."
    />
  );
}

export default Cardio;
