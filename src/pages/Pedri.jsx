import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import pedri from '../assets/img/pedri.jpg';

function Pedri() {
  return (
    <ServiceLayout
      eyebrow="Pediatria"
      title={<>Pediatri <span className="text-mint">e kujdesshme.</span></>}
      intro="Kujdes mjekësor i dedikuar për foshnjat, fëmijët dhe adoleshentët deri në 18 vjeç — me vëmendje për nevojat unike shëndetësore dhe zhvillimore të moshave të reja."
      image={pedri}
      points={[
        { title: "Kontrollet e rritjes", desc: "Peshë, gjatësi dhe zhvillim psikomotor." },
        { title: "Vaksinimi", desc: "Kalendari i plotë sipas protokolleve." },
        { title: "Infeksionet e fëmijërisë", desc: "Diagnostikim i shpejtë dhe trajtim i butë." },
        { title: "Ushqyerja", desc: "Këshillim për gjidhënien dhe dietën e fëmijës." },
        { title: "Alergjitë & astma", desc: "Vlerësim dhe plan menaxhimi afatgjatë." },
        { title: "Prindërit partnerë", desc: "Shpjegime të qarta dhe udhëzime për shtëpi." },
      ]}
      note="Ambient miqësor për fëmijë dhe qasje e qetë që e kthen vizitën te mjeku në përvojë pozitive."
    />
  );
}

export default Pedri;
