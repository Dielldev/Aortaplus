import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import SurgeryImg from '../assets/img/surgery.jpg';

function Surgery() {
  return (
    <ServiceLayout
      eyebrow="Kirurgjia"
      title={<>Kirurgji <span className="text-mint">moderne.</span></>}
      intro="Ndërhyrje manuale dhe instrumentale për trajtimin e sëmundjeve, lëndimeve dhe gjendjeve të tjera — nga teknikat minimalisht invazive te procedurat madhore, me kujdes postoperator profesional."
      image={SurgeryImg}
      points={[
        { title: "Vlerësimi kirurgjikal", desc: "Ekzaminim i plotë dhe plan i personalizuar ndërhyrjeje." },
        { title: "Teknika mininvazive", desc: "Qasje moderne me rikuperim më të shpejtë." },
        { title: "Ndërhyrjet e planifikuara", desc: "Heqje, riparim dhe korrigjim i indeve e organeve." },
        { title: "Anestezia e sigurt", desc: "Monitorim i plotë para, gjatë dhe pas procedurës." },
        { title: "Kujdesi postoperator", desc: "Ndjekje e plagës, dhimbjes dhe rehabilitimit." },
        { title: "Koordinimi", desc: "Bashkëpunim me laboratorin dhe imazherinë." },
      ]}
      note="Çdo procedurë paraprihet nga shpjegim i qartë i përfitimeve, rreziqeve dhe rikuperimit — pa surpriza."
    />
  );
}

export default Surgery;
