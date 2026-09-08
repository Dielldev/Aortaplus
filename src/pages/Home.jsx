import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroImg from "../assets/img/clinic1.jpg";
import AboutMain from "../assets/img/foto5.jpg";
import AboutSmall1 from "../assets/img/foto6.jpg";
import AboutSmall2 from "../assets/img/foto7.jpg";
import Doc1 from "../assets/img/doctor1.png";
import Doc2 from "../assets/img/doctor2.png";
import Doc3 from "../assets/img/Diellza.png";
import Doc4 from "../assets/img/doctor3.png";

/* ---------------------------------- data ---------------------------------- */

const featured = [
  {
    to: "/biochem",
    title: "Laboratori Biokimik",
    desc: "Diagnostikim i saktë laboratorik me teknologji moderne.",
    points: ["Analiza biokimike", "Hormone & enzima", "Rezultate të shpejta"],
  },
  {
    to: "/medi",
    title: "Mjekësia Familjare",
    desc: "Kujdes i vazhdueshëm për çdo anëtar të familjes.",
    points: ["Parandalim & kontrolle", "Sëmundje akute & kronike", "Koordinim me specialistë"],
  },
];

const secondary = [
  { to: "/orl", title: "ORL", sub: "Vesh · Hundë · Fyt" },
  { to: "/surgery", title: "Kirurgji", sub: "Ndërhyrje moderne" },
  { to: "/Pedri", title: "Pediatri", sub: "Për fëmijët tuaj" },
  { to: "/cardio", title: "Kardiologji", sub: "Zemër & enët e gjakut" },
];

const doctors = [
  { img: Doc1, name: "Dr. Hekuran Shahini", role: "Specialist i ORL-së", bio: "Diagnostikim & trajtim i veshit, hundës dhe fytit." },
  { img: Doc2, name: "Dr. Visar Haliti", role: "Mjek Familjar", bio: "Kujdes parandalues dhe trajtim për të gjitha moshat." },
  { img: Doc3, name: "Dr. Diellza Mani", role: "Mjeke Familjare", bio: "Qasje personale dhe ndjekje e vazhdueshme e pacientit." },
  { img: Doc4, name: "Dr. Triumf Azemi", role: "Mjek Familjar", bio: "Përvojë në mjekësinë parësore dhe urgjente." },
];

const steps = [
  { n: "01", title: "Rezervo termin", desc: "Plotësoni formularin online ose na telefononi. Konfirmim brenda ditës." },
  { n: "02", title: "Vizita & diagnostikimi", desc: "Ekzaminim i plotë, analiza dhe plan i qartë trajtimi nga specialisti." },
  { n: "03", title: "Trajtimi & ndjekja", desc: "Terapi moderne dhe follow-up personal deri në shërim të plotë." },
];

const testimonials = [
  { name: "Arta K.", tag: "Paciente", text: "Shërbim jashtëzakonisht profesional. Rezultatet e analizave i mora shumë shpejt dhe stafi ishte gjithmonë i sjellshëm." },
  { name: "Fidan M.", tag: "Pacient", text: "Prej vitesh shkojmë si familje te Aorta Plus. Mjekët shpjegojnë gjithçka qartë dhe ndjehesh i sigurt." },
  { name: "Elira S.", tag: "Paciente", text: "Ambient i pastër, modern dhe pa pritje të gjata. Rezervimi online funksionoi perfekt." },
];

/* --------------------------------- pieces --------------------------------- */

