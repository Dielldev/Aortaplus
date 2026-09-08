import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import Medi1 from '../assets/img/medi1.jpeg';

function Medi() {
  return (
    <ServiceLayout
      eyebrow="Mjekësia Familjare"
      title={<>Mjekësia <span className="text-mint">familjare.</span></>}
      intro="Kujdes gjithëpërfshirës për individë të të gjitha moshave. Dr. Visar Haliti dhe Dr. Triumf Azemi ndërtojnë marrëdhënie afatgjata besimi — nga fëmijëria deri në pleqëri."
      image={Medi1}
      points={[
        { title: "Kontrollet parandaluese", desc: "Check-up periodik dhe depistim i hershëm." },
        { title: "Sëmundjet akute", desc: "Diagnostikim dhe trajtim i shpejtë i infeksioneve." },
        { title: "Sëmundjet kronike", desc: "Menaxhim i diabetit, hipertensionit dhe më shumë." },
        { title: "Shëndeti i fëmijëve", desc: "Ndjekje e rritjes, zhvillimit dhe vaksinimit." },
        { title: "Këshillimi", desc: "Ushqyerja, stili i jetesës dhe shëndeti mendor." },
        { title: "Koordinimi", desc: "Referim i shpejtë te specialistët kur nevojitet." },
      ]}
      note="Mjeku juaj familjar ju njeh — historinë, familjen dhe nevojat tuaja. Kjo vazhdimësi bën diferencën."
    />
  );
}

export default Medi;
