import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import BioImg from '../assets/img/biochem.jpg';

function Biochem() {
  return (
    <ServiceLayout
      eyebrow="Laboratori Biokimik"
      title={<>Laboratori <span className="text-mint">biokimik.</span></>}
      intro="Laborator i specializuar për analiza biokimike të lëngjeve trupore — me instrumente të avancuara për matje precize të kimikateve, enzimave, hormoneve dhe metabolitëve. Baza e diagnostikimit të saktë."
      image={BioImg}
      points={[
        { title: "Mbledhja e mostrave", desc: "Procedurë e shpejtë, sterile dhe pa dhimbje." },
        { title: "Glukoza në gjak", desc: "Monitorim i diabetit dhe çrregullimeve metabolike." },
        { title: "Funksioni i mëlçisë", desc: "Teste LFT për vlerësim të plotë hepatik." },
        { title: "Funksioni i veshkave", desc: "Kreatinina, ureja dhe parametrat renalë." },
        { title: "Elektrolitet", desc: "Bilanc i natriumit, kaliumit dhe mineraleve." },
        { title: "Analizat hormonale", desc: "Profile hormonale dhe markerë specifikë." },
      ]}
      note="Rezultatet dorëzohen shpejt dhe interpretohen nga mjeku — me rekomandim të qartë për hapat e mëtejshëm."
    />
  );
}

export default Biochem;