function Marquee() {
  const items = ["Kujdes Premium", "Aorta Plus", "Që nga 1996", "Ferizaj", "Diagnostikim Modern", "Staf i Certifikuar"];
  const row = [...items, ...items];
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
      <div className="bg-ink text-white rounded-full py-4 overflow-hidden marquee-mask">
        <div className="flex w-max animate-marquee gap-8 pr-8">
          {[...row, ...row].map((t, i) => (
            <span key={i} className="flex items-center gap-8 text-[15px] font-bold tracking-wide whitespace-nowrap">
              {t} <span className="text-mint">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, desc, right }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
      <div className="max-w-2xl">
        {eyebrow && (
          <span className="inline-block bg-white border border-line rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500 mb-4">
            {eyebrow}
          </span>
        )}
        <h2 className="display-tight font-extrabold text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
        {desc && <p className="text-neutral-500 text-[16px] leading-relaxed mt-4 max-w-xl">{desc}</p>}
      </div>
      {right}
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

function Home() {
  const trackRef = React.useRef(null);
  const scrollDocs = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div id="top" className="bg-cream text-ink overflow-x-clip">
      <Navbar />

      {/* HERO — reference style: huge type, meta right, image below */}
      <section className="pt-28 sm:pt-32 pb-6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 mb-5">
            <span className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-4 py-2 text-[12px] font-bold">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              Poliklinika Premium · Ferizaj — Që nga 1996
            </span>
            <div className="hidden md:block text-right text-[12px] font-semibold text-neutral-500 leading-tight">
              <p className="uppercase tracking-[0.18em]">E Hënë – E Shtunë</p>
              <p className="text-ink font-extrabold text-[14px]">Jemi hapur · 08:00 – 21:00</p>
            </div>
          </div>

          <h1 className="display-tight font-extrabold uppercase text-[14.5vw] sm:text-[11vw] lg:text-[7.2rem] xl:text-[8.2rem]">
            Kujdes
            <br />
            <span className="text-mint">Shëndetësor</span> Premium
          </h1>

          <div className="grid lg:grid-cols-[1.1fr_auto_1fr] gap-8 items-end mt-7">
            <div>
              <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-relaxed max-w-md">
                Me ekip të specializuar dhe teknologji moderne, ofrojmë diagnostikim,
                trajtim dhe ndjekje të plotë — në një ambient të qetë dhe mikpritës.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href="#rezervo"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#rezervo")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-3 bg-white rounded-full pl-7 pr-2.5 py-2.5 font-bold text-[15px] shadow-pill border border-line hover:shadow-soft transition"
                >
                  Rezervo Tani
                  <span className="w-11 h-11 rounded-full bg-ink text-white flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#sherbimet"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#sherbimet")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="font-bold text-[15px] underline underline-offset-8 decoration-2 hover:text-mint transition"
                >
                  Shiko shërbimet
                </a>
              </div>
            </div>

            <button
              onClick={() => document.querySelector("#sherbimet")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Shko poshtë"
              className="hidden lg:flex w-16 h-16 rounded-full border border-ink/20 items-center justify-center hover:bg-ink hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="grid grid-cols-2 gap-6 lg:justify-items-end">
              <div>
                <p className="font-extrabold text-4xl tracking-tight">28<span className="text-mint">+</span></p>
                <p className="text-[13px] font-semibold text-neutral-500 leading-snug mt-1">Vite përvojë klinike<br />Që nga 1996</p>
              </div>
              <div>
                <p className="font-extrabold text-4xl tracking-tight">10k<span className="text-mint">+</span></p>
                <p className="text-[13px] font-semibold text-neutral-500 leading-snug mt-1">Pacientë të kënaqur<br />Diagnostikim & trajtim modern</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mt-10 rounded-[28px] sm:rounded-[36px] overflow-hidden h-[380px] sm:h-[460px] lg:h-[520px] shadow-soft">
            <img src={HeroImg} alt="Poliklinika Aorta Plus" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-white/95 backdrop-blur rounded-full pl-2 pr-5 py-2 text-[13px] font-bold shadow-pill">
              <span className="w-8 h-8 rounded-full bg-mint flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Ferizaj, Kosovë
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-pill flex-1">
                <span className="w-11 h-11 rounded-full bg-mint-soft flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-mint-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="font-extrabold text-[15px] leading-tight">Staf i certifikuar</p>
                  <p className="text-[13px] text-neutral-500 font-medium">15+ specialistë në 6 departamente</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-ink text-white rounded-2xl px-5 py-4 shadow-pill flex-1">
                <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-extrabold text-[15px] leading-tight">Pa pritje të gjata</p>
                  <p className="text-[13px] text-white/60 font-medium">Rezervim online për 1 minutë</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-8">
        <Marquee />
      </div>

      {/* SERVICES */}
      <section id="sherbimet" className="py-10 sm:py-14 scroll-mt-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <SectionHead
            eyebrow="Departamentet tona"
            title={<>Shërbimet <span className="text-mint">tona.</span></>}
            desc="Gjashtë departamente të specializuara nën një çati — nga laboratori dhe mjekësia familjare, te kardiologjia dhe kirurgjia."
            right={
              <span className="inline-flex items-center gap-2 bg-ink text-white rounded-full px-5 py-2.5 text-[13px] font-bold whitespace-nowrap">
                6 departamente
              </span>
            }
          />

          <div className="grid md:grid-cols-2 gap-4">
            {featured.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group bg-[#E9EBE9] hover:bg-white rounded-[26px] border border-transparent hover:border-line hover:shadow-soft p-8 sm:p-10 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-extrabold text-2xl sm:text-[28px] tracking-tight">{s.title}</h3>
                  <span className="w-12 h-12 rounded-full bg-white group-hover:bg-ink group-hover:text-white flex items-center justify-center transition shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </div>
                <p className="text-neutral-500 font-medium mt-2">{s.desc}</p>
                <ul className="mt-6 space-y-2.5 text-[14px] font-semibold">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-mint" /> {p}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {secondary.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group bg-[#E9EBE9] hover:bg-ink hover:text-white rounded-[26px] py-10 px-6 text-center transition-all duration-300"
              >
                <p className="font-extrabold text-xl sm:text-2xl tracking-tight">{s.title}</p>
                <p className="text-[13px] font-semibold text-neutral-500 group-hover:text-white/60 mt-1">{s.sub}</p>
                <span className="inline-flex mt-4 text-[13px] font-bold items-center gap-1.5 opacity-0 group-hover:opacity-100 transition">
                  Shiko detajet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="rreth" className="py-10 sm:py-14 scroll-mt-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-[30px] border border-line overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <span className="inline-block bg-cream border border-line rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-500 mb-5">
                  Rreth nesh
                </span>
                <h2 className="display-tight font-extrabold text-4xl sm:text-5xl">
                  Klinika që kujdeset <span className="text-mint">për ju.</span>
                </h2>
                <p className="text-neutral-500 leading-relaxed mt-6 text-[15px] sm:text-[16px]">
                  Mirë se vini në Poliklinikën Aorta Plus — partneri juaj i besuar shëndetësor
                  në Ferizaj që nga viti 1996. Ne besojmë në qasje holistike: parandalim,
                  diagnostikim të saktë dhe trajtim personal për çdo pacient.
                </p>
                <ul className="mt-7 space-y-3.5 font-semibold text-[15px]">
                  {["Ekip i certifikuar me përvojë shumëvjeçare", "Pajisje moderne laboratorike & diagnostike", "Orar i gjerë — E Hënë në E Shtunë, 08:00–21:00"].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-mint text-white flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-4 mt-9 pt-8 border-t border-line">
                  {[
                    ["28+", "Vite përvojë"],
                    ["15+", "Specialistë"],
                    ["10k+", "Pacientë"],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <p className="font-extrabold text-3xl tracking-tight">{n}</p>
                      <p className="text-[13px] font-semibold text-neutral-500">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative bg-cream p-5 sm:p-7">
                <div className="grid grid-cols-[1.4fr_1fr] gap-4 h-full">
                  <img src={AboutMain} alt="Klinika" className="rounded-[22px] object-cover w-full h-[320px] sm:h-[440px] lg:h-full min-h-[320px]" />
                  <div className="grid gap-4">
                    <img src={AboutSmall1} alt="Ekipi" className="rounded-[22px] object-cover w-full h-[152px] sm:h-[212px] lg:h-[48%] min-h-[150px]" />
                    <img src={AboutSmall2} alt="Pajisjet" className="rounded-[22px] object-cover w-full h-[152px] sm:h-[212px] lg:h-[48%] min-h-[150px]" />
                  </div>
                </div>
                <div className="absolute bottom-9 left-9 bg-ink text-white rounded-full pl-2 pr-6 py-2 flex items-center gap-3 shadow-pill">
                  <span className="bg-mint rounded-full w-11 h-11 flex items-center justify-center font-extrabold">28</span>
                  <span className="text-[13px] font-bold leading-tight">vite<br />përvojë klinike</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="mjeket" className="py-10 sm:py-14 scroll-mt-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <SectionHead
            eyebrow="Ekipi mjekësor"
            title={<>Njihuni me <span className="text-mint">mjekët.</span></>}
            desc="Specialistë të përkushtuar që ju shoqërojnë në çdo hap — nga kontrolla rutinë te trajtimet e avancuara."
            right={
              <div className="flex gap-2">
                <button onClick={() => scrollDocs(-1)} aria-label="Mbrapa" className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-white transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => scrollDocs(1)} aria-label="Para" className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center hover:bg-mint-dark transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            }
          />
          <div ref={trackRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none" }}>
            {doctors.map((d) => (
              <article key={d.name} className="doctor-card snap-start shrink-0 w-[270px] sm:w-[300px] bg-white rounded-[26px] border border-line overflow-hidden group">
                <div className="h-[320px] bg-card overflow-hidden">
                  <img src={d.img} alt={d.name} className="doctor-img w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-mint">{d.role}</p>
                  <h3 className="font-extrabold text-[19px] tracking-tight mt-1">{d.name}</h3>
                  <p className="text-[14px] text-neutral-500 font-medium mt-1.5 leading-snug">{d.bio}</p>
                </div>
              </article>
            ))}
            <a href="#rezervo" onClick={(e) => { e.preventDefault(); document.querySelector("#rezervo")?.scrollIntoView({ behavior: "smooth" }); }}
              className="snap-start shrink-0 w-[270px] sm:w-[300px] rounded-[26px] bg-ink text-white p-8 flex flex-col justify-between min-h-[440px] hover:bg-mint-dark transition">
              <p className="font-extrabold text-2xl leading-tight">Keni pyetje për ekipin tonë?</p>
              <span className="inline-flex items-center gap-2 font-bold">
                Rezervoni konsultë
                <span className="w-10 h-10 rounded-full bg-white text-ink flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-6">
            <div className="bg-ink text-white rounded-[28px] p-8 sm:p-10 flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Si funksionon</p>
                <h2 className="display-tight font-extrabold text-4xl sm:text-5xl mt-4">3 hapa<br />te <span className="text-mint">shërimi.</span></h2>
              </div>
              <p className="text-white/60 font-medium text-[14px] mt-6">Proces i thjeshtë, transparent dhe pa stres — nga rezervimi te follow-up-i.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {steps.map((s) => (
                <div key={s.n} className="bg-white rounded-[28px] border border-line p-7 flex flex-col justify-between min-h-[300px] hover:shadow-soft transition">
                  <span className="font-extrabold text-[15px] bg-cream border border-line rounded-full w-11 h-11 flex items-center justify-center">{s.n}</span>
                  <div>
                    <h3 className="font-extrabold text-xl tracking-tight">{s.title}</h3>
                    <p className="text-neutral-500 text-[14px] font-medium leading-relaxed mt-2">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING + MAP — like reference */}
      <section id="rezervo" className="py-10 sm:py-14 scroll-mt-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Form */}
            <div className="bg-white rounded-[30px] border border-line p-8 sm:p-12">
              <h2 className="display-tight font-extrabold text-5xl sm:text-6xl leading-[0.95]">
                Rezervo<br />Online<br />Tani<span className="text-mint">.</span>
              </h2>
              <form className="mt-8 space-y-3" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="f89d0ea2-8e31-4761-897b-6125c25f5670" />
                <input type="hidden" name="subject" value="Rezervim i ri — Aorta Plus" />
                <div className="grid sm:grid-cols-2 gap-3">
                  <input required name="Emri" placeholder="Emri juaj" className="w-full bg-cream border border-line rounded-full px-6 py-4 text-[14px] font-semibold placeholder:text-neutral-400 outline-none focus:border-mint focus:ring-4 focus:ring-mint/15 transition" />
                  <input required name="Telefoni" type="tel" placeholder="Nr. i telefonit" className="w-full bg-cream border border-line rounded-full px-6 py-4 text-[14px] font-semibold placeholder:text-neutral-400 outline-none focus:border-mint focus:ring-4 focus:ring-mint/15 transition" />
                </div>
                <select required name="Sherbimi" defaultValue="" className="w-full bg-cream border border-line rounded-full px-6 py-4 text-[14px] font-semibold text-neutral-600 outline-none focus:border-mint transition appearance-none">
                  <option value="" disabled>Zgjidh shërbimin</option>
                  <option>Laboratori Biokimik</option>
                  <option>Mjekësia Familjare</option>
                  <option>ORL</option>
                  <option>Kirurgji</option>
                  <option>Pediatri</option>
                  <option>Kardiologji</option>
                </select>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-2 bg-cream border border-line rounded-full px-5 py-4 text-[14px] font-semibold text-neutral-500 cursor-pointer">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <input required name="Data" type="date" className="bg-transparent outline-none w-full text-ink" />
                  </label>
                  <label className="flex items-center gap-2 bg-cream border border-line rounded-full px-5 py-4 text-[14px] font-semibold text-neutral-500 cursor-pointer">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <input required name="Ora" type="time" className="bg-transparent outline-none w-full text-ink" />
                  </label>
                </div>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink text-white rounded-full px-8 py-4 font-bold text-[15px] hover:bg-mint-dark transition mt-2">
                  Rezervo Tani
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </button>
                <p className="text-[12px] text-neutral-400 font-medium pt-1">Do t'ju kontaktojmë për konfirmim. Për urgjenca: <a href="tel:044172429" className="font-bold text-ink">044-172-429</a></p>
              </form>
            </div>

            {/* Map */}
            <div className="relative rounded-[30px] overflow-hidden border border-line min-h-[480px] lg:min-h-full bg-[#E8ECE6]">
              <iframe
                title="Harta — Aorta Plus"
                className="absolute inset-0 w-full h-full grayscale-[15%]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94232.15507445006!2d21.085066239062492!3d42.43295286127629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13547f00568aa849%3A0x9db1c04dbad9f57!2sPoliklinika%20Aorta%20Plus!5e0!3m2!1sen!2s!4v1731436627777!5m2!1sen!2s"
                style={{ border: 0 }}
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white rounded-3xl p-5 sm:p-6 shadow-pill flex items-center gap-4">
                <img src={HeroImg} alt="Klinika" className="w-16 h-16 rounded-2xl object-cover shrink-0" />
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">Lokacioni ynë</p>
                  <p className="font-extrabold text-[15px] leading-snug mt-0.5">Ferizaj, Kosovë<br /><span className="font-semibold text-neutral-500 text-[13px]">E Hënë – E Shtunë · 08:00 – 21:00</span></p>
                </div>
                <a href="tel:044172429" className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center shrink-0 hover:bg-mint-dark transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact mini strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {[
              { t: "Na telefononi", v: "044-172-429", href: "tel:044172429" },
              { t: "Email", v: "aortaplus@yahoo.com", href: "mailto:aortaplus@yahoo.com" },
              { t: "Orari i punës", v: "08:00 – 21:00", href: "#rezervo" },
              { t: "Lokacioni", v: "Ferizaj, Kosovë", href: "#rezervo" },
            ].map((c) => (
              <a key={c.t} href={c.href} className="bg-white border border-line rounded-[22px] px-6 py-5 hover:shadow-soft hover:-translate-y-0.5 transition">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">{c.t}</p>
                <p className="font-extrabold text-[16px] mt-1 truncate">{c.v}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <SectionHead
            eyebrow="Çfarë thonë pacientët"
            title={<>Besimi, <span className="text-mint">dëshmi.</span></>}
          />
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-white rounded-[26px] border border-line p-8 flex flex-col justify-between min-h-[240px]">
                <div>
                  <div className="flex gap-1 text-mint mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" /></svg>
                    ))}
                  </div>
                  <blockquote className="text-[15px] font-medium leading-relaxed text-neutral-700">“{t.text}”</blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center font-extrabold text-[14px]">{t.name[0]}</span>
                  <span>
                    <span className="block font-extrabold text-[14px]">{t.name}</span>
                    <span className="block text-[12px] font-semibold text-neutral-400">{t.tag}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="pb-14 pt-4">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="bg-ink text-white rounded-[30px] px-8 py-12 sm:p-14 flex flex-col lg:flex-row lg:items-center gap-8 justify-between overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-mint/20 blur-3xl" />
            <div className="relative">
              <h2 className="display-tight font-extrabold text-4xl sm:text-6xl">Shëndeti juaj<br />nuk pret<span className="text-mint">.</span></h2>
              <p className="text-white/60 font-medium mt-4 max-w-md">Rezervoni kontrollën sot — ekipi ynë ju mirëpret me profesionalizëm dhe përkujdesje.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 relative">
              <a href="#rezervo" onClick={(e) => { e.preventDefault(); document.querySelector("#rezervo")?.scrollIntoView({ behavior: "smooth" }); }} className="inline-flex items-center justify-center gap-2 bg-mint text-white rounded-full px-8 py-4 font-bold hover:bg-white hover:text-ink transition">
                Cakto termin
              </a>
              <a href="tel:044172429" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-full px-8 py-4 font-bold hover:bg-white hover:text-ink transition">
                044-172-429
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
